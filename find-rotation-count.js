/*
Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

Constraints:
Time Complexity: O(log N)
*/ 

const findRotationCount = (arr) => {

    // linear search 
    for(let i = 0; i < arr.length; i++) {
        // "n" is not given...  
        if(arr[i] <= arr[arr.length - 1]) {
            return i
        }
    }
}

console.log(findRotationCount([15,18,2,3,6,12]))
console.log(findRotationCount([7,9,11,12,5])) 

module.exports = findRotationCount