import crypto from "crypto";
/**
 * Create a signed magic link
 */
export function createMagicLink(email, options) {
    const { secret, baseUrl, expiresIn = 24 * 60 * 60 * 1000 } = options;
    const issuedAt = Date.now();
    const exp = issuedAt + expiresIn;
    // Add randomness to prevent collisions
    const nonce = crypto.randomBytes(16).toString("hex");
    // Token is deterministic based on email + exp + nonce
    const token = crypto
        .createHmac("sha256", secret)
        .update(email + exp.toString() + nonce)
        .digest("hex");
    return `${baseUrl}?token=${token}&email=${encodeURIComponent(email)}&exp=${exp}&nonce=${nonce}`;
}
/**
 * Verify a magic link’s authenticity + expiration
 */
export function verifyMagicLink(token, email, exp, nonce, secret) {
    if (Date.now() > exp)
        return false; // expired
    const expectedToken = crypto
        .createHmac("sha256", secret)
        .update(email + exp.toString() + nonce)
        .digest("hex");
    return expectedToken === token;
}
//# sourceMappingURL=index.js.map