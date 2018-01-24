import { LoginAction } from './login';
import { VoteAction } from './vote';

export type AppAction = VoteAction | LoginAction;
