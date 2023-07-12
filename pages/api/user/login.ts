import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import prisma from "../../../database/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req, res) => {
    let data = null;
    try {
        const { refreshToken } = req.cookies
        const getUser = await prisma.login.findUnique({
            where: {
                refreshToken
            },
            select: {
                user: true
            }
        });
        if (!getUser) {
            return res.status(404).json({error: 'Token not found'});
        }
        const {password, ...user} = getUser.user;
        const accessToken = await jwt.sign(user, process.env.JWT_SECRET_KEY || "");
        data = {success: "ok", refreshToken, accessToken}
    } catch (error) {
        return res.status(500).json({ error: "Something went wrong."});
    }
    return res.status(200).json(data)
});

router.post(async (req, res) => {
    let data = null;
    try {
        const { usernameORemail, password } = req.body;
        const query = usernameORemail.startsWith('@') ? { username: usernameORemail} : { email: usernameORemail}
    
        const user = await prisma.user.findUnique({
            where: {
                ...query
            }
        })
        if (!user) {
            return res.status(404).json({error: 'User not found'});
        }
    
        if(!await bcrypt.compare(password, user.password)) {
            return res.status(404).json({error: 'Password mismatch'});
        }
    
        const refreshToken = crypto.randomUUID();
    
        const addTokenToUser = await prisma.user.update({
            where:{
                id: user.id,
            },
            data: {
                login: {
                    create: {
                        refreshToken
                    }
                }
            },
            select: {
                name: true,
                username: true,
                email: true,
                birthdate: true,
                picture: true,
                createdAt: true,
                updatedAt: true,
            }
        })
        const accessToken = await jwt.sign(addTokenToUser, process.env.JWT_SECRET_KEY || "");
        data = {success: "ok", refreshToken, accessToken, ...addTokenToUser}
    } catch (error) {
        return res.status(500).json({ error: "Something went wrong."});
    }

    return res.status(201).json(data)
});


export default router.handler();