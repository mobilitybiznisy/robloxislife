import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuildService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  CreateGuild(name: string, description: string, maxMembers: number) {
    let queryParams = new HttpParams();
    queryParams.append("guildName", this.CreateGuild[0]);
    queryParams.append("description", this.CreateGuild[1]);
    queryParams.append("maxMembers", this.CreateGuild[2]);
    return this.http.put<CreateGUildDTO>(this.baseUrl + 'guilds/createGuild', { params: queryParams });

  };

  GetGuildInfo(id: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);

    return this.http.get<GuildDetailDTO>(this.baseUrl + 'guilds/getGuildById', { params: queryParams });
  }

  joinGuild(id: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);

    return this.http.put<any>(this.baseUrl + 'user/joinGuild', null, { params: queryParams });
  }
  leaveGuild(id: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);

    return this.http.put<any>(this.baseUrl + 'user/leaveGuild', null, { params: queryParams });
  }
  getUsersInCertainGuild(id: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);

    return this.http.get<UserDTO[]>(this.baseUrl +  'user/getUsersInGuild', { params: queryParams })
  }
}
export interface GuildDetailDTO {
  memberlist: UserDTO[];
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

export interface CreateGUildDTO {
  guildName: string;
  description: string;
  maxMembers: number;
}
