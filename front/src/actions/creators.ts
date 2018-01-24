import Item from '../domain/Item';

import * as Actions from '.';
import * as ParentAction from './parent';

export function newVote(itemA: Item, itemB: Item): Actions.NewVote {
    return {
        type: Actions.NEWVOTE,
        itemA,
        itemB,
    };
}

export function vote(a: number, b: number): Actions.Vote {
    return {
        type: Actions.VOTE,
        a,
        b
    };
}

export function reject(id: number): Actions.Reject {
    return {
        type: Actions.REJECT,
        id
    };
}

export function whoIam(parent: string): ParentAction.WhoIAm {
    return {
        type: ParentAction.WHOAMI,
        parent
    };
}
