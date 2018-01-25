import * as React from 'react';
import './App.css';
import ParentContainer from './containers/ParentContainer';
import VoteContainer from './containers/VoteContainer';

interface AppProps {
  logged: boolean;
}

const App: React.SFC<AppProps> = props => (
  <div
    className="App"
    style={{
      display: 'flex',
    }}
  >
    {props.logged ?
      <VoteContainer /> : <ParentContainer />}
  </div>
);

export default App;
