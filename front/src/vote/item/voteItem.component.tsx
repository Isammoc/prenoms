import * as React from 'react';

import Item from './voteItem.domain';

interface VoteItemProps {
    item: Item;
    select(i: Item): void;
    reject(i: Item): void;
}

let garbage = require('./garbage.svg');

export default class VoteItem extends React.Component<VoteItemProps, {}> {
    render() {
        let vetoButton;
        if (this.props.item.vetoable) {
            vetoButton =  (
                <img
                    src={garbage}
                    onClick={(e) => this.props.reject(this.props.item)}
                    style={{
                        cursor: 'pointer',
                        padding: '1em',
                    }}
                    className="garbage"
                    alt="veto"
                />
            );
        }
        return (
            <div style={{ display: 'flex' }}>
                <div
                    className="vote"
                    onClick={(e) => this.props.select(this.props.item)}
                    style={{ flex: 1, cursor: 'pointer' }}
                >
                    <p style={{ textAlign: 'left' }}>{this.props.item.value}</p>
                </div>
                {vetoButton}
            </div>
        );
    }
}