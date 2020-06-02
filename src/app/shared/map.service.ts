import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  apiUrl = environment.apiUrl;
  apiUrl2 = environment.apiurl2;
  
  constructor(private http: HttpClient) {}

  public device_location(Id: string) {
    return this.http.post(`${this.apiUrl}`, {
      devid: Id,
    });
  }
public lots_detail(Id: string){
 return this.http.get(`${this.apiUrl2}/lot/${Id}`)
}

public toggle_status(id:string){
  return this.http.post(`${this.apiUrl2}/bay/${id}/toggle`, {body:null})
}
}
