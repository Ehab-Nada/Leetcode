/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if(s1 === s2)
        return true
    let st1 = s1.split('').sort().join()
    let st2 = s2.split('').sort().join()
    if(st1 !== st2)
        return false
    let c = 0
    for(i in s1){
        if(s1[i]!==s2[i]){
            c+=1
        }
    }
    return c === 2
};