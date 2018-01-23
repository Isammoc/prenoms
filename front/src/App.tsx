import * as React from 'react';
import './App.css';
import ParentContainer from './containers/ParentContainer';
import VoteComponent from './component/VoteComponent';
import Item from './domain/Item';

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
      <VoteComponent
        a={new Item(0, 'Dessus', false)}
        b={new Item(1, 'Dessous', false)}
        select={(i) => {return; }}
        reject={(i) => {return; }}
      /> : <ParentContainer />}
  </div>
);

export default App;
