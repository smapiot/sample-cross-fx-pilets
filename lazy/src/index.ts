import { PiletApi } from 'sample-cross-fx';

const Page = () => import('./Page').then((m) => m.Page);
const Tile = () => import('./Tile').then((m) => m.Tile);

export function setup(piral: PiletApi) {
  piral.defineDependency('foo', () => new Promise(resolve => setTimeout(() => {
    resolve([1, 2, 3]);
  }, 1500)));
  piral.registerPage('/lazy-page', piral.fromLazy(Page, ['foo']));
  piral.registerTile('my-tile', piral.fromLazy(Tile), {
    initialColumns: 2,
    initialRows: 2,
  });
}
