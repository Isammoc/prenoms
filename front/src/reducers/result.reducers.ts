import { Reducer } from 'redux';

import { ResultAction } from '../actions/result.action';

import Result from '../domain/Result';

export const resultReducer: Reducer<Result | null> =
  (
    state: Result | null = null,
    action: ResultAction
  ) => {
      return state;
  };
