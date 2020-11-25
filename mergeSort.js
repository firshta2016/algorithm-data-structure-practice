function mergeSort(arr) {
    if(arr.length < 2) {
        return arr
    }

    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

function merge (left, right) {
    let result = []
    while(left.length > 0 && right.length > 0) 
    result.push(left[0] < right[0] ? left.shift() : right.shift())
    return result.concat(left.length ? left : right)
}

function mergeSort(arr) {
    if
}













var result = [3,2,10,1000, 900, 2, 1, 88, 4, 29]
console.log(mergeSort(result));