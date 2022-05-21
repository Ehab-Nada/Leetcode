/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let distance=null;
let result=[];
points.forEach(p=>{
if(p[0] === x || p[1] === y) {

 let md= Math.abs(x-p[0]) + Math.abs(y-p[1])
 
 if(distance === null){
     distance=md
     result.push(points.indexOf(p))
 }else if (distance==md){
     distance=md;
     result.push(points.indexOf(p));
     
 }else if (distance>md){
     distance=md;
     result=[];
     result.push(points.indexOf(p));
 }
 }    }
           )
return result.length ? Math.min(...result) : -1;
    
};