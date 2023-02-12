import { Component, Input } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-map-panel',
  templateUrl: './map-panel.component.html',
  styleUrls: ['./map-panel.component.css']
})
export class MapPanelComponent {

  @Input() latitude: any;
  @Input() longitude: any;

  mapWidth: number = 650;
  mapHeight: number = 450;

  x: number = 0;
  y: number = 0;

  constructor() {

  }

  ngOnInit(){
    this.processCoordinates()

    setInterval(() => {
      this.processCoordinates()
    }, 2000);
  }

  setPosition(){

    let styles = {
      'left': this.x + 'px',
      'top': this.y + 'px'
    };
    return styles;
  }

  processCoordinates() {

    // get x value
    this.x = (this.longitude + 180) * (this.mapWidth / 360);

    // convert from degrees to radians
    let latRad: number = this.latitude * Math.PI / 180;

    // get y value
    let mercN: number = Math.log(Math.tan((Math.PI / 4) + (latRad / 2)));

    this.y  = (this.mapHeight / 2) - (this.mapWidth * mercN / (2 * Math.PI));
  }
}
