import React from 'react';
import Loadable from 'react-loadable';

const GameAppLoadable = Loadable({
  loader: () => import('./GameApp' /* webpackChunkName: 'games' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export default GameAppLoadable;
