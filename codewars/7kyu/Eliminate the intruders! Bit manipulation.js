// Task
// You are given a string representing a number in binary. Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's).

// In practice, you should implement this function:

// function eliminateUnsetBits(number);
// Examples
// eliminateUnsetBits("11010101010101") ->  255 (= 11111111)
// eliminateUnsetBits("111") ->  7
// eliminateUnsetBits("1000000") -> 1
// eliminateUnsetBits("000") -> 0


// SOLUTION:








function eliminateUnsetBits(number) {
    
    let arr = Array.from(String(number), Number)
    // console.log (arr);
    let result =  arr.filter(element => element == 1);
    if (Number(result.join("")) === 0) return 0;
    else 
    return parseInt (result.join(""), 2)
  }
 
 
 
 console.log  (eliminateUnsetBits ("000"));
 console.log  (eliminateUnsetBits ("101"));
 console.log  (eliminateUnsetBits ("010"));
  

