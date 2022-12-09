import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import IUser from "../Models/user.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  apiRoot: string = "https://dummyjson.com/auth/login";
  constructor(private http: HttpClient) {}
  // public isAuthenticated$: Observable<boolean>;
  // private redirect = false; // this variable to make sure if the page that we currently browsing doesn't need login AUTH so you wouldn't be redirected from it
  // constructor(private router: Router, private route: ActivatedRoute) {}
  signInWithUsernameAndPassword(
    username: string,
    password: string
  ): Observable<IUser> {
    const postData: { username: string; password: string } = {
      username: username,
      password: password,
    };

    return this.http.post<IUser>(`${this.apiRoot}`, postData, {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    });
  }
}
