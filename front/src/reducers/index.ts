import { Reducer, combineReducers } from 'redux';

import RootState from '../domain/RootState';
import { loginReducer } from '../login/login.reducer';
import { voteReducer } from '../vote/vote.reducer';
import { resultReducer } from './result.reducers';
import { errorReducer } from './error.reducers';
import { pendingReducer } from './pending.reducers';
import { whereReducer } from './where.reducers';

const rootReducer: Reducer<RootState> = combineReducers( {
    login: loginReducer,
    vote: voteReducer,
    result: resultReducer,
    error: errorReducer,
    pending: pendingReducer,
    where: whereReducer,
});

export default rootReducer;