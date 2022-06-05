import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesDirName = path.join(__dirname, "files");
const fileToReadPath = path.join(filesDirName, "fileToRead.txt");

export const read = async () => {
  const readStream = fs.createReadStream(fileToReadPath, "utf8");
  readStream.on("data", (data) => {
    process.stdout.write(data);
  });
};

// read.js - implement function that reads file fileToRead.txt content using Readable Stream and prints it's content into process.stdout
