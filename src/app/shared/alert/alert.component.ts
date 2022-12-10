import { Component, Input } from "@angular/core";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"],
})
export class AlertComponent {
  // input
  @Input() color: string = "alert-blue";

  // setting the background color using a setter function for the class
  get bgColor() {
    return `alert-${this.color}`;
  }
}
