const  crypto  = require("crypto");

export interface MagicLinkOptions{
    secret:string,       //secret key to sign the token
    baseUrl:string,      // where the link should redirect
    expiresIn?:number,   //expiration in ms (default: 24h)
}


export  function createMagicLink(email:string,options:MagicLinkOptions):string{
   const {secret,baseUrl,expiresIn = 24*60*60*1000} = options 

  const token =  crypto.createHmac("sha256",secret).update(email + Date.now().toString()).digest("hex")

  const expiresAt = Date.now()+ expiresIn
  const magiclink = `${baseUrl}?token=${token}?&email=${encodeURIComponent(email)}&expire=${expiresAt}}`
  return magiclink;
}

export function verifyMagicLink(token: string, email: string, exp: number, secret: string):boolean{
     if (Date.now() > exp) return false; // expired

       const expectedToken = crypto
    .createHmac("sha256", secret)
    .update(email + (exp - (24 * 60 * 60 * 1000)).toString()) // same seed
    .digest("hex");

  return expectedToken === token;
}