import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      /** ユーザーID */
      id: string;
    } & DefaultSession["user"];
  }
}
