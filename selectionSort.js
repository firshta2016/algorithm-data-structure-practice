/**
 * write a function that takes an array
 * loop through the array
 * store the first element as the smallest value youve seen so far
 * loop through the array again starting the loop i + 1
 * compare the smallest item to the next item in the array until you find a smaller number
 * if a smaller number is found, designate that smaller number to be the new 'smaller' number and continue until the end
 * if the smaller is not a value (index) you initially began with, swap the two values
 * repeat this with the next element until the array is sorted
 */


function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let lowest = i;
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
    }
    return arr;
}
var arr = [3,2,10, 9, 2, 1]
console.log(selectionSort(arr));


