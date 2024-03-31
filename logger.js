var url = "http://mylogger.io/log";
function log(msg) {
  // send http req
  console.log(msg);
}

module.exports.log = log;
// module.exports.endPoint = url;
