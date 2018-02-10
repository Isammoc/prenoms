import { Reducer, combineReducers } from 'redux';

import RootState from '../domain/RootState';
import { loginReducer } from '../login/login.reducer';
import { voteReducer } from '../vote/vote.reducer';
import { resultReducer } from '../result/result.reducer';
import { errorReducer } from './error.reducers';
import { pendingReducer } from './pending.reducers';
import { navigationReducer } from '../navigation/navigation.reducer';

const rootReducer: Reducer<RootState> = combineReducers( {
    login: loginReducer,
    vote: voteReducer,
    result: resultReducer,
    error: errorReducer,
    pending: pendingReducer,
    where: navigationReducer,
});

export default rootReducer;