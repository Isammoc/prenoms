import RootState from '../domain/RootState';
import { combineReducers } from 'redux';
import { parentReducers } from './parent';
import { Reducer } from 'redux';
import { voteReducer } from './vote';

const rootReducer: Reducer<RootState> = combineReducers( {
    whoami: parentReducers,
    vote: voteReducer
});

export default rootReducer;