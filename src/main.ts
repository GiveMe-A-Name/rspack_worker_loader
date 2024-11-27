// @ts-ignore
import Worker from "worker-rspack-loader!./worker.ts";

const worker = new Worker();

worker.postMessage({ a: 1 });
worker.onmessage = (event) => { };

worker.addEventListener("message", (event) => { });
