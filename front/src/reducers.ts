import { Reducer, combineReducers } from 'redux';

import App from './app/app.domain';
import { loginReducer } from './login/login.reducer';
import { voteReducer } from './vote/vote.reducer';
import { resultReducer } from './result/result.reducer';
import { errorReducer } from './error/error.reducer';
import { pendingReducer } from './pending/pending.reducer';
import { navigationReducer } from './navigation/navigation.reducer';

const rootReducer: Reducer<App> = combineReducers( {
    login: loginReducer,
    vote: voteReducer,
    result: resultReducer,
    error: errorReducer,
    pending: pendingReducer,
    page: navigationReducer,
});

export default rootReducer;