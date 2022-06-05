import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const { createHmac } = await import("node:crypto");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filesDirName = path.join(__dirname, "files");

export const calculateHash = async () => {
  const data = fs
    .readFileSync(path.join(filesDirName, "fileToCalculateHashFor.txt"))
    .toString();

  const hash = createHmac("sha256", data).digest("hex");

  return hash;
};
