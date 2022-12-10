import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginGuard } from "../shared/guards/login.guard";
import { HomeComponent } from "./home/home.component";

// for home routing and guard as well
const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
