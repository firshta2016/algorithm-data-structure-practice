function quickSort(arr) {
    if(arr.length < 1) {
        return arr
    } else {
        let newArr = []
        let left = []
        let right = []
        let pivot = arr.pop()

        for(let i = 0; i < arr.length; i++) {
            if(arr[i] <= pivot) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }
        return newArr.concat(quickSort(left) , pivot, quickSort(right))
    }
}

var myArray = [3, 0, 2, 5, -1, 4, 1 ];
console.log(quickSort(myArray))