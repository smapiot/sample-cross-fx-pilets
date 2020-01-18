import { PiletApi } from 'sample-cross-fx';
import { Elm } from './Tile.elm';

/**
 * Shows an API extension using an Elm module.
 */
export function setup(piral: PiletApi) {
  piral.registerTile(piral.fromElm(Elm.Tile), {
    initialColumns: 2,
    initialRows: 2,
  });
}
