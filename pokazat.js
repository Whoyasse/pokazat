function dirReduc(arr) {
  const gg = [];
  const final = [];
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
    }
  }
  for (let i = 0; i < gg.length; i++) {
    if (gg[i] + gg[i + 1] === 0) {
      gg.splice(i, 2);
    }
  }
  for (let i = 0; i < gg.length; i++) {
    if (gg[i] + gg[i + 1] === 0) {
      gg.splice(i, 2);
    }
  }
  // КАК ЗАМЕНИТЬ ЭТО? -----------------------------------------------------------------------------

  console.log(gg);
  for (let i = 0; i < gg.length; i++) {
    if (gg[i] === 2) {
      final.push('NORTH');
    } else if (gg[i] === -2) {
      final.push('SOUTH');
    } else if (gg[i] === 1) {
      final.push('WEST');
    } else if (gg[i] === -1) {
      final.push('EAST');
    }
  }
  console.log(final);
  return final;
}

// Test

const testDirections = ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'];

console.log(dirReduc(testDirections));
