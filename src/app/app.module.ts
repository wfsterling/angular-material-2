import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from 'src/assets/theme/material.module';
import { AlertBarComponent } from './alert-bar/alert-bar.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CheckinComponent } from './checkin/checkin.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AiBubbleComponent } from './checkin/ai-bubble/ai-bubble.component';
import { MoodSelectComponent } from './checkin/mood-select/mood-select.component';
import { ReportInjuryComponent } from './report-injury/report-injury.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertBarComponent,
    MainMenuComponent,
    CheckinComponent,
    AiBubbleComponent,
    MoodSelectComponent,
    ReportInjuryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
