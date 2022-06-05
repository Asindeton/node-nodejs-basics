import path from "path";
import { fork } from "child_process";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const childFilePath = path.resolve(__dirname, "files", "script.js");
const argsArr = process.argv.slice(2);

export const spawnChildProcess = async (args = argsArr) => {
  const child = fork(childFilePath, args);
  process.stdout.write(`Please, input text\n`);
  child.on("message", () => {
    process.stdout.write(`Please, input text\n`);
  });
};
