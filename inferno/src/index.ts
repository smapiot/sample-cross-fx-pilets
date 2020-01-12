import { PiletApi } from 'sample-cross-fx';
import { Tile } from './Tile';

/**
 * Shows an API extension using Inferno components.
 */
export function setup(piral: PiletApi) {
  piral.registerTile(piral.fromInferno(Tile), {
    initialColumns: 2,
    initialRows: 2,
  });
}
