import { Reducer } from 'redux';

import Item from '../domain/Item';

import {
    VoteAction,
    SUBMIT_VOTE_REQUEST,
    SUBMIT_VOTE_FAILURE,
    SUBMIT_VOTE_SUCCESS,
    NEW_VOTE_REQUEST,
    NEW_VOTE_FAILURE,
    NEW_VOTE_SUCCESS,
    REJECT_REQUEST,
    REJECT_FAILURE,
    REJECT_SUCCESS,
    NewVote,  } from '../actions/vote';

import CurrentVote from '../domain/CurrentVote';

export const voteReducer: Reducer<CurrentVote> =
  (
    state: CurrentVote = { itemA: new Item(0, 'en attente', false), itemB: new Item(0, 'du serveur', false) },
    action: VoteAction
  ) => {
    switch (action.type) {
        case NEW_VOTE_SUCCESS:
          const itemA = (action as NewVote).itemA;
          const itemB = (action as NewVote).itemB;
          return {
              ...state,
              itemA,
              itemB,
          };
        case SUBMIT_VOTE_REQUEST:
          // TODO
          return state;
        case SUBMIT_VOTE_FAILURE:
          // TODO
          return state;
        case SUBMIT_VOTE_SUCCESS:
          // TODO
          return state;
        case NEW_VOTE_REQUEST:
          // TODO
          return state;
        case NEW_VOTE_FAILURE:
          // TODO
          return state;
        case NEW_VOTE_SUCCESS:
          // TODO
          return state;
        case REJECT_REQUEST:
          // TODO
          return state;
        case REJECT_FAILURE:
          // TODO
          return state;
        case REJECT_SUCCESS:
          // TODO
          return state;
        default:
          return state;
     }
};
