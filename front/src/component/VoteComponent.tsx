import * as React from 'react';

import './Vote.css';

import Item from '../domain/Item';

import VoteItem from './VoteItem';

interface VoteProps {
    a: Item;
    b: Item;
    select(i: Item): void;
    reject(i: Item): void;
}

const VoteComponent: React.SFC<VoteProps> = props => (
  <div className="Vote">
    <VoteItem item={props.a} select={props.select} reject={props.reject} />
    <VoteItem item={props.b} select={props.select} reject={props.reject} />
  </div>
);
export default VoteComponent;