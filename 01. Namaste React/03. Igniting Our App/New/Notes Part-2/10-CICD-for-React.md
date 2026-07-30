
# 📘 Chapter 10: CI/CD for React Applications ⚙️🚀

---

# 10.1 📌 Introduction

In previous chapters, we learned:

```text id="w1f4xq"
React Code

     |
     |
     v

npm run build

     |
     |
     v

dist folder

     |
     |
     v

Server/CDN
```

But in real companies, developers do not manually upload files every time.

Imagine:

* 50 developers
* 100 commits per day
* Multiple environments
* Production releases

Manual deployment becomes difficult.

---

Solution:

# ⚙️ CI/CD

---

# 10.2 What is CI/CD? 🚀

CI/CD stands for:

## CI → Continuous Integration

## CD → Continuous Delivery / Continuous Deployment

---

Simple meaning:

> Automatically test, build, and deploy your application whenever code changes are pushed.

---

Example:

Developer:

```bash id="w4s7q2"
git push origin main
```

Automatically:

```text id="l8i7zq"
GitHub

   |
   |
   v

Install packages

   |
   |
   v

Run tests

   |
   |
   v

Build React app

   |
   |
   v

Deploy to server
```

---

# 10.3 Without CI/CD ❌

Manual process:

```text id="5d6g7n"
Developer

 |
 |
 v

Write Code

 |
 |
 v

git push

 |
 |
 v

Download files manually

 |
 |
 v

Run build manually

 |
 |
 v

Upload dist folder

 |
 |
 v

Deploy
```

---

Problems:

❌ Human mistakes

❌ Slow

❌ Difficult to manage

❌ No consistency

---

# 10.4 With CI/CD ✅

Automatic process:

```text id="xqj8qk"
Developer

 |
 |
 v

git push

 |
 |
 v

CI/CD Pipeline

 |
 |
 +----------------+
 |
 v

Install dependencies

 |
 v

Run tests

 |
 v

Build application

 |
 v

Deploy
```

---

Benefits:

✅ Faster releases

✅ Fewer mistakes

✅ Automatic testing

✅ Same process every time

---

# 10.5 Understanding Continuous Integration (CI) 🔄

CI means:

> Every code change is automatically checked before merging.

---

Example:

Developer A:

```text id="d8y6j1"
Creates feature

 |
 |
 v

Push code
```

---

CI runs:

```text id="o7r3ka"
Install dependencies

        |

        v

Run tests

        |

        v

Check errors

        |

        v

Build project
```

---

If successful:

```text id="4rj6z0"
Merge allowed ✅
```

---

If failed:

```text id="p6m0gk"
Merge blocked ❌
```

---

# 10.6 Understanding Continuous Delivery (CD) 📦

Continuous Delivery means:

> Code is always ready to deploy.

---

Flow:

```text id="3s4w8f"
Developer Push

       |

       v

CI Checks

       |

       v

Production Build Ready

       |

       v

Manual Approval

       |

       v

Deploy
```

---

A human may click:

```
Deploy Now
```

---

# 10.7 Continuous Deployment 🚀

Continuous Deployment means:

> Every successful change is automatically deployed.

---

Flow:

```text id="g1n9u3"
git push

    |

    v

Tests pass

    |

    v

Build succeeds

    |

    v

Automatically Deploy

```

---

No manual approval.

---

# 10.8 CI/CD Pipeline Example 🏗️

Real React workflow:

```text id="q6q9fj"
Developer

    |
    |
    v

GitHub Repository

    |
    |
    v

GitHub Actions

    |
    |
    +----------------+

    |
    v

npm install

    |
    v

npm test

    |
    v

npm run build

    |
    v

Create dist

    |
    v

Deploy CDN

```

---

# 10.9 Popular CI/CD Tools 🛠️

Common tools:

* GitHub Actions
* Jenkins
* GitLab CI/CD
* CircleCI
* Travis CI
* Azure DevOps

---

For modern React projects:

Most common:

# ⭐ GitHub Actions

---

# 10.10 GitHub Actions Overview 🐙

GitHub Actions allows you to automate workflows inside GitHub.

Workflow files:

```text id="6sj1l7"
.github/

   workflows/

       deploy.yml
```

---

Example:

```text id="3d8x8y"
Project

├── src

├── package.json

└── .github

      └── workflows

              └── deploy.yml
```

---

# 10.11 Basic GitHub Actions Example

File:

```
.github/workflows/build.yml
```

Example:

```yaml id="z4v0rh"
name: React Build


on:

  push:

    branches:

      - main



jobs:

  build:


    runs-on: ubuntu-latest


    steps:


    - name: Checkout code

      uses: actions/checkout@v4


    - name: Install dependencies

      run: npm install


    - name: Build React app

      run: npm run build
```

---

Meaning:

Whenever:

```text id="5r0g5h"
git push main
```

GitHub starts:

```text id="3m7v4r"
Ubuntu Machine

        |

        v

Clone Repository

        |

        v

npm install

        |

        v

npm run build
```

---

# 10.12 What Happens Inside CI Server? 🖥️

GitHub creates a temporary machine.

Example:

```text id="2s8w2r"
GitHub Server

        |
        |
        v

Fresh Linux Machine

        |
        |
        v

Clone Your Code

        |
        |
        v

Install Node.js

        |
        |
        v

Install Packages

        |
        |
        v

Build
```

