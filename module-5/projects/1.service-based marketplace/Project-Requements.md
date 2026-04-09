এই প্রজেক্টটি এমনভাবে সাজানো হয়েছে যেন এটি একটি **Service-Based Marketplace** (যেমন: Fiverr বা Upwork) এর ডাটা আর্কিটেকচার।

---

### 🛠 প্রজেক্ট টাইটেল: "SkillHub Service Architecture"

আপনার কাজ হলো নিচের রিকোয়ারমেন্ট অনুযায়ী TypeScript কোড লেখা:

### ১. Base User (Interface)

সবার আগে একটি মূল ইন্টারফেস তৈরি করুন যা সব ধরনের ইউজার ব্যবহার করবে।

- **নাম:** `BaseUser`
- **প্রপার্টি:** * `id` (number এবং **readonly** - এটি পরিবর্তন করা যাবে না)
    - `name` (string)
    - `email` (string)

### ২. Seller Profile (Interface Extension)

একজন সেলারের বাড়তি কিছু তথ্য লাগবে। এটি `BaseUser` কে **Extend** করবে।

- **নাম:** `Seller`
- **বাড়তি প্রপার্টি:**
    - `skills` (string array)
    - `bio` (string এবং **optional**)
    - `rating` (number)

### ৩. Service Category (Type Alias)

সার্ভিসের ক্যাটাগরিগুলো ফিক্সড করে দিন যাতে কেউ ভুল ক্যাটাগরি দিতে না পারে।

- **নাম:** `Category`
- **টাইপ:** এটি একটি **Union Type** হবে। মানগুলো হবে: `"Web" | "App" | "Design"`।

### ৪. Main Service (Type Alias with Intersection)

এখন একটি বড় অবজেক্ট স্ট্রাকচার তৈরি করুন যা `Seller` এবং সার্ভিসের তথ্যকে একসাথে মেলাবে।

- **নাম:** `Service`
- **স্ট্রাকচার:** এটি `Seller` ইন্টারফেস এবং নিচের প্রপার্টিগুলোর একটি **Intersection (`&`)** হবে:
    - `title` (string)
    - `price` (number)
    - `category` (উপরে তৈরি করা `Category` টাইপটি এখানে ব্যবহার করবেন)
    - `isAvailable` (boolean)

### ৫. Implementation (Testing the Code)

- **একটি অবজেক্ট তৈরি করুন:** নাম দিন `myService` যা `Service` টাইপের হবে। এর ভেতর আপনার নিজের নাম এবং MERN স্ট্যাকের তথ্য দিয়ে ডাটা ফিল আপ করুন।
- **একটি ফাংশন লিখুন:** নাম দিন `displayService` যা ইনপুট হিসেবে `Service` টাইপের একটি অবজেক্ট নেবে।
- **আউটপুট:** ফাংশনটি কনসোলে প্রিন্ট করবে— `[Seller Name] offers [Service Title] for $[Price]`.