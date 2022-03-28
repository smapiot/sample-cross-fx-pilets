import { PiletApi } from 'sample-cross-fx';
import { TileModule } from './TileModule';
import { TileComponent } from './TileComponent';

/**
 * Shows an API extension using Angular components.
 */
export function setup(piral: PiletApi) {
  piral.defineNgModule(TileModule);

  piral.registerTile(piral.fromNg(TileComponent), {
    initialColumns: 2,
    initialRows: 2,
  });
}
