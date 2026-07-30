
# 📘 Chapter 2: npm vs npx — Understanding Package Installation and Execution 🚀

---

# 2.1 📌 Introduction

When working with JavaScript and React projects, you will frequently use:

```bash
npm
```

and

```bash
npx
```

Many beginners confuse them because both come with Node.js installation.

Example:

```bash
npm install parcel
```

and

```bash
npx parcel index.html
```

look similar, but they perform completely different tasks.

---

# 2.2 🟢 What is npm?

## 📦 npm = Node Package Manager

npm is the default package manager that comes with Node.js.

It is responsible for:

* Installing packages
* Managing dependencies
* Updating packages
* Removing packages
* Maintaining package versions

---

## Example

You want to use React in your project.

You run:

```bash
npm install react
```

npm downloads React from the npm registry.

Flow:

```text
Your Project
      |
      |
      v
npm install react
      |
      |
      v
npm Registry
      |
      |
      v
Downloads React
      |
      |
      v
node_modules/react
```

---

# 2.3 📦 What happens internally when we run npm install?

Suppose:

```bash
npm install react
```

Before installation:

```text
my-app/

├── package.json
└── src/
```

After installation:

```text
my-app/

├── node_modules/
│
│   └── react/
│
├── package.json
│
└── package-lock.json
```

Three things happen:

---

## 1️⃣ Downloads package

React is downloaded into:

```text
node_modules/
```

Example:

```text
node_modules/react/
```

---

## 2️⃣ Updates package.json

Before:

```json
{
  "dependencies": {}
}
```

After:

```json
{
  "dependencies": {
    "react": "^19.0.0"
  }
}
```

---

## 3️⃣ Updates package-lock.json

It stores the exact dependency tree.

Example:

```json
{
  "react": {
    "version": "19.0.0"
  }
}
```

---

# 2.4 🏗️ Types of npm Installation

There are mainly two types.

---

# 1. Local Installation

Most common.

Example:

```bash
npm install react
```

Installed inside the project:

```text
my-app/

└── node_modules/

    └── react/
```

Used only by this project.

---

## Example

Project A:

```text
Project-A

react 19
parcel 2
```

Project B:

```text
Project-B

react 18
webpack 5
```

Both projects can have different versions.

---

# 2. Global Installation

Example:

```bash
npm install -g parcel
```

`-g` means global.

Now Parcel is installed on your computer.

Example:

```text
Computer

├── Project A
├── Project B
│
└── Global npm packages
        |
        └── parcel
```

You can run:

```bash
parcel index.html
```

from anywhere.

---

# 2.5 ❓ Why Do We Prefer Local Installation?

Modern projects prefer:

```bash
npm install parcel
```

instead of:

```bash
npm install -g parcel
```

because:

---

## Problem with global packages

Imagine:

Developer 1:

```text
Parcel version 2.10
```

Developer 2:

```text
Parcel version 2.16
```

Same project.

Different results.

---

## Solution

Install locally:

```bash
npm install parcel
```

Now:

```text
Project

node_modules/
    |
    └── parcel 2.16
```

Everyone uses the same version.

---

# 2.6 🔵 What is npx?

## npx = Node Package Execute

npx is used to **execute packages**.

It does not primarily install packages.

Example:

```bash
npx parcel index.html
```

Meaning:

> Find Parcel package and execute it with index.html as input.

---

# 2.7 🆚 npm vs npx

| npm                        | npx                                  |
| -------------------------- | ------------------------------------ |
| Installs packages          | Executes packages                    |
| Downloads dependencies     | Runs commands                        |
| Modifies package.json      | Usually does not modify package.json |
| Creates node_modules       | Uses installed package               |
| Used for managing packages | Used for running packages            |

---

# 2.8 Example: Installing Parcel

## Step 1: Install Parcel

Command:

```bash
npm install parcel
```

Result:

```text
node_modules/

└── parcel/
```

package.json:

```json
{
 "devDependencies": {
    "parcel": "^2.16.4"
 }
}
```

---

## Step 2: Execute Parcel

Command:

```bash
npx parcel index.html
```

npx searches:

First:

```text
node_modules/.bin/
```

Finds:

```text
parcel
```

Runs:

```text
parcel index.html
```

---

# 2.9 ⚙️ How npx Finds Packages Internally

When you run:

```bash
npx parcel
```

npx checks:

---

## Step 1

Does the project have Parcel?

```text
node_modules/

└── .bin/

    └── parcel
```

If yes:

Use it.

---

## Step 2

If not found:

npx can temporarily download it.

Example:

```bash
npx create-react-app my-app
```

If the package is missing:

npx downloads it temporarily and executes it.

---

# 2.10 🚀 Why Do We Use npx Parcel?

Instead of:

```bash
parcel index.html
```

we use:

```bash
npx parcel index.html
```

because:

---

## Reason 1: No global installation needed

You don't need:

```bash
npm install -g parcel
```

---

## Reason 2: Version consistency

Your project has:

```json
{
"parcel":"2.16.4"
}
```

npx uses exactly that.

---

## Reason 3: Different projects can use different versions

Project A:

```text
parcel 2.10
```

Project B:

```text
parcel 2.16
```

No conflict.

---

# 2.11 🏠 Real Project Example

Suppose you join Flipkart frontend team.

Repository:

```text
flipkart/

├── package.json
├── package-lock.json
├── src/
└── node_modules/
```

package.json:

```json
{
 "devDependencies":{
    "parcel":"2.16.4"
 }
}
```

You clone:

```bash
git clone flipkart
```

Install:

```bash
npm install
```

Now:

```text
node_modules/

└── parcel 2.16.4
```

Run:

```bash
npx parcel index.html
```

Everyone uses the same Parcel version.

---

# 2.12 🧠 npm Commands You Should Know

---

## Install package

```bash
npm install package-name
```

Example:

```bash
npm install react
```

---

## Install development dependency

```bash
npm install parcel --save-dev
```

Short form:

```bash
npm i parcel -D
```

---

## Remove package

```bash
npm uninstall react
```

---

## Update package

```bash
npm update
```

---

## Install all dependencies

```bash
npm install
```

Reads:

```text
package.json
package-lock.json
```

and recreates:

```text
node_modules/
```

---

# 2.13 🎯 Interview Questions

---

## Q1. Difference between npm and npx?

Answer:

> npm is used to install and manage packages, while npx is used to execute packages without requiring global installation.

---

## Q2. Why use npx instead of installing packages globally?

Answer:

> npx ensures the project uses the correct package version and avoids dependency conflicts between projects.

---

## Q3. What happens when npm install runs?

Answer:

> npm reads package.json, downloads dependencies, creates node_modules, and updates package-lock.json.

---

## Q4. Is npx installing packages?

Answer:

> npx can temporarily download a package if it is not available locally, but its main purpose is executing packages.

---

# 2.14 📌 Chapter Summary

Remember:

```text
npm
 |
 |---- Install packages
 |
 |---- Manage dependencies
 |
 |---- Creates node_modules


npx
 |
 |---- Execute packages
 |
 |---- Runs local binaries
 |
 |---- Avoids global installation
```

---

# ⭐ Golden Rule

> npm brings the package into your project.
> npx runs the package from your project.

---