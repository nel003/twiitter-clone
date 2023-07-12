import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import userValidate from "../../middleware/userValidate";
import processForm from "../../middleware/processForm";
import imageVariations from "../../utils/api/imageVariations";
import uploadFile from "../../utils/api/supabaseFileUpload";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get((req, res) => {
  console.log(req.headers)
  return res.status(200).json({ success: true });
});

// router.use(userValidate);
// router.use(processForm);

// router.post(async (req, res) => {
//     const {image} = req.body.files
//     const variants = await imageVariations(image[0]);
//     const links = [];
//     for(let v of variants) {
//         const url = await uploadFile(v.filepath, v.filename, v.mimetype);
//         links.push({size: v.size, url})
//     }
//     console.log(links)
//     return res.status(200).json({ success: true });
// });

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
export default router.handler();
