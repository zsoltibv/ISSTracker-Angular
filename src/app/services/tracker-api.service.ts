import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackerApiService {

  constructor(private http: HttpClient) { }

  getSatelliteInfo(satelliteId: number) {
    let satelliteInfo = this.http.get("https://api.wheretheiss.at/v1/satellites/"
      + satelliteId, {responseType:'json'});

    return satelliteInfo;
  }
}
