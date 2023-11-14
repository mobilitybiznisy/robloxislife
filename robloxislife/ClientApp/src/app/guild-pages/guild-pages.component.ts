import { Component } from '@angular/core';

@Component({
  selector: 'app-guild-pages',
  templateUrl: './guild-pages.component.html',
  styleUrls: ['./guild-pages.component.css']
})
export class GuildPagesComponent {
  public GuildInfoData: GuildsInfo[] = [];

}

interface GuildsInfo {
  id: number;
  name: string;
  description: string;
  maxMebers: number;
  membersCount: number;
}
