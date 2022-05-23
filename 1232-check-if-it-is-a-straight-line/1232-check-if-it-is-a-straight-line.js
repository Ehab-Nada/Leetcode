/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(p) {
    let dy = p[1][1] - p[0][1]
    let dx = p[1][0] - p[0][0]
    for(let i = 2; i < p.length ; i++){
        let dy1 = p[i][1] - p[0][1];
        let dx1 = p[i][0] - p[0][0];
        if(dx1 * dy !== dy1 * dx)
           return false
    }
    return true
};
 