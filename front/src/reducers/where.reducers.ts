import { Reducer } from 'redux';
import { WHERE_VOTE, WhereAction, WHERE } from '../actions/where.actions';

export const whereReducer: Reducer<string> = (
    state: string = WHERE_VOTE,
    action: WhereAction
) => {
    switch (action.type) {
        case WHERE:
            return action.where;
        default:
            return state;
    }
};
