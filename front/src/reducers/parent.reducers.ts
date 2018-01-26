import { LOGIN, Login } from '../actions/login.action';

export const parentReducers = (state: string|null = null, action: Login) => {
    switch (action.type) {
        case LOGIN:
          return action.parent;
        default:
          return state;
    }
};
