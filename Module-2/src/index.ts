

// Primitive Data Types
//  TypeScript-এ প্রিমিটিভ টাইপ ব্যবহারের উদাহরণ:

// string type

let studentName : string = "Md Shakil Hossain";
console.log(studentName);


// number type
let age : number = 20;
let gpa : number = 4.50;
console.log(age);
console.log(gpa);


// boolean type
let isStudent : boolean = true;
let hasGraduated : boolean = false;
console.log(isStudent);
console.log(hasGraduated);


// undefined type
let noAssigned : undefined = undefined;
console.log(noAssigned);

// null type
let nothing : null  = null;
console.log(nothing);

//-------------------



// any type : মানে TypeScript-এর টাইপ চেকিং সম্পূর্ণ বন্ধ করে দেওয়া

let isMarried  : any = true // not recommended

// unknown type 
/*
unknown দেখতে any-এর মতো, কিন্তু এটি টাইপ-সেফ। এই টাইপের ভ্যারিয়েবল ব্যবহার করার আগে অবশ্যই টাইপ চেক করতে হবে।
*/

let value = "World"

if(value === "string"){
    console.log(value.toUpperCase())
}







// array TypeScript-এ Array ডিফাইন করার দুটি পদ্ধতি:

 // পদ্ধতি ১ — type[] স্টাইল (বেশি প্রচলিত)

 // a. number[] type
 const score : number[] = [80, 40, 75, 100]
console.log(score)

// b. string[] type
const topBrandName : string[]  = ["Apple", "Microsoft", "Amazon", "Google", "Samsung"]
console.log(topBrandName)

// c. boolean type
const results : boolean[] = [true, false, true]
console.log(results)





// পদ্ধতি ২ — Array<type> স্টাইল (Generic স্টাইল)
// a. Array<number>
 const score2 : Array<number> = [80, 40, 75, 100]
console.log(score2)

// b. string[] type
const topBrandName2 : Array<string>  = ["Apple", "Microsoft", "Amazon", "Google", "Samsung"]
console.log(topBrandName2)

// c. boolean type
const results2 : Array<boolean> = [true, false, true]
console.log(results2)


 // tuple
 // একজন ছাত্রের তথ্য: [নাম, বয়স, ছাত্র কিনা]

 const student : [string, number, boolean] = ["Md Shakil Hossain", 20, true]
 console.log(student)



 // void

 function logMessage() : void {
   console.log("Log successful")
 }

 logMessage()

 // string return 
 function greet(name : string) : string {
   return `Hello ${name} Nice to meet you -:)`
 }

 greet("Shakil")

 function add(a : number, b : number) : number{
     return a + b
 }
 add(20, 40)