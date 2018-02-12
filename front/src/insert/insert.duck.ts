import { Reducer, Action, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import App from '../app/app.domain';

export const INSERT_REQUEST = 'INSERT_REQUEST';
export const INSERT_FAILURE = 'INSERT_FAILURE';
export const INSERT_SUCCESS = 'INSERT_SUCCESS';

export const INSERT_ALREADY_EXIST = 'INSERT_ALREADY_EXIST';
export const INSERT_NEED_FORCE = 'INSERT_NEED_FORCE';

export const INSERT_INIT = 'INSERT_INIT';
export const INSERT_CONTENT_CHANGE = 'INSERT_CONTENT_CHANGE';

export const INSERT_TOGGLE_FORCE = 'INSERT_TOGGLE_FORCE';

export interface ContentChange extends Action {
    content: string;
}

export function contentChange(content: string): ContentChange {
    return {
        type: INSERT_CONTENT_CHANGE,
        content,
    };
}

export function initInsert(): Action {
    return {
        type: INSERT_INIT,
    };
}

function insertRequest(): Action {
    return {
        type: INSERT_REQUEST,
    };
}

function insertSuccess(): Action {
    return {
        type: INSERT_SUCCESS,
    };
}

function insertFailure(error: Error): AnyAction {
    return {
        type: INSERT_FAILURE,
        error,
    };
}

function insertAlreadyExist(): Action {
    return {
        type: INSERT_ALREADY_EXIST,
    };
}

function insertNeedForce(): Action {
    return {
        type: INSERT_NEED_FORCE,
    };
}

export function toggleForce(): Action {
    return {
        type: INSERT_TOGGLE_FORCE,
    };
}

export type InsertAction = Action | ContentChange;

export function submit(): ThunkAction<void, App, void> {
    return (dispatch, getState) => {
        dispatch(insertRequest());
        fetch('/api/items', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: getState().insert.content,
                force: getState().insert.force,
            }),
        }).then((res) => {
            if (res.ok) {
                dispatch(insertSuccess());
                dispatch(initInsert());
            } else if (res.status === 403) {
                dispatch(insertSuccess());
                dispatch(insertAlreadyExist());
            } else if (res.status === 409) {
                dispatch(insertSuccess());
                dispatch(insertNeedForce());
            }
        }).catch((e) => {
            dispatch(insertFailure(e));
        });
    };
}

export class InsertState {
    readonly content: string;
    readonly force: boolean;
    readonly displayForce: boolean;
    readonly message?: string;

    constructor(content: string, force: boolean, displayForce: boolean, message?: string) {
        this.content = content;
        this.force = force;
        this.displayForce = displayForce;
        this.message = message;
    }
}

export const reducer: Reducer<InsertState> = (
    state: InsertState = new InsertState('', false, false),
    action: InsertAction
) => {
    switch (action.type) {
        case INSERT_INIT:
            return new InsertState('', false, false);
        case INSERT_CONTENT_CHANGE:
            const myAction = action as ContentChange;
            return new InsertState(myAction.content, state.force, state.displayForce, state.message);
        case INSERT_ALREADY_EXIST:
            return new InsertState(state.content, false, false, 'Le prénom "' + state.content + '" existe déjà.');
        case INSERT_NEED_FORCE:
            return new InsertState(
                state.content,
                false,
                true,
                'Le prénom "' + state.content + '" a été soumis au véto.'
            );
        case INSERT_TOGGLE_FORCE:
            return new InsertState(
                state.content,
                !state.force,
                state.displayForce,
                state.message
            );
        default:
            return state;
    }
};

export default reducer;
