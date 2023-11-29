import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuildService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }
  GetGuildInfo(id: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);

    return this.http.get<GuildDTO>(this.baseUrl + 'guilds/getGuildById', { params: queryParams });
  }

  joinGuild(id: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);

    return this.http.put<any>(this.baseUrl + 'user/joinGuild', null, { params: queryParams });
  }
  leaveGuild() {
   this.http.put<any>(this.baseUrl + 'user/leaveGuild', {}).subscribe()
  }
  getUsersInCertainGuild(id: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);

    return this.http.get<UserDTO[]>(this.baseUrl +  'user/getUsersInGuild', { params: queryParams })
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
