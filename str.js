// Arrays
let arr = Array(4);
arr[0] = 40
arr[1] = 50
arr[2] = 60
arr[3] = 70
const num = [43,56,34,4,4]
const num2 = new Array(2,4,53,4,9,0,5)
const values = [...num, num2] 
//num.map( (d) => console.log(d) )
//num2.map( (d) => console.log(d) )
values.map((v)=> console.log(v))

const mixed = [22,"hello", true, undefined, null]
console.log(mixed);

let val;

//get array length 
val = num.length
val = Array.isArray(num)
// get a single value 
val = num[3]
// insert or replace 
num[2]= 100;
// finding index value 
val  = num.indexOf(100)

// mutatting array
num.push(440)
// add to the front of the array
num.unshift(49)

// remove the value from the last
num.pop()
// romove the value front of the array
num.shift()
// splicing
num.splice(1,3)

/// reverse the array 
val = num.concat(num2)
// .reduce((s, d) => console.log(d))

// sorting
val = num2.sort(
    function(x,y) {
        return x-y
    }
);
console.log(val);

val = num2.sort(function(x, y){
    return y-x
});
console.log(num);
console.log(val);




