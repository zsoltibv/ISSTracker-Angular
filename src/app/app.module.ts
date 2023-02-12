import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackerPanelComponent } from './components/tracker-panel/tracker-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { MapPanelComponent } from './components/map-panel/map-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackerPanelComponent,
    MapPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
