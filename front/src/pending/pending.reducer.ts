import { Reducer } from 'redux';

import { AppAction } from '../actions';

export const pendingReducer: Reducer<boolean> =
    (
        state: boolean = false,
        action: AppAction
    ) => {
        if (action.type.endsWith('_REQUEST')) {
            return true;
        } else if (action.type.endsWith('_FAILURE') || action.type.endsWith('_SUCCESS')) {
            return false;
        } else {
            return state;
        }
    };
