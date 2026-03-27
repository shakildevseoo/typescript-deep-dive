# 🎯 Project: Product List Manager

## 📌 Objective

This project is designed to practice **TypeScript Module 2 concepts** including:

* Primitive Types (`string`, `number`, `boolean`)
* Arrays & Tuples
* `any`, `unknown`, `void`, `null`, `undefined`
* Type Inference

---

##  Product Structure

Each product must have the following properties:

```ts
{
  id: number,
  name: string,
  price: number,
  inStock: boolean,
  tags: string[],
  warehouse: [string, number]
}
```

---

##  Tasks

### ✅ 1. Create Products

* Create at least **3 product objects**

---

### ✅ 2. Use Array

Store all products inside an array:

```ts
let products = [];
```

---

### ✅ 3. Create Functions

#### Add Product

```ts
function addProduct(product): void
```

#### Show Products

```ts
function showProducts()
```

---

### ✅ 4. Use `any`

Example:

```ts
let randomData: any = "test";
randomData = 123;
```

---

### ✅ 5. Use `unknown`

Example:

```ts
let input: unknown = "hello";

if (typeof input === "string") {
  console.log(input.toUpperCase());
}
```

---

### ✅ 6. Use `null` and `undefined`

```ts
let discount: number | null = null;
let rating: number | undefined = undefined;
```

---

### ✅ 7. Boolean Check

```ts
if (product.inStock) {
  console.log("Available");
}
```

---

## 🔥 Challenge (Optional)

👉 Find the product with the **highest price**

---

## 🚫 Rules

* Do NOT use advanced TypeScript features (interface, class, etc.)
* Focus only on **Module 2 concepts**
* Keep the code simple and beginner-friendly

---

## 🚀 Expected Outcome

* Understand basic TypeScript types
* Practice real-world data handling
* Build confidence with functions and arrays

---

## 🛠️ How to Run

```bash
tsc index.ts
node index.js
```
