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

    return this.http.get<GuildDTO>(this.baseUrl + 'guilds/:getGuildById', { params: queryParams });
  }
}

interface GuildDTO {
  id: number;
  name: string;
  description: string;
  maxMebers: number;
  membersCount: number;
}
