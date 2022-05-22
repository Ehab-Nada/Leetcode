/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let p=1;
    for(i of nums)
        p*=i;
    if(p>0)
        return 1
    if(p<0)
        return -1
    return 0
};