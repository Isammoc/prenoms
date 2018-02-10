import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// tslint:enable:no-import-side-effect
import store from './store';
import AppContainer from './app/app.container';

const Root = (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

render(Root, document.getElementById('root'));
registerServiceWorker();
