import Item from '../domain/Item';

export const WHOAMI = 'WHO_AM_I';
export const VOTE = 'VOTE';
export const REJECT = 'REJECT';
export const NEWVOTE = 'NEW_VOTE';

interface ActionType {
    type: string;
}

interface NewVoteType extends ActionType {
    itemA: Item;
    itemB: Item;
}

export function newVote(itemA: Item, itemB: Item): NewVoteType {
    return {
        type: NEWVOTE,
        itemA,
        itemB,
    };
}

interface VoteType extends ActionType {
    a: number;
    b: number;
}

export function vote(a: number, b: number): VoteType {
    return {
        type: VOTE,
        a,
        b
    };
}

interface RejectAction extends ActionType {
    id: number;
}
export function reject(id: number): RejectAction {
    return {
        type: REJECT,
        id
    };
}

export interface WhoIAmAction extends ActionType {
    parent: string;
}

export function whoIam(parent: string): WhoIAmAction {
    return {
        type: WHOAMI,
        parent
    };
}

export type AppAction = NewVoteType | VoteType | RejectAction | WhoIAmAction;
