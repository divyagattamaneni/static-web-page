let array=['java','html','javascript','expressjs','nodejs']
var tast=array.filter(function(value,index,array){
console.log(array)
console.log(index)
console.log(value)
return array.indexOf(value)==index;
})
console.log(tast);
let[...t]=new setInterval(array);
console.log(t)