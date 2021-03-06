import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ArtifactService } from '../artifact.service';
import { GridService } from '../grid.service';
import { SceneComponent } from './scene.component';

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
        ArtifactService,
        GridService
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
