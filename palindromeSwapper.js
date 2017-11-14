/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 *         01234    10234  02134  01324  01243
 * contoh: makan => amkan, mkaan, maakn, makna
 *  0 1 ... 1, 2 ... 2,3 ..
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */
function palindromeSwapper(str) {
  var newStr = '';
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < str.length; j++) { 
      if (i === j) {
        newStr += str[j+1] ? str[j+1] : '' ;
        newStr += str[i];
        j++;
      } else {
        newStr += str[j];
      }
    }
    if (isPalindrome(newStr)) {
      return true
    }
    newStr = ''
  }
  return false;
}

/**
 * @function isPalindrome
 * Cek apabila kata merupakan palindromeSwapper
 * @param {string} str - input kata yang dicek bila palindrom
 * @returns {boolean} true bila kata adalah palindrom
 */
function isPalindrome(str) {
  //console.log('paldrom', str)
  return str.split('').reverse().join('') === str
}
console.log(palindromeSwapper('arcecar')); // TRUE
console.log(palindromeSwapper('racecar')); // TRUE
console.log(palindromeSwapper('recacar')); // FALSE
