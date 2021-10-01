/* 
Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

Constraints:
Time Complexity: O(log N)
*/

//  L     M     R
// [1,1,2,2,2,2,3] 

const sortedFrequency = (arr, num) => {
    // binary search 

    // declare vars: 
    // - left at 0
    // - right at arr.length - 1 
    // - midIdx 
    // - midValue 
    let left = 0
    let right = arr.length - 1 
    let midIdx
    let midValue 

    while(left <= right) {
        // get the midpoint IDX
        midIdx = Math.floor((left + right) / 2)
        // get the mid val 
        midValue = arr[midIdx] 

        // check if midValue >= num 
        if(midValue >= num) {
            // midValue is greater than right, so check numbers on the left of midValue 
            right = midIdx - 1 
        } else {
            // check numbers on the right of midValue 
            left = midIdx + 1 
        }
    }

    const firstIdx = midValue === num ? midIdx : midIdx + 1 

    left = 0
    right = arr.length - 1 
    while(left <= right) {
        midIdx = Math.floor((left + right) / 2)
        midValue = arr[midIdx] 

        if(midValue > num) {
            right = midIdx - 1  
        } else {
            left = midIdx + 1 
        }
    }

    const lastIdx = midValue === num ? midIdx : midIdx - 1 

    return lastIdx - firstIdx + 1; 

}

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3))

module.exports = sortedFrequency