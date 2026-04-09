
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



// 

type ServiceStatus = "pending" | "ongoing" | "completed" | "canceled"

interface ServiceRequest  {
    serviceId : number,
    customerNaeme : string,
    status : ServiceRequest
}


type Student = {
    name : string;
    fatherName : string
    age : string;
}

type OptionalStudent = {
   [K in keyof User]? : User[K]
}




