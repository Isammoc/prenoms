import * as React from 'react';
import './App.css';
import ParentContainer from './containers/ParentContainer';
import VoteContainer from './containers/VoteContainer';

interface AppProps {
  logged: boolean;
  hasVote: boolean;
}

const App: React.SFC<AppProps> = props => {
  
  let toDisplay;
  if (!props.logged) {
    toDisplay = (<ParentContainer />);
  } else if (props.hasVote) {
    toDisplay = (<VoteContainer />);
  }
  return  (
    <div
      className="App"
      style={{
        display: 'flex',
      }}
    >
      {toDisplay}
    </div>
  );
};

export default App;
