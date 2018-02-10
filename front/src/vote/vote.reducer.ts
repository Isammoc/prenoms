import { Reducer } from 'redux';

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
    NewVote,
  } from './vote.action';

import CurrentVote from './vote.domain';

export const voteReducer: Reducer<CurrentVote | null> =
  (
    state: CurrentVote | null = null,
    action: VoteAction
  ) => {
    switch (action.type) {
      case SUBMIT_VOTE_REQUEST:
        return null;
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
        const itemA = (action as NewVote).itemA;
        const itemB = (action as NewVote).itemB;
        return {
            ...state,
            itemA,
            itemB,
        };
      case REJECT_REQUEST:
        return null;
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
