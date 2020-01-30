import {
  ActivatedRouteSnapshot,
  DetachedRouteHandle,
  RouteReuseStrategy,
} from '@angular/router';

export class CustomIonicRouteStrategy implements RouteReuseStrategy {
  // tslint:disable-next-line:variable-name
  shouldDetach(_route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  // tslint:disable-next-line:variable-name
  shouldAttach(_route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  // tslint:disable-next-line:variable-name
  store(
    // tslint:disable-next-line:variable-name
    _route: ActivatedRouteSnapshot,
    // tslint:disable-next-line:variable-name
    _detachedTree: DetachedRouteHandle,
  ): void {
    return;
  }
  // tslint:disable-next-line:variable-name
  retrieve(_route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return null;
  }

  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot,
  ): boolean {
    if (future.routeConfig !== curr.routeConfig) {
      return true;
    }

    // checking router params
    const futureParams = future.params;
    const currentParams = curr.params;
    const keysA = Object.keys(futureParams);
    const keysB = Object.keys(currentParams);

    if (keysA.length !== keysB.length) {
      return false;
    }

    // Test for A's keys different from B.
    for (const key of keysA) {
      if (currentParams[key] !== futureParams[key]) {
        return false;
      }
    }
    return true;
  }
}
