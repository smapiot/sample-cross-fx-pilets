import * as React from 'react';
import { Link } from 'react-router-dom';
import { snakeCase } from 'lodash';
import { TileComponentProps } from 'sample-cross-fx';

export const Tile: React.FC<TileComponentProps> = () => (
  <div className="tile">
    <h3>Lazy ...</h3>
    <p>
      This has been lazy loaded. <code>{snakeCase('Hello there')}</code>.
    </p>
    <Link to="/lazy-page">Page link</Link>
  </div>
);
