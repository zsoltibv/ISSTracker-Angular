import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iss-tracker';

  visibility: string = "";

  setVisibility(event:string){
    this.visibility = event;
    console.log(this.visibility);
  }
}
