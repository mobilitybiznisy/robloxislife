import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-guild-pages',
  templateUrl: './guild-pages.component.html',
  styleUrls: ['./guild-pages.component.css']
})
export class GuildPagesComponent {
  public CurrentGuild: Guilds[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Guilds[]>(baseUrl + 'GuildsId').subscribe(result => {
      this.CurrentGuild = result;
    }, error => console.error(error));
    
  }


}
interface Guilds {
  id: number;
  name: string;
  description: string;
  maxMebers: number;
  membersCount: number;
}
