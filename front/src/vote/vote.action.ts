import Item from './item/voteItem.domain';
import App from '../app/app.domain';
import { Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { navigateToResult } from '../navigation/navigation.action';

export const SUBMIT_VOTE_REQUEST = 'SUBMIT_VOTE_REQUEST';
export const SUBMIT_VOTE_FAILURE = 'SUBMIT_VOTE_FAILURE';
export const SUBMIT_VOTE_SUCCESS = 'SUBMIT_VOTE_SUCCESS';

export const NEW_VOTE_REQUEST = 'NEW_VOTE_REQUEST';
export const NEW_VOTE_FAILURE = 'NEW_VOTE_FAILURE';
export const NEW_VOTE_SUCCESS = 'NEW_VOTE_SUCCESS';

export const REJECT_REQUEST = 'REJECT_REQUEST';
export const REJECT_FAILURE = 'REJECT_FAILURE';
export const REJECT_SUCCESS = 'REJECT_SUCCESS';

export interface NewVote extends Action {
    itemA: Item;
    itemB: Item;
}

export interface Vote extends Action {
    a: number;
    b: number;
}

export interface Reject extends Action {
    id: number;
}

export function newVoteRequest(): Action {
    return {
        type: NEW_VOTE_REQUEST
    };
}

export function newVoteFailure(error: Error): AnyAction {
    return {
        type: NEW_VOTE_FAILURE,
        error
    };
}

export function newVoteSuccess(itemA: Item, itemB: Item): NewVote  {
    return {
        type: NEW_VOTE_SUCCESS,
        itemA,
        itemB,
    };
}

const newVote = (dispatch: Dispatch<App>, getState: () => App) => {
    dispatch(newVoteRequest());

    const who = getState().login === 'Father' ? 1 : 0;

    fetch('/api/' + who + '/vote').then((res: Response) => {
        res.json().then((json) => 
            dispatch(newVoteSuccess(
                new Item(json.a.id, json.a.content, json.a.vetoable),
                new Item(json.b.id, json.b.content, json.b.vetoable)
            ))).catch((e) => dispatch(navigateToResult()));
    }).catch((e) => dispatch(newVoteFailure(e)));
};

export function firstVote(): ThunkAction<void, App, void> {
    return newVote;
}

export function vote(a: number): ThunkAction<void, App, void> {
    return (dispatch, getState) => {
        let b;
        if ( getState().vote!.itemA.id === a) {
            b = getState().vote!.itemB.id;
        } else {
            b = getState().vote!.itemA.id;
        }

        const who = getState().login === 'Father' ? 1 : 0;

        dispatch(newVoteRequest());

        fetch('/api/' + who + '/vote', {
            method: 'POST',
            body: JSON.stringify({
                better: a,
                lesser: b
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => newVote(dispatch, getState))
            .catch(e => dispatch(newVoteFailure(e)));
    };
}

export function rejectRequest(id: number): Reject {
    return {
        type: REJECT_REQUEST,
        id
    };
}

export function rejectFailure(error: Error): AnyAction {
    return {
        type: REJECT_FAILURE,
        error
    };
}

export function rejectSuccess(): Action {
    return { type: REJECT_SUCCESS };
}

export function reject(id: number): ThunkAction<void, App, void> {
    return (dispatch, getState) => {
        dispatch(rejectRequest(id));
        const who = getState().login === 'Father' ? 1 : 0;
        fetch('/api/' + who + '/veto/' + id, {
            method: 'POST'
        }).then((res) => {
            dispatch(rejectSuccess());
            newVote(dispatch, getState);
        }).catch((e) => dispatch(rejectFailure(e)));
    };
}

export type VoteAction = NewVote | Reject;