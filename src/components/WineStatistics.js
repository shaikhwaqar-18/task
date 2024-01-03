import React, { useState, useEffect } from 'react';


//Mock data for the wineData set
const wineData = [
    { Alcohol: 12.8, Flavanoids: 3.45, Ash: 2.36, Hue: 1.15, Magnesium: 127, Class: 1 },
    { Alcohol: 13.3, Flavanoids: 2.76, Ash: 2.34, Hue: 1.25, Magnesium: 118, Class: 1 },
    { Alcohol: 13.6, Flavanoids: 3.24, Ash: 2.35, Hue: 1.35, Magnesium: 112, Class: 4 },
    { Alcohol: 14.1, Flavanoids: 2.87, Ash: 2.59, Hue: 1.45, Magnesium: 115, Class: 2 },
    { Alcohol: 18.1, Flavanoids: 5.87, Ash: 6.59, Hue: 0.45, Magnesium: 150, Class: 3 },
];

// Function to calculate class-wise statistics for a given property

const calculateClassWiseStatistics = (data, property) => {

    // Extract unique class values from the dataset

  const classes = Array.from(new Set(data.map((item) => item.Class)));
  const result = {};

  // Calculate statistics for each class
  classes.forEach((className) => {
    const values = data.filter((item) => item.Class === className).map((item) => item[property]);

      // Calculate Mean, Median, and Mode for the property and store in the result object
    result[className] = {
      Mean: calculateMean(values),
      Median: calculateMedian(values),
      Mode: calculateMode(values),
    };
  });

  return result;
};

// Function to calculate the mean of an array of values
const calculateMean = (values) => {
  if (values.length === 0) {
    return 0;
  }

  const sum = values.reduce((acc, val) => {
    return Array.isArray(val) ? acc : acc + val;
  }, 0);

  const nonArrayValuesCount = values.filter((val) => !Array.isArray(val)).length;

  return nonArrayValuesCount === 0 ? 0 : sum / nonArrayValuesCount;
};


// Function to calculate the median of an array of values
const calculateMedian = (values) => {
  const sortedValues = values
    .filter((val) => typeof val === 'number' && !isNaN(val))
    .sort((a, b) => a - b);

  const length = sortedValues.length;
  const middle = Math.floor(length / 2);

  if (length === 0) {
    return 0;
  }

  if (length % 2 === 0) {
    return (sortedValues[middle - 1] + sortedValues[middle]) / 2;
  } else {
    return sortedValues[middle];
  }
};


// Function to calculate the mode of an array of values
const calculateMode = (values) => {
  const countMap = values.reduce((acc, val) => {
    const key = String(val);
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const maxCount = Math.max(...Object.values(countMap));

  if (maxCount === 1) {
    return null; // No clear mode
  }

  const modeValues = Object.keys(countMap)
    .filter((key) => countMap[key] === maxCount)
    .map((key) => (key === 'NaN' ? NaN : parseFloat(key)));

  return modeValues;
};



// Function to calculate a new property "Gamma" for each data point
const calculateGamma = (data) => {
  return data.map((item) => ({
    ...item,
    Gamma: (item.Ash * item.Hue) / item.Magnesium,
  }));
};

// React functional component for displaying Wine Statistics
const WineStatistics = () => {
     // State variables to store calculated statistics
  const [flavanoidsStats, setFlavanoidsStats] = useState(null);
  const [gammaStats, setGammaStats] = useState(null);

   // useEffect hook to calculate statistics when the component mounts
  useEffect(() => {
     // Calculate class-wise statistics for "Flavanoids" property
    const flavanoidsStatsResult = calculateClassWiseStatistics(wineData, 'Flavanoids');
    setFlavanoidsStats(flavanoidsStatsResult);

      // Calculate class-wise statistics for "Gamma" property
    const gammaData = calculateGamma(wineData);
    const gammaStatsResult = calculateClassWiseStatistics(gammaData, 'Gamma');
    setGammaStats(gammaStatsResult);
  }, []);
 //  rendering of the component
  return (
    <div>
      <h2>Flavanoids Statistics</h2>
      {flavanoidsStats && renderStatisticsTable(flavanoidsStats)}

      <h2>Gamma Statistics</h2>
      {gammaStats && renderStatisticsTable(gammaStats)}
    </div>
  );
};
// Function to render the statistics table
const renderStatisticsTable = (stats) => {
      // Extract class and measure names
  const classes = Object.keys(stats);
  const measures = ['Mean', 'Median', 'Mode'];

  return (
    <table>
      <thead>
        <tr>
          <th>Measure</th>
          {classes.map((className) => (
            <th key={className}>{`Class ${className}`}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {measures.map((measure) => (
          <tr key={measure}>
            <td>{measure}</td>
            {classes.map((className) => (
              <td key={`${measure}-${className}`}>
              {measure === 'Mode'
  ? Array.isArray(stats[className][measure])
    ? stats[className][measure].join(', ')
    : stats[className][measure] === null
    ? 'No clear mode'
    : stats[className][measure]
  : stats[className][measure].toFixed(3)}

              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WineStatistics;
