import { PiletApi } from 'sample-cross-fx';
import { Tile } from './Tile';

/**
 * Shows an API extension using Aurelia components.
 */
export function setup(piral: PiletApi) {
  piral.registerTile(piral.fromAurelia(Tile), {
    initialColumns: 2,
    initialRows: 2,
  });
}
