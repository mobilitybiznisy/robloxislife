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
    const sovikus = "f02379c3-2ad5-451c-8429-25205ab7dddb";
    const qwert = "78ae254d-c70d-4707-88b5-8ec20878f2c6";
    http.get<UserData>(baseUrl + "api/user").subscribe(result => {
      this.xpguilds = result;
    }, error => console.error(error));
  }
}

interface UserData {
  xp: number;
  guild: string;
  id: string;

}
