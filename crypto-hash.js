const crypto = require("crypto");
const cryptHash = (...inputs) => {
  const hash = crypto.createHash("sha256");
  hash.update(inputs.sort().join(""));
  return hash.digest("hex");
};

const result = cryptHash("hello", "World");
console.log(result);
