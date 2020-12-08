import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter_headers",
})
export class FilterPipe implements PipeTransform {
  transform(value: string[], ...args: string[]): string[] {
    return value.filter((item) => ~args.indexOf(item));
  }
}
