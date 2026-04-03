// object type declaration - inline annotation
let employee: {
  id: number;
  name: string;
  department: string;
  isPermanent: true;
};

// objecr initialization
employee = {
  id: 501,
  name: "Md Shakil Hossain",
  department: "Backend Developer",
  isPermanent: true,
};

// এখানে আমি  আলাদা কোনো টাইপ না বানিয়ে সরাসরি ভ্যারিয়েবলের পাশেই টাইপ লিখে দিচ্ছি

let user: {
  id: number;
  name: string;
  age: number;
} = {
  id: 2,
  name: "Shakil Hossain",
  age: 20,
};

// simple project

let myProduct: { title: string; price: number; isStock: boolean } = {
  title: "Gaming Chair",
  price: 2500,
  isStock: true,
};

function printProduct(myProduct: {
  title: string;
  price: number;
  isStock: boolean;
}): { title: string; price: number; isStock: boolean } {
  return {
    title: myProduct.title,
    price: myProduct.price,
    isStock: myProduct.isStock,
  };
}

console.log(printProduct(myProduct));

// type alias

type User = {
  name: string;
  age: number;
};

const student: User = {
  name: "Md  Shakil Hossaon",
  age: 20,
};

type PrintUser = (user: User) => User;

const printUser: PrintUser = (user) => {
  return {
    name: user.name,
    age: user.age,
  };
};

console.log(printUser(student));

// nested object

type Address = {
  city: string;
  district: string;
};

type CricketerInfo = {
  name: string;
  age: number;
  bestScore: number;
  address: Address;
};

const player1: CricketerInfo = {
  name: "Md Shakil",
  age: 19,
  bestScore: 30,
  address: {
    city: "Shyamnagar",
    district: "Satkhira",
  },
};

function printCricketer(player: CricketerInfo): CricketerInfo {
  return {
    name: player.name,
    age: player.age,
    bestScore: player.bestScore,
    address: {
      city: player.address.city,
      district: player.address.district,
    },
  };
}

console.log(printCricketer(player1));

// union basic

type Role = "admin" | "modarator" | "user";

type SystemUser = {
  name: string;
  role: Role;
};

const adminUser: SystemUser = {
  name: "Md Shakil",
  role: "admin",
};

const checkAccess = (user: SystemUser): void => {
  if (user.role === "admin") {
    console.log("Full Access Granted");
  } else {
    console.log("Limited Access");
  }
};

checkAccess(adminUser);

type Student = {
  name: string;
  age: number;
  registrationNumber?: number;
};

const student1 = {
  name: "Md Shakil",
  age: 20,
};

const student2 = {
  name: "Md Shakil",
  age: 20,
  registrationNumber: 22447888788,
};

const prinstStudent = (student: Student): void => {
  console.log(`Student name is ${student.name}`);
  if (student.registrationNumber) {
    console.log(`Registration Number : ${student.registrationNumber}`);
  } else {
    console.log("Registration Number not provided.");
  }
};

prinstStudent(student1)
prinstStudent(student2)