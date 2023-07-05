class TerminalSpeedCalculator {
  /**
   * This is a constructor function that initializes the properties of an object representing a
   * physical body in a fluid medium.
   * @param mass - The mass of an object, typically measured in kilograms (kg).
   * @param drag - Drag is the force that opposes the motion of an object through a fluid (such as air
   * or water). It is caused by the friction and turbulence between the object and the fluid. In this
   * context, the drag parameter is likely referring to the drag coefficient, which is a dimensionless
   * quantity that represents the
   * @param gravity - The force of gravity acting on the object, usually measured in meters per second
   * squared (m/s^2).
   * @param airDensity - Air density is the mass of air per unit volume. It is typically measured in
   * kilograms per cubic meter (kg/m³) and is an important parameter in aerodynamics and fluid
   * mechanics. In the context of this constructor, airDensity is likely being used to calculate the
   * effects of air resistance on an object
   */
  constructor(mass, drag, gravity, airDensity) {
    this.mass = mass;
    this.drag = drag;
    this.gravity = gravity;
    this.airDensity = airDensity;
  }

  /**
   * This function calculates the terminal speed of an object based on its mass, gravity, drag, and air
   * density.
   * @returns the terminal speed of an object based on its mass, gravity, drag, and air density.
   */
  calculateTerminalSpeed() {
    const numerator = this.gravity.clone().multiplyScalar(2 * this.mass);
    const denominator = this.drag * this.airDensity;
    return Math.sqrt(numerator.lengthSq() / denominator);
  }

  /**
   * This function calculates the time it takes to reach terminal speed given a certain height and
   * gravity.
   * @param height - The height parameter represents the height from which an object is dropped or
   * thrown. The function calculates the time it takes for the object to reach its terminal speed while
   * falling from this height.
   * @returns The function `calculateTimeToReachTerminalSpeed` is returning the time it takes for an
   * object to reach its terminal speed when dropped from a certain height. The calculation is based on
   * the height and the terminal speed, which is calculated using the `calculateTerminalSpeed`
   * function. The formula used to calculate the time is based on the laws of physics and involves the
   * gravitational constant and the exponential function.
   */
  calculateTimeToReachTerminalSpeed(height) {
    const terminalSpeed = this.calculateTerminalSpeed();
    return (
      Math.sqrt((2 * height) / -this.gravity.y) *
      (1 - Math.exp(-height / (terminalSpeed * terminalSpeed)))
    );
  }
}

// // Usage
// const mass = 80; // in kilograms
// const drag = 1.2;
// const gravity = 9.8; // in meters/second^2
// const airDensity = 1.225; // in kilograms/meter^3

// const terminalSpeedCalculator = new TerminalSpeedCalculator(
//   mass,
//   drag,
//   gravity,
//   airDensity
// );
// const terminalSpeed = terminalSpeedCalculator.calculateTerminalSpeed();
// console.log("Terminal Speed: " + terminalSpeed + " m/s");

// const height = 3000; // in meters
// const timeToReachTerminalSpeed =
//   terminalSpeedCalculator.calculateTimeToReachTerminalSpeed(height);
// console.log("Time to Reach Terminal Speed: " + timeToReachTerminalSpeed + " s");
