import React, { Component } from 'react';
// import demo from './DemoCircles';
// import { connect } from 'react-redux';

// const WINDOW = window;
// const CreateJs = window.createjs;

class GameCanvas extends Component {
  state = {
    createjs: window.createjs,
    // window: window,
    stage: null
    // CreateJs does save to the state!
  };

  createJs = window.createjs;

  componentDidMount() {
    console.log('Component Did Mount');
    // This snippet injects the custom script into the head of the document
    const createJs = '//code.createjs.com/1.0.0/createjs.min.js';
    // const createJs = "../vendor/createjs.1.0.0.min.js";
    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = createJs;
    head.appendChild(script);
  }

  componentWillMount() {
    console.log('Component Will Mount');
    this.setState({ createjs: window.createjs });
    this.createJs = window.createjs;
  }

  // shouldComponentUpdate(){
  //   console.log('Should component update?');
  //   console.log('window', window);
  //   if(window.createjs){
  //     console.log('createjs', window.createjs);
  //     return true;
  //   }
  //   return true; //false
  // }

  // setTheStage(){
  //   const stage = new window.createjs.Stage("gameCanvas");
  //   this.setState({ stage: stage });
  //   //this.setState({ window: window });
  //   demo(stage, createjs, window);
  // }

  render() {
    if (this.state.createjs) {
      console.log('createjs', this.state.createjs);
    }
    if (this.state.stage) {
      console.log('stage', this.state.stage);
    }

    console.log(window);
    if (window.createjs) {
      console.log(this.state);
      // if(!this.state.stage){
      //   this.setTheStage();
      // }
      const stage = new window.createjs.Stage('gameCanvas');
      const circle = new createjs.Shape();
      circle.graphics.beginFill('red').drawCircle(0, 0, 40);
      const circleB = new createjs.Shape();
      circleB.graphics.beginFill('orange').drawCircle(0, 0, 40);
      const circleC = new createjs.Shape();
      circleC.graphics.beginFill('yellow').drawCircle(0, 0, 40);
      const circleD = new createjs.Shape();
      circleD.graphics.beginFill('green').drawCircle(0, 0, 40);
      const circleE = new createjs.Shape();
      circleE.graphics.beginFill('blue').drawCircle(0, 0, 40);
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
      // Add Shape instance to stage display list.
      stage.addChild(circle);
      stage.addChild(circleB);
      stage.addChild(circleC);
      stage.addChild(circleD);
      stage.addChild(circleE);
      // Update stage will render next frame
      stage.update();

      function handleTick() {
        // Circle will move 10 units to the right.
        // circle.x += 10;
        // Will cause the circle to wrap back
        // if (circle.x > stage.canvas.width) { circle.x = 0; }

        // Circle will move 10 units to the right.
        circle.y += 10;
        // Will cause the circle to wrap back
        if (circle.y > stage.canvas.height) {
          circle.y = 0;
        }
        // Circle will move 10 units to the right.
        circleB.y += 10;
        // Will cause the circle to wrap back
        if (circleB.y > stage.canvas.height) {
          circleB.y = 0;
        }
        // Circle will move 10 units to the right.
        circleC.y += 10;
        // Will cause the circle to wrap back
        if (circleC.y > stage.canvas.height) {
          circleC.y = 0;
        }
        // Circle will move 10 units to the right.
        circleD.y += 10;
        // Will cause the circle to wrap back
        if (circleD.y > stage.canvas.height) {
          circleD.y = 0;
        }
        // Circle will move 10 units to the right.
        circleE.y += 10;
        // Will cause the circle to wrap back
        if (circleE.y > stage.canvas.height) {
          circleE.y = 0;
        }
        stage.update();
      }
      // Update stage will render next frame
      window.createjs.Ticker.addEventListener('tick', handleTick);
      // this.setState({ stage: stage });
      // this.setState({ window: window });
      // demo(stage, createjs, window);
      return (
        <div className="game">
          <canvas id="gameCanvas" width="600" height="300" />
        </div>
      );
    } return <div className="loading-error">CreateJS Failed to Load</div>;
  }
}
// const GameCanvas = () => (
//     <div className="game">
//         <canvas id="gameCanvas" />
//     </div>
// );

export default GameCanvas;

// const demo = (stage, createjs, window) => {
//   console.log(stage);
//   console.log(createjs);
//   console.log(window);
//   //Create a Shape DisplayObject.
//   const circle = new createjs.Shape();
//   circle.graphics.beginFill("red").drawCircle(0, 0, 40);
//   const circleB = new createjs.Shape();
//   circleB.graphics.beginFill("orange").drawCircle(0, 0, 40);
//   const circleC = new createjs.Shape();
//   circleC.graphics.beginFill("yellow").drawCircle(0, 0, 40);
//   const circleD = new createjs.Shape();
//   circleD.graphics.beginFill("green").drawCircle(0, 0, 40);
//   const circleE = new createjs.Shape();
//   circleE.graphics.beginFill("blue").drawCircle(0, 0, 40);
//   //Set position of Shape instance.
//   circle.x = circle.y = 50;
//   circleB.x = 150;
//   circleB.y = 50;
//   circleC.x = 250;
//   circleC.y = 50;
//   circleD.x = 350;
//   circleD.y = 50;
//   circleE.x = 450;
//   circleE.y = 50;
//   //Add Shape instance to stage display list.
//   stage.addChild(circle);
//   stage.addChild(circleB);
//   stage.addChild(circleC);
//   stage.addChild(circleD);
//   stage.addChild(circleE);
//   //Update stage will render next frame
//   stage.update();

//   function handleTick() {
//       //Circle will move 10 units to the right.
//       //circle.x += 10;
//       //Will cause the circle to wrap back
//       //if (circle.x > stage.canvas.width) { circle.x = 0; }

//       //Circle will move 10 units to the right.
//       circle.y += 10;
//       //Will cause the circle to wrap back
//       if (circle.y > stage.canvas.height) { circle.y = 0; }
//       //Circle will move 10 units to the right.
//       circleB.y += 10;
//       //Will cause the circle to wrap back
//       if (circleB.y > stage.canvas.height) { circleB.y = 0; }
//       //Circle will move 10 units to the right.
//       circleC.y += 10;
//       //Will cause the circle to wrap back
//       if (circleC.y > stage.canvas.height) { circleC.y = 0; }
//       //Circle will move 10 units to the right.
//       circleD.y += 10;
//       //Will cause the circle to wrap back
//       if (circleD.y > stage.canvas.height) { circleD.y = 0; }
//       //Circle will move 10 units to the right.
//       circleE.y += 10;
//       //Will cause the circle to wrap back
//       if (circleE.y > stage.canvas.height) { circleE.y = 0; }
//       stage.update();
//   }
//   //Update stage will render next frame
//   window.createjs.Ticker.addEventListener("tick", handleTick);
// }
