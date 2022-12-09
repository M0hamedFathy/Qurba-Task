import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  faStar = faStar;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
