import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ArtifactService } from './artifact.service';
import { GridService } from './grid.service';
import { InformationComponent } from './information/information.component';
import { RoutingModule } from './routing/routing.module';
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
    ArtifactService,
    GridService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
