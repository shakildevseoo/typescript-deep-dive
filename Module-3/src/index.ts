

// টাইপস্ক্রিপ্টে ফাংশন টাইপ দুইভাবে লেখা যায়:
// পদ্ধতি ১: ডিক্লেয়ার করার সময় টাইপ দেওয়া (Common Way)

function calculateAge (name : string, birthYear : number) : string{

  const currentYear  =new Date().getFullYear()
  
  if(birthYear < 0){
    return "Birth year cannot be negative"
  }

  if(birthYear.toString().length !== 4){
      return "Birth year must be 4 digits";
  }

  if(birthYear < 1900){
        return "Birth year must be 1900 or later";

  }

  if(birthYear  > currentYear ){

  }
   // Age calculation

  const age = currentYear - birthYear

  return `Hello ${name} you are ${age} years old `
}


console.log(calculateAge("Md Shakil Hossain", 2006))



//পদ্ধতি ২: ফাংশন টাইপ ভ্যারিয়েবল (Function Type Alias) Function  Type  Signature 
type mathOperation = (a : number, b : number) => number
const multiply : mathOperation = (a, b)=>{
  return a * b
}

console.log(multiply(20,40))



//Optional and default parameters

// Optional Parameters

function printName(firstName : string, lastName : string, middleName?: string) : string{
       if( middleName){
        return `Hello ${firstName} ${middleName} ${lastName}`
       } else{
         return `Hello ${firstName} ${lastName} `
       }
           
        

}

console.log(printName("Md Shakil", "Hossain"))
console.log(printName("Mst", "Nazma Akter", "Khuku"))


// Default Parameters

function signUp(userName : string, country : string= "Bangladesh") : string{
    return `${userName} is from ${country}`
}

console.log(signUp("Md Shakil Hossain"))
console.log(signUp("Mohammad Ali", "United States"))


// return type
// 1.1 string return type
function getGreeting(name : string) : string{
   return `Hello ${name}`
}

console.log(getGreeting("Md Shakil"))
// 1.2 number return type
  type Operation = (a : number, b : number)=> number

  const calculatePrice : Operation = (a,b)=>{
        return a + b
  }
console.log(calculatePrice(20, 40))


  // 1.3  void return type
  function logMessage(message : string) : void{
          console.log(message)
  }

  // 1.4 never return
  function throwError(msg : string) : never{
    throw new Error(msg)

  }

 
// Explicit Return  
  function square ( n : number) : number{
         return n * n 
  }
 const  price = (x : number, y : number) : number =>{
         return x + y
 }

 console.log(square(5))
 console.log(price(5, 6))
  
 // Implicit Return
 const square2 = (n : number) : number  => n * n
console.log(square2(5))