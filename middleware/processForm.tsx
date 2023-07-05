import type { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from "formidable";

function process(req: NextApiRequest) {
    return new Promise((resolve, reject) => {
        const form = new IncomingForm({
          // uploadDir: 'temp',
          // keepExtensions: true,
          multiples: true,
        });
        
        form.parse(req, (err, fields, files) => {
          if (err) return reject(err);
          resolve({fields, files});
        });
    });
}

export default async function processForm(req: NextApiRequest,  res: NextApiResponse, next: () => any) {
    const form: any = await process(req);
    //Process further
    req.body = form;
    return next();
}