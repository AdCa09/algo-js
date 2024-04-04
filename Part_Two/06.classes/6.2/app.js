(() => {
  class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
      this.topLeftXPos = topLeftXPos;
      this.topLeftYPos = topLeftYPos;
      this.width = width;
      this.length = length;
    }
  }
  let rectangle1 = new Rectangle(2, 3, 4, 5);
  let rectangle2 = new Rectangle(3, 4, 5, 6);

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

  if (collides(rectangle1, rectangle2)) {
    console.log("colision");
  } else {
    console.log("pas de collision");
  }
})();
