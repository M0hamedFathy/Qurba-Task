import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}

  // guard condition and re routing
  canActivate(): boolean {
    const token = sessionStorage.getItem("token");
    if (token) return true;
    else {
      this.router.navigateByUrl("");
      return false;
    }
  }
}
