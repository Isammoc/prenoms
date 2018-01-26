import { Reducer, combineReducers } from 'redux';

import RootState from '../domain/RootState';
import { parentReducers } from './parent.reducers';
import { voteReducer } from './vote.reducers';

import { voteServiceReducer } from '../service/vote.service.reducers';

const rootReducer: Reducer<RootState> = combineReducers( {
    whoami: parentReducers,
    vote: voteReducer,
    internal: voteServiceReducer,
});

export default rootReducer;