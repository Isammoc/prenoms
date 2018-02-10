import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import Result from './result.domain';
import RootState from '../domain/RootState';

export const RESULT_REQUEST = 'RESULT_REQUEST';
export const RESULT_FAILURE = 'RESULT_FAILURE';
export const RESULT_SUCCESS = 'RESULT_SUCCESS';

export function resultRequest() {
    return {
        type: RESULT_REQUEST
    };
}

interface ResultError extends Action {
    error: Error;
}

export function resultFailure(error: Error): ResultError {
    return {
        type: RESULT_FAILURE,
        error
    };
}

export interface ResultSuccess extends Action {
    result: Result;
}

export function resultSuccess(result: Result): ResultSuccess {
    return {
        type: RESULT_SUCCESS,
        result
    };
}

export function fetchResult(): ThunkAction<void, RootState, void> {
    return (dispatch, getState) => {
        dispatch(resultRequest());
        fetch('/api/result').then((res) => {
            res.json().then((json) => {
                dispatch(resultSuccess(Result.of(json)));
            }).catch((e) => dispatch(resultFailure(e)));
        }).catch((e) => dispatch(resultFailure(e)));
    };
}

export type ResultAction = Action | ResultError | ResultSuccess;