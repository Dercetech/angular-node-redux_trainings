import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { selectedDummyId } from '../store/dummy.selectors';

@Component({
  selector: 'app-dummy-details-component',
  templateUrl: 'dummy-details.component.html',
  styleUrls: ['dummy-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DummyDetailsComponent {
  selectedId$: Observable<string>;

  constructor(private _store: Store<any>) {
    this.selectedId$ = this._store.select(selectedDummyId);
  }
}
