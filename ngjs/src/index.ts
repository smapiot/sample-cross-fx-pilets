import { PiletApi } from 'sample-cross-fx';
import { createTile } from './tile';

/**
 * Shows an API extension using Angular.js components.
 */
export function setup(piral: PiletApi) {
  const Tile = createTile(piral.NgjsExtension.name);

  piral.registerTile(piral.fromNgjs('tile', Tile), {
    initialColumns: 2,
    initialRows: 2,
  });
}
