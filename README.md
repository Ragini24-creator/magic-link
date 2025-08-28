# 🔑 Magic-link Authentication (Minimal TypeScript Package)

[![npm version](https://img.shields.io/npm/v/@rkdev3/magic-link)](https://www.npmjs.com/package/@rkdev3/magic-link)
[![npm downloads](https://img.shields.io/npm/dt/rkdev3/magic-link)](https://www.npmjs.com/package/@rkdev3/magic-link)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?logo=typescript)

A lightweight utility to **generate and validate magic links** for authentication workflows.  
Built with **TypeScript**, zero external dependencies, and designed for **learning + experimentation**.

---

## 📖 About this project

I initially built this package **to learn and experiment** with how magic link authentication works, while creating a minimal, reusable utility for my own projects.  

Along the way, I wanted to:
- Deepen my knowledge of **TypeScript** and **package development**
- Learn the full flow of **publishing and maintaining an NPM package**
- Build a tool that’s simple but potentially useful for others

This package is **still evolving 🚧** — new features will be added gradually.

---

## ⚠️ Disclaimer

This package was built primarily for learning and experimentation. While it works, it may not be fully production-ready.
Use at your own risk, and double-check security practices before deploying in critical systems.


## ✨ Features

- 🔑 Generate magic links with **unique tokens**
- ⏱ Configurable **expiry times**
- 📦 **No external dependencies**
- 🧩 **TypeScript-first API**
- 🪶 Lightweight and minimal by design

---

## 📦 Installation

```bash
npm install @rkdev3/magiclink
```

## 🚀 Usage

⚡ Quick Start

Here’s a minimal Express.js example showing how to create and validate magic links.

```bash
import express from "express";
import dotenv from "dotenv";
import { createMagicLink, magicLinkMiddleware } from "@rkdev3/magic-link";

const app = express();
app.use(express.json());
dotenv.config();

const SECRET = process.env.SECRET as string;     // Your secret key
const BASE_URL = process.env.BASE_URL as string; // Your app's base URL

// 1️⃣ Route to generate a magic link
app.post("/create", (req, res) => {
  const email = req.body.email as string | undefined;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const link = createMagicLink(email, {
    secret: SECRET,
    baseUrl: BASE_URL,
  });

  res.send(`Magic link: <a href="${link}">${link}</a>`);
});

// 2️⃣ Route protected by magic link middleware
app.get("/auth", magicLinkMiddleware(SECRET), (req, res) => {
  res.send(`Welcome ${(req as any).magicUser}`);
});

app.listen(3000, () => console.log("✅ Server running on http:/localhost:3000"));

```

## 📌 How It Works

- Client sends an email to /create.

- Server responds with a magic link.

- User clicks the link → redirected to /auth.

- magicLinkMiddleware validates it and grants access.

## 🔑 Environment Variables

Make sure you set these in your .env file:

```bash 

SECRET=your-secret-key
BASE_URL=http://localhost:9000/auth

```

## 🛠 API Reference
createMagicLink(email: string, options: { secret: string, baseUrl: string })

- Generates a signed magic link for the given email.

magicLinkMiddleware(secret: string)

- Express middleware that validates magic links.
- If valid → attaches req.magicUser and calls next().

##🧪 Testing It Locally
```bash

# Run the server
npm run dev

# In another terminal, send a request
curl -X POST http://localhost:9000/create \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com"}'

```

Click the returned link in your browser → you should see Welcome user@examplecom.

## 📌 Roadmap

- Token expiry support

- Integration with Nodemailer (send link via email)

- Examples with Next.js & React 

## 🤝 Contributing

PRs, issues, and discussions welcome!

## 📄 License

MIT © 2025 Ragini K



