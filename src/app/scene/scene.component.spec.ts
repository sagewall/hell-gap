import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtifactService } from '../artifact.service';

import { SceneComponent } from './scene.component';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';

describe('SceneComponent', () => {
  let component: SceneComponent;
  let fixture: ComponentFixture<SceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SceneComponent
      ],
      imports: [
        MatSlideToggleModule
      ],
      providers: [
        ArtifactService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
