import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "shorten",
})
export class ShortenPipe implements PipeTransform {
  // custom pipe that transform a text by giving it the string length needed to be displayed
  transform(value: string, limit: number) {
    if (value.length > limit) {
      return value.substring(0, limit) + "...";
    } else {
      return value;
    }
  }
}
