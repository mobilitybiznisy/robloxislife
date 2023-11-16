import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FetchDataComponent } from '../fetch-data/fetch-data.component';
import { User } from 'oidc-client';

@Component({
  selector: 'app-dashh',
  templateUrl: './dashh.component.html',
  styleUrls: ['./dashh.component.css']
})
export class DashhComponent {
  public xpguilds: UserData;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<UserData>(baseUrl + "user").subscribe(result => {
      this.xpguilds = result;
    }, error => console.error(error));
  }
}

interface UserData {
  xp: number;
  guild: string;
  id: string;

}
