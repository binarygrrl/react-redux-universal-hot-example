import React, { Component } from 'react';
//import GameCanvas from 'components/GameCanvas/GameCanvas';
import Helmet from 'react-helmet';
import { provideHooks } from 'redial';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import * as createjs from 'createjs';

/* eslint-disable max-len */
@provideHooks({
  fetch: ({ store: { dispatch, getState } }) => !isInfoLoaded(getState()) ? dispatch(loadInfo()).catch(() => null) : Promise.resolve()
})
class GameApp extends Component {
  state = {
    // showKitten: false
  };

  render() {
    // const { showKitten } = this.state;
    // const kitten = require('./kitten.jpg');
    //const Stage = new createjs.Stage("gameCanvas");
    console.log(Stage);
    return (
      <div className="container">
        <h1>Game App</h1>
        <Helmet title="Game App" />
        {/* <GameCanvas /> */}
      </div>
    );
  }
}

export default GameApp;
