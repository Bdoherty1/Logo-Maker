const inquirer = require('inquirer');
const fs = require('fs');
const { SVG, Circle, Triangle, Square } = require('./lib/develop/shapes');

async function getUserInput() {
  const userInput = await inquirer.prompt([
    // Questions for the user
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
      validate: (input) => (input.length <= 3 ? true : 'Text must not exceed 3 characters.'),
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal):',
    },
  ]);
  return userInput;
}

function main() {
  getUserInput()
    .then((userInput) => {
      const { text, textColor, shape, shapeColor } = userInput;

    //   const svg = new SVG();
    //   svg.setText(text, textColor);

      let shapeObject;

      switch (shape.toLowerCase()) {
        case 'circle':
          shapeObject = new Circle();
          break;

        case 'triangle':
          shapeObject = new Triangle();
          break;

        case 'square':
          shapeObject = new Square();
          break;

        default:
          console.error('Invalid shape choice.');
          process.exit(1);
      }

      // Set the color for the chosen shape
      shapeObject.setColor(shapeColor);
      // Set the shape for the SVG
      svg.setShape(shapeObject);

      const svgString = svg.render();
      fs.writeFileSync('logo.svg', svgString);

      console.log('Generated logo.svg');
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}

// Run the application
main();