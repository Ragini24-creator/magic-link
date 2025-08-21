# Magic-link (Minimal TypeScript Package)
A lightweight utility to generate and validate magic links for authentication workflows.
Built with TypeScript, minimal dependencies, and designed for learning + experimentation.

## ✨ Features

**Generate magic links with unique tokens**

**Configurable expiry time**

**Simple TypeScript-first API**

**No external dependencies**

## Installation

```
npm install @your-username/magiclink
```

## 🚀 Usage
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

## 🛠 Development

Clone and install dependencies:

```git clone https://github.com/your-username/magiclink.git
cd magiclink
npm install
```

Build the package:

```
npm run build
```


## ⚙️ API

createMagicLink(options)

email (string) → Email address of the user

baseUrl (string) → Your app’s URL where user should land

expiresIn (number, optional) → Expiration time in ms (default: 24h)

Returns: { url: string, token: string, expiresAt: Date }

## 📄 License

MIT

## Made with TypeScript by Ragini Kishor **
