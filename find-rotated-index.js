/* 
Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

Constraints:
Time Complexity: O(log N)
*/ 

const findRotatedIndex = (arr, num) => {
    // linear search 
    // loop entire array 
    for(let i = 0; i < arr.length; i++) {
        // check if arr[i] === num 
        // return i 
        if(arr[i] === num) return i 
    }
    // else - 1 because it does not exist 
    return -1    
}

console.log(findRotatedIndex([3,4,1,2], 4)) // 1
console.log(findRotatedIndex([6,7,8,9,1,2,3,4], 8)) // 2
console.log(findRotatedIndex([6,7,8,9,1,2,3,4], 3)) // 6

module.exports = findRotatedIndex