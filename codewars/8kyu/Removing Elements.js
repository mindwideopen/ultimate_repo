// DESCRIPTION:
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!


let arr = [1,2,3,4,5,6,7,8,9,10,11];

let newArray = [];

for (let i=0; i< arr.length; i+=2) {
    newArray.push(arr[i]);
     
};




console.log(newArray);