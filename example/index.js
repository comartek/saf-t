const fs = require('fs')
const { generateSignature, verifySignature } = require("..");

const privateKey = fs.readFileSync("./example/keys/key", {
    encoding: "utf-8",
});

const publicKey = fs.readFileSync("./example/keys/key.pub", {
    encoding: "utf-8",
});
  
const data = "0;2014-01-24;23:59:59;123456789;1250.00;1000.00";

const signature = generateSignature(data, privateKey);

console.log(signature);

const isValid = verifySignature(data, signature, publicKey);

console.log('is valid: ', isValid);
