import type { Request, Response, NextFunction } from "express";
interface MagicLinkQuery {
    token?: string;
    email?: string;
    exp?: string;
    nonce?: string;
}
export declare function magicLinkMiddleware(secret: string): (req: Request<{}, {}, {}, MagicLinkQuery>, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export {};
//# sourceMappingURL=middleware.d.ts.map