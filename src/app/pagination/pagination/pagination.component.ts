import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  DoCheck,
} from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"],
})
export class PaginationComponent implements DoCheck {
  //Inputs and outputs
  @Input() currentPage: number = 1;
  @Input() total: number = 0;
  @Input() limit: number = 9;
  @Input() skip: number = 0;
  @Output() changePage = new EventEmitter<number>();

  //Variable
  pages: number[] = [];

  //the pagination logic
  ngDoCheck(): void {
    if (this.skip === 0) {
      const pagesCount = Math.ceil(this.total / this.limit);
      this.pages = this.range(1, pagesCount);
    }
  }

  //creating the range
  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((el) => el + start);
  }
}
