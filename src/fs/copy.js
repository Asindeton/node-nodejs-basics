import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const writePathFolder = path.join(__dirname, "files_copy");
const readPathFolder = path.join(__dirname, "files");

export const copy = async () => {
  try {
    const files1 = await fs.promises.readdir(__dirname);
    if (!files1.includes("files_copy")) {
      await fs.promises.mkdir(writePathFolder);
    } else {
      throw new Error("FS operation failed ");
    }

    const files2 = await fs.promises.readdir(writePathFolder);
    for (const files of files2) {
      fs.unlink(path.join(writePathFolder, files), function (err) {
        if (err) console.log(err);
      });
    }

    const files = await fs.promises.readdir(readPathFolder, {
      withFileTypes: true,
    });

    for (const file of files) {
      const readStream = fs.createReadStream(
        path.join(readPathFolder, file.name),
      );
      const writableStream = fs.createWriteStream(
        path.join(writePathFolder, file.name),
        { flags: "w" },
      );
      readStream.pipe(writableStream);
    }
  } catch (error) {
    console.error(error);
  }
};

// copy.js - implement function that copies folder files files with all its content into folder files_copy at the same level (if files folder doesn't exists or files_copy has already been created Error with message FS operation failed must be thrown)
