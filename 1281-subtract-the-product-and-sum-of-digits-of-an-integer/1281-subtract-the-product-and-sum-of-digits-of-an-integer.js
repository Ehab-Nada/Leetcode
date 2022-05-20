/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let st = n.toString()
    let sum = 0
    let p = 1
        for(let i of st){
            sum+=+i;
            p*=+i
        }
    return p-sum
};