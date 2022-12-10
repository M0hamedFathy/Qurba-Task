import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, SharedModule, FormsModule, RouterModule],
  exports: [LoginComponent],
})
export class AuthModule {}
