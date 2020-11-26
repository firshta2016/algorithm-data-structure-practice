function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
    if(!str1) return true;
    while (i < str1.length && j < str2.length) {
        if (str1[i] === str2[j]) 
        i++;
        j++
        if (i === str1.length)
        return true
    }
    return false
  }
  
  const result = isSubsequence('hello', 'hrrrr')
  console.log(result);

  /**
   * 'abc'  'dfxzrabc'
   *   i           j        
   */

  /**
   * i = 0
   * j = 1
   * if(!str1) return true
   * while the i < str1.length && j < str2.length
   * if str1[i] === str2[j] 
   * i++ 
   * j++
   * if i === str1.length
   * return true
   * return false
   */