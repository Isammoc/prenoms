import * as React from 'react';
import './app.component.css';

import LoginContainer from '../login/login.container';
import VoteContainer from '../vote/vote.container';
import NavigationContainer from '../navigation/navigation.container';
import ResultContainer from '../result/result.container';
import InsertContainer from '../insert/insert.container';

import { ErrorComponent } from '../error/error.component';
import { PendingComponent } from '../pending/pending.component';

import { PAGE_RESULT, PAGE_VOTE, PAGE_INSERT } from '../navigation/navigation.action';

interface AppProps {
  logged: boolean;
  hasVote: boolean;
  error: boolean;
  pending: boolean;
  where: string;
}

const AppComponent: React.SFC<AppProps> = props => {

  let pending = props.pending ? (<PendingComponent />) : undefined;

  let toDisplay;
  if (props.error) {
    toDisplay = (<ErrorComponent />);
  } else if (!props.logged) {
    toDisplay = (<LoginContainer />);
  } else {
    switch (props.where) {
      case PAGE_RESULT:
        toDisplay = (
          <div style={{ display: 'flex', flex: 1 }}>
            <NavigationContainer />
            <ResultContainer />
          </div>
        );
        break;
      case PAGE_INSERT:
        toDisplay = (
          <div style={{ display: 'flex', flex: 1 }}>
            <NavigationContainer />
            <InsertContainer />
          </div>
        );
        break;
      case PAGE_VOTE:
      default:
        if (props.hasVote) {
          toDisplay = (
            <div style={{ display: 'flex', flex: 1 }}>
              <NavigationContainer />
              <VoteContainer />
            </div>
          );
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

export default AppComponent;
