import * as React from 'react';

import { PAGE_VOTE, PAGE_RESULT, PAGE_INSERT } from './navigation.action';

interface NavigationProps {
    current: string;
    canVote: boolean;
    navigate: (where: string) => void;
}

const toVoteImg = require('./toVote.svg');
const toResultImg = require('./toResult.svg');
const toInsertImg = require('./toInsert.svg');

export const NavigationComponent: React.SFC<NavigationProps> = (props) => {
    let toVote;
    if (props.canVote && props.current !== PAGE_VOTE) {
        toVote = (
            <img
                style={{ flex: 1, padding: '.1em' }}
                src={toVoteImg}
                onClick={(e) => { e.preventDefault(); props.navigate(PAGE_VOTE); }}
            />
        );
    }
    let toResult;
    if (props.current !== PAGE_RESULT) {
        toResult = (
            <img
                style={{ flex: 1, padding: '.1em' }}
                src={toResultImg}
                onClick={(e) => { e.preventDefault(); props.navigate(PAGE_RESULT); }}
            />
        );
    }
    let toInsert;
    if (props.current !== PAGE_INSERT) {
        toInsert = (
            <img
                style={{ flex: 1, padding: '.1em' }}
                src={toInsertImg}
                onClick={(e) => { e.preventDefault(); props.navigate(PAGE_INSERT); }}
            />
        );
    }

    return (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {toVote}
            {toResult}
            {toInsert}
        </div>
    );
};
