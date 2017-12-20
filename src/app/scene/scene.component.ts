import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.sass']
})
export class SceneComponent implements AfterViewInit {

  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private renderer: THREE.WebGLRenderer;
  private geometry: THREE.BoxGeometry;
  private material: THREE.MeshNormalMaterial;
  private mesh: THREE.Mesh;

  @ViewChild('canvas')
  private canvasRef: ElementRef;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private renderCube() {

    this.camera = new THREE.PerspectiveCamera(70, this.canvas.width / this.canvas.height, 0.01, 10);
    this.camera.position.z = 1;

    this.scene = new THREE.Scene();

    this.geometry = new THREE.BoxGeometry(0.4, 0.4, 0.4);

    this.material = new THREE.MeshNormalMaterial();

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.rotation.x = 0.50;
    this.mesh.rotation.y = 0.50;
    this.mesh.rotation.y = 0.50;
    this.scene.add(this.mesh);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    });
    this.renderer.render(this.scene, this.camera);
  }

  public ngAfterViewInit() {
    this.renderCube();
  }
}
