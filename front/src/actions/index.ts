import { LoginAction } from './login.action';
import { VoteAction } from './vote.action';

export type AppAction = VoteAction | LoginAction;
