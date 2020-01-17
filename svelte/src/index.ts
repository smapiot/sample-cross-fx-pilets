import { PiletApi } from 'sample-piral';
import Tile from './Tile.svelte';

export function setup(app: PiletApi) {
  // piral.registerTile(piral.fromSvelte(Tile), {
  //   initialColumns: 2,
  //   initialRows: 2,
  // });

  app.registerTile(
    {
      type: 'html',
      component: {
        mount(el, props) {
          const tile = new Tile({
            target: el,
            props,
          });
        },
      },
    },
    {
      initialColumns: 2,
      initialRows: 2,
    },
  );
}
