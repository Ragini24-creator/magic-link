export interface MagicLinkOptions {
    secret: string;
    baseUrl: string;
    expiresIn?: number;
}
/**
 * Create a signed magic link
 */
export declare function createMagicLink(email: string, options: MagicLinkOptions): string;
/**
 * Verify a magic link’s authenticity + expiration
 */
export declare function verifyMagicLink(token: string, email: string, exp: number, nonce: string, secret: string): boolean;
//# sourceMappingURL=index.d.ts.map