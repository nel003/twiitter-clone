import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import userValidate from "../../middleware/userValidate";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.use(userValidate);

router.get((req, res) => {
    console.log(req.method)

    return res.status(200).json({ success: true})
});

export const config = {
    api: {
        bodyParser: false,
    }
  };
export default router.handler();