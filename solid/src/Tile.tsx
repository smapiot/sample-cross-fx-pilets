import { createState, Component } from 'solid-js';
import { TileComponentProps } from 'sample-cross-fx';

export const Tile: Component<TileComponentProps> = ({ piral, rows, columns }) => {
  const [state, setState] = createState({ count: 0 });
  const { SolidExtension } = piral;

  return (
    <div class="tile">
      <h3>Solid {state.count}</h3>
      <p>
        {rows} rows and {columns} columns <SolidExtension name="smiley" />
      </p>
      <button onClick={() => setState({ count: state.count + 1 })}>+</button>
      <button onClick={() => setState({ count: state.count - 1 })}>-</button>
    </div>
  );
};
