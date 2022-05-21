/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let min= {
        d:-1,
        i:-1,
    }
    let dis;
    for(let i=0 ; i<points.length ; i++){
        if(x===points[i][0] || y===points[i][1]){
                   dis = (Math.abs(x-points[i][0])+Math.abs(y-points[i][1]))
       if(min.i===-1){
           min.d = dis
           min.i = i
       }
       if(min.d > dis){
           min.d = dis
           min.i = i
       }
           
           }

    }
    return min.i
};