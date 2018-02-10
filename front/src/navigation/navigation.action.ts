import { Action } from 'redux';

export const NAVIGATION = 'NAVIGATION';

export const PAGE_VOTE = 'VOTE';
export const PAGE_RESULT = 'RESULT';

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
    return navigate('VOTE');
}

export function navigateToResult() {
    return navigate('RESULT');
}

export type NavigationAction = Navigate;
