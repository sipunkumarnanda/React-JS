
# 🎯 JavaScript `this` – Complete In-Depth Notes (Interview Perspective)

---

# 📌 What is `this`?

`this` is a **special keyword** in JavaScript.

It refers to **the object that is executing the current function**.

> **Golden Rule:**
> **`this` does NOT depend on where a function is written.**
>
> ✅ It depends on **how the function is called (invoked).**

---

# ⭐ Golden Rule to Remember

```text
How a function is called
        ↓
Determines the value of `this`
```

Most interview questions are simply different applications of this rule.

---

# 🔥 Different Ways `this` Gets Its Value

| Function Call       | Value of `this`                                       |
| ------------------- | ----------------------------------------------------- |
| Normal function     | Global object (`window`) in browser (non-strict mode) |
| Method call         | Object before the dot (`.`)                           |
| `call()`            | Object passed to `call()`                             |
| `apply()`           | Object passed to `apply()`                            |
| `bind()`            | Permanently bound object                              |
| Arrow function      | Lexically inherited from parent scope                 |
| Constructor (`new`) | Newly created object                                  |
| Event Listener      | Element that fired the event                          |

---

# 1️⃣ `this` Inside a Normal Function

Example

```javascript
function print(){
    console.log(this);
}

print();
```

Browser Output

```text
Window {...}
```

### Why?

The function is called normally.

```javascript
print();
```

No object is calling it.

Therefore JavaScript automatically assigns

```text
this → window
```

(in non-strict mode)

---

## Strict Mode

```javascript
"use strict";

function print(){
    console.log(this);
}

print();
```

Output

```text
undefined
```

### Interview Point

> In strict mode, `this` inside a normal function is **undefined**, not `window`.

---

# 2️⃣ `this` Inside an Object Method

Example

```javascript
const person = {
    name:"Sipun",

    print(){
        console.log(this);
    }
}

person.print();
```

Output

```text
person object
```

### Why?

Because

```javascript
person.print()
```

The object before the dot (`person`) becomes `this`.

```text
person
      ↓
person.print()
```

Therefore

```javascript
this === person
```

---

## Easy Rule

```
object.method()
```

↓

```
this = object
```

---

# Visual

```
person
   │
   ▼
person.print()

this
 │
 ▼
person
```

---

# 3️⃣ `call()` Changes `this`

Example

```javascript
function print(){
    console.log(this);
}

print.call(person);
```

Output

```text
person object
```

### Why?

`call()` explicitly tells JavaScript

> "Use this object as `this`."

Syntax

```javascript
function.call(thisArg)
```

Example

```javascript
print.call(person1);
print.call(person2);
```

Output

```
person1

person2
```

---

# Visual

Without call()

```
print()

this
 │
 ▼
window
```

With call()

```
print.call(person)

this
 │
 ▼
person
```

---

# 4️⃣ `apply()`

Exactly same as `call()`.

Only difference:

`apply()` takes arguments inside an array.

Example

```javascript
sum.call(person,10,20);

sum.apply(person,[10,20]);
```

---

# 5️⃣ `bind()`

Unlike `call()`,

`bind()` does **not execute immediately.**

It returns a **new function** whose `this` is permanently fixed.

Example

```javascript
const fn = print.bind(person);

fn();
```

Output

```
person
```

---

# Difference

```
call()
```

Immediately executes.

```
bind()
```

Returns a new function.

---

# 6️⃣ `this` Depends on Invocation, NOT Definition

Example

```javascript
const person = {

    name:"Sipun",

    print:function(){
        console.log(this.name);
    }

}
```

Now

```javascript
person.print();
```

Output

```
Sipun
```

But

```javascript
person.print.call(person2);
```

Output

```
Sona
```

Even though

`print()` was defined inside `person`.

Why?

Because JavaScript checks

> **Who called the function?**

Not

> Where was the function written?

---

# Interview Question ⭐

Does `this` depend on where the function is defined?

Answer

❌ No.

It depends on **how the function is invoked.**

---

# 7️⃣ Arrow Functions

Arrow functions work completely differently.

They **do not create their own `this`.**

Instead,

they borrow `this` from their surrounding scope.

This is called

## Lexical `this`

Example

```javascript
const obj = {

    name:"Sipun",

    print:()=>{

        console.log(this);

    }

}
```

Calling

```javascript
obj.print();
```

Output

```
Window
```

(or `undefined` depending on the environment)

---

### Why?

Arrow function ignores

```javascript
obj.print()
```

It simply looks outside.

```
Where am I created?

↓

Global Scope

↓

this = window
```

