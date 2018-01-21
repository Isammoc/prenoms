import * as React from 'react';
import './App.css';

import Item from './service/Item';
import VoteService from './service/VoteService';

import DisplayCurrent from './component/DisplayCurrent';
import Vote from './component/Vote';

interface AppState {
  voteService: VoteService;
  currentVote: ReadonlyArray<Item>;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    let voteService = new VoteService;
    this.state = {
      voteService,
      currentVote: voteService.newVote()
    };
    this.select = this.select.bind(this);
    this.reject = this.reject.bind(this);
  }

  select(item: Item) {
    this.state.voteService.prefer(item, this.state.currentVote.find((i) => i.id !== item.id) as Item);
    this.setState({
      voteService: this.state.voteService,
      currentVote: this.state.voteService.newVote(),
    });
  }

  reject(item: Item) {
    this.state.voteService.reject(item);
    this.setState({
      voteService: this.state.voteService,
      currentVote: this.state.voteService.newVote(),
    });
  }

  render() {
    let items = this.state.voteService.currentStatus();
    return (
      <div className="App">
        <div className="main">
          <Vote a={this.state.currentVote[0]} b={this.state.currentVote[1]} select={this.select} reject={this.reject}/>
        </div>
        <div className="sidebar">
          <DisplayCurrent items={items} />
        </div>
      </div>
    );
  }
}

export default App;
