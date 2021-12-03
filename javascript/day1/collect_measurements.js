function collectMeasurements(arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }

  let increased = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i - 1]) {
      increased = increased + 1;
    }
  }

  return increased;
}

function collectMeasurementsSlidingWindow(arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }

  const sum = (array, index) =>
    array[index] + array[index + 1] + array[index + 2];

  let increased = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 2] && sum(arr, i + 1) > sum(arr, i)) {
      increased++;
    }
  }

  return increased;
}

module.exports = {
  collectMeasurements,
  collectMeasurementsSlidingWindow,
};
