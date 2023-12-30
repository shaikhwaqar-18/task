# Wine Statistics App

This React application calculates and displays class-wise statistics for the Wine Data Set, specifically focusing on properties like "Flavanoids" and a derived property "Gamma."

## Table of Contents

- [Overview](#overview)
- [Mock Data](#mock-data)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Wine Statistics App is a React application that utilizes mock data representing the Wine Data Set. It calculates and presents class-wise statistics for "Flavanoids" and "Gamma," including mean, median, and mode.

The project includes utility functions for statistical calculations and a React component (`WineStatistics.js`) responsible for rendering the statistics tables.

## Mock Data

The application uses a mock dataset of wine-related properties for demonstration purposes. You can customize or replace this data in the `WineStatistics.js` file to analyze your own dataset.

```jsx
const wineData = [
    { Alcohol: 12.8, Flavanoids: 2.45, Ash: 2.36, Hue: 1.15, Magnesium: 127, Class: 1 },
    { Alcohol: 13.3, Flavanoids: 2.76, Ash: 2.34, Hue: 1.25, Magnesium: 118, Class: 1 },
    { Alcohol: 13.6, Flavanoids: 3.24, Ash: 2.35, Hue: 1.35, Magnesium: 112, Class: 4 },
    { Alcohol: 14.1, Flavanoids: 2.87, Ash: 2.59, Hue: 1.45, Magnesium: 115, Class: 2 },
    { Alcohol: 18.1, Flavanoids: 5.87, Ash: 6.59, Hue: 0.45, Magnesium: 150, Class: 3 },
];

Getting Started
To run the Wine Statistics App locally, follow these steps:

1.Clone this repository to your local machine:

git clone https://github.com/your-username/wine-statistics-app.git

2. Navigate to the project directory:

cd task

3. Install dependencies:

yarn/npm install

4. Start the development server
 yarn start

 5.Open your browser and visit http://localhost:3000 to view the app.


# Wine Statistics App

[![Wine Statistics App Screenshot](../task/screenshots/wineDataSet.png)](../task/screenshots/wineDataSet.png)

This React application calculates and displays class-wise statistics for the Wine Data Set, specifically focusing on properties like "Flavanoids" and a derived property "Gamma."


Usage
The Wine Statistics App will display class-wise statistics for "Flavanoids" and "Gamma" in a tabular format. The statistics include mean, median, and mode for each class.

Structure
WineStatistics.js: React component responsible for calculating and rendering statistics.
README.md: Documentation file providing information about the app.
Customization
You can customize the mock data in WineStatistics.js and adapt the app to analyze different datasets with similar properties.

Contributing
Contributions are welcome! If you have suggestions, improvements, or bug fixes, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.


This README.md provides an overview of the Wine Statistics App, instructions for getting started, details about the mock data, and information on customization, contributing, and licensing. You can customize it further based on your specific needs.
