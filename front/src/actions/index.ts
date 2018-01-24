import Item from '../domain/Item';
import { Action } from 'redux';
import * as Parent from './parent';

export const VOTE = 'VOTE';
export const REJECT = 'REJECT';
export const NEWVOTE = 'NEW_VOTE';

export interface NewVote extends Action {
    itemA: Item;
    itemB: Item;
}

export interface Vote extends Action {
    a: number;
    b: number;
}

export interface Reject extends Action {
    id: number;
}

export type AppAction = NewVote | Vote | Reject | Parent.ParentAction;
