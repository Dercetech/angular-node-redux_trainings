import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { DummyState } from './dummy.state';
import { routerFeatureSelector } from '../../../store/router/router.selectors';

// Feature selector(s)
export const dummyFeatureSelector: MemoizedSelector<object, DummyState> = createFeatureSelector<DummyState>('dummy');

// Memoized selectors
export const isProcessing = createSelector(dummyFeatureSelector, state => state.isProcessing);
export const isCool = createSelector(dummyFeatureSelector, state => state.isCool);

export const selectedDummyId = createSelector(
  routerFeatureSelector,
  (router): string => {
    return router.state.params.dummyId;
  }
);
