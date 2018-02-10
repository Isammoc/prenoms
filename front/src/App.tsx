import * as React from 'react';
import './App.css';

import LoginContainer from './login/login.container';
import VoteContainer from './vote/vote.container';

import { ErrorComponent } from './error/error.component';
import { PendingComponent } from './pending/pending.component';
import { ResultComponent } from './result/result.component';

import { PAGE_RESULT, PAGE_VOTE } from './navigation/navigation.action';

interface AppProps {
  logged: boolean;
  hasVote: boolean;
  error: boolean;
  pending: boolean;
  where: string;
}

const App: React.SFC<AppProps> = props => {

  let pending = props.pending ? (<PendingComponent />) : undefined;

  let toDisplay;
  if (props.error) {
    toDisplay = (<ErrorComponent />);
  } else if (!props.logged) {
    toDisplay = (<LoginContainer />);
  } else {
    switch (props.where) {
      case PAGE_RESULT:
        toDisplay = (<ResultComponent />);
        break;
      case PAGE_VOTE:
      default:
        if (props.hasVote) {
          toDisplay = (<VoteContainer />);
        }
    }
  }
  return (
    <div
      className="App"
      style={{
        display: 'flex',
      }}
    >
      {pending}
      {toDisplay}
    </div>
  );
};

export default App;
