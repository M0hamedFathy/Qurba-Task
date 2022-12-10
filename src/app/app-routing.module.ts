import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";

// main routing
const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "",
    loadChildren: async () => (await import("./auth/auth.module")).AuthModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
