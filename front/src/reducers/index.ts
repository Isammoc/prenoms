import { Reducer, combineReducers } from 'redux';

import RootState from '../domain/RootState';
import { parentReducers } from './parent.reducers';
import { voteReducer } from './vote.reducers';

const rootReducer: Reducer<RootState> = combineReducers( {
    whoami: parentReducers,
    vote: voteReducer,
});

export default rootReducer;