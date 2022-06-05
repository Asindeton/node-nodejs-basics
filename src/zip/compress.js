import path from "path";
import fs from "fs";
import zlib from "zlib";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const writableDirName = path.join(__dirname, "files");
const fileToCompressPath = path.join(writableDirName, "fileToCompress.txt");
const archiveFilePath = path.join(writableDirName, "archive.gz");

export const compress = async () => {
  const readStream = fs.createReadStream(fileToCompressPath);
  const writeStream = fs.createWriteStream(archiveFilePath);
  const gZip = zlib.createGzip();
  readStream.pipe(gZip).pipe(writeStream);
};
