(() => {
  class Circle {
    constructor(xPos, yPos, radius) {
      this.xPos = xPos;
      this.yPos = yPos;
      this.radius = radius;
    }
    move(xOffset, yOffset) {
      this.xPos += xOffset;
      this.yPos += yOffset;
    }

    get surface() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }

  let myCircle = new Circle(0, 0, 5);

  console.log(myCircle.surface);

  myCircle.move(6, 1);

  console.log("La position du cercle x :", myCircle.xPos, "y :", myCircle.yPos);

  console.log(myCircle.surface);
})();
