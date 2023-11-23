import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { GuildService } from '../srvc/guild.service';

@Component({
  selector: 'app-guild-pages',
  templateUrl: './guild-pages.component.html',
  styleUrls: ['./guild-pages.component.css']
})


export class GuildPagesComponent {
  neviem: number = 0;
  guild: GuildDTO | undefined;

  constructor(private route: ActivatedRoute,
    http: HttpClient,
    private guildService: GuildService,
    @Inject('BASE_URL') baseUrl: string
  ) {
    this.guild = {} as GuildDTO;
  }


  ngOnInit(): void {
    const RouteParams = this.route.snapshot.paramMap;
    this.neviem = Number(RouteParams.get('Id'));
    this.guildService.GetGuildInfo(this.neviem).subscribe(guild => { this.guild = guild });
  }

}

interface GuildDTO {
  id: number;
  name: string;
  description: string;
  maxMebers: number;
  membersCount: number;
}

