/**
 * write a function called minSubArrLen which accepts two paramenters, this 
 * function should return the minimal length of a contiguous subarr of which
 * the sum is greater than or equal to the integer passsed to the function. 
 * if there isnt one, return 0 instead.
 */

function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
        end++;
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
        total -= nums[start];
        start++;
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }
 let result = minSubArrayLen([2,3,1,2,4,3],7) //2
 console.log(result);

 //create a placeholder variable assign it to 0
 //create a temp var = 0
 //loop the whole arr
 //


 //[2,3,1,2,4,3],7
 //- -