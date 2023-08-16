/**
 * TODO:
 * Palindrome Permutation:
 *
 * Given a string, write a function to check if it is a
 * permutation of a palindrome. A palindrome is a word or
 * phrase that is the same forwards and backwards.
 * A permutation is a rearrangement of letters The
 * palindrome does not need to be limited to just dictionary words.
 * EXAMPLE
 *
 * Input: Tact Coa
 * Output: True (permutations: "taco cat'; "atco eta·; etc.)
 */

const check2 = str => {
  str = str
    .split(' ')
    .map(slice => slice.toLowerCase())
    .join('');

  let countOdd = 0;
  const obj = {};

  for (let i = 0; i < str.length; i++)
    obj[str[i]] = str[i] in obj ? ++obj[str[i]] : 1;

  for (let char in obj) if (obj[char] % 2 !== 0) countOdd++;

  return countOdd <= 1;
};
