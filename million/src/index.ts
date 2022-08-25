import { PiletApi } from 'sample-cross-fx';
import { Tile } from './Tile';
import { fromMillion } from 'piral-million/convert';

/**
 * Shows an API extension using Million components.
 */
export function setup(piral: PiletApi) {
  piral.registerTile(fromMillion(Tile), {
    initialColumns: 2,
    initialRows: 2,
  });
}
