import { NavigationExtras } from '@angular/router';

export interface RouterLocation {
  path: any[];
  queryParams?: object;
  extras?: NavigationExtras;
}
