import { Component, Inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { GuildService, CreateGuildDTO } from '../srvc/guild.service';


@Component({
  standalone: true,
  selector: 'app-guild-forms',
  templateUrl: './guild-forms.component.html',
  styleUrls: ['./guild-forms.component.css'],
  imports: [ReactiveFormsModule],
})
export class GuildFormsComponent {

  guildINFO = signal<CreateGuildDTO>(undefined);

  constructor(private route: ActivatedRoute,
    http: HttpClient,
    private guildService: GuildService,
    @Inject('BASE_URL') baseUrl: string
  ) { }

  GuildForm = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      maxMembers: new FormControl('', Validators.required),
    });

  onSubmit() {

    if (this.GuildForm.valid) {
      this.guildService.CreateGuild({

        guildName: this.GuildForm.controls['name'].value,
        description: this.GuildForm.controls['description'].value,
        maxMembers: this.GuildForm.controls['maxMembers'].value,
      }).subscribe();
          
     }
  }

}




