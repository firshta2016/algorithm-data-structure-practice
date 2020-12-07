/**
 * write a function, given sorted array of integers and a target average, determine
 * if there is a pair of vlaues in the array where the average of the pair equals the target
 * average. there may be more than one pair that matches the average target.
 */

function averagePair(arr,avg){
    if (arr.length < 0) return false;
    let current = 0;
    for(let j = 1; j < arr.length; j++){
      if(arr[current] + arr[j] / 2 === avg) {
        return true;
        current++
      }
      
    }
    return false
  }
  const result = averagePair([1,2,3],2.5)
  console.log(result)