function aVeryBigSum(ar) {
    // Write your code here
    
    // traditional way of doing sum on paper
    // write down numbers below the numbers keeping on same level from right side
    /**
     * 1929033849284
     *     312342234
     *   33234589082
     *          2324
     * --------------
     *          
     * calculate total
     * put all of them in array of array, split each element before pushing to array 
     * [[1,9,2,9,...],[3,1,2,3,...],[3,3,2,3,...],[2,3,2,4]]
     * now start calculation from right hand side or the last element of each array and then come towards left
     */
    let allNumbers = [];
    // pushing to array by splitting 
    ar.map((el)=>{
        allNumbers.push(el.toString().split(''))
    });
    
    // sort array by length 
    allNumbers.sort((a, b)=> b.length - a.length);
    
    // start from last to first index
    let totalSum = "";
    
    // find max in Array
    const maxArray = allNumbers.reduce((r,s) => r.length > s.length ? r : s, 0);
    const maxLength = maxArray.length;
    // match all elements with maxLength and add 0 to prefix
    allNumbers.map((el, index)=>{
        if (el.length < maxLength) {
          const diff = maxLength - el.length;
          for (var i = 0; i < diff; i++) {
              allNumbers[index].unshift(0);
          }
        }
    });

    let extra = 0;
    for (let i = allNumbers[0].length-1; i>=0; i--) {
        let sum = 0;
        for (let j = 0; j<allNumbers.length; j++) {
            let num = allNumbers[j][i];
            console.log(num, j, i);
            sum+=num? parseInt(num):0;
        }
        sum+=extra;
        // 12 3
        let sumArray = sum.toString().split('');
        totalSum = sumArray.pop() + totalSum;
        extra = sumArray.length > 0? parseInt(sumArray.join('')): 0;
    }
    
    return extra > 0 ? extra+totalSum: totalSum;
}