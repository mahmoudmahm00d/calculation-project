class ParachuteSimulation {
  constructor() {
    this.mass = 80; // mass in kilograms
    this.area = 1.5; // area in square meters
    this.height = 3000; // height in meters
    this.drag = 1.2; // drag coefficient
    this.gravity = new THREE.Vector3(0, -9.8, 0); // acceleration due to gravity in meters/second^2
    this.airDensity = 1.225; // air density in kilograms/meter^3
    this.velocity = new THREE.Vector3(0, 0, 0); // initial velocity in meters/second
    this.position = new THREE.Vector3(0, 0, 0); // initial position in meters
    this.time = 0; // initial time in seconds
    this.windSpeed = 0; // wind speed in meters/second
    this.windDirection = new THREE.Vector3(0, 0, 0); // wind direction as a unit vector
  }

  setWind(windSpeed, windDirection) {
    this.windSpeed = windSpeed;
    this.windDirection = windDirection.clone().normalize();
  }

  simulate(deltaTime) {
    while (this.height > 0) {
      // Calculate gravity force and drag force
      const forceGravity = this.gravity.clone().multiplyScalar(this.mass);
      const forceDrag = this.velocity
        .clone()
        .multiplyScalar(
          this.velocity.lengthSq() *
            this.drag *
            this.area *
            this.airDensity *
            0.5
        );

      // Calculate wind force
      const windForce = this.windDirection
        .clone()
        .multiplyScalar(this.windSpeed * this.windSpeed * this.area);

      // Calculate acceleration, velocity, position, and time
      const acceleration = forceGravity
        .clone()
        .add(forceDrag)
        .add(windForce)
        .divideScalar(this.mass);

      this.velocity.add(acceleration.clone().multiplyScalar(deltaTime));
      this.position.add(this.velocity.clone().multiplyScalar(deltaTime));
      this.time += deltaTime;

      // Print the results
      console.log("Time: " + this.time + " s");
      console.log("Position: ", this.position);
      console.log("Velocity: ", this.velocity);
      console.log("Acceleration: ", acceleration);
      console.log();
    }
  }
}

// // Usage
// const simulation = new ParachuteSimulation();
// const clock = new THREE.Clock();

// // Set wind parameters
// const windSpeed = 10; // in meters/second
// const windDirection = new THREE.Vector3(1, 0, 0); // normalized wind direction vector
// simulation.setWind(windSpeed, windDirection);

// function animate() {
//   const deltaTime = clock.getDelta();
//   simulation.simulate(deltaTime);

//   requestAnimationFrame(animate);
// }

// animate();
