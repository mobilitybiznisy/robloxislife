import { Pipe, PipeTransform } from '@angular/core';
import { GuildDTO } from './guilds/guilds.component';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: GuildDTO[], searchTerm: string): GuildDTO[] {
    if (!searchTerm) {
      return items;
    }
    return items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
