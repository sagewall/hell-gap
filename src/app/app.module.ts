import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ArtifactService } from './artifact.service';
import { AppComponent } from './app.component';
import { SceneComponent } from './scene/scene.component';


@NgModule({
  declarations: [
    AppComponent,
    SceneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ArtifactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
