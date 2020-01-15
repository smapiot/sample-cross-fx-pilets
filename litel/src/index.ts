import { PiletApi } from 'sample-cross-fx';
import { createTile } from './tile';

/**
 * Shows an API extension using LitElement components.
 */
export function setup(piral: PiletApi) {
  const tile = createTile();
  piral.registerTile(piral.fromLitEl(tile), {
    initialColumns: 2,
    initialRows: 2,
  });
}
