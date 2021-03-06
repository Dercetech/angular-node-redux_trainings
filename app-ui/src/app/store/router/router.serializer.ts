import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from './router.state';

export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot) {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;

    return { url, queryParams, params };
  }
}
