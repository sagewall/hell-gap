import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtifactService } from '../artifact.service';

import { SceneComponent } from './scene.component';

describe('SceneComponent', () => {
  let component: SceneComponent;
  let fixture: ComponentFixture<SceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SceneComponent
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
