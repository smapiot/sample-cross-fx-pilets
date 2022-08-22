import { useState, createElement } from 'million/react';
import { TileComponentProps } from 'sample-cross-fx';
import { MillionExtension } from 'piral-million/convert';

export const Tile = ({ rows, columns }: TileComponentProps) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="tile">
      <h3>Million {count}</h3>
      <p>
        {rows} rows and {columns} columns <MillionExtension name="smiley" />
      </p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
