/* 
Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.
*/

//  L        M           R
// [1, 2, 8, 10, 10, 12, 19] x = 9 

const findFloor = (arr, x) => {
    // binary search 

    // declare vars: 
    // - left
    // - right (arr.length - 1) 
    // - floor at -1 
    let left = 0
    let right = arr.length - 1
    let floor = -1 

    while (left <= right) {
        // get the midpoint 
        let mid = Math.floor((left + right) / 2) 
        let midValue = arr[mid] 

        // check if midValue === X 
        if(midValue === x) {
            return midValue
        }

        // check if midValue > x 
        if(midValue > x) {
            // midValue is greater than x, so check numbers on the left of midValue 
            right = mid - 1
        } else {
            // midValue is smaller than x, so we can check number on the right of midValue 
            // floor must be equal to midValue
            left = mid + 1 
            floor = midValue 
        }
    }

    return floor 
    
}

console.log(findFloor([1,2,8,10,10,12,19], 9))
console.log(findFloor([1,2,8,10,10,12,19], 20))

module.exports = findFloor