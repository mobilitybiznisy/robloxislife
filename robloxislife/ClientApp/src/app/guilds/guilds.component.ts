import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { SearchFilterPipe } from 'src/app/search-filter.pipe';

@Component({
  selector: 'app-guilds',
  templateUrl: './guilds.component.html',
  styleUrls: ['./guilds.component.css'],
})


export class GuildsComponent {
  public GuildData: GuildDTO[] = [];
  constructor(
    http: HttpClient,
    @Inject('BASE_URL') baseUrl: string  ) {
    http.get < GuildDTO[]>(baseUrl + 'Guilds').subscribe(result => {
      this.GuildData = result;
    }, error => console.error(error));
  }

  items: GuildDTO[] = [];
  searchTerm: string;
  filteredItems: GuildDTO[] = [];
}

export interface GuildDTO {
  id: number;
  name: string;
  description: string;
  maxMebers: number;
  membersCount: number;
}
