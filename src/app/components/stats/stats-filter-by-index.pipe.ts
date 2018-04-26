import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statsFilterByIndex',
  pure: true
})
export class StatsFilterByIndexPipe implements PipeTransform {
  transform(items: any, filters: any): any {
    if (!items || !filters) {
      return items;
    }
    return items.filter((element, index) => filters.includes(index)); 
  }
}
