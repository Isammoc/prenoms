import { Reducer } from 'redux';

import { AppAction } from '../actions';

import {
    SUBMIT_VOTE_FAILURE,
    NEW_VOTE_FAILURE,
    REJECT_FAILURE,
} from '../vote/vote.action';

export const errorReducer: Reducer<boolean> =
    (
        state: boolean = false,
        action: AppAction
    ) => {
        switch (action.type) {
            case SUBMIT_VOTE_FAILURE:
            case NEW_VOTE_FAILURE:
            case REJECT_FAILURE:
                return true;
            default:
                return state;
        }
    };
