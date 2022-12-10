import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import IProduct from "src/app/shared/Models/product.model";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  // font awesome icon
  faStar = faStar;

  //inputs
  @Input() product!: IProduct;

  //variables
  cartProducts: number = 0;
  discountedPrice: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // calculating the price after the discount
    const priceAfterDiscount: number = +Math.ceil(
      this.product.price -
        this.product.price * (this.product.discountPercentage / 100)
    );
    this.discountedPrice = priceAfterDiscount;
  }

  // add to cart logic for the number above the cart to increase
  addToCart() {
    if (sessionStorage.getItem("cartCounter")) {
      let counter = Number(sessionStorage.getItem("cartCounter"));
      counter++;
      sessionStorage.setItem("cartCounter", String(counter));
    } else {
      sessionStorage.setItem("cartCounter", "1");
    }
  }
}
