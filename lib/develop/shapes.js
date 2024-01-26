
class Shape {
    constructor() {
      this.color = ''; // Common property for shape color
    }
  
    setColor(color) {
      this.color = color;
    }
  
    // Common method for rendering shape with color
    renderShape(svgElement) {
      return `<${svgElement} fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return this.renderShape('circle');
    }
  }
  
  class Triangle extends Shape {
    render() {
      return this.renderShape('polygon points="150, 18 244, 182 56, 182"');
    }
  }
  
  class Square extends Shape {
    render() {
      return this.renderShape('rect x="90" y="40" width="120" height="120"');
    }
  }
    class SVG extends Shape {
        render() {
          return this.renderShape('rect x="90" y="40" width="120" height="120"');
        }
  }
  
  module.exports = { Circle, Triangle, Square };
