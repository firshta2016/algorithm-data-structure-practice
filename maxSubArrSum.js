/** write a function which accepts an array of integets and a number. 
 * the function should calculate the maximum sum of 
 * number consecutive elements in the array
 */

function maxSubArrSum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        let arri = arr[i]
        maxSum += arri;
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

let result = maxSubArrSum([2,1,6,5,4,3, 1,3],2); 
console.log(result)

//2,1,6,5,4],2
//    - -