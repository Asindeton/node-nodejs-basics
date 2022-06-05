import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const wrongFileName = path.join(__dirname, "files", "wrongFilename.txt");
const properFilename = path.join(__dirname, "files", "properFilename.md");

export const rename = async () => {
  fs.readdir(path.join(__dirname, "files"), function (err, files) {
    try {
      if (!files.includes("properFilename.md")) {
        fs.rename(wrongFileName, properFilename, function (err) {
          if (err) throw new Error("FS operation failed ");
        });
      } else {
        throw new Error("FS operation failed ");
      }
    } catch (err) {
      console.error(err);
    }
  });
};

// rename.js - implement function that renames file wrongFilename.txt to properFilename with extension .md (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)
