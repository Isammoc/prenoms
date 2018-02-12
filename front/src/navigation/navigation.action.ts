import { Action } from 'redux';

export const NAVIGATION = 'NAVIGATION';

export const PAGE_VOTE = 'VOTE';
export const PAGE_RESULT = 'RESULT';
export const PAGE_INSERT = 'INSERT';

export interface Navigate extends Action {
    where: string;
}

function navigate(page: string) {
    return {
        type: NAVIGATION,
        where: page
    };
}

export function navigateToVote() {
    return navigate(PAGE_VOTE);
}

export function navigateToResult() {
    return navigate(PAGE_RESULT);
}

export function navigateToInsert() {
    return navigate(PAGE_INSERT);
}

export type NavigationAction = Navigate;
