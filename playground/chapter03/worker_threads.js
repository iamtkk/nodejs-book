const { Worker, isMainThread, parentPort } = require("worker_threads");

// console.log(__filename);
if (isMainThread) {
  const worker = new Worker(__filename);
  worker.on("message", (value) => console.log("from worker", value));
  worker.on("exit", () => console.log("worker exit"));
  worker.postMessage("ping");
} else {
  parentPort.on("message", (value) => {
    console.log("from parent", value);
    parentPort.postMessage("pong");
    parentPort.close();
  });
}
