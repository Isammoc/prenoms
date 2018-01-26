import { VoteServiceState, ServiceItem } from './vote.service.domain';

import { INTERNAL_REJECT, INTERNAL_SUBMIT_VOTE, InternalAction } from './vote.service.action';
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

const initial: VoteServiceState = firstnameList.map((value, id) => new ServiceItem(id, value, [], [], false));

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
            // const a = (action as InternalVote).a;
            // const b = (action as InternalVote).b;
            
            // XXX

        default:
            return state;
    }
}