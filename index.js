const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

// Function to generate a random UUID
function generateUUID() {
  return uuidv4();
}

// Function to generate a random key for encryption
function generateEncryptionKey() {
  return crypto.randomBytes(32).toString('hex');
}

// Function to encrypt data using AES algorithm
function encryptData(data, key) {
  const cipher = crypto.createCipher('aes-256-cbc', key);
  let encryptedData = cipher.update(data, 'utf8', 'hex');
  encryptedData += cipher.final('hex');
  return encryptedData;
}

// Function to decrypt data encrypted with AES algorithm
function decryptData(encryptedData, key) {
  const decipher = crypto.createDecipher('aes-256-cbc', key);
  let decryptedData = decipher.update(encryptedData, 'hex', 'utf8');
  decryptedData += decipher.final('utf8');
  return decryptedData;
}

module.exports = {
  generateUUID,
  generateEncryptionKey,
  encryptData,
  decryptData
};
