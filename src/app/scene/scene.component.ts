import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.sass']
})
export class SceneComponent implements AfterViewInit {

  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private geometry: THREE.Geometry;
  private vertices: THREE.Vector3[];
  private points: THREE.Points;
  private pointsMaterial: THREE.PointsMaterial;

  @ViewChild('canvas')
  private canvasRef: ElementRef;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private renderPoints() {

    this.scene = new THREE.Scene();
    this.geometry = new THREE.Geometry();

    this.camera = new THREE.PerspectiveCamera(60, this.canvas.width / this.canvas.height, 1, 1000);
    this.camera.position.z = 25;
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    this.vertices = [];
    this.vertices.push(new THREE.Vector3(1, 1, 1));
    this.vertices.push(new THREE.Vector3(2, 2, 1));
    this.vertices.push(new THREE.Vector3(3, 4, 1));

    for (const vertex of this.vertices) {
      this.geometry.vertices.push(vertex);
    }

    this.pointsMaterial = new THREE.PointsMaterial();

    this.points = new THREE.Points(this.geometry, this.pointsMaterial);
    this.scene.add(this.points);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas
    });
    this.renderer.render(this.scene, this.camera);

  }

  public ngAfterViewInit() {
    this.renderPoints();
  }
}
