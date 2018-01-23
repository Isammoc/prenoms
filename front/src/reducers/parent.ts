import { WHOAMI, WhoIAmAction } from '../actions';

export const parentReducers = (state: string|null = null, action: WhoIAmAction) => {
    switch (action.type) {
        case WHOAMI:
          return action.parent;
        default:
          return state;
    }
};
