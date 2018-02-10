import { Action } from 'redux';

export const WHERE = 'WHERE';

export const WHERE_VOTE = 'VOTE';
export const WHERE_RESULT = 'RESULT';

export interface Where extends Action {
    where: string;
}

function where(page: string) {
    return {
        type: WHERE,
        where: page
    };
}

export function moveToVote() {
    return where('VOTE');
}

export function moveToResult() {
    return where('RESULT');
}

export type WhereAction = Where;
