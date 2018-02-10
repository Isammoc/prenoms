import { LoginAction } from '../login/login.action';
import { VoteAction } from '../vote/vote.action';

export type AppAction = VoteAction | LoginAction;
