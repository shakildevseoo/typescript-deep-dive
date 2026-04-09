
// intyerface

interface User {
  name : string;
  age : number
}


// type intersection
interface User {
    location : string
}

const user : User = {
    name : "Md Shakil Hossain",
    age : 20,
    location : "Tangrakhali"
}

console.log(user)


// Union 
type Role = "admin"| "user" // accept it
// interface status = "active" | "inactive" // not accept



interface UserProfile  {
    userName : string
    fullName :string;
    bio : string;
    age : number;
    birtDate : Date,
    joinedAt : Date

}

const user1 : UserProfile = {
    userName : "@shakildevseo",
    fullName : "Md Shakil Hossain",
    bio : "MD Shakil Hossain - Full Stack Web Developer | Backend Enthusiast.",
    age : 21,
    birtDate : new Date("2000, 01, 05"),
    joinedAt : new Date()

}

console.log(user1.joinedAt.toLocaleString())



// mixed use (interface and type alias)

type ServiceStatus = "pending" | "ongoing" | "completed" | "canceled"

interface ServiceRequest  {
    serviceId : number;
    customerNaeme : string;
    status : ServiceRequest;
}


type Student = {
    name : string;
    fatherName : string;
    age : string;
}


// Mapped Types
type OptionalStudent = {
   [K in keyof User]? : User[K]
}






// Extending Interface

/* মনে করি একটি ই-কমার্স সাইটে আপনার তিন ধরনের ইউজার আছে: **User**, আমার **Seller**, এবং **Admin**।

- সবারই `id`, `name`, এবং `email` আছে।
- কিন্তু Seller-এর বাড়তি `shopName` আছে।
- Admin-এর বাড়তি `role` আছে।

এখন আমি কি বারবার `id`, `name`, `email` লিখবো ? কক্ষনোই না! আমি একটি বেস (Base) ইন্টারফেস বানিয়ে তাকে **Extend** করবো । */



// without extending interface
interface User {
    name : string;
    age : number 
    email : string
}

interface Seller {
    name : string; // repeated
    age : number; // repeated
    email : string; // repeated
   
}

interface Admin {
    name : string;// repeated
    age : number; // repeated
    email : string;  // repeated
   
}

// using
// base interface
interface User {
    name : string;
    age : number 
    email : string
}

interface Seller extends User {
    ratting : number
}

interface Admin extends User{
 role : 'super-admin' | 'moderator'
}

/* `User` ইন্টারফেসে `email` property **required**।

কিন্তু `Admin` ইন্টারফেসে আমরা চাই:

- সব property inherit হবে
- শুধু `email` হবে **optional** 

*/

interface Admin  extends Omit<User, "email">{
    email?: string;
}




// Multiple Inheritance

interface HasName {
    name : string
}


interface HasEmail {
    email : string
}


interface Profile extends HasName, HasEmail{
    age : number
}


//Intersection of Interfaces
interface Develoer {
    name : string;
    age : number
}

interface Contact {
    email : string
}

type StudentProfile = Develoer & Contact

const student1 : StudentProfile =  {
    name : "Md Shakil Hossain",
    age : 20,
    email : "shakildevseo@gmail.com"
}


