import { NextApiRequest, NextApiResponse } from "next";

export default async function userValidate(req: NextApiRequest, res: NextApiResponse, next: () => any) {
    return res.send("hahaha");
    // return next();
};