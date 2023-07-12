import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import prisma from "../../../database/prisma";
import { validateName, validateEmail, validateUsername, validateDate, validatePassword } from "../../../utils/validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(async (req, res) => {
    let data = null;
    try {
        const { name, username, password, email, birthdate } = req.body
        const isNameValid  = validateName(name);
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);
        const isBirthdateValid = validateDate(birthdate);
        const isUsernameValid = validateUsername(username);
    
        if (!isNameValid[0]) {
            return res.status(400).json({ error: isNameValid[1]});
        }
        if (!isEmailValid[0]) {
            return res.status(400).json({ error: isEmailValid[1]});
        }
        if (!isPasswordValid[0]) {
            return res.status(400).json({ error: isPasswordValid[1]});
        }
        if (!isBirthdateValid[0]) {
            return res.status(400).json({ error: isBirthdateValid[1]});
        }
        if (!isUsernameValid[0]) {
            return res.status(400).json({ error: isUsernameValid[1]});
        }

        const verify = await prisma.verification.findUnique({
            where: { email }
        });
        if (!verify) {
            return res.status(400).json({ error: "Please verify your email address."});
        }
        if (!verify.isVerified) {
            return res.status(400).json({ error: "Please verify your email address."});
        }

        const hash = await bcrypt.hashSync(password, 10);
        const refreshToken = crypto.randomUUID();
        // if (!tokens) return res.status(500).json({ error: "Cant process the tokens."});

        const user = await prisma.user.create({
            data: {
                name,
                username: "@"+username,
                email,
                password: hash,
                birthdate: new Date(birthdate),
                picture: "/twitter-defualt.jpg",
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
        });
        const accessToken = await jwt.sign(user, process.env.JWT_SECRET_KEY || "");
        data = {success: "ok", refreshToken, accessToken, ...user}
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Something went wrong."});
    }

    return res.status(200).json(data);
});

export default router.handler();