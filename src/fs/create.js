import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const writableDirName = path.join(__dirname, "files");

export const create = async () => {
  fs.readdir(writableDirName, function (err, files) {
    try {
      if (!files.includes("fresh.txt")) {
        fs.writeFile(
          path.join(writableDirName, "fresh.txt"),
          "I am fresh and young",
          function (err, file) {
            if (err) throw err;
          },
        );
      } else {
        throw new Error("FS operation failed ");
      }
    } catch (err) {
      console.error(err);
    }
  });
};
// create.js - implement function that creates new file fresh.txt with content I am fresh and young inside of the files folder (if file already exists Error with message FS operation failed must be thrown)
