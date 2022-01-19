const fs = require('fs')
const { generateKeyPair } = require('..')

generateKeyPair().then(({
    privateKey,
    publicKey,
}) => {
    fs.writeFileSync('./example/keys/key', privateKey);
    fs.writeFileSync('./example/keys/key.pub', publicKey);
})