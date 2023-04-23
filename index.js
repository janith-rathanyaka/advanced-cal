function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
  
  // Areas
  function areaOfSquare(side) {
    return side ** 2;
  }
  
  function areaOfRectangle(length, width) {
    return length * width;
  }
  
  function areaOfTriangle(base, height) {
    return (base * height) / 2;
  }
  
  // Volumes
  function volumeOfCube(side) {
    return side ** 3;
  }
  
  function volumeOfRectangularPrism(length, width, height) {
    return length * width * height;
  }
  
  // Exponents
  function power(base, exponent) {
    return base ** exponent;
  }
  
  // Radicals
  function squareRoot(number) {
    if (number < 0) {
      throw new Error("Cannot take square root of negative number");
    }
    return Math.sqrt(number);
  }
  
  function cubeRoot(number) {
    return Math.cbrt(number);
  }
  
  // Graphs
  function plotGraph(equation) {
    // code to plot a graph
  }
  
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    areaOfSquare,
    areaOfRectangle,
    areaOfTriangle,
    volumeOfCube,
    volumeOfRectangularPrism,
    power,
    squareRoot,
    cubeRoot,
    plotGraph,
  };