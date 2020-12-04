/**
 * write a function which accepts a string and returns the length of the longest substring
 * with all distinct characters.
 */

 function findLongestSubStr(str) {
   let longest = 0;
   let seen = [];
   let start = 0;
   for(let i = 0; i < str.length; i++) {
       let char = str[i];
       if (seen[char]) {
           start = Math.max(start, seen[char])
       } 
       longest = Math.max(longest, i - start + 1);
       seen[char] = i + 1;
   }
   return longest;
 }

 let result = findLongestSubStr('rithmschool') //7
 console.log(result);

 //rithmschool
 //create a temp that holds the longest length
 //create an empty array
 //start variable
 //loop through the arr
 //if the char has been seen before
 //we start our loop from that char
 //if we havent seen the char before add it to longest var
 //we add 1 to the empty array
 //retung longest