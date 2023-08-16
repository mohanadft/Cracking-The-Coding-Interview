/**
 * TODO:
 * Check Permutation:
 *
 * Given two strings, write a method to decide if one is a permutation of the other.
 */

const check = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  // Make it not case-sensitive
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (!str1.includes(str2[i]) || !str2.includes(str1[i])) {
        return false;
      }
    }
  }
  return true;
};

const check2 = (str1, str2) =>
  str1.toLowerCase().split('').sort().join('') ===
  str2.toLowerCase().split('').sort().join('');

const check3 = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  // Make it not case-sensitive
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  const letters = new Array(128).fill(0);

  for (const s of str1) letters[s.charCodeAt(0)]++;

  for (let i = 0; i < str2.length; i++) {
    let c = str2[i].charCodeAt(0);
    letters[c]--;
    if (letters[c] < 0) return false;
  }

  return true;
};
