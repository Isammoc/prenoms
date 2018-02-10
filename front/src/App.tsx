import * as React from 'react';
import './App.css';

import ParentContainer from './containers/ParentContainer';
import VoteContainer from './containers/VoteContainer';

import { ErrorComponent } from './component/ErrorComponent';
import { PendingComponent } from './component/PendingComponent';

interface AppProps {
  logged: boolean;
  hasVote: boolean;
  error: boolean;
  pending: boolean;
}

const App: React.SFC<AppProps> = props => {

  let pending = props.pending ? (<PendingComponent />) : undefined;

  let toDisplay;
  if (props.error) {
    toDisplay = (<ErrorComponent />);
  } else if (!props.logged) {
    toDisplay = (<ParentContainer />);
  } else if (props.hasVote) {
    toDisplay = (<VoteContainer />);
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
