/* 
Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

Constraints:

Time Complexity: O(log N)
*/ 

const countZeroes = (arr) => {
    // initialize count and targetVal at 0 
    let count = 0
    let targetValue = 0
    // linear search 
    // loop through entire array 
    for(let i = 0; i < arr.length; i++) {
        // if arr[i] is === value then increase count +1 
        if(arr[i] === targetValue) {
            count += 1 
        }
    }
    // return count
    return count 
}

console.log(countZeroes([1,1,1,1,0,0]))
console.log(countZeroes([1,0,0,0,0]))
console.log(countZeroes([0,0,0])) 
console.log(countZeroes([1,1,1,1]))

// const countOnes = (arr) => {
//     let count = 0 
//     let targetValue = 1 
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === targetValue) {
//             count += 1
//         }
//     }
//     return count 
// }

// console.log(countOnes([1,1,1])) 
// console.log(countOnes([1,2,3,4,1,1])) 

module.exports = countZeroes