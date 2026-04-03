

// User Type

type  User = {
   id : number;
   name : string;
   age : number;
   email : string;
   isActive : boolean;

}

// UserInput Type
type UserInput = {
   id : number;
   name : string;
   age : number;
   email : string,
   isActive? : boolean
   
}

// database
let users : User[] = []

/*---------------------*/

// helper function

// throw error function
function throwError(message: string): never {
  throw new Error(message)
}


// age validate
 function ageValidate(age : number)  :   void{
    if(age < 0){
      throwError("Age can't be negative")
    }
 }

  function addUser(user : User) : void{
     users.push(user)
  }

 




/*---------------------*/



const createUser = (user : UserInput)  : User=>{
   ageValidate(user.age)
    const existsUser =  users.find(u=>u.id === user.id)

     if(existsUser){
      throwError("User already exixts")
     }

     return {
      id : user.id,
      name : user.name,
      age : user.age,
      email : user.email,
      isActive : user.isActive ?? true
     }


}

const getUserById = (id : number) : User | undefined =>{

     const user =  users.find(u => u.id === id)
     if(!user){
      throwError("user not found")
     }

     return user
}

function getActiveUser (users : User[]) : User[] {
 return users.filter(u=>u.isActive)
}

function searchUser (name : string) : User[]{
 return users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()))
}



function deleteUser(id : number) : User[]{
    return    users = users.filter(user => user.id !== id)

}

const u1 = createUser({
   id : 1,
   name : "Md Shakil Hossain",
   age : 20,
   email : "shakildevseo@gmail.com",
   isActive : false
})
const u2 = createUser({
   id : 2,
   name : "Md DHsa Hossain",
   age : 20,
   email : "shakidevseo@gmail.com",

})

addUser(u1)
addUser(u2)
// console.log("All users", users)
console.log("All Users", users)

// find active users
console.log("All active users", getActiveUser(users))

// search users
console.log("Search user" , searchUser("shakil"))

// delete user
console.log(deleteUser(u2.id))
