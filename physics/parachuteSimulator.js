export default class ParachuteSimulation {
  constructor() {
    this.mass = 80; // mass in kilograms
    this.area = 1.5; // area in square meters
    this.height = 3000; // height in meters
    this.drag = 1.2; // drag coefficient
    this.gravity = 9.8; // acceleration due to gravity in meters/second^2
    this.airDensity = 1.225; // air density in kilograms/meter^3
    this.velocity = 0; // initial velocity in meters/second
    this.acceleration = 0; // initial acceleration in meters/second^2
    this.position = 0; // initial position in meters
    this.time = 0; // initial time in seconds
  }

  simulate(deltaTime) {
    while (this.height > 0) {
      // Calculate gravity force and drag force
      const forceGravity = this.mass * this.gravity;
      const forceDrag =
        0.5 *
        this.airDensity *
        this.velocity *
        this.velocity *
        this.drag *
        this.area;

      // Calculate acceleration, velocity, position, and time
      this.acceleration = (forceGravity - forceDrag) / this.mass;
      this.velocity = this.velocity + this.acceleration * deltaTime;
      this.position =
        this.height - 0.5 * this.acceleration * this.time * this.time;
      this.time = this.time + deltaTime;
    }
  }

  getPosition() {
    return this.position;
  }

  getVelocity() {
    return this.velocity;
  }

  getAcceleration() {
    return this.acceleration;
  }

  getTime() {
    return this.time;
  }
}
