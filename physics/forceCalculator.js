export class WeightForceCalculator {
  /**
   * This is a constructor function that takes in two parameters, mass and gravity, and assigns them as
   * properties of the object being created.
   *
   * @param mass The mass parameter is a value that represents the amount of matter in an object. It is
   * usually measured in kilograms (kg) or grams (g). In this constructor, the mass parameter is used
   * to initialize the mass property of an object.
   * @param gravity The force of gravity acting on the object. It is usually measured in meters per
   * second squared (m/s^2) or in newtons (N).
   */
  constructor(mass, gravity) {
    this.gravity = gravity;
    this.mass = mass;
  }

  /**
   * The function calculates the weight of an object based on its mass and the force of gravity.
   *
   * @return The product of the `mass` and `gravity` properties of the object.
   */
  calculate() {
    return this.mass * this.gravity;
  }
}

/* The ImpactForceCalculator class is used to calculate impact force. */
export class ImpactForceCalculator {
  /**
   * This is a constructor function that takes in three parameters: mass, velocity, and time.
   * @param mass - The mass of an object, typically measured in kilograms (kg).
   * @param velocity - Velocity is a measure of the rate of change of an object's position with respect
   * to time. It is a vector quantity that has both magnitude and direction. In the given constructor,
   * velocity is one of the parameters that is being initialized.
   * @param time - The "time" parameter in the constructor is a variable that represents the time
   * elapsed. It could be measured in seconds, minutes, hours, or any other unit of time depending on
   * the context in which the constructor is being used.
   */
  constructor(mass, velocity, time) {
    this.mass = mass;
    this.velocity = velocity;
    this.time = time;
  }

  /**
   * The function calculates the acceleration of an object based on its mass, velocity, and time.
   * @returns The function `calculate()` is returning the result of the calculation of `(mass *
   * velocity) / time`.
   */
  calculate() {
    return (this.mass * this.velocity) / this.time;
  }
}

/* The AirResistanceDragForceCalculator class is used to calculate the drag force caused by air
resistance. */
export class AirResistanceDragForceCalculator {
  /**
   * This is a constructor function that initializes properties for air density, velocity, area, and
   * drag.
   * @param airDensity - Air density is the mass of air per unit volume. It is typically measured in
   * kilograms per cubic meter (kg/m³) and is an important factor in calculating air resistance or
   * drag.
   * @param velocity - Velocity refers to the speed of an object in a particular direction. In this
   * context, it is likely referring to the velocity of an object moving through a fluid (such as air
   * or water) and experiencing drag.
   * @param area - The area parameter refers to the cross-sectional area of the object that is
   * experiencing drag. This is an important factor in determining the amount of drag force that is
   * acting on the object. The unit of measurement for area is typically square meters (m²) or square
   * feet (ft²).
   * @param drag - Drag is a force that opposes motion through a fluid (such as air or water). In the
   * context of this constructor, drag is a property that represents the amount of drag force
   * experienced by an object moving through a fluid. It is typically measured in units of force per
   * unit area, such as Newtons
   */
  constructor(airDensity, velocity, area, drag, theta = Math.PI / 2) {
    this.airDensity = airDensity;
    this.velocity = velocity;
    this.area = area;
    this.drag = drag;
    this.theta = theta;
  }

  /**
   * The function calculates the air resistance force on an object based on its air density, velocity,
   * drag coefficient, and surface area.
   * @returns the value of the drag force acting on an object, which is calculated using the formula:
   * 0.5 * air density * velocity^2 * drag coefficient * area.
   */
  calculateVertical() {
    return (
      0.5 *
      this.airDensity *
      this.velocity *
      this.velocity *
      this.drag *
      this.area
    );
  }

  /**
   * The function calculates the horizontal component of a vector based on its vertical component and
   * angle.
   * @returns The function `calculateHorizontal()` is returning the product of the result of calling
   * the function `calculateVertical()` and the cosine of the value of the property `theta` of the
   * object.
   */
  calculateHorizontal() {
    return this.calculateVertical() * Math.cos(this.theta);
  }
}