---

After completion:

Machine is destroyed.

---

# 10.13 Why Install Dependencies Again? 🤔

Because CI server is a new machine.

It does not have:

```
node_modules
```

---

So:

```bash id="r4n9d6"
npm install
```

creates:

```
node_modules
```

again.

---

Remember:

We never push:

```
node_modules
```

to GitHub.

---

# 10.14 Deployment Platforms 🌍

After build:

```
dist/
```

needs deployment.

Popular options:

### Frontend Hosting

* Vercel
* Netlify
* AWS S3 + CloudFront
* Firebase Hosting
* GitHub Pages

---

Architecture:

```text id="q4w8p6"
GitHub

  |

  v

CI/CD

  |

  v

npm run build

  |

  v

dist

  |

  v

CDN

  |

  v

Users
```

---

# 10.15 Example: Vercel Deployment Flow

Developer:

```bash id="b6r2q0"
git push origin main
```

---

Vercel:

```text id="8y5v7h"
Detect React Project

        |

        v

npm install

        |

        v

npm run build

        |

        v

Generate dist

        |

        v

Deploy CDN
```

---

Website updated automatically.

---

# 10.16 Environment Variables in CI/CD 🔐

Applications use different environments.

Example:

Development:

```
API=https://dev-api.com
```

Production:

```
API=https://api.com
```

---

Never write:

```javascript id="f4h3w9"
const API_KEY="secret123";
```

---

Use:

```
.env
```

Example:

```
VITE_API_URL=https://api.com
```

---

CI/CD stores secrets:

Example:

```
GitHub Secrets

API_KEY
DATABASE_URL
TOKEN
```

---

# 10.17 Deployment Environments 🌎

Large companies have:

## 1. Development Environment

For developers.

```
dev.example.com
```

---

## 2. Testing / Staging Environment

For QA.

```
staging.example.com
```

---

## 3. Production Environment

For users.

```
example.com
```

---

Flow:

```text id="t7f4j0"
Developer

   |

   v

Development

   |

   v

Testing

   |

   v

Production
```

---

# 10.18 Branch Strategy 🌿

Common Git strategy:

```
main
 |
 |
Production


develop
 |
 |
Testing


feature/login
 |
 |
Developer Work
```

---

Example:

Developer creates:

```
feature/cart
```

After testing:

```
feature/cart

      |

      v

develop

      |

      v

main
```

---

# 10.19 Pull Request Workflow 🔀

Developer:

```bash id="l4x6v8"
git checkout -b feature/navbar
```

Changes code.

Push:

```bash id="p9s2w1"
git push origin feature/navbar
```

Creates:

```
Pull Request
```

---

CI runs:

```
Tests
Build
Lint
```

---

Team reviews.

Merge.

---

# 10.20 Real Company React CI/CD Architecture 🏢

Example:

```text id="v9n8s4"
Developer

 |
 |
 v

GitHub

 |
 |
 v

Pull Request

 |
 |
 v

CI Pipeline

 |
 |
 +----------------+

 Test

 Lint

 Build


 |
 |
 v

Merge Main


 |
 |
 v

Production Deployment


 |
 |
 v

CDN


 |
 |
 v

Users
```

---

# 10.21 Rollback Strategy 🔙

Sometimes deployment breaks.

Example:

Version 2:

```
Bug introduced
```

Need:

```
Version 1
```

---

Companies keep previous builds:

```
Deployment History

v1 ✅

v2 ❌

v3 ✅
```

---

Rollback:

```
Production

      |

      v

Previous Stable Build
```

---

# 10.22 Blue-Green Deployment 🔵🟢

Advanced deployment strategy.

Two environments:

```
Blue

Current Production


Green

New Version
```

---

Flow:

```text id="j5m9z8"
Blue

Users
 |
 |
 v

Old Version


Green

New Version Testing

       |

       v

Switch Traffic
```

---

Benefits:

✅ Zero downtime

✅ Easy rollback

---

# 10.23 Interview Questions 🎯

---

## Q1. What is CI/CD?

Answer:

> CI/CD is an automation process that builds, tests, and deploys applications automatically whenever code changes.

---

## Q2. Difference between CI and CD?

Answer:

CI:

> Automatically tests and validates code changes.

CD:

> Automatically delivers or deploys validated code.

---

## Q3. Why don't we commit node_modules?

Answer:

> Dependencies can be recreated using package.json and package-lock.json during CI/CD.

---

## Q4. What happens after git push in CI/CD?

Answer:

```
Clone code

↓

Install dependencies

↓

Run tests

↓

Build application

↓

Deploy
```

---

## Q5. What is GitHub Actions?

Answer:

> A CI/CD automation platform integrated into GitHub using workflow files.

---

# 10.24 🧠 Chapter Summary

Remember:

```text id="b9j4q7"
Developer

     |
     v

git push

     |
     v

CI/CD Pipeline

     |
     +--> Install

     |
     +--> Test

     |
     +--> Build

     |
     v

dist Folder

     |
     v

Deployment

     |
     v

Users
```

---

# ⭐ Golden Rule

> CI/CD removes manual deployment work by automatically converting code changes into tested and deployed applications.

---
