"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let users = [];
function throwError(message) {
    throw new Error(message);
}
;
function validateAge(age) {
    if (age < 0) {
        throwError("Age cannot be negative");
    }
}
const createUser = (user) => {
    const { id, name, email, age } = user;
    validateAge(age);
    return {
        id,
        name,
        age,
        email,
        isActive: user.isActive ?? true
    };
};
const addUser = (user) => {
    users.push(user);
};
const u1 = createUser({
    id: 1,
    name: "Md Shakil Hossain",
    age: 18,
    email: "shakildevseo@gmail.com"
});
addUser(u1);
console.log("All Users", users);
//# sourceMappingURL=index.js.map