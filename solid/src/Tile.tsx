import { createSignal, Component } from 'solid-js';
import { TileComponentProps } from 'sample-cross-fx';

export const Tile: Component<TileComponentProps> = ({ piral, rows, columns }) => {
  const [getCount, setCount] = createSignal(0);
  const { SolidExtension } = piral;

  return (
    <div class="tile">
      <h3>Solid {getCount()}</h3>
      <p>
        {rows} rows and {columns} columns <SolidExtension name="smiley" />
      </p>
      <button onClick={() => setCount(getCount() + 1)}>+</button>
      <button onClick={() => setCount(getCount() - 1)}>-</button>
    </div>
  );
};
