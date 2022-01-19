## Saf-t 

This is Saf-t's library to implement functions help application signature data from case, POS...

More information: https://github.com/skatteetaten/saf-t

Features:
- generate signature
- verify signature
- generate RSA key pair

## Install

```bash
npm install @comartek/saf-t
```

or

```bash
yarn add @comartek/saf-t
```

## Usage

```javascript
const { generateSignature, verifySignature } = require("@comartek/saf-t");

const privateKey = 'private-key';
const publicKey = 'public-key';
const data = "0;2014-01-24;23:59:59;123456789;1250.00;1000.00";

const signature = generateSignature(data, privateKey);
console.log(signature);

const isValid = verifySignature(data, signature, publicKey);
console.log('is valid: ', isValid);

```