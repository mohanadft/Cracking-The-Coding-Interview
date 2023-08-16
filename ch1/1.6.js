/**
 * TODO:
 * String Compression:
 *
 * Implement a method to perform basic string compression using the counts
 * of repeated characters. For example, the string
 * aabcccccaaa would become a2blc5a3. If the "compressed" string
 * would not become smaller than the original string,
 * your method should return the original string. You can assume
 * the string has only uppercase and lowercase letters (a - z).
 */

const compressString = str => {
  let nOfletter = [];

  for (let i = 0; i < str.length; i++) {
    if (typeof str[i] === 'string') nOfletter.push(countLetter(i, str) + 1);
  }

  str = str.filter(e => isNaN(+e));

  for (let i = 0; i < str.length; i++) str[i] += nOfletter[i];

  return str.join('').split('');
};

const countLetter = (index, str) => {
  let count = 0;

  if (str[index + 1] !== str[index] || index === str.length - 1) return count;

  if (str[index + 1] === str[index]) {
    count++;
    count += countLetter(index + 1, str);
  }

  str[index + 1] = 0;

  return count;
};

// Another  Solution

const compress = str => {
  let s = str[0];
  let count = 1;

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) count++;
    else {
      s += count;
      count = 1;
      s += str[i];
    }
  }

  return (s += count);
};
