const { KJUR, hextob64, b64tohex } = require("jsrsasign");
const { generateKeyPair: _generateKeyPair } = require('crypto');

const { lineBreak } = require("./utils/line-break");

function generateSignature(txt_string, privateKey, hasBreakLine = true) {
  // RSA signature generation
  var sig = new KJUR.crypto.Signature({ alg: "SHA1withRSA" });
  sig.init(privateKey);
  sig.updateString(txt_string);
  var hSigVal = sig.sign();

  var signature = hasBreakLine ? lineBreak(hextob64(hSigVal), 64) : hextob64(hSigVal);

  return signature;
}

function verifySignature(txt_string, signature, publicKey) {
  // RSA signature validation
  const sig2 = new KJUR.crypto.Signature({ alg: "SHA1withRSA" });
  sig2.init(publicKey);
  sig2.updateString(txt_string);

  const isValid = sig2.verify(b64tohex(signature));
  return !!isValid;
}

async function generateKeyPair(length = 1024) {
  return new Promise((rs, rj) => {
    _generateKeyPair('rsa', {
      modulusLength: 1024,
      publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
      },
      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
      }
    }, (error, publicKey, privateKey) => {
      if (error) {
        return rj(error)
      }
      return rs({
        privateKey,
        publicKey
      });
    });
  })
  
}

module.exports = {
  generateSignature,
  verifySignature,
  generateKeyPair,
};
