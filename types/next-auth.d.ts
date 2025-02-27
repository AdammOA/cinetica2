import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
        id: string;
        apiKey?: string;
    };
  }

  interface User {
    id: string;
    apiKey?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    apiKey?: string;
    email: string;
    name?: string;
    image?: string;
  }
}