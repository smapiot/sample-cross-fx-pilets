import { PiletApi } from 'sample-cross-fx';
import { Tile, actions, state } from './Tile';

// If isolated we could easily also import hyperapp
// and set up tsconfig.json to use jsxFactory h.
// Reasons for not using here:
// - import hyperapp overrides global JSX and destroys React (if used in same project)
// - using another jsxFactory also destroys React (if used in same project)
// For illustration purposes we therefore fall back to "require"

/**
 * Shows an API extension using hyperapp components.
 */
export function setup(piral: PiletApi) {
  piral.registerTile(piral.fromHyperapp(Tile, state, actions), {
    initialColumns: 2,
    initialRows: 2,
  });
}
