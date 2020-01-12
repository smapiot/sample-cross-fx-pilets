import { PiletApi } from 'sample-cross-fx';
import { Tile } from './Tile';

/**
 * Shows an API extension using Mithril.js components.
 */
export function setup(piral: PiletApi) {
  piral.registerTile(piral.fromMithril(Tile), {
    initialColumns: 2,
    initialRows: 2,
  });
}
