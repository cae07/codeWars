class Ball2 {
  constructor(typeBall) {
    this.typeBall = !typeBall ? 'regular' : typeBall;
  };
};

let test1 = new Ball2();
let test2 = new Ball2("super");


console.log(test1.ballType);
console.log(test2.ballType);
