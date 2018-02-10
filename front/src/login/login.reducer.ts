import { LOGIN, Login } from './login.action';

export const loginReducer = (state: string|null = null, action: Login) => {
    switch (action.type) {
        case LOGIN:
          return action.parent;
        default:
          return state;
    }
};
