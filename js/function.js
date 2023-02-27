function isLength (text, length) {
  return text.length <= length;
}

function isPalindrome (text) {
  const newText = text.toLowerCase();
  const palindrome = newText.split('').reverse().join('');
  return newText === palindrome;
}

function getNumber(str) {
  if (typeof str === 'number') {
    return parseInt(Math.abs(str).toString().replace(/[^\d]/g, ''), 10);
  } else {
    const number = parseInt(str.replace(/[^\d]/g, ''), 10);
    return number;
  }
}

function getNewString (str, minLength, addSymbols) {
  const lengthStr = minLength - str.length;
  if (lengthStr <= 0) {
    return str;
  }

  return addSymbols.slice(0, lengthStr % addSymbols.length) + addSymbols.repeat(lengthStr / addSymbols.length) + str;
}
