import { PiletApi } from 'sample-cross-fx';

const Page = () => import('./Page').then((m) => m.Page);
const Tile = () => import('./Tile').then((m) => m.Tile);

export function setup(piral: PiletApi) {
  piral.defineDependency('lodash', () =>
    import('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js'),
  );
  piral.registerPage('/lazy-page', piral.fromLazy(Page));
  piral.registerTile(piral.fromLazy(Tile, ['lodash']), {
    initialColumns: 2,
    initialRows: 2,
  });
}
