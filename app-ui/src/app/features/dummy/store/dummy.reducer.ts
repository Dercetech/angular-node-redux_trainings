import {
  DummyActions,
  SomeDummyRequest,
  SomeDummyRequestSuccess,
  DUMMY_REQUEST,
  DUMMY_REQUEST_SUCCESS
} from './dummy.actions';

import { DummyState } from './dummy.state';

export const initialState: DummyState = {
  isCool: false,
  isProcessing: false
};

const dummyRequest = (state: DummyState, action: SomeDummyRequest) => {
  console.log('[Dummy Reducer] placeholder synchronous action processing');
  const isProcessing = true;
  return { ...state, isProcessing };
};

const dummyRequestSuccess = (state: DummyState, action: SomeDummyRequestSuccess) => {
  console.log('[Dummy Reducer] placeholder synchronous action success processing');
  //   const isCool = true;
  const isProcessing = false;
  return { ...state, isProcessing, isCool: true };
};

const reducers = {
  [DUMMY_REQUEST]: dummyRequest,
  [DUMMY_REQUEST_SUCCESS]: dummyRequestSuccess
};

export function reducer(state = initialState, action: DummyActions): DummyState {
  if (action.type && reducers[action.type]) {
    return reducers[action.type](state, action);
  }
  return state;
}
