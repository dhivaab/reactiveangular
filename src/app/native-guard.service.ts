import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class NativeGuardService implements CanActivate {

  constructor() { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    alert(route.url[0]);
    return true;
  }
}
