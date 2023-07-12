import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseApiKey = process.env.SUPABASE_API_KEY || "";
const supabase = createClient(supabaseUrl, supabaseApiKey, {
  auth: { persistSession: false },
});

// Upload file using standard upload
export default async function uploadFile(
  filepath: string,
  filename: string,
  mimetype: string
) {
  const { data, error } = await supabase.storage
    .from("nel")
    .upload("db/" + filename, fs.readFileSync(filepath), {
      cacheControl: "3600",
      contentType: mimetype,
      upsert: false,
    });
  if (error) {
    console.log(error);
    return null;
  } else {
    console.log(data);
    fs.rmSync(filepath);
    return (
      "https://mhpcbvckufzfpqjnrsuk.supabase.co/storage/v1/object/public/nel/" +
      data.path
    );
  }
}
