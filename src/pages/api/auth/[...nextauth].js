import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import Credentials from "next-auth/providers/credentials";
import { createLogger, format, transports } from "winston";
import SequelizeAdapter, { models } from "@auth/sequelize-adapter";
import { DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    logging: false,
})

const winston = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.json(),
        format.errors({ stack: true })
    ),
    transports: [
        new transports.File({ filename: 'logs/error.log', level: 'error' }),
        new transports.File({ filename: 'logs/combined.log' })
    ]
})

sequelize.sync()

const authHandler = NextAuth({
    secret: process.env.AUTH_SECRET,
    adapter: SequelizeAdapter(sequelize, {
        models: {
            Account: sequelize.define('account', {
                ...models.Account,
                skillLevel: DataTypes.STRING,
                cuisine: DataTypes.STRING,
                dietTypes: DataTypes.ARRAY(DataTypes.STRING),
            })
        }
    }),
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
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
})

export default async function handler(...params) {
    await authHandler(...params)
}