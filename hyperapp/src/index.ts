import { PiletApi } from 'sample-cross-fx';
import { Tile, actions, state } from './Tile';

/**
 * Shows an API extension using hyperapp components.
 */
export function setup(piral: PiletApi) {
  piral.registerTile(piral.fromHyperapp(Tile, state, actions), {
    initialColumns: 2,
    initialRows: 2,
  });
}
