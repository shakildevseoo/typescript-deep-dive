

// object type declaration - inline annotation
let employee  : {
    id : number;
    name : string;
    department : string;
    isPermanent : true
}


// objecr initialization
employee = {
    id : 501,
    name : "Md Shakil Hossain",
    department : "Backend Developer",
    isPermanent : true
}

// এখানে আমি  আলাদা কোনো টাইপ না বানিয়ে সরাসরি ভ্যারিয়েবলের পাশেই টাইপ লিখে দিচ্ছি


let user  : {
    id : number; 
    name : string; 
    age : number
} = {
    id : 2,
    name : "Shakil Hossain",
    age : 20

}


// simple project

let myProduct : {title : string, price : number, isStock : boolean} = {
    title : "Gaming Chair",
    price : 2500,
    isStock : true
}


function printProduct(myProduct : {title : string; price : number; isStock : boolean}) : {title : string; price  : number; isStock : boolean}{
  return {
    title : myProduct.title,
    price : myProduct.price,
    isStock : myProduct.isStock
  }
}


console.log(printProduct(myProduct))