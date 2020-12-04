function linearSearch(arr, value) {
    for(let i = 0; i < arr.length; i++) {
        let arri = arr[i];
        if (arri === value) {
            return i
        } 
    }
    return -1
}

let result = linearSearch([1,2,3], 3);
console.log(result)