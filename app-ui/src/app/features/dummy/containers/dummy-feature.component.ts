import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { isCool, isProcessing } from '../store/dummy.selectors';

@Component({
  selector: 'app-dummy-feature-component',
  templateUrl: 'dummy-feature.component.html',
  styleUrls: ['dummy-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DummyFeatureComponent {
  isProcessing$: Observable<boolean>;
  isCool$: Observable<boolean>;

  constructor(private _store: Store<any>) {
    this.isProcessing$ = this._store.select(isProcessing);
    this.isCool$ = this._store.select(isCool);
  }
}
