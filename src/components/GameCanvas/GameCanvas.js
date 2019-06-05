import React, { Component } from "react";
// import { connect } from 'react-redux';
import { Stage, Shape, Ticker } from "@createjs/easeljs";

class GameCanvas extends Component {
  render() {
    const stage = new Stage("gameCanvas");
    console.log(stage);
    console.log(stage.canvas);

    const circle = new Shape();
    circle.graphics.beginFill("red").drawCircle(0, 0, 40);
    const circleB = new Shape();
    circleB.graphics.beginFill("orange").drawCircle(0, 0, 40);
    const circleC = new Shape();
    circleC.graphics.beginFill("yellow").drawCircle(0, 0, 40);
    const circleD = new Shape();
    circleD.graphics.beginFill("green").drawCircle(0, 0, 40);
    const circleE = new Shape();
    circleE.graphics.beginFill("blue").drawCircle(0, 0, 40);
    const circleF = new Shape();
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
    console.log(stage.canvas);
    // Update stage will render next frame
    stage.update();

    function handleTick() {
      if(stage.canvas){
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
      }
    }

    // Update stage will render next frame
    Ticker.addEventListener("tick", handleTick);
    //} else return <div className="loading-error">CreateJS Failed to Load</div>
    return (
      <div className="game">
        <canvas id="gameCanvas" width="700" height="300" />
      </div>
    );
  }
}

export default GameCanvas;
