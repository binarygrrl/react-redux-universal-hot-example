import React, { Component } from "react";
import {
  StageComponent,
  BitmapComponent,
  ContainerComponent,
  ShapeComponent,
  TextComponent
} from "easeljs-react";
//import { Graphics, Stage, Container } from "@createjs/easeljs";

// import Graphics = createjs.Graphics;
// import Stage = createjs.Stage;
// import Container = createjs.Container;
// import { connect } from 'react-redux';

class GameCanvas extends Component {
  // componentDidMount() {
  //   console.log('Component Did Mount');
  //   // This snippet injects the custom script into the head of the document
  //   const createJs = '//code.createjs.com/1.0.0/createjs.min.js';
  //   // const createJs = "../vendor/createjs.1.0.0.min.js";
  //   const head = document.getElementsByTagName('head')[0];
  //   const script = document.createElement('script');
  //   script.type = 'text/javascript';
  //   script.src = createJs;
  //   head.appendChild(script);
  // }

  render() {
    // console.log(window);
    // if (window.createjs) {
    //const stage = new createjs.Stage("gameCanvas");

    const circle = new window.createjs.Shape();
    circle.graphics.beginFill("red").drawCircle(0, 0, 40);
    const circleB = new window.createjs.Shape();
    circleB.graphics.beginFill("orange").drawCircle(0, 0, 40);
    const circleC = new window.createjs.Shape();
    circleC.graphics.beginFill("yellow").drawCircle(0, 0, 40);
    const circleD = new window.createjs.Shape();
    circleD.graphics.beginFill("green").drawCircle(0, 0, 40);
    const circleE = new window.createjs.Shape();
    circleE.graphics.beginFill("blue").drawCircle(0, 0, 40);
    const circleF = new window.createjs.Shape();
    circleF.graphics.beginFill("purple").drawCircle(0, 0, 40);
    // Set position of Shape instance.
    circle.x = circle.y = 50;
    circleB.x = 150;
    circleB.y = 50;
    circleC.x = 250;
    circleC.y = 50;
    circleD.x = 350;
    circleD.y = 50;
    circleE.x = 450;
    circleE.y = 50;
    circleF.x = 550;
    circleF.y = 50;
    // Add Shape instance to stage display list.
    stage.addChild(circle);
    stage.addChild(circleB);
    stage.addChild(circleC);
    stage.addChild(circleD);
    stage.addChild(circleE);
    stage.addChild(circleF);
    // Update stage will render next frame
    stage.update();

    function handleTick() {
      // Circle will move 10 units down.
      circle.y += 10;
      // Will cause the circle to wrap back
      if (circle.y > stage.canvas.height) {
        circle.y = 0;
      }
      // Circle will move 10 units down.
      circleB.y += 10;
      // Will cause the circle to wrap back
      if (circleB.y > stage.canvas.height) {
        circleB.y = 0;
      }
      // Circle will move 10 units down.
      circleC.y += 10;
      // Will cause the circle to wrap back
      if (circleC.y > stage.canvas.height) {
        circleC.y = 0;
      }
      // Circle will move 10 units down.
      circleD.y += 10;
      // Will cause the circle to wrap back
      if (circleD.y > stage.canvas.height) {
        circleD.y = 0;
      }
      // Circle will move 10 units down.
      circleE.y += 10;
      // Will cause the circle to wrap back
      if (circleE.y > stage.canvas.height) {
        circleE.y = 0;
      }
      // Circle will move 10 units down.
      circleF.y += 10;
      // Will cause the circle to wrap back
      if (circleF.y > stage.canvas.height) {
        circleF.y = 0;
      }
      stage.update();

      // Update stage will render next frame
      window.createjs.Ticker.addEventListener("tick", handleTick);
      //} else return <div className="loading-error">CreateJS Failed to Load</div>
      return (
        <div className="game">
          <canvas id="gameCanvas" width="700" height="300" />
        </div>
      );
    }
  }
}

export default GameCanvas;
