import * as React from 'react';
import './App.css';

import LoginContainer from './login/login.container';
import VoteContainer from './vote/vote.container';

import { ErrorComponent } from './component/ErrorComponent';
import { PendingComponent } from './component/PendingComponent';
import { ResultComponent } from './result/result.component';

import { WHERE_RESULT, WHERE_VOTE } from './actions/where.actions';

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
      case WHERE_RESULT:
        toDisplay = (<ResultComponent />);
        break;
      case WHERE_VOTE:
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
