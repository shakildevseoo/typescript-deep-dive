

// Create at least 3 product objects


type Products = {
    id : number;
    name : string;
    price : number;
    inStock : boolean;
    tags : string[];
    warehouse : [string, number];

};

const product1 : Products = {
    id  : 1,
    name : "Wireless Mouse",
    price : 1200,
    inStock : true,
    tags : ["electronics", "accessory"],
    warehouse : ["Tangrakhali", 20]
};
const product2 : Products = {
    id  : 2,
    name : "Wireless Keyboard",
    price : 1700,
    inStock : false,
    tags : [],
    warehouse : ["Tangrakhali", 40]
};
const product3 : Products = {
    id  : 1,
    name : "Headphone",
    price : 600,
    inStock : true,
    tags : [],
    warehouse : ["Vetkhali", 10]
};


// Store all products inside an array:

let products : Products[] = [];

// add product function
function add(newProduct : Products) : void{
    products.push(newProduct)  ;
    console.log("Product Added");
}

// show product
function showProducts() : void{
    console.log("All Products");
  console.log(products);
}



// any
let randomData : any = "shakil";
randomData = 123;
randomData = true;
console.log(randomData);


//unknown

let input : unknown = "hello developers";
if(typeof input === "string" ){
    console.log(input.toUpperCase());
};


//  Use `null` and `undefined`

let discount : number| null = null ;
let ratting : number  | undefined = undefined;


//  7. Boolean Check
if(product1.inStock){
    console.log(`${product1.name} is available`);

};

// Function Call
add(product1);
add(product2);
add(product3);

showProducts();


