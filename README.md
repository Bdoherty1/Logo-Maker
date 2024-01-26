# Logo Maker

Generate simple logos for your projects or Business with ease using this command-line application.

## Features

- **Text Input:**
  - Enter up to three characters for the text.

- **Text Color Input:**
  - Choose the text color using a keyword or hexadecimal code.

- **Shape Selection:**
  - Choose a shape from the available options: circle, triangle, square.

- **Shape Color Input:**
  - Define the shape color with a keyword or hexadecimal code.

- **SVG File Creation:**
  - Upon completing the prompts, a customized SVG file named `logo.svg` is generated.

- **Output Confirmation:**
  - Receive feedback with the message "Generated logo.svg" in the command line.

- **Preview:**
  - Open the `logo.svg` file in a browser to view a 300x200 pixel image based on your criteria.

## Project Structure

- **examples:** Example SVG file(s) created with the app
- **lib:** Classes and functions
  - `shapes.js:` Exports `Triangle`, `Circle`, and `Square` classes
  - `shapes.test.js:` Jest tests for shapes
  - `more...:` Additional files and tests
- **.gitignore:** Specifies ignored folders and files for Git
- **index.js:** Application entry point with imports from lib/
- **package.json**
- **README.md:**
## Setup and Usage

### Install Dependencies:

```bash
npm install

