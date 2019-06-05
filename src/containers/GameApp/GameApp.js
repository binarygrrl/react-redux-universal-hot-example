import React, { Component } from 'react';
import GameCanvas from 'components/GameCanvas/GameCanvas';
import Helmet from 'react-helmet';
import { provideHooks } from 'redial';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';

/* eslint-disable max-len */
@provideHooks({
  fetch: ({ store: { dispatch, getState } }) => !isInfoLoaded(getState()) ? dispatch(loadInfo()).catch(() => null) : Promise.resolve()
})

class GameApp extends Component {
  componentDidMount() {
    console.log('Component Did Mount');
    // This snippet injects the custom script into the head of the document
    //const createJs = '//code.createjs.com/1.0.0/createjs.min.js';
    const soundJs = '//code.createjs.com/1.0.0/soundjs.min.js';
    const preloadJs = '//code.createjs.com/1.0.0/preloadjs.min.js';
    // const createJs = "../vendor/createjs.1.0.0.min.js";
    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = soundJs;
    head.appendChild(script);
    const preloadScript = document.createElement('script');
    preloadScript.type = 'text/javascript';
    preloadScript.src = preloadJs;
    head.appendChild(preloadScript);

  }

  render() {
    return (
      <div className="container">
        <h1>Game App</h1>
        <Helmet title="Game App" />
        <GameCanvas />
      </div>
    );
  }
}

export default GameApp;
