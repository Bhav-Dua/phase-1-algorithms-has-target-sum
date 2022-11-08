function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let i2 = i + 1; i2 < array.length; i2++) {
      if ((array[i] + array[i2]) === target) return true;
    }
  }
  return false;
}

/* 
  O(n^2)
*/

/* 
  Checks if array has two numbers that add up to the target
*/

/*
  Uses one loop to assign a number from the array to a variable, and a second loop to run through the rest of the array while checking if the target is achieved
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
