import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-guilds',
  templateUrl: './guilds.component.html',
  styleUrls: ['./guilds.component.css']
})
export class GuildsComponent {
  public GuildData: Guilds[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get < Guilds[]>(baseUrl + 'Guilds').subscribe(result => {
      this.GuildData = result;
    }, error => console.error(error));
  }
}

interface Guilds {
  id: number;
  name: string;
  description: string;
  maxMembers: number;
  membersCount: number;
}
