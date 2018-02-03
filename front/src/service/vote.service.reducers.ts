import * as Immutable from 'immutable';

import { VoteServiceState, ServiceItem } from './vote.service.domain';

import { INTERNAL_REJECT, INTERNAL_SUBMIT_VOTE, InternalAction, InternalVote } from './vote.service.action';
import { Reject } from '../actions/vote.action';

const firstnameList = [
    'Veto1',
    'Prenom6',
    'Prenom8',
    'Veto2',
    'Prenom2',
    'Prenom4',
    'Prenom10',
    'Prenom9',
    'Prenom1',
    'Prenom7',
    'Prenom3',
    'Veto3',
    'Prenom5',
];

const initial: VoteServiceState = firstnameList
        .map((value, id) => new ServiceItem(id, value, Immutable.Set(), Immutable.Set(), false));

export function voteServiceReducer(state: VoteServiceState = initial, action: InternalAction) {
    switch (action.type) {
        case INTERNAL_REJECT:
            const id = (action as Reject).id;
            return state.map((item) => {
                if (item.id === id) {
                    return new ServiceItem(item.id, item.value, item.better, item.lesser, true);
                } else {
                    return item;
                }
            });
        case INTERNAL_SUBMIT_VOTE:
            const a = (action as InternalVote).a;
            const b = (action as InternalVote).b;
            
            const itemA = state.find((item) => item.id === a)!;
            const itemB = state.find((item) => item.id === b)!;

            return state.map((item) => {
                if (item.id === a) {
                    const lesser = itemB.lesser.add(b).union(item.lesser);
                    return new ServiceItem(item.id, item.value, item.better, lesser, item.veto);
                } else if (item.id === b) {
                    const better = itemA.better.add(a).union(item.better);
                    return new ServiceItem(item.id, item.value, better, item.lesser, item.veto);
                } else {
                    return item;
                }
            });
        default:
            return state;
    }
}