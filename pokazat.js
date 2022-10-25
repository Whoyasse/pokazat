function transformNumericDirectionsToText(numericDirections) {
  return numericDirections.map((direction) => {
    if (direction === 2) {
      return ('NORTH');
    }

    if (direction === -2) {
      return ('SOUTH');
    }

    if (direction === 1) {
      return ('WEST');
    }

    if (direction === -1) {
      return ('EAST');
    }

    return '';
  });
}

function dirReduc(arr) {
  const gg = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'NORTH') {
      gg.push(2);
    } else if (arr[i] === 'SOUTH') {
      gg.push(-2);
    } else if (arr[i] === 'WEST') {
      gg.push(1);
    } else if (arr[i] === 'EAST') {
      gg.push(-1);
    }
  }

  console.log(gg);

  // КАК ЗАМЕНИТЬ ЭТО? -----------------------------------------------------------------------------
  for (let i = 0; i < gg.length; i++) {
    if (gg[i] + gg[i + 1] === 0) {
      gg.splice(i, 2);

      const textDirections = transformNumericDirectionsToText(gg);

      return dirReduc(textDirections);
    }
  }
  // КАК ЗАМЕНИТЬ ЭТО? -----------------------------------------------------------------------------

  console.log(gg);

  const final = transformNumericDirectionsToText(gg);
  console.log(final);

  return final;
}

// Test

const testDirections = ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'];

console.log(dirReduc(testDirections));
