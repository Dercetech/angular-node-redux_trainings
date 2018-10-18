import { Action } from '@ngrx/store';

export const DUMMY_REQUEST = '[Dummy] Some dummy request';
export const DUMMY_REQUEST_SUCCESS = '[Dummy] Some dummy request succeeded!';

export class SomeDummyRequest implements Action {
  type = DUMMY_REQUEST;
  // constructor(public payload?: any) {}
}

export class SomeDummyRequestSuccess implements Action {
  type = DUMMY_REQUEST_SUCCESS;
  constructor(public payload: { isCool: boolean }) {}
}

export type DummyActions = SomeDummyRequest | SomeDummyRequestSuccess;
