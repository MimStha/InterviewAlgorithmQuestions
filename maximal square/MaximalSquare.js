// I need to work on this!!! not completed.

function MaximalSquare(strArr) { 
  // code goes here    
  let stringArr = String(strArr).split(","); // ["0111"]["1111"]["1111"]["1111"]
  const stringArrLen = stringArr.length;
  let x = [], y = [];
  for(let i = 0; i < stringArrLen; i++) {
    let consecForThisString = CountConsecutiveOnes(strArr[i]);
      y = [...y, consecForThisString[1]]
      x = [...x, [consecForThisString]]
  }
  console.table('x: ', x)
  console.log('y: ', y)
  // let maxNumOfConsec = Math
  FindRowsToAdd(y);
  return strArr;          
}

// Count the consecutive 1's and return start colNum and numRepetitions
function CountConsecutiveOnes(str) {
  // "1111"
  let counter = 0;
  let maxConsecutive = [];
  // maxConsecutive =  // [col, timesRepeated]
  let strLen = str.length;
  for (let i = 1; i < strLen + 1; i++) {
    // console.log(`i == ${i} -- str[i] == ${str[i - 1]}`)
    if (str[i - 1] === "1") {
      counter++;
      if(!maxConsecutive.length) {
        // console.log('1st - counter: ', counter, ' array == ', [i, counter]);          
        maxConsecutive = [i, counter]
      } else {
        if(counter > maxConsecutive[1]) {
        // console.log('later - counter: ', counter,  ' array == ', [i - counter, counter]);          
          maxConsecutive = [i - counter, counter];
        }
      }
    } else {
      counter = 0;
    }
  }
  return maxConsecutive;
}


function FindRowsToAdd (arr) {
  const arrLen = arr.length;
  let max = arrLen, curMax = 1;
  for (let i = arrLen; i > 0; i--) {
    // if(arr[arrLen - ])
    console.log(`i: ${i} ==> arr[i]: ${arr[i - 1]}`)
    if(i === arrLen) {
      curMax = arr[i - 1];
    } else {
      curMax = curMax > arr[i - 1] ? arr[i - 1] : curMax;
    }
    console.log(`curMax : ${curMax}`)
  }
}

// console.log(CountConsecutiveOnes("0111"));
console.log(MaximalSquare(["0101", "1111", "1011", "1111"]));  

/* 
i = 1  true count = 1 => [1, 1]
i = 2  true count = 2 => [2, 2]
i = 3 false count = 0
i = 4 true count = 1 => return
i = 5 true count = 2 => return
i = 6 true count = 3 => [6, 3]

[1, 3]
[0, 4]
[0, 4]
[0, 4]
*/
