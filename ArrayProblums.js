//printReverse()

var printReverse = [1,2,3,4];
console.log(printReverse.reverse());
//printReverse() letters
var printReverse2 = ["a", "b", "c"];
console.log(printReverse2.reverse());

//isUniform() 1

var isUniform = [1,1,1,1];


function checkForDuplicates(arr){
var x = arr[0];
for(var i=1;i<arr.length;i++){
    if(x!=arr[i]){return 'False'}
    }
return 'True';
}
console.log(checkForDuplicates(isUniform));

//isUnifrom() 2

var isUniform2 = [2,1,1,1];

function checkForDuplicates(arr){
var x = arr[0];
for(var i=1;i<arr.length;i++){
    if(x!=arr[i]){return 'False'}
    }
return 'True';
}
console.log(checkForDuplicates(isUniform2));

//isunform3

var isuniform3 = ["a", "b", "p"];

function checkForDuplicates(arr){
var x = arr[0];
for(var i=1;i<arr.length;i++){
    if(x!=arr[i]){return 'False'}
    }
return 'True';
}
console.log(checkForDuplicates(isuniform3));

//isuniform4

var isuniform4 = ["b", "b", "b"];

function checkForDuplicates(arr){
var x = arr[0];
for(var i=1;i<arr.length;i++){
    if(x!=arr[i]){return 'False'}
    }
return 'True';
}
console.log(checkForDuplicates(isuniform4));

//sumArray()
var sumArray1 = [1,2,3];
var reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(sumArray1.reduce(reducer));

//sumArray()2

var sumArray2 = [10,2,10,4];
var reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(sumArray2.reduce(reducer));

//sumArray()2

var sumArray3 = [-5,100];
var reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(sumArray3.reduce(reducer));

//max()1

var array1 = [1,2,3];

console.log(Math.max(...array1));

//max()2

var array1 = [10,3,10,4];

console.log(Math.max(...array1));

//max()3

var array1 = [-5,100];

console.log(Math.max(...array1));