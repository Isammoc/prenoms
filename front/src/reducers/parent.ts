import { WHOAMI, WhoIAm } from '../actions/parent';

export const parentReducers = (state: string|null = null, action: WhoIAm) => {
    switch (action.type) {
        case WHOAMI:
          return action.parent;
        default:
          return state;
    }
};
