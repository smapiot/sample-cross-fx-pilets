import * as React from 'react';
import { Link } from 'react-router-dom';
import { PiletApi, PiralStoreDataEvent } from 'sample-cross-fx';
import { n } from './constants';

export function createTile(piral: PiletApi) {
  return () => (
    <div className="tile">
      <Link to="/demo">Another page</Link>
      <p>
        <b>Global Fun?</b>
      </p>
      <button onClick={() => piral.setData(n, piral.getData(n) + 1)}>Higher</button>
      <button onClick={() => piral.setData(n, piral.getData(n) - 1)}>Lower</button>
    </div>
  );
}

export function createSmiley(piral: PiletApi) {
  const tileStyle: React.CSSProperties = {
    fontWeight: 'bold',
    fontSize: '0.8em',
    textAlign: 'center',
    color: 'blue',
    marginTop: '1em',
  };

  return () => {
    const [count, setCount] = React.useState(() => piral.getData(n));
    React.useEffect(() => {
      const listener = (e: PiralStoreDataEvent) => {
        if (e.name === n) {
          setCount(e.value);
        }
      };
      piral.on('store-data', listener);
      return () => piral.off('store-data', listener);
    }, []);
    return <div style={tileStyle}>From React: {count}</div>;
  };
}

export function createPage() {
  return () => (
    <div>
      <h1>Empty Page</h1>
      <p>This page is empty.</p>
      <p>
        <Link to="/">Just go back to the homepage</Link>
      </p>
    </div>
  );
}
