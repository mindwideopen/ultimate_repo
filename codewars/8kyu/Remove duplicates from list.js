// DESCRIPTION:
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]


// SOLUTION

function distinct(a) {

    let uniq = [...new Set(a)];
    
    return uniq;
  }

  let array = [1,2,2,3,3,3,3,'A','B', 'B','C','C','C','C'];
   console.log (distinct(array));