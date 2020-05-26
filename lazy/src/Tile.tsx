import * as React from 'react';
import { Link } from 'react-router-dom';

// this will be defined from an external dependency
// that is awaited just before displaying this part
declare const _: any;

export const Tile = () => (
  <div className="tile">
    <h3>Lazy ...</h3>
    <p>
      This has been lazy loaded. <code>{_.snakeCase('Hello there')}</code>.
    </p>
    <Link to="/lazy-page">Page link</Link>
  </div>
);
