import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../../shared/shared.module';

import { routes as localRoutes } from './dummy-feature.routes';

import { DummyFeatureComponent } from './containers/dummy-feature.component';
import { DummyDetailsComponent } from './containers/dummy-details.component';
import { DummyFeatureResolver } from './resolvers/dummy-feature.resolver';
import { DummyFeatureDetailsResolver } from './resolvers/dummy-feature-details.resolver';
import { DummyService } from './services/dummy.service';

import { DummyEffects } from './store/dummy.effects';
import { reducer as dummyReducer } from './store/dummy.reducer';
import { DummyGuard } from './guards/dummy.guard';

const services = [DummyService];
const guards = [DummyGuard];
const resolvers = [DummyFeatureResolver, DummyFeatureDetailsResolver];

const effects = [DummyEffects];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(localRoutes),
    StoreModule.forFeature('dummy', dummyReducer),
    EffectsModule.forFeature([...effects])
  ],
  entryComponents: [],
  declarations: [DummyFeatureComponent, DummyDetailsComponent],
  exports: [],
  providers: [...services, ...guards, ...resolvers]
})
export class DummyFeatureModule {}
