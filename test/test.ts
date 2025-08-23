import { createMagicLink, verifyMagicLink } from "../dist/index.js";

const email = "test@example.com";
const secret = "super-secret-key";
const baseUrl = "https://myapp.com/magic";

const link = createMagicLink(email, { secret, baseUrl });

console.log("Generated Link:", link);

// Parse back params
const url = new URL(link);
const token = url.searchParams.get("token")!;
const emailParam = url.searchParams.get("email")!;
const exp = parseInt(url.searchParams.get("exp")!);
const nonce = url.searchParams.get("nonce")!;

const isValid = verifyMagicLink(token, emailParam, exp, nonce, secret);
console.log("Is link valid?", isValid);
