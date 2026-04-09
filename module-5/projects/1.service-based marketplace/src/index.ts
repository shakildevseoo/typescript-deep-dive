

interface BaseUser  {
    readonly id : number;
    name : string;
    email : string
}


interface Seller  extends BaseUser{
    skills : string[];
    bio ?: string;
    rating : number
}

type Cetegory = "Web" | "App" | "Design"

type Service = Seller & {
    title : string;
    price : number;
    cetegory : Cetegory;
    isAvailable : boolean
}

const myService : Service = {
    id : 1,
    name : "Md Shakil Hossain",
    email : "shakil@dev.com",
    skills : ["mern", "typescript"],
    bio : "I am a developer",
    rating : 4.8,

    title : "Mern Stack Development Service",
    price : 4000,
    cetegory : "Web",
    isAvailable : true

}


function displayService (service : Service) : void{
  console.log(`s${service.name} offers ${service.title} for ${service.price} taka`)
}

displayService(myService)