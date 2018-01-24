import { Action } from 'redux';

export const LOGIN = 'LOGIN';

export interface Login extends Action {
    parent: string;
}

export type LoginAction = Login;

export function login(parent: string): Login {
    return {
        type: LOGIN,
        parent
    };
}
