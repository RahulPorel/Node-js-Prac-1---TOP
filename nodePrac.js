const fs = require("fs");

fs.readdir("./", (err, files) => {
  if (err) console.log("Err", err);
  console.log("Result", files);
});

const EventEmitter = require("events");
const emitter = new EventEmitter();

const url = "https://rahulporel.com/log";

function log(msg) {
  console.log(msg);
}
module.exports = log;
    