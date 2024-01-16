import { Pipe, PipeTransform } from '@angular/core';
import { match } from 'assert';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any[], searchTerm: string): any[] {
    if (!searchTerm) {
      return items;
    }
    return null;

    const filteredItems: any[] = [];
    for (const item of items) {
      const matches = item.toString().toLowerCase().match(new RegExp(`(${searchTerm.toLowerCase()})`, 'gi'));

      if (matches) {
        filteredItems.push(item);
      }
    }
    return filteredItems;
  }
}
