




function calculatorBasic (num1 : number, num2 : number, operation : string) : number | string {
 
     if(operation === "+"){
        return num1 + num2
     }else if(operation === "-"){
        return num1 - num2
     }else if(operation === "*"){
        return num1 * num2
     }else if(operation === "/"){
        if(num2 !== 0){
           return num1/ num2
          }else{
           return  "Error: Cannot divide by zero"
          } 
     }else{
        return "Invalid Operation"
     }
}


console.log(calculatorBasic(20, 40, "+"))
console.log(calculatorBasic(20,2, "-"))
console.log(calculatorBasic(20, 5, "*"))
console.log(calculatorBasic(20, 2, "/"))




