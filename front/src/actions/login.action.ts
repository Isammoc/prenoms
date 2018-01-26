import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import RootState from '../domain/RootState';
import { firstVote } from './vote.action';

export const LOGIN = 'LOGIN';

export interface Login extends Action {
    parent: string;
}

export type LoginAction = Login;

export function realLogin(parent: string): Login {
    return {
        type: LOGIN,
        parent
    };
}

export function login(parent: string): ThunkAction<void, RootState, void> {
    return (dispatch, getState) => {
        dispatch(realLogin(parent));
        dispatch(firstVote());
    };
}
