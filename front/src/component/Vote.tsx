import * as React from 'react';

import './Vote.css';

import Item from '../service/Item';

import VoteItem from './VoteItem';

interface VoteProps {
    a: Item;
    b: Item;
    select(i: Item): void;
    reject(i: Item): void;
}

export default class Vote extends React.Component<VoteProps, {}> {
    render() {
        return (
            <div className="Vote">
                <VoteItem item={this.props.a} select={this.props.select} reject={this.props.reject} />
                <VoteItem item={this.props.b} select={this.props.select} reject={this.props.reject} />
            </div>
        );
    }
}
