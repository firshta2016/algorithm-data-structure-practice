/**
 * implement a function which accepts a sorted array and counts the unique values in the array
 * ex: ([1,2,3,3,3,5]) //2
 */

 function countUniqueValues(arr) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        let loopj= arr[j];
        if(arr[i] !== arr[j]){
            i++
            arr[j] = arr[i]
        }
    }
    return i + 1; 
 }
                                    
const result = countUniqueValues([1,2,3,3,3,5]); 
console.log(result);

/**
 * two-pointer method
 * let i = 0;
 * loop using for(j=1)
 * condition - 
 */

 /**
  * [1,2,3,5,3,3,5]
  *        i     j 
  */



  