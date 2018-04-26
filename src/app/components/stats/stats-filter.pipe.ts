import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'statsFilter',
    pure: false
})
export class StatsFilterPipe implements PipeTransform {
  transform(items: any, filters: any): any {
    if (!items || !filters) {
      return items;
    }
    return items.filter(item => filters.indexOf(item) !== -1);
  }
}