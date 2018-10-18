import { Injectable } from '@angular/core';

import { switchMap, concatMap } from 'rxjs/operators';

import { Actions, Effect } from '@ngrx/effects';

import { SomeDummyRequest, DUMMY_REQUEST, SomeDummyRequestSuccess } from './dummy.actions';
import { DummyService } from '../services/dummy.service';

@Injectable()
export class DummyEffects {
  constructor(private actions$: Actions, private _dummyService: DummyService) {}

  @Effect()
  importPosts$ = this.actions$.ofType(DUMMY_REQUEST).pipe(
    switchMap((action: SomeDummyRequest) => this._dummyService.doSomethingRelevant()),
    concatMap(serviceReturnValue => [new SomeDummyRequestSuccess({ isCool: serviceReturnValue })])
  );
}
