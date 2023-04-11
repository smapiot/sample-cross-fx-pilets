import Tile from './Tile.vue';
import { PiletApi } from 'sample-cross-fx';

/**
 * Shows an API extension using Vue components.
 */
export function setup(piral: PiletApi) {
  piral.registerTile(piral.fromVue(Tile), {
    initialColumns: 2,
    initialRows: 2,
  });
}
