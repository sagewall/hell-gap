import { Injectable } from '@angular/core';
import { Vector3 } from 'three';
import { CHIPPEDSTONE } from './chipped-stone';
import { BONE } from './bone';
import { OCHRE } from './ochre';

@Injectable()
export class ArtifactService {

  private chippedStone: Vector3[];
  private bone: Vector3[];
  private ochre: Vector3[];

  constructor() {
  }

  getChippedStone(): Vector3[] {
    this.chippedStone = [];
    for (const artifact of CHIPPEDSTONE) {
      this.chippedStone.push(new Vector3(artifact.x, artifact.y, artifact.z));
    }
    return this.chippedStone;
  }

  getBone(): Vector3[] {
    this.bone = [];
    for (const artifact of BONE) {
      this.bone.push(new Vector3(artifact.x, artifact.y, artifact.z));
    }
    return this.bone;
  }

  getOchre(): Vector3[] {
    this.ochre = [];
    for (const artifact of OCHRE) {
      this.ochre.push(new Vector3(artifact.x, artifact.y, artifact.z));
    }
    return this.ochre;
  }

}
