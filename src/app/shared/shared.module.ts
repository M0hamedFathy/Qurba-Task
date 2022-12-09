import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputComponent } from "./input/input.component";
import { AlertComponent } from "./alert/alert.component";

@NgModule({
  declarations: [InputComponent, AlertComponent],
  imports: [CommonModule],
  exports: [InputComponent, AlertComponent],
})
export class SharedModule {}
