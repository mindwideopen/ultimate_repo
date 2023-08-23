// TASK


// Let's define a parameter of number n as the least common multiple (LCM) of the sum of its digits and their product.

// Calculate the parameter of the given number n.

// Input/Output
// [input] integer n

// A positive integer. It is guaranteed that no zero appears in n.

// [output] an integer

// The parameter of the given number.

// Example
// For n = 22, the output should be 4.

// Both the sum and the product of digits equal 4, and LCM(4, 4) = 4.

// For n = 1234, the output should be 120.

// 1+2+3+4=10 and 1*2*3*4=24, LCM(10,24)=120


// SOLUTION



let a = 235;

function parameter(n) {
    
    let multiply = 1;
    let summ = 0;    
    let arr = Array.from(String(n), Number)
        
        for (let i=0; i<arr.length; i++) {
            multiply = multiply * arr[i];
            }
            console.log("произведение " + String(multiply))

        for (let i=0; i<arr.length; i++) {
            summ = summ + arr[i]
            }  
            console.log("сумма " + String(summ))  
        let gcd = (p1, p2) => {
            
            return p2 == 0 ? p1 : gcd (p2, p1 % p2)};   
        let gcd_result = gcd(summ, multiply);
        
        console.log("НОД " + String(gcd_result)) ; 
        
        return summ * multiply / gcd_result;
         
       
    }
    
    
  
console.log (parameter(a));






