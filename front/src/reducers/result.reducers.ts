import { Reducer } from 'redux';

import {
  ResultAction,
  RESULT_FAILURE,
  RESULT_SUCCESS,
  ResultSuccess,
} from '../actions/result.action';

import Result from '../domain/Result';

export const resultReducer: Reducer<Result | null> =
  (
    state: Result | null = null,
    action: ResultAction
  ) => {
    switch (action.type) {
      case RESULT_FAILURE:
        return null;
      case RESULT_SUCCESS:
        return (action as ResultSuccess).result;
      default:
        return state;
    }
  };
