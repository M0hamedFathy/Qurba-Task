import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductComponent } from "./product/product.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [ProductsListComponent, ProductComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ProductsListComponent],
})
export class ProductsModule {}
