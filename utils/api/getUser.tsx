import prisma from "../../database/prisma";
import jwt from "jsonwebtoken";
import { UserType } from "../app/Types";

export default async function User(refreshToken: string): Promise<UserType | null> {
    try {
        const getUser = await prisma.login.findUnique({
            where: {
                refreshToken
            },
            select: {
                user: true
            }
        });
        if (!getUser) {
            return null;
        }
        const {password, ...user} = getUser.user;
        const accessToken = await jwt.sign(user, process.env.JWT_SECRET_KEY || "");
    
        return { accessToken, ...user }
    } catch (error) {
        return null;
    }
}