import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

import { CustomSerializer } from './router/router.serializer';

import { reducers } from './root.state';

// Not for production - TODO use clean ENV variable
const environment = { prod: false };
const metaReducers: MetaReducer<any>[] = environment.prod ? [] : [storeFreeze];

export const effects: any[] = [];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      name: '[Sandbox App] CQRS store'
    })
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  declarations: []
})
export class RootStoreModule {}
