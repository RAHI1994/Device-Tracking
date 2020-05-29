import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public device_location(Id: string) {
    return this.http.post(`${this.apiUrl}`, {
      devid: Id,
    });
  }
}
