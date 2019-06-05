const demo = (stage, createjs, window) => {
  console.log(stage);
  console.log(createjs);
  console.log(window);
  // Create a Shape DisplayObject.
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
};
export default demo;
