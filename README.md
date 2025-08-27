# 🔑 Magic-link Authentication (Minimal TypeScript Package)

[![npm version](https://img.shields.io/npm/v/@your-username/magiclink)](https://www.npmjs.com/package/@your-username/magiclink)
[![npm downloads](https://img.shields.io/npm/dt/@your-username/magiclink)](https://www.npmjs.com/package/@your-username/magiclink)
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

## ✨ Features

- 🔑 Generate magic links with **unique tokens**
- ⏱ Configurable **expiry times**
- 📦 **No external dependencies**
- 🧩 **TypeScript-first API**
- 🪶 Lightweight and minimal by design

---

## 📦 Installation

```bash
npm install @your-username/magiclink
```

## 🚀 Usage

⚡ Quick Start

Here’s a minimal Express.js example showing how to create and validate magic links.

```bash
import express from "express";
import dotenv from "dotenv";
import { createMagicLink, magicLinkMiddleware } from "@ragini/magic-link";

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
