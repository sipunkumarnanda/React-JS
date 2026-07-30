
# 📘 Chapter 7: Browserslist — Complete Deep Dive 🌍🚀

---

# 7.1 📌 Introduction

Modern web applications need to run on many browsers:

* Chrome
* Firefox
* Safari
* Edge
* Mobile browsers
* Older browsers

But every browser supports different JavaScript and CSS features.

Example:

Modern JavaScript:

```javascript
const add = (a,b) => a+b;
```

Older browsers may not understand:

```javascript
=>
```

So tools like:

* Parcel
* Babel
* Autoprefixer

need to know:

> "Which browsers should I support?"

This is where **Browserslist** comes in.

---

# 7.2 🌍 What is Browserslist?

Browserslist is a configuration tool that tells build tools:

> Which browsers your application should support.

It is not a compiler.

It only provides browser targets.

---

Example:

package.json:

```json
{
  "browserslist": [
    "last 2 versions",
    ">0.5%"
  ]
}
```

Meaning:

"Build my application for browsers that match these rules."

---

# 7.3 🤔 Why Do We Need Browserslist?

Imagine you are building Flipkart.

Your users:

```text
Desktop Users

Chrome
Edge
Firefox
Safari


Mobile Users

Chrome Android
Safari iOS
Samsung Browser
```

You cannot manually test every browser.

Browserslist helps decide:

* Which JavaScript syntax to convert
* Which CSS prefixes to add
* Which polyfills are required

---

# 7.4 Without Browserslist ❌

Suppose developer writes:

```javascript
const user = {
    name:"John"
};

console.log(user?.name);
```

Optional chaining:

```javascript
?.
```

is a modern feature.

Old browsers may not support it.

Without browser information:

Tools don't know:

"Should I convert this?"

---

# 7.5 With Browserslist ✅

Configuration:

```json
{
 "browserslist":[
    "last 2 versions"
 ]
}
```

Tool understands:

Support recent browsers only.

It may keep:

```javascript
user?.name
```

because modern browsers support it.

---

If:

```json
{
 "browserslist":[
    "IE 11"
 ]
}
```

Tool converts:

```javascript
user?.name
```

into older compatible JavaScript.

---

# 7.6 Where Do We Write Browserslist?

Usually inside:

## package.json

Example:

```json
{
  "name":"my-app",

  "browserslist":[
    ">0.5%",
    "last 2 versions",
    "not dead"
  ]
}
```

---

Or separate file:

```
.browserslistrc
```

Example:

```
>0.5%
last 2 versions
not dead
```

---

# 7.7 Browserslist Syntax Explained

Now let's understand common rules.

---

# 7.8 📌 `last 2 versions`

Example:

```text
last 2 versions
```

Meaning:

Support the latest two versions of every major browser.

Example:

Chrome:

```
Chrome 138
Chrome 137
```

Firefox:

```
Firefox 140
Firefox 139
```

Safari:

```
Safari 18
Safari 17
```

---

It does NOT mean:

"Last two years"

It means:

"Latest released browser versions"

---

# 7.9 📌 `>0.5%`

Example:

```text
>0.5%
```

Meaning:

Support browsers used by more than 0.5% of global users.

---

Example:

Browser market:

```
Chrome       65%  ✅
Safari       20%  ✅
Firefox       3%  ✅
Old Browser 0.1% ❌
```

Old browser is ignored.

---

# 7.10 📌 `not dead`

Example:

```text
not dead
```

Means:

Do not include browsers that are officially abandoned.

---

Dead browsers:

* No updates
* No security fixes
* Very low usage

Example:

Old Internet Explorer versions.

---

# 7.11 📌 Combining Rules

Real project:

```json
{
 "browserslist":[
    ">0.5%",
    "last 2 versions",
    "not dead"
 ]
}
```

Meaning:

Support:

✅ Popular browsers

✅ Recent versions

❌ Abandoned browsers

---

# 7.12 How Parcel Uses Browserslist

Developer writes:

```javascript
const greet = () => {

console.log("Hello");

}
```

↓

Parcel checks:

```text
package.json

Browserslist configuration
```

↓

Finds target browsers.

↓

Transforms code if required.

---

Flow:

```
Source Code

     |
     |
     v

Parcel

     |
     |
     v

Browserslist

     |
     |
     v

Target Browsers

     |
     |
     v

Transformed Code
```

---

# 7.13 Browserslist and JavaScript Transpilation

Example:

Modern code:

