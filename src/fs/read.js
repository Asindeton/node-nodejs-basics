import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filesDirName = path.join(__dirname, "files");

export const read = async () => {
  fs.readdir(filesDirName, function (err, files) {
    try {
      if (files.includes("fileToRead.txt")) {
        fs.readFile(
          path.join(filesDirName, "fileToRead.txt"),
          function (err, data) {
            if (err) throw new Error("FS operation failed");
            console.log(data.toString("utf8"));
          },
        );
      } else {
        throw new Error("FS operation failed");
      }
    } catch (err) {
      console.error(err);
    }
  });
};
// read.js - implement function that prints content of the fileToRead.txt into console (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)
