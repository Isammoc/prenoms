import * as React from 'react';
import './App.css';
import VisibleLogin from './containers/VisibleLogin';

const App: React.SFC<{}> = props => (
  <div className="App">
    <VisibleLogin />
  </div>
);

export default App;
