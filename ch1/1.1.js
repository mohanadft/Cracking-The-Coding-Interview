/**
 * TODO:
 * Is Unique:
 * Implement an algorithm to determine if a string has all unique
 * characters. What if you cannot use additional data structures?
 */

const isUnique = str => {
  let obj = {};
  str.split('').forEach(e => (obj[e] = e in obj ? ++obj[e] : 1));
  for (let item in obj) if (obj[item] > 1) return false;
  return true;
};

const isUnique2 = str => new Set([...str]).size === str.length;

const isUnique3 = str => {
  let charSet = new Array(128).fill(false);
  for (let i = 0; i < str.length; i++) {
    let val = str[i].charCodeAt(0);
    if (charSet[val]) return false;
    charSet[val] = true;
  }
  return true;
};

const isUnique4 = str =>
  [...str].filter((char, index, arr) => arr.indexOf(char) === index).length ===
  str.length;
