import { h, Component } from 'hyperapp';
import { TileComponentProps } from 'sample-cross-fx';

export const state = {
  count: 0,
};

export const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value }),
};

export const Tile: Component<TileComponentProps, typeof state, typeof actions> = props => {
  const { HyperappExtension } = props.piral;

  return (state, actions) =>
    h(
      'div',
      {
        class: 'tile',
      },
      h('h3', {}, `Hyperapp: ${state.count}`),
      h(
        'p',
        {},
        `${props.rows} rows and ${props.columns} columns `,
        HyperappExtension(
          {
            name: 'smiley',
          },
          [],
        ),
      ),
      h(
        'button',
        {
          onclick: () => actions.up(1),
        },
        '+',
      ),
      h(
        'button',
        {
          onclick: () => actions.down(1),
        },
        '-',
      ),
    );
};
