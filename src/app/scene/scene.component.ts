import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { ArtifactService } from '../artifact.service';
import { GridService } from '../grid.service';

declare const require: (moduleId: string) => any;
const OrbitControls = require('three-orbit-controls')(THREE);

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.sass']
})
export class SceneComponent implements AfterViewInit {

  public chippedStoneVisibility: boolean;
  public boneVisibility: boolean;
  public ochreVisibility: boolean;
  public gridVisibility: boolean;

  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;

  private chippedStoneGeometry: THREE.Geometry;
  private chippedStone: THREE.Vector3[];
  private chippedStonePoints: THREE.Points;
  private chippedStoneMaterial: THREE.PointsMaterial;

  private boneGeometry: THREE.Geometry;
  private bone: THREE.Vector3[];
  private bonePoints: THREE.Points;
  private boneMaterial: THREE.PointsMaterial;

  private ochreGeometry: THREE.Geometry;
  private ochre: THREE.Vector3[];
  private ochrePoints: THREE.Points;
  private ochreMaterial: THREE.PointsMaterial;

  private gridLines: THREE.Line[];

  private orbitControls: THREE.OrbitControls;

  @ViewChild('canvas')
  private canvasRef: ElementRef;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  constructor(
    private sceneService: ArtifactService,
    private gridService: GridService
  ) {
    this.chippedStoneVisibility = true;
    this.boneVisibility = true;
    this.ochreVisibility = true;
    this.gridVisibility = false;
    this.render = this.render.bind(this);
  }

  public ngAfterViewInit() {
    this.createScene();
    this.addChippedStone();
    this.addBone();
    this.addOchre();
    this.addGrid();
    this.render();
    this.addOrbitControls();
  }

  private createScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x111111);

    this.camera = new THREE.PerspectiveCamera(60, this.canvas.width / this.canvas.height, 1, 1000);
    this.camera.up.set(0, 0, 1);
    this.camera.position.x = 1483;
    this.camera.position.y = 1285;
    this.camera.position.z = 98;
    this.camera.lookAt(new THREE.Vector3(1483, 1295, 98));

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas
    });
  }

  private addChippedStone() {
    this.chippedStoneGeometry = new THREE.Geometry();

    this.chippedStone = this.sceneService.getChippedStone();
    for (const vertex of this.chippedStone) {
      this.chippedStoneGeometry.vertices.push(vertex);
    }

    this.chippedStoneMaterial = new THREE.PointsMaterial({
      size: 0.01,
      color: new THREE.Color(0xBF916E),
      precision: 'highp',
      transparent: true,
      opacity: 0.75
    });

    this.chippedStonePoints = new THREE.Points(this.chippedStoneGeometry, this.chippedStoneMaterial);

    this.scene.add(this.chippedStonePoints);
  }

  private addBone() {
    this.boneGeometry = new THREE.Geometry();

    this.bone = this.sceneService.getBone();
    for (const vertex of this.bone) {
      this.boneGeometry.vertices.push(vertex);
    }

    this.boneMaterial = new THREE.PointsMaterial({
      size: 0.01,
      color: new THREE.Color(0xFFFFFF),
      precision: 'highp',
      transparent: true,
      opacity: 0.75
    });

    this.bonePoints = new THREE.Points(this.boneGeometry, this.boneMaterial);

    this.scene.add(this.bonePoints);
  }

  private addOchre() {
    this.ochreGeometry = new THREE.Geometry();

    this.ochre = this.sceneService.getOchre();
    for (const vertex of this.ochre) {
      this.ochreGeometry.vertices.push(vertex);
    }

    this.ochreMaterial = new THREE.PointsMaterial({
      size: 0.01,
      color: new THREE.Color(0xFF0000),
      precision: 'highp',
      transparent: true,
      opacity: 0.75
    });

    this.ochrePoints = new THREE.Points(this.ochreGeometry, this.ochreMaterial);

    this.scene.add(this.ochrePoints);
  }

  private addGrid() {
    this.gridLines = this.gridService.getLines();
    for (const gridLine of this.gridLines) {
      this.scene.add(gridLine);
      gridLine.traverse((child) => {
        this.gridVisibility ? child.visible = true : child.visible = false;
      });
    }
  }

  private render() {
    this.renderer.render(this.scene, this.camera);
  }

  private addOrbitControls() {
    this.orbitControls = new OrbitControls(this.camera, this.canvas);
    this.orbitControls.target = new THREE.Vector3(1483, 1295, 98);
    this.orbitControls.addEventListener('change', this.render);
  }

  public chippedStoneVisibilityChange(event) {
    this.chippedStoneVisibility = event.checked;

    this.chippedStonePoints.traverse((child) => {
      this.chippedStoneVisibility ? child.visible = true : child.visible = false;
    });

    this.render();
  }

  public boneVisibilityChange(event) {
    this.boneVisibility = event.checked;

    this.bonePoints.traverse((child) => {
      this.boneVisibility ? child.visible = true : child.visible = false;
    });

    this.render();
  }

  public ochreVisibilityChange(event) {
    this.ochreVisibility = event.checked;

    this.ochrePoints.traverse((child) => {
      this.ochreVisibility ? child.visible = true : child.visible = false;
    });

    this.render();
  }

  public gridVisibilityChange(event) {
    this.gridVisibility = event.checked;

    for (const gridLine of this.gridLines) {
      gridLine.traverse((child) => {
        this.gridVisibility ? child.visible = true : child.visible = false;
      });
    }

    this.render();
  }
}
