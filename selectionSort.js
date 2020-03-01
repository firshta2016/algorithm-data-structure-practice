function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let temp = 0
        let left = i
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[left]) {
                left = j
            }
        }
        temp = arr[i]
        arr[i] = arr[left]
        arr[left] = temp
    }
    return arr
}
var arr = [3,2,10,1000, 900, 2, 1]
console.log(selectionSort(arr));

// Making a change
