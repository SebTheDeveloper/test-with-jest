const caesarCipher = (plainText, key) => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let cipherText = "";

  for (let i = 0; i < plainText.length; i++) {
    if (plainText[i] === " ") {
      cipherText += " ";
      continue;
    }

    let isCapitalized =
      plainText[i] === plainText[i].toUpperCase() ? true : false;

    const shiftedIndex = alphabet.indexOf(plainText[i].toLowerCase()) + key;
    const newIndex = shiftedIndex >= 26 ? shiftedIndex % 26 : shiftedIndex;
    cipherText += isCapitalized
      ? alphabet[newIndex].toUpperCase()
      : alphabet[newIndex];
  }

  return cipherText;
};

module.exports = caesarCipher;
