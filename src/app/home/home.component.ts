import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  currentPage = 1;

  changePage(page: number): void {
    this.currentPage = page;
  }
}
