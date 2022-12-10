import { Component, Input } from "@angular/core";

import IProduct from "src/app/shared/Models/product.model";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"],
})
export class ProductsListComponent {
  // inputs
  @Input() products!: IProduct[];
}
