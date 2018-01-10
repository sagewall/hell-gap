import { Injectable } from '@angular/core';
import { GridLine } from './grid-line';


@Injectable()
export class GridService {

  private lines: THREE.Line[];
  private gridLines: GridLine[];
  private xMin: number;
  private xMax: number;
  private yMin: number;
  private yMax: number;
  private zMin: number;
  private zMax: number;

  constructor() {
    this.gridLines = [];
    this.lines = [];
    this.xMin = 1472;
    this.xMax = 1493;
    this.yMin = 1294;
    this.yMax = 1300;
    this.zMin = 97;
    this.zMax = 101;

    for (let x = this.xMin; x <= this.xMax; x++) {
      for (let z = this.zMin; z <= this.zMax; z++) {
        const line = new GridLine();
        line.x1 = x;
        line.y1 = this.yMin;
        line.z1 = z;
        line.x2 = x;
        line.y2 = this.yMax;
        line.z2 = z;
        this.gridLines.push(line);
      }
    }

    for (let x = this.xMin; x <= this.xMax; x++) {
      for (let y = this.yMin; y <= this.yMax; y++) {
        const line = new GridLine();
        line.x1 = x;
        line.y1 = y;
        line.z1 = this.zMin;
        line.x2 = x;
        line.y2 = y;
        line.z2 = this.zMax;
        this.gridLines.push(line);
      }
    }

    for (let y = this.yMin; y <= this.yMax; y++) {
      for (let z = this.zMin; z <= this.zMax; z++) {
        const line = new GridLine();
        line.x1 = this.xMin;
        line.y1 = y;
        line.z1 = z;
        line.x2 = this.xMax;
        line.y2 = y;
        line.z2 = z;
        this.gridLines.push(line);
      }
    }
  }

  getLines(): THREE.Line[] {
    const gridMaterial = new THREE.LineBasicMaterial({
      color: 0x999999
    });

    for (const gridLine of this.gridLines) {
      const lineGeometry = new THREE.Geometry();

      lineGeometry.vertices.push(
        new THREE.Vector3(gridLine.x1, gridLine.y1, gridLine.z1),
        new THREE.Vector3(gridLine.x2, gridLine.y2, gridLine.z2)
      );
      this.lines.push(new THREE.Line(lineGeometry, gridMaterial));
    }

    return this.lines;
  }

}
