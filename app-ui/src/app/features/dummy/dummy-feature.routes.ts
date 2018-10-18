import { Routes } from '@angular/router';

import { DummyFeatureComponent } from './containers/dummy-feature.component';
import { DummyFeatureResolver } from './resolvers/dummy-feature.resolver';
import { DummyFeatureDetailsResolver } from './resolvers/dummy-feature-details.resolver';
import { DummyGuard } from './guards/dummy.guard';

import { DummyDetailsComponent } from './containers/dummy-details.component';

export const routes: Routes = [
  {
    path: '',
    component: DummyFeatureComponent,
    resolve: { data: DummyFeatureResolver }
  },
  {
    path: ':dummyId',
    component: DummyDetailsComponent,
    canActivate: [DummyGuard],
    resolve: { data: DummyFeatureDetailsResolver }
  }
];
