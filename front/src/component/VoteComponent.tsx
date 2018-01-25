import * as React from 'react';

import './Vote.css';

import Item from '../domain/Item';

import VoteItem from './VoteItem';

interface VoteProps {
    a: Item;
    b: Item;
    onSelect(i: Item): void;
    onReject(i: Item): void;
    onLoad(): void;
}

class VoteComponent extends React.Component<VoteProps, {}> {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    return (
      <div className="Vote">
        <VoteItem item={this.props.a} select={this.props.onSelect} reject={this.props.onReject} />
        <VoteItem item={this.props.b} select={this.props.onSelect} reject={this.props.onReject} />
      </div>
    );
  }
}
export default VoteComponent;