import RootState from '../domain/RootState';
import { combineReducers } from 'redux';
import { parentReducers } from './parent';
import { Reducer } from 'redux';
import Item from '../domain/Item';
import { AppAction } from '../actions/index';

const voteReducer: Reducer<{itemA: Item, itemB: Item}> = (state: {itemA: Item, itemB: Item}, action: AppAction) => {
    return {
        itemA: new Item(0, 'Prenom1', false),
        itemB: new Item(1, 'Prenom2', true),
    };
};

const rootReducer: Reducer<RootState> = combineReducers( {
    whoami: parentReducers,
    vote: voteReducer
});

export default rootReducer;