import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class DummyService {
  doSomethingRelevant(): Observable<boolean> {
    return of(true).pipe(delay(2000));
  }
}
