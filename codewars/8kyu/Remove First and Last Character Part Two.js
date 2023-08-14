// Description

// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL


// SOLUTION


let myString0 = "";
let myString1 = "1";
let myString2 = "A1,B2";
let myString3 = "1,2,3,4,5,6,7,8,9";

function array(string) {
    let arrayFromString = string.split(",");    
      if ((arrayFromString.length === 1) || (arrayFromString.length === 2))      
          return null;    
     
      else { 
          arrayFromString.splice(0,1);
          arrayFromString.splice(-1,1);
          return arrayFromString.join(' ');  
          }
  }


console.log(array(myString0));
console.log(array(myString1));
console.log(array(myString2));
console.log(array(myString3));






