/**
 * implement a function which accepts a variable of arguments and checks whether there are any duplicates.
 */

 function areThereDuplicates(...args) {
    let sortedArr = args.sort((a,b) => a - b);
    let current = 0;
    let next = 1;
    while(next < sortedArr.length) {
        if(sortedArr[current] === sortedArr[next]){
            return true
        }
        current++
        next++
    }
    return false
 }

const result = areThereDuplicates('a','a','b','c','a');  
//console.log(result);

 /**
  * (1,2,3) //false
  * (1,1,2,3,3) //true
  */

  /**
   * sort the argu
   * current = 0
   * next = 1
   * if next[argu] === current[argu]
   * return true
   * current++
   * next++
   * false
   */