import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './app-material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { StatsComponent } from './pages/stats/stats.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { VideoStatsComponent } from './components/video-stats/video-stats.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UploadFileComponent,
    StatsComponent,
    ActivityComponent,
    VideoStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
