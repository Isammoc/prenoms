import { createStore, applyMiddleware, compose, Reducer } from 'redux';
import thunk from 'redux-thunk';

import * as Immutable from 'immutable';

import RootState from './domain/RootState';

import rootReducer from './reducers';

// const composeEnhancers = (
//   process.env.NODE_ENV === 'development' &&
//   window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//     serialize: {
//       immutable: Immutable
//     }
//  })) || compose;

const composeEnhancers =
  process.env.NODE_ENV === 'development' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      serialize: {
        immutable: Immutable
      }
    }) : compose;

function configureStore(initialState?: RootState) {
  // configure middlewares
  const middlewares = [
    thunk,
  ];
  // compose enhancers
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );
  // create store
  const internalStore = createStore(
    rootReducer,
    initialState,
    enhancer
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      internalStore.replaceReducer(require('./reducers') as Reducer<RootState>);
    });
  }

  return internalStore;
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;