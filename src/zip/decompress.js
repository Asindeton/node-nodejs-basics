import path from "path";
import fs from "fs";
import zlib from "zlib";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const writableDirName = path.join(__dirname, "files");
const fileToDecompressPath = path.join(writableDirName, "archive.gz");
const textFilePath = path.join(writableDirName, "fileToCompress.txt");

export const decompress = async () => {
  const readStream = fs.createReadStream(fileToDecompressPath);
  const writeStream = fs.createWriteStream(textFilePath);
  const gunZip = zlib.createGunzip();
  readStream.pipe(gunZip).pipe(writeStream);
};
