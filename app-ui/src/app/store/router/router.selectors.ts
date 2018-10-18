import { MemoizedSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from './router.state';

export const routerFeatureSelector: MemoizedSelector<
  object,
  fromRouter.RouterReducerState<RouterStateUrl>
> = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('routerReducer');
