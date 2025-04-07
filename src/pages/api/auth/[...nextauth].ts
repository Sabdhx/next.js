import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  providers:[
    GithubProvider({
      clientId:"Ov23limfSI7V32mm4oF2",
      clientSecret:"55aae59a3a2affc04151bce6cda5818e8fcb48ea"
})]}


 export default NextAuth(authOptions)