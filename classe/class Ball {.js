class Ball {
  constructor(ballType) {
    if (!ballType) {
      return this.ballType = 'regular';
    } else {
      return this.ballType = ballType;
    };
  }
}

let ball1 = new Ball();
let ball2 = new Ball("super");


ball1.ballType
ball2.ballType
