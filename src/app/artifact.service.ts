import { Injectable } from '@angular/core';
import { Vector3 } from 'three';
import { CHIPPEDSTONE } from './chipped-stone';

@Injectable()
export class ArtifactService {

  private chippedStone: Vector3[];

  constructor() {
  }

  getChippedStone(): Vector3[] {
    this.chippedStone = [];
    for (const artifact of CHIPPEDSTONE) {
      this.chippedStone.push(new Vector3(artifact.x, artifact.y, artifact.z));
    }
    return this.chippedStone;
  }

}
