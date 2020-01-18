import { PiletApi } from 'sample-piral';
import Tile from './Tile.svelte';

export function setup(piral: PiletApi) {
  piral.registerTile(piral.fromSvelte(Tile), {
    initialColumns: 2,
    initialRows: 2,
  });
}
