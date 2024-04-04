(() => {
  class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
      this.topLeftXPos = topLeftXPos;
      this.topLeftYPos = topLeftYPos;
      this.width = width;
      this.length = length;
    }
  }

  function collides(otherRectangle, rectangle) {
    if (
      rectangle.topLeftXPos <
        otherRectangle.topLeftXPos + otherRectangle.width &&
      rectangle.topLeftXPos + rectangle.width > otherRectangle.topLeftXPos &&
      rectangle.topLeftYPos <
        otherRectangle.topLeftYPos + otherRectangle.length &&
      rectangle.topLeftYPos + rectangle.length > otherRectangle.topLeftYPos
    ) {
      return true;
    } else {
      return false;
    }
  }

  let arr = [];

  function randomNum() {
    for (let i = 0; i < 1000; i++) {
      let topLeftXPos = Math.floor(Math.random() * 100);
      let topLeftYPos = Math.floor(Math.random() * 100);
      let width = Math.floor(Math.random() * 10) + 1;
      let length = Math.floor(Math.random() * 10) + 1;
      arr.push(new Rectangle(topLeftXPos, topLeftYPos, width, length));
    }
    return arr;
  }

  let rectangles = randomNum();
  console.log(arr);
})();
