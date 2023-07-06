import sharp from "sharp";
import fs from "fs";
import os from "os";

export default async function vartions(image: any) {
    const variants = [];
    const sizes = [200, 500, 1080];
    for(let size of sizes) {
        const filename = size+"-"+image.newFilename+".webp";
        await sharp(image.filepath)
        .resize(size)
        .webp({ quality: 40, lossless: true })
        .toFile(os.tmpdir()+filename);

        variants.push({size: 200, filename, ext: ".webp", mimetype: "image/webp", filepath: os.tmpdir()+filename});
    }
    fs.rmSync(image.filepath);
    return variants;
}