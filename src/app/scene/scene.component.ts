import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ArtifactService } from '../artifact.service';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.sass']
})
export class SceneComponent implements AfterViewInit {

  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private chippedStoneGeometry: THREE.Geometry;
  private chippedStone: THREE.Vector3[];
  private chippedStonePoints: THREE.Points;
  private chippedStoneMaterial: THREE.PointsMaterial;
  private orbitControls: THREE.OrbitControls;

  @ViewChild('canvas')
  private canvasRef: ElementRef;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  constructor(private sceneService: ArtifactService) {
    this.render = this.render.bind(this);
  }

  private renderPoints() {

    this.scene = new THREE.Scene();

    this.chippedStoneGeometry = new THREE.Geometry();
    this.chippedStone = this.sceneService.getChippedStone();
    for (const vertex of this.chippedStone) {
      this.chippedStoneGeometry.vertices.push(vertex);
    }
    this.chippedStoneMaterial = new THREE.PointsMaterial({size: 0.1});
    this.chippedStonePoints = new THREE.Points(this.chippedStoneGeometry, this.chippedStoneMaterial);
    this.scene.add(this.chippedStonePoints);

    this.camera = new THREE.PerspectiveCamera(60, this.canvas.width / this.canvas.height, 1, 1000);
    this.camera.up.set(0, 0, 1);
    this.camera.position.x = 1483;
    this.camera.position.y = 1285;
    this.camera.position.z = 98;
    this.camera.lookAt(new THREE.Vector3(1483, 1295, 98));

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas
    });
    this.render();

  }

  public ngAfterViewInit() {
    this.renderPoints();
    this.addOrbitControls();
  }

  public render() {
    this.renderer.render(this.scene, this.camera);
  }

  public addOrbitControls() {
    this.orbitControls = new THREE.OrbitControls(this.camera);
    this.orbitControls.target = new THREE.Vector3(1483, 1295, 98);
    this.orbitControls.addEventListener('change', this.render);
  }
}
