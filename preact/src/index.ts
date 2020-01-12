import { PiletApi } from 'sample-cross-fx';
import { Tile } from './Tile';

/**
 * Shows an API extension using Preact components.
 */
export function setup(piral: PiletApi) {
  piral.registerTile(piral.fromPreact(Tile), {
    initialColumns: 2,
    initialRows: 2,
  });
}
