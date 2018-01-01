import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { InformationComponent } from './information/information.component';
import { SceneComponent } from './scene/scene.component';
import { ArtifactService } from './artifact.service';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SceneComponent,
        InformationComponent
      ],
      imports: [
        RouterModule,
        RouterTestingModule,
        RoutingModule,
        MatSlideToggleModule,
        MatListModule
      ],
      providers: [
        ArtifactService,
        {provide: APP_BASE_HREF, useValue : '/' }
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Hell Gap'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Hell Gap');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Hell Gap');
  }));
});
