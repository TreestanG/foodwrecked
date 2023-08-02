import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import Credentials from "next-auth/providers/credentials";
import SequelizeAdapter from "@auth/sequelize-adapter";
import { DataTypes, Sequelize } from "sequelize";


export const authOptions = {
    secret: process.env.AUTH_SECRET,
    providers: [
        Credentials({
            name:"Credentials",
            credentials: {
                email: { label: "Email", type: "email"},
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    
}

export default NextAuth(authOptions)