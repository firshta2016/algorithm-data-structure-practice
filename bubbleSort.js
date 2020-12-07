/**
 * create a function that takes an array
 * start looping from a variable called i the end of the array towards the beginning
 * start an inner loop wih a variable called j from the beginning until i - 1
 * if arr[j] is greater than arr[j+1], swap those two values
 * return the sorted array
 */

 function bubbleSort(arr) {
     //writing the loops like this we end up running the loop fewer times each time through.
     //because as i goes down so does j
     for(let i = arr.length; i > 0; i--) {
         for(let j = 0; j < i - 1; j++) {
             if(arr[j] > arr[j+1]) {
                 let temp = arr[j];
                 arr[j] = arr[j + 1];
                 arr[j+1] = temp;
             }
         }
     }
     return arr;
 }

 const result = bubbleSort([7,9,5,1,8,2]);
 console.log(result);

 