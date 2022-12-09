import { Component } from "@angular/core";
import { Observable } from "rxjs";
import IUser from "src/app/Models/user.model";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  //credentials object
  credentials = {
    username: "",
    password: "",
  };
  userData!: IUser;

  showAlert = false;
  alertMsg = "Please wait! We are logging you in";
  alertColor = "blue";
  inSubmission = false;

  //importing Auth service
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  // login function
  async login() {
    this.showAlert = true;
    this.alertMsg = "Please wait! We are logging you in";
    this.alertColor = "blue";
    this.inSubmission = true;

    let authObs: Observable<IUser> = this.auth.signInWithUsernameAndPassword(
      this.credentials.username,
      this.credentials.password
    );

    authObs.subscribe(
      (res) => {
        const { token } = res;
        if (token) {
          this.alertMsg = "Success! You are now logged in";
          this.alertColor = "green";
          this.inSubmission = true;
        }
      },
      (e) => {
        const {
          error: { message },
        } = e;
        // in case error happened while logging in
        this.inSubmission = false;
        this.alertMsg = message;
        this.alertColor = "red";
      }
    );
  }
}
