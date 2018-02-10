import * as React from 'react';

import { PAGE_VOTE, PAGE_RESULT } from './navigation.action';

interface NavigationProps {
    current: string;
    navigate: (where: string) => void;
}

const toVoteImg = require('./toVote.svg');
const toResultImg = require('./toResult.svg');

export const NavigationComponent: React.SFC<NavigationProps> = (props) => {
    let toVote;
    if (props.current !== PAGE_VOTE) {
        toVote = (
            <img
                style={{ flex: 1 }}
                src={toVoteImg}
                onClick={(e) => { e.preventDefault(); props.navigate(PAGE_VOTE); }}
            />
        );
    }
    let toResult;
    if (props.current !== PAGE_RESULT) {
        toResult = (
            <img
                style={{ flex: 1 }}
                src={toResultImg}
                onClick={(e) => { e.preventDefault(); props.navigate(PAGE_RESULT); }}
            />
        );
    }

    return (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {toVote}
            {toResult}
        </div>
    );
};
