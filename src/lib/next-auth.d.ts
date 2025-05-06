import { DefaultSession } from 'next-auth';
import { JWT as DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      /** The `id` you attached in your `jwt` callback */
      id: string;
      /** The `randomKey` you attached in your `jwt` callback */
      randomKey: string;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    id: string;
    randomKey: string;
  }
}
