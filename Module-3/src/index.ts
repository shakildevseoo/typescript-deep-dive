

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