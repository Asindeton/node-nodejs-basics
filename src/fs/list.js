import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filesDirName = path.join(__dirname, "files");

export const list = async () => {
  fs.readdir(filesDirName, function (err, files) {
    try {
      if (files.length == 0) throw new Error("FS operation failed");
      console.log(files);
    } catch (err) {
      console.error(err);
    }
  });
};

// list.js - implement function that prints all array of filenames from files folder into console (if files folder doesn't exists Error with message FS operation failed must be thrown)
