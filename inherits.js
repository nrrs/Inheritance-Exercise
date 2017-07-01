Function.prototype.inherits = function inherits(parent) {
  function Surrogate() {}
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function MovingObject () {}

MovingObject.prototype.boost = function() {
  console.log("Zoom!");
};

function Ship () {}
Ship.inherits(MovingObject);
Ship.prototype.fireLaser = function() {
  console.log('Pew Pew');
};

function Asteroid () {}
Asteroid.inherits(MovingObject);
Asteroid.prototype.explode = function() {
  console.log("BOOM!");
};

let xWing = new Ship();
let ceres = new Asteroid();

console.log(xWing.speed);
console.log(ceres.speed);
