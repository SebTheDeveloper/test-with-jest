const analyzeArray = (numArr) => {
  return {
    average: numArr.reduce((accum, curr) => accum + curr) / numArr.length,
    min: Math.min(...numArr),
    max: Math.max(...numArr),
    length: numArr.length,
  };
};

module.exports = analyzeArray;