```javascript
const multiply = (a,b) => a*b;
```

Target:

Modern browsers:

```text
Chrome latest
Safari latest
```

Output:

```javascript
const multiply = (a,b)=>a*b;
```

No change required.

---

Target:

Old browsers:

```text
IE 11
```

Output:

```javascript
var multiply=function(a,b){
 return a*b;
}
```

---

# 7.14 Browserslist and CSS

Browserslist also helps CSS tools.

Example:

Developer writes:

```css
.container{
    display:flex;
}
```

Older Safari may need:

```css
.container{
    display:-webkit-flex;
    display:flex;
}
```

Tool adds prefixes automatically.

---

This is done by:

```
Autoprefixer
```

which uses Browserslist.

---

# 7.15 Differential Bundling

## What is Differential Bundling?

Creating different JavaScript bundles for different browsers.

Example:

Modern browsers:

```
Chrome latest
Safari latest
```

Receive:

```
app.modern.js
```

---

Older browsers:

Receive:

```
app.legacy.js
```

---

Why?

Modern users get smaller, faster code.

---

Example:

```
                 Application

                      |
                      |
                 Browserslist

              /                 \

Modern Browser              Older Browser

     |                            |

app.modern.js              app.legacy.js

```

---

# 7.16 Example: React Production Build

Source:

```jsx
function App(){

return <h1>Hello</h1>

}
```

---

Parcel checks:

```json
{
"browserslist":[
 "last 2 versions"
]
}
```

---

Then creates:

```
dist/

index.html

index.8sd7.js

index.82jd.css
```

optimized for those browsers.

---

# 7.17 Browser Support Strategy

Different companies choose different strategies.

---

## Startup Application

Example:

Internal dashboard

```json
{
"browserslist":[
 "last 2 versions"
]
}
```

Focus:

* Smaller bundle
* Modern browsers

---

## Banking Application

Need wider support:

```json
{
"browserslist":[
 ">1%",
 "not dead"
]
}
```

Focus:

* Maximum compatibility

---

## Global E-commerce

Example:

Flipkart/Amazon style:

```json
{
"browserslist":[
 ">0.5%",
 "last 2 versions",
 "not dead"
]
}
```

Balance:

* Performance
* Compatibility

---

# 7.18 Browserslist Query Examples

---

## Only Chrome

```
Chrome >= 100
```

Means:

Chrome version 100 or newer.

---

## Specific Country

Example:

```
> 5% in US
```

Means:

Browsers used by more than 5% of US users.

---

## Mobile Browsers

```
last 2 ChromeAndroid versions
```

---

## Excluding Browser

Example:

```
>0.5%
not Safari < 15
```

---

# 7.19 Why Not Support Every Browser?

You might think:

"Why not support everything?"

Because:

More browser support means:

* More JavaScript transformations
* Larger bundles
* More polyfills
* Slower application

---

Example:

Modern target:

```
100 KB bundle
```

Old browser support:

```
300 KB bundle
```

---

Companies choose based on users.

---

# 7.20 Browserslist and Package Tools

Browserslist is used by:

| Tool         | Purpose                   |
| ------------ | ------------------------- |
| Parcel       | Bundling                  |
| Babel        | JavaScript transformation |
| Autoprefixer | CSS prefixes              |
| PostCSS      | CSS processing            |
| Webpack      | Bundling                  |

---

# 7.21 🎯 Interview Questions

---

## Q1. What is Browserslist?

Answer:

> Browserslist is a configuration tool that defines which browsers a project supports. Build tools use this information to transform and optimize code.

---

## Q2. Why does Parcel need Browserslist?

Answer:

> Parcel uses Browserslist to decide which JavaScript features need transpilation and which CSS prefixes are required.

---

## Q3. Meaning of `last 2 versions`?

Answer:

> It means the latest two released versions of each major browser.

---

## Q4. What does `>0.5%` mean?

Answer:

> Support browsers with more than 0.5% global usage share.

---

## Q5. What is differential bundling?

Answer:

> Creating different bundles for different browser capabilities so modern browsers receive optimized code while older browsers receive compatible code.

---

# 7.22 🧠 Chapter Summary

Remember:

```
Browserslist

      |
      |
      v

"Which browsers should I support?"

      |
      |
      v

Parcel / Babel / Autoprefixer

      |
      |
      v

Optimized Application
```

---

# ⭐ Golden Rule

> Browserslist is the bridge between your modern code and the browsers your users actually use.

---
