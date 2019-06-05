import React, { Component } from 'react';
import GameCanvas from 'components/GameCanvas/GameCanvas';
import Helmet from 'react-helmet';
import { provideHooks } from 'redial';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
//import createjs from 'createjs';
//import { Stage, Shape } from "@createjs/easeljs";

/* eslint-disable max-len */
@provideHooks({
  fetch: ({ store: { dispatch, getState } }) => !isInfoLoaded(getState()) ? dispatch(loadInfo()).catch(() => null) : Promise.resolve()
})

class GameApp extends Component {
  render() {
    // console.log(window);
    // let stage = new Stage("gameCanvas");
    // let shape = new Shape();
    // shape.graphics.beginFill("red").drawRect(0, 0, 120, 120);
    // stage.addChild(shape);
    // stage.update();
    return (
      <div className="container">
        <h1>Game App</h1>
        <Helmet title="Game App" />
        <GameCanvas />
        {/* <div className="game">
          <canvas id="gameCanvas" width="700" height="300" />
        </div> */}
      </div>
    );
  }
}

export default GameApp;
