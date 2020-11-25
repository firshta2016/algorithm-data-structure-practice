// function insertionSort(arr) {
//     for(let i = 0; i < arr.length; i++) {
//     let current = arr[i] 
//     let j = i - 1
//     while(j >= 0 && arr[j] > current) {
//         arr[j + 1] = arr[j]
//         j--
//     }
//     arr[j + 1] = current
//     }
// return arr
// }




function insertionSort (arr) {
    for(let i = 0; i < arr.length; i++) {
        let current = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]
            j--

        }
        arr[j + 1] = current
    }
    return arr
}

var result = [3,2,10,1000, 900, 2, 1]
console.log(insertionSort(result));





