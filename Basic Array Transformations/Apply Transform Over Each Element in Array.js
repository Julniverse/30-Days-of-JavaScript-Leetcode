/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const resultArray = new Array(arr.length);

    for  (let i = 0; i < arr.length; i++) {
        resultArray[i] = fn(arr[i],i);
    } 
    return resultArray;
};