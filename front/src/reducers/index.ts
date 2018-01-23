import RootState from '../domain/RootState';
import { combineReducers } from 'redux';
import { parentReducers } from './parent';
import { Reducer } from 'redux';

const rootReducer: Reducer<RootState> = combineReducers( {
    whoami: parentReducers
});

export default rootReducer;