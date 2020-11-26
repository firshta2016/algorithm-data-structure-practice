/**
 * given two strings, write a function to determine if the second string is an anagram of the first.
 * example: cinema -> iceman
 */

 function validAnagram(str1, str2) {
     let anagLookup = {};
     for(let i = 0; i < str1.length; i++){
         let loop1 = str1[i];
         anagLookup[loop1] ? anagLookup[loop1] += 1 : anagLookup[loop1] = 1;
     }
     for(let i = 0; i < str2.length; i++) {
        let loop2 = str2[i];
        if(!anagLookup[loop2]) {
            return false
        } else {
            anagLookup[loop2] =- 1
        }
     }
     return true
 }

 let result = validAnagram('anagram', 'angarams');
 console.log(result);

 /**
  * let anagLookup = {}
  * loop1 through first string
  * condition-is str[i] = 1 & +1
  * loop2 through the second string
  * condition
  */

  /**
   * first loop - {a: 3, n: 1, g:1, r:1, m:1}
   * second loop - {a: 0, n: 0, g:0, r:0, m:0}
   */