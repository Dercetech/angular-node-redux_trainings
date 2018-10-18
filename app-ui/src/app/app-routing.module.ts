import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const dummyFeatureRoute = {
  path: 'dummy-feature',
  canActivate: [],
  loadChildren: 'src/app/features/dummy/dummy-feature.module#DummyFeatureModule'
};

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: dummyFeatureRoute.path
  },
  dummyFeatureRoute,
  {
    path: '**',
    redirectTo: dummyFeatureRoute.path
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
