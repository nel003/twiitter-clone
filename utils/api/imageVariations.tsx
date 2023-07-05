import sharp from "sharp";

export default async function vartions(image: any) {
    const variants = [];
    const sizes = [200, 500, 1080];
    for(let size of sizes) {
        const filename = size+"-"+image.newFilename+".webp";
        const buffer = await sharp(image.filepath)
        .resize(size)
        .webp({ quality: 60, lossless: true })
        .toBuffer();
        const data = Buffer.from(buffer).toString("base64");

        variants.push({size: 200, filename, ext: ".webp", mimetype: "image/webp;base64", data: data});
    }
    return variants;
}