import { TrackerApiService } from './../../services/tracker-api.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { Satellite } from "src/models/Satellite";
import { interval } from 'rxjs';

@Component({
  selector: 'app-tracker-panel',
  templateUrl: './tracker-panel.component.html',
  styleUrls: ['./tracker-panel.component.css']
})
export class TrackerPanelComponent {
  @Output() visibility = new EventEmitter<string>();

  satelliteId: number = 25544;
  satellite: Satellite = {};

  constructor(private trackerApi: TrackerApiService) {
    this.getSatellite();

    setInterval(() => {
      this.getSatellite();
    }, 2000);
  }

  getSatellite() {
    this.trackerApi.getSatelliteInfo(this.satelliteId).subscribe((response: Satellite) => {
      this.satellite.id = response.id;
      this.satellite.name = response.name;
      this.satellite.latitude = response.latitude;
      this.satellite.longitude = response.longitude;
      this.satellite.visibility = response.visibility;
    })

    this.visibility.emit(this.satellite.visibility);
  }
}
