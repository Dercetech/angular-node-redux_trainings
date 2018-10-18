import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { switchMap } from 'rxjs/operators';
import { selectedDummyId } from '../store/dummy.selectors';

@Injectable()
export class DummyGuard implements CanActivate {
  selectedId$: Observable<string>;

  constructor(private _store: Store<any>) {
    this.selectedId$ = this._store.select(selectedDummyId);
  }

  canActivate(): Observable<boolean> {
    return this.selectedId$.pipe(switchMap(requestedId => of(requestedId !== '666')));
  }
}
