"use strict";
//Lab 13

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} di voi toc do ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 10;
  console.log(`${this.make} di voi toc do ${this.speed} km/h`);
};

const bmw = new Car("BMW", 120);
const mercesdes = new Car("Mercesdes", 95);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
