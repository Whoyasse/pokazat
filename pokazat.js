const directionMap = {
  NORTH: 2,
  SOUTH: -2,
  WEST: 1,
  EAST: -1,
};

function dirReduc(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (directionMap[arr[i]] + directionMap[arr[i + 1]] === 0) {
      /**
       * Make array copy, because .splice mutate "arr"
       * "arr" is the argument of dirReduc
       * mutating arguments is not good
       */
      const reducedArray = [...arr];
      reducedArray.splice(i, 2);

      return dirReduc(reducedArray);
    }
  }

  return arr;
}

// Test

const testDirections = ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'];

console.log(dirReduc(testDirections));
