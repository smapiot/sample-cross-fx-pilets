import Tile from './Tile.vue';
import { Component } from 'vue';
import { PiletApi, TileComponentProps } from 'sample-cross-fx';

/**
 * Shows an API extension using Vue components.
 */
export function setup(piral: PiletApi) {
  piral.registerTile(piral.fromVue(Tile as Component<TileComponentProps>), {
    initialColumns: 2,
    initialRows: 2,
  });
}
