import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import DevTools from './containers/DevTools';

// tslint:enable:no-import-side-effect
import store from './store';
import App from './App';

const Root = (
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>
);

render(Root, document.getElementById('root'));
registerServiceWorker();
