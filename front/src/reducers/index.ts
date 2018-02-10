import { Reducer, combineReducers } from 'redux';

import RootState from '../domain/RootState';
import { parentReducers } from './parent.reducers';
import { voteReducer } from './vote.reducers';
import { resultReducer } from './result.reducers';
import { errorReducer } from './error.reducers';
import { pendingReducer } from './pending.reducers';

const rootReducer: Reducer<RootState> = combineReducers( {
    whoami: parentReducers,
    vote: voteReducer,
    result: resultReducer,
    error: errorReducer,
    pending: pendingReducer,
});

export default rootReducer;