import { Component, DoCheck, Input, OnInit } from "@angular/core";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent implements DoCheck {
  //Font awesome icons
  faCartShopping = faCartShopping;
  faMagnifyingGlass = faMagnifyingGlass;

  //Inputs
  @Input() placeholder!: string;
  @Input() type!: string;

  //variables
  cartCounter: number = 0;
  token!: string | null;
  searchValue: string | number = "";

  constructor() {}

  //checking the token
  ngDoCheck(): void {
    this.token = sessionStorage.getItem("token");
    this.cartCounter = Number(sessionStorage.getItem("cartCounter"));
  }

  // Getting the search value from the input
  getSearchValue(e: any) {
    sessionStorage.setItem("search", e.target.value);
  }

  //logging out user
  logout() {
    sessionStorage.clear();
  }
}
