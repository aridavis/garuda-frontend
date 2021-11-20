var CryptoJS = require("crypto-js");

const encrypt = (text) => {
  var ciphertext = CryptoJS.AES.encrypt(text, "juara").toString();
  return ciphertext;
};

const decrypt = (ciphertext) => {
  var bytes = CryptoJS.AES.decrypt(ciphertext, "juara");
  var originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};

module.exports = { encrypt, decrypt };
