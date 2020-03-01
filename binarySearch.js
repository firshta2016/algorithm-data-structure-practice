// 1. Let min = 0 and max = n-1.
// 2. If max < min, then stop: target is not present in array. Return -1.
// 3. Compute guess as the average of max and min, rounded down (so that it is an integer).
// 4. If array[guess] equals target, then stop. You found it! Return guess.
// 5. If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
// 6. Otherwise, the guess was too high. Set max = guess - 1.
// 7. Go back to step 2.

function binerySearch(arr, target) {
    let left = 0
    let right = arr.length - 1

    while(left < right) {
        let mid = Math.floor(left + (right - left) /2 )
        if(arr[mid] === target) {
            return mid
        } else if(arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
        
    }
    return left
}

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = binerySearch(primes, 71);
console.log(result);

<<<<<<< HEAD
// Well I forgot to pull down changes from the remote before altering the branch code and it caused a merge conflict
=======
// Showing how making changes before pulling creates a merge conflice
>>>>>>> 1d8279fd345b873c72a64fab7595f0c49f45a89c
