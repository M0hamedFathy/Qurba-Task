import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductComponent } from "./product/product.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HomeComponent } from "./home/home.component";
import { PaginationModule } from "../pagination/pagination.module";
import { ProductRoutingModule } from "./products-routing.module";
import { ShortenPipe } from "./pipe/shorten.pipe";
import { AlertComponent } from "../shared/alert/alert.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductComponent,
    HomeComponent,
    ShortenPipe,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    PaginationModule,
    ProductRoutingModule,
    SharedModule,
  ],
  exports: [HomeComponent],
})
export class ProductsModule {}
