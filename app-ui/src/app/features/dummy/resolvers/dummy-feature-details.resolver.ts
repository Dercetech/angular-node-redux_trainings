import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import { SomeDummyRequest } from '../store/dummy.actions';
import { selectedDummyId } from '../store/dummy.selectors';

@Injectable()
export class DummyFeatureDetailsResolver implements Resolve<void> {
  selectedId$: Observable<string>;

  constructor(private _store: Store<any>) {
    this.selectedId$ = this._store.select(selectedDummyId);
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // One could recover the id the "classic way":
    // const id = route.params['id'];

    // But here, we're Redux people, so we ask the store that was nicely fitted with params for us
    this.selectedId$
      .pipe(take(1))
      .subscribe(id => console.log('[Dummy Details Resolver] Triggering some logic to load data for id: ', id));
  }
}
