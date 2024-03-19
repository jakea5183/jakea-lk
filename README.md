# Jakea-lk

Jakea-lk is a Node.js module providing various cryptographic utilities including generating UUIDs, encryption, and decryption using AES algorithm.

## Installation

You can install this module via npm: `npm install jakea-lk`

## Usage

```javascript
const crypticUtils = require('cryptic-utils');

// Generate a random UUID
const uuid = crypticUtils.generateUUID();

// Generate a random key for encryption
const key = crypticUtils.generateEncryptionKey();

// Encrypt data
const encryptedData = crypticUtils.encryptData('hello world', key);

// Decrypt data
const decryptedData = crypticUtils.decryptData(encryptedData, key);
```
