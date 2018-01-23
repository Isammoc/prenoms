import * as React from 'react';

import Item from '../domain/Item';

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
                    className="garbage"
                    alt="veto"
                />
            );
        }
        return (
            <div>
                <div className="vote" onClick={(e) => this.props.select(this.props.item)}>
                    <p>{this.props.item.value}</p>
                </div>
                {vetoButton}
            </div>
        );
    }
}