import { PiletApi } from 'sample-cross-fx';
import { createTile } from './tile';

/**
 * Shows an API extension using Riot components.
 */
export function setup(piral: PiletApi) {
  piral.registerTile(piral.fromRiot(createTile(piral.RiotExtension)), {
    initialColumns: 2,
    initialRows: 2,
  });
}
