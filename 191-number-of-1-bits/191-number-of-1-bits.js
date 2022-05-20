/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    const bin = binary(n)
    let c=0;
    for(let i=0;i<=bin.length;i++)
        if(bin[i]==='1')
            c = c + 1
    return c
};
const binary =(n)=>{
    if (n > 0) {
        return binary( parseInt(n / 2) ) + (n % 2)
    };
    return '';
}