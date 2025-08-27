import { verifyMagicLink } from "./index.js"; // adjust path if needed
export function magicLinkMiddleware(secret) {
    return (req, res, next) => {
        try {
            const { token, email, exp, nonce } = req.query;
            // Check that all required query parameters exist
            if (!token || !email || !exp || !nonce) {
                return res.status(400).json({ error: "Malformed magic link" });
            }
            const expNum = Number(exp);
            if (isNaN(expNum)) {
                return res.status(400).json({ error: "Invalid expiration timestamp" });
            }
            // Verify the magic link using the secret
            const isValid = verifyMagicLink(token, email, expNum, nonce, secret);
            if (!isValid) {
                return res.status(401).json({ error: "Invalid or expired link" });
            }
            // Attach the email to the request for downstream handlers
            req.magicUser = email;
            next();
        }
        catch (err) {
            console.error("Magic link verification error:", err);
            res.status(400).json({ error: "Malformed magic link" });
        }
    };
}
//# sourceMappingURL=middleware.js.map