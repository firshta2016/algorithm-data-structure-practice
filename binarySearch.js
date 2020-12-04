/** 
 * write a function that accepts a sorted array and a value
 * create a left pointer at the start of the array and a right pointer at the end of the array
 * while the left pointer comes before the right pointer
 * create a pointer in the middle
 * if you find the value you want, return the index
 * if the value is too small, more the left pointer up
 * if the value is too large, move the right pointer down
 * if you never find the value, return -1
*/

function binarySearch(arr, value) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let middle = Math.floor(left + right / 2)
        if(arr[middle] === value) {
            return middle;
        } else if (arr[middle] < value) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}

let result = binarySearch([1,2,3,4,5,6,7,8,9,10,11,12],6);
console.log(result);