import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { ArtifactService } from './artifact.service';
import { AppComponent } from './app.component';
import { SceneComponent } from './scene/scene.component';


@NgModule({
  declarations: [
    AppComponent,
    SceneComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [
    ArtifactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
