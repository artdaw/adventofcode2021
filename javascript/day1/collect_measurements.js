function collectMeasurements(arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }
  
  const allMeasurements = arr.slice(1);
  let decreased = 0;

  allMeasurements.forEach((el, i) => {
    if (el < allMeasurements[i - 1]) {
      decreased++;
    }
  });

  return allMeasurements.length - decreased;
}

module.exports = {
  collectMeasurements,
};
