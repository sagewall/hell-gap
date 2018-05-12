import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from '../information/information.component';
import { SceneComponent } from '../scene/scene.component';

const routes: Routes = [
  { path: '', redirectTo: '/information', pathMatch: 'full' },
  { path: 'information', component: InformationComponent },
  { path: 'scene', component: SceneComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
