import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesDirName = path.join(__dirname, "files");
const fileToWritePath = path.join(filesDirName, "fileToWrite.txt");

export const write = async () => {
  const writeStream = fs.createWriteStream(fileToWritePath);
  process.stdin.on("data", (data) => {
    writeStream.write(data);
    process.exit();
  });
};
