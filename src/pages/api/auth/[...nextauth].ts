import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  providers:[
    GithubProvider({
      clientId:"Ov23limfSI7V32mm4oF2",
      clientSecret:"9faa5b3e0eba16302b73e83994f773001540f633"
})]}


 export default NextAuth(authOptions)