---

# Visual

Normal Function

```
obj
 │
 ▼
print()

this = obj
```

Arrow Function

```
Global Scope

↓

this = window
```

---

# Interview Statement

Arrow functions **ignore**

```
call()

apply()

bind()
```

---

# Example

```javascript
const obj={

    name:"Sipun",

    print:()=>{

        console.log(this.name);

    }

}

obj.print.call(person2);
```

Output

```
undefined
```

Why?

Because

Arrow functions cannot have their `this` changed.

---

# 8️⃣ Why Doesn't `call()` Work on Arrow Functions?

Example

```javascript
const obj={

    name:"Akshya",

    print:()=>{

        console.log(this.name);

    }

}
```

Calling

```javascript
obj.print.call(person);
```

Still prints

```
undefined
```

Because

Arrow functions already captured `this`

when they were created.

Later

```
call()

apply()

bind()
```

cannot modify it.

---

# Memory Trick

Normal Function

```
Own this
```

Arrow Function

```
Borrow this
```

---

# 9️⃣ Your Example

```javascript
const obj2={

    firstName:"Akshya",

    printNames:()=>{

        console.log(this.firstName);

    },

    printNames2:function(){

        console.log(this.firstName);

    }

}
```

Calling

```javascript
obj2.printNames();
```

Output

```
undefined
```

because

Arrow function

↓

Global scope

↓

Global object

↓

No firstName

↓

undefined

---

Calling

```javascript
obj2.printNames2();
```

Output

```
Akshya
```

because

Normal method

↓

this = obj2

---

Calling

```javascript
obj2.printNames2.call(obj3);
```

Output

```
Simran
```

because

```
call(obj3)
```

changes `this`.

---

Calling

```javascript
obj2.printNames.call(obj3);
```

Output

```
undefined
```

because

Arrow functions completely ignore `call()`.

---

# 🔥 Interview Trap

### Which one should be used inside objects?

✅ Normal function

```javascript
const obj={

    name:"Sipun",

    print(){

        console.log(this.name);

    }

}
```

❌ Avoid

```javascript
const obj={

    name:"Sipun",

    print:()=>{

        console.log(this.name);

    }

}
```

because `this` won't refer to the object.

---

# 🔥 When Should Arrow Functions Be Used?

Arrow functions are best for

✅ Callbacks

```javascript
arr.map(()=>{
});
```

```javascript
setTimeout(()=>{
});
```

```javascript
promise.then(()=>{
});
```

because they preserve the surrounding `this`.

---

# Normal vs Arrow

| Feature                 | Normal Function | Arrow Function |
| ----------------------- | --------------- | -------------- |
| Own `this`              | ✅ Yes           | ❌ No           |
| `call()` works          | ✅ Yes           | ❌ No           |
| `apply()` works         | ✅ Yes           | ❌ No           |
| `bind()` works          | ✅ Yes           | ❌ No           |
| Best for object methods | ✅ Yes           | ❌ No           |
| Best for callbacks      | ⚠️ Sometimes    | ✅ Yes          |

---

# 🧠 Interview Questions

### Q1. What determines the value of `this`?

**Answer:** The way a function is called (its invocation).

---

### Q2. Does `this` depend on where the function is defined?

**Answer:** No. It depends on how the function is invoked.

---

### Q3. Can `call()` change the `this` of an arrow function?

**Answer:** No. Arrow functions use lexical `this`, which is fixed when they are created.

---

### Q4. Difference between `call()`, `apply()`, and `bind()`?

* **`call()`** → Invokes the function immediately with a specified `this` and arguments passed individually.
* **`apply()`** → Invokes the function immediately with a specified `this` and arguments passed as an array.
* **`bind()`** → Returns a new function with `this` permanently bound; it does not execute immediately.

---

### Q5. Why are arrow functions not recommended as object methods?

Because they do not have their own `this`. They inherit it from the surrounding scope, so `this` usually does not refer to the object.

---

# 🎯 One-Line Revision

* ✅ `this` is decided **at call time**, not at definition time.
* ✅ `object.method()` → `this` is the object.
* ✅ `call()`, `apply()`, and `bind()` change `this` for **normal functions**.
* ✅ Arrow functions **do not have their own `this`**.
* ✅ Arrow functions inherit (`lexically capture`) `this` from the surrounding scope.
* ✅ `call()`, `apply()`, and `bind()` **cannot change** the `this` of an arrow function.
* ✅ In browser non-strict mode, a normal function call gives `this === window`; in strict mode it is `undefined`.
