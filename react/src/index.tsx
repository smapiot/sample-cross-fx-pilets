import { PiletApi } from 'sample-cross-fx';
import { n, demoRoute } from './constants';
import { createSmiley, createTile, createPage } from './components';

/**
 * Shows an API extension using React components.
 */
export function setup(piral: PiletApi) {
  const Smiley = createSmiley(piral);
  const Tile = createTile(piral);
  const Page = createPage();

  piral.registerPage(demoRoute, Page);

  piral.setData(n, 0);

  piral.registerTile(Tile);

  piral.registerExtension('smiley', Smiley);
}
