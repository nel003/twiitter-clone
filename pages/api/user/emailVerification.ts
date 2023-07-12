import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import { validateEmail } from "../../../utils/validator";
import prisma from "../../../database/prisma";
import sendmail from "../../../utils/mailer";

const router = createRouter<NextApiRequest, NextApiResponse>();

// generate a six random number digits
const randInt = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

function addMinutes(date: Date, minutes: number) {
    return new Date(date.getTime() + minutes*60000).getTime();
}

async function update({id, tries, isVerified}: {id: string, tries?: number, isVerified?: boolean}): Promise<void>{
  await prisma.verification.update({ 
    where: { id },
    data: tries ? {tries: tries + 1} : {isVerified}
   });
}

// Request Verification code
router.get(async (req, res) => {
  let verification = null;
  try {
    const code = randInt();
    const { email } = req.query;
  
    const isEmailValid = validateEmail(email as string);
  
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
    if (!isEmailValid[0]) {
      return res.status(400).json({ error: isEmailValid[1] });
    }
  
    const checkEmail = await prisma.verification.findFirst({
      where: {
          email: email as string,
      }
    });
    if(checkEmail && Date.now() < addMinutes(checkEmail.updatedAt, 5)) {
      return res.status(400).json({ error: "Please wait atleast 5 minutes to request new verification code." });
    }
    if(checkEmail) {
      verification = await prisma.verification.update({
          where: { id: checkEmail.id },
          data: {
              code,
              email: email as string,
          }
      });
      if(!verification) {
          return res.status(500).json({ error: "Failed to send verification code"})
      }
    } else {
      verification = await prisma.verification.create({
          data: {
              code,
              email: email as string,
          }
      });
      if(!verification) {
          return res.status(500).json({ error: "Failed to send verification code"})
      }
    }
  
    const sendCode = await sendmail("alopena55555@gmail.com", `Verification code: ${code}`);
    if(!sendCode) {
      return res.status(500).json({ error: "Failed to send verification code"})
    }
  } catch (error) {
    return res.status(500).json({ error: "something went wrong."});
  }

  return res.status(201).json(verification);
});

// Verify code
router.post(async (req, res) => {
  try {
    const { email, code } = req.body;
  
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
    if (!code) {
      return res.status(400).json({ error: "Verification code is required" });
    }
  
    const checkEmail = await prisma.verification.findFirst({
      where: {
          email: email as string,
      }
    });
  
    if (!checkEmail) {
      return res.status(404).json({ error: "Email not Found." });
    }
    if (checkEmail.tries >= 10) {
      return res.status(400).json({ error: "Maximum retries exceeded." });
    }
    if(Date.now() > addMinutes(checkEmail.updatedAt, 5)) {
      return res.status(400).json({ error: "Verification code expired." });
    }
    if(checkEmail.code != code) {
      await update({id: checkEmail.id, tries: checkEmail.tries});
      return res.status(400).json({ error: "Invalid verification code." });
    }
    await update({id: checkEmail.id, isVerified: true});
  } catch (error) {
    return res.status(500).json({ error: "something went wrong."});
  }

  return res.status(200).json({ message: "Ok" });
});

export default router.handler();
