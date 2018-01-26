import { Action } from 'redux';

export const INTERNAL_REJECT = 'INTERNAL_REJECT';
export const INTERNAL_SUBMIT_VOTE = 'INTERNAL_SUBMIT_VOTE';

interface Reject extends Action {
    id: number;
}

export interface InternalVote extends Action {
    a: number;
    b: number;
}

export function internalReject(id: number): Reject {
    return {
        type: INTERNAL_REJECT,
        id
    };
}

export function internalVote(a: number, b: number): InternalVote {
    return {
        type: INTERNAL_SUBMIT_VOTE,
        a,
        b,
    };
}

export type InternalAction = Reject | InternalVote;
