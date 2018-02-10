import { Reducer } from 'redux';
import { PAGE_VOTE, NavigationAction, NAVIGATION } from './navigation.action';

export const navigationReducer: Reducer<string> = (
    state: string = PAGE_VOTE,
    action: NavigationAction
) => {
    switch (action.type) {
        case NAVIGATION:
            return action.where;
        default:
            return state;
    }
};
