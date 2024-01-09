import { Component, Inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { GuildService, GuildDetailDTO} from '../srvc/guild.service';

@Component({
  selector: 'app-guild-pages',
  templateUrl: './guild-pages.component.html',
  styleUrls: ['./guild-pages.component.css']
})


export class GuildPagesComponent {
  neviem: number = 0;

  guild = signal<GuildDetailDTO>(undefined);

  constructor(private route: ActivatedRoute,
    http: HttpClient,
    private guildService: GuildService,
    @Inject('BASE_URL') baseUrl: string
  ) { }


  ngOnInit(): void {
    const RouteParams = this.route.snapshot.paramMap;
    this.neviem = Number(RouteParams.get('Id'));
    this.guildService.GetGuildInfo(this.neviem).subscribe(guild => this.guild.set(guild));
  };

  deletgild(): void {
    this.guildService.RemoveGuild(this.neviem).subscribe(guild => this.guild.set(null));
  }

  OnJoin() {
    this.guildService.joinGuild(this.neviem).subscribe(guild => this.guild.set(guild));
  }
  OnLeave() {
    this.guildService.leaveGuild(this.neviem).subscribe(guild => this.guild.set(guild));
  }
}
interface GuildDTO {
  id: number;
  name: string;
  description: string;
  maxMebers: number;
  membersCount: number;
}


interface UserDTO {
  name: string;
  email: string;
  xp: number;
  guild: string;
}

