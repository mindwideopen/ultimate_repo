// DESCRIPTION:
// Task
// Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

// The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

// Examples (input -> output)
// "ab","AB"     -> true
// "aB","Ab"     -> true
// "aBcd","AbCD" -> true
// "AB","Ab"     -> false
// "",""         -> false

// SOLUTION






function isOpposite(s1,s2) {
    let opos = 0;
    
    if (s1.length!=s2.length) return false;

    else  if  
    
    ((s1 === s2) && (s1 === "")) return false;

    else {         

        for (let i=0; i<s1.length; i++) {
    
            if ((s1[i] === s1[i].toUpperCase() && s2[i] === s2[i].toLowerCase()) 
            || 
            (s1[i] === s1[i].toLowerCase() && s2[i] === s2[i].toUpperCase())) 
            {
                // console.log(s1[i], " подходит ", s2[i]);
                
                opos++;}
            
                else if 
             
                (opos<s1.length)
                return false;
}
return true
}
}

console.log(isOpposite(a,b));

