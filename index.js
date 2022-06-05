import { copy } from "./src/fs/copy.js";
import { create } from "./src/fs/create.js";
import { rename } from "./src/fs/rename.js";
import { deleteFunc } from "./src/fs/delete.js";
import { list } from "./src/fs/list.js";
import { read } from "./src/fs/read.js";

import { parseEnv } from "./src/cli/env.js";
import { parseArgs } from "./src/cli/args.js";

// import { unknownObject, createMyServer } from "./src/modules/cjsToEsm.mjs";

import { calculateHash } from "./src/hash/calcHash.js";

import { read as readStream } from "./src/streams/read.js";
import { write as writeStream } from "./src/streams/write.js";
import { transform as transformStream } from "./src/streams/transform.js";

import { compress } from "./src/zip/compress.js";
import { decompress } from "./src/zip/decompress.js";

import { spawnChildProcess } from "./src/cp/cp.js";
import { performCalculations } from "./src/wt/main.js";
import { sendResult } from "./src/wt/worker.js";

// create();
// copy();
// rename();
// deleteFunc();
// list();
// read();

// parseEnv();
// parseArgs();

// console.log(createMyServer, unknownObject);

// console.log(await calculateHash());

// readStream();
// writeStream();
// transformStream();

// compress();
// decompress();

// spawnChildProcess();

// sendResult();
performCalculations();
