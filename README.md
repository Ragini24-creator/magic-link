# magic-link (Minimal TypeScript Package)
A lightweight utility to generate and validate magic links for authentication workflows.
Built with TypeScript, minimal dependencies, and designed for learning + experimentation.

**✨ Features**

Generate magic links with unique tokens

Configurable expiry time

Simple TypeScript-first API

No external dependencies

**Installation**
npm install @your-username/magiclink

**🚀 Usage**
```
import { createMagicLink, verifyMagicLink } from "@your-username/magiclink";

// Create a new magic link
const link = createMagicLink({
  email: "user@example.com",
  baseUrl: "https://your-app.com/auth",
});

console.log(link);
// https://your-app.com/auth?token=xxxxxx

// Verify magic link
const isValid = verifyMagicLink(link.token);
console.log(isValid); // true / false

```

