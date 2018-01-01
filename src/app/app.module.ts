import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing/routing.module';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';

import { ArtifactService } from './artifact.service';
import { AppComponent } from './app.component';
import { InformationComponent } from './information/information.component';
import { SceneComponent } from './scene/scene.component';


@NgModule({
  declarations: [
    AppComponent,
    SceneComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    RoutingModule,
    MatSlideToggleModule,
    MatListModule
  ],
  providers: [
    ArtifactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
