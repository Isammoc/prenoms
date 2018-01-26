import * as React from 'react';

import './Vote.css';

import Item from '../domain/Item';

import VoteItem from './VoteItem';

interface VoteProps {
    a: Item;
    b: Item;
    onSelect(i: Item): void;
    onReject(i: Item): void;
}

const VoteComponent: React.SFC<VoteProps> = props => (
  <div className="Vote">
    <VoteItem item={props.a} select={props.onSelect} reject={props.onReject} />
    <VoteItem item={props.b} select={props.onSelect} reject={props.onReject} />
  </div>
);
export default VoteComponent;