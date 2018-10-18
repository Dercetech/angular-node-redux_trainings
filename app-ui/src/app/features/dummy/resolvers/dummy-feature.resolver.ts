import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Store } from '@ngrx/store';
import { SomeDummyRequest } from '../store/dummy.actions';

@Injectable()
export class DummyFeatureResolver implements Resolve<void> {
  constructor(private store: Store<any>) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params['id'];
    console.log('[dummy > resolver] creation / loading request dispatch happens here');
    this.store.dispatch(new SomeDummyRequest());
  }
}
