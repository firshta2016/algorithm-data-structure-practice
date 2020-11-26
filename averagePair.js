function averagePair(arr,avg){
    // add whatever parameters you deem necessary - good luck!
    if (arr.length < 0) return false;
    let current = 0;
    for(let j = 1; j < arr.length; j++){
      if(arr[current] + arr[j] / 2 === avg) {
        return true;
        current++
      }
      
    }
    return false
  }
  const result = averagePair([],2.5)
  console.log(result)