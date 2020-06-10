import { PiletApi } from 'sample-cross-fx';
import { Tile } from './Tile';

export function setup(piral: PiletApi) {
  piral.registerTile(piral.fromSolid(Tile), {
    initialColumns: 2,
    initialRows: 2,
  });
}
