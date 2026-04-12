

type Card = {
    cardNumber  :  string;
    expiry  : string
}

type Bkash = {
    phone : string;
    otp : number
}

type PaymentMrthod = Card  | Bkash



interface Profile {
    username : string
    avator : string
}

interface AuthToken {
    accessToken : string;
    refreshToken : string;
}

type UserSession = Profile & AuthToken 


function printSession(session : UserSession) : UserSession{
    return session
}

const user1 : UserSession = {
    username : "shakildev",
    avator : "shakildev.png",
    accessToken : "kjwdjedkdji",
    refreshToken : "jasjudygyueoww"
}


console.log(printSession(user1))






type Circle = {
    kind : "circle";
    redius : number
};

type Squre = {
    kind : 'squer';
    sideLength : number
}

type Shape = Circle | Squre


 function getArea(shape: Shape){
       if(shape.kind ==="circle"){
        return Math.PI * shape.redius ** 2
       }else {
        return shape.sideLength ** 2
       }

 }



 type Student = {
    name : string ;
    age : number
 }

 type Developer = {
    name : string;
    skill : "TypeScript"
 }

 type Person = Student | Developer

 function printInfo(user : Person){
        console.log(user.name);
        console.log(user.skill) //  এরর দেবে (কারণ student er এর skill নেই)
 }