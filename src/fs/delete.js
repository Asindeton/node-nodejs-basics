import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const deleteDirName = path.join(__dirname, "files");

export const deleteFunc = async () => {
  fs.readdir(deleteDirName, function (err, files) {
    try {
      if (files.includes("fileToRemove.txt")) {
        fs.unlink(path.join(deleteDirName, "fileToRemove.txt"), function (err) {
          if (err) throw new Error("FS operation failed");
        });
      } else {
        throw new Error("FS operation failed");
      }
    } catch (err) {
      console.error(err);
    }
  });
};
// delete.js - implement function that deletes file fileToRemove.txt (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)
