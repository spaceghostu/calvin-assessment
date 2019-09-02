import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filter: string): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => Object.values(item).map((value: string) =>
        typeof value === 'string' ? value.indexOf(filter) !== -1 : false
      ).find(value => value === true)
    );
  }
}
