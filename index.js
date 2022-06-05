import { copy } from "./src/fs/copy.js";
import { create } from "./src/fs/create.js";
import { rename } from "./src/fs/rename.js";
import { deleteFunc } from "./src/fs/delete.js";
import { list } from "./src/fs/list.js";
import { read } from "./src/fs/read.js";

import { parseEnv } from "./src/cli/env.js";
import { parseArgs } from "./src/cli/args.js";

// create();
// copy();
// rename();
// deleteFunc();
// list();
// read();

// parseEnv();
parseArgs();
// args.js - implement function that parses command line arguments (given in format --propName value --prop2Name value2, you don't need to validate it) and prints them to the console in the format propName is value, prop2Name is value2
