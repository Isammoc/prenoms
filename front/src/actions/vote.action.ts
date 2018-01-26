import Item from '../domain/Item';
import RootState from '../domain/RootState';
import { Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import voteService from '../service/VoteService';
import { internalReject, internalVote } from '../service/vote.service.action';

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

const newVote = (dispatch: Dispatch<RootState>, getState: () => RootState) => {
    dispatch(newVoteRequest());
    setTimeout(
        () => {
            const [itemA, itemB] = voteService.newVote(getState().internal)
                .map(v => new Item(v.id, v.value, v.lesser.size === 0 && v.better.size === 0));
            dispatch(newVoteSuccess(itemA, itemB));
        },
        400);
};

export function firstVote(): ThunkAction<void, RootState, void> {
    return newVote;
}

export function vote(a: number): ThunkAction<void, RootState, void> {
    return (dispatch, getState) => {
        let b;
        if ( getState().vote!.itemA.id === a) {
            b = getState().vote!.itemB.id;
        } else {
            b = getState().vote!.itemA.id;
        }
        dispatch(internalVote(a, b));
        newVote(dispatch, getState);
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

export function reject(id: number): ThunkAction<void, RootState, void> {
    return (dispatch, getState) => {
        dispatch(rejectRequest(id));
        setTimeout(
            () => {
                dispatch(internalReject(id));
                dispatch(rejectSuccess());
                newVote(dispatch, getState);
            },
            400);
    };
}

export type VoteAction = NewVote | Reject;