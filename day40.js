// input
const obj = [
  {
    key: "Sample1",
    data: "Data1",
  },
  {
    key: "Sample1",
    data: "Data2",
  },
  {
    key: "Sample1",
    data: "Data3",
  },
  {
    key: "Sample2",
    data: "Data4",
  },
  {
    key: "Sample3",
    data: "Data3",
  },
  {
    key: "Sample4",
    data: "Data4",
  },
  {
    key: "Sample5",
    data: "Data3",
  },
  {
    key: "Sample1",
    data: "Data4",
  },
];

const output = {};

obj.forEach((itme) => {
  if (output[itme.key]) {
    // key is avaible
    output[itme.key].push(itme);
  } else {
    output[itme.key] = [itme];
  }
});

console.log(output);

// obj.reduce((pre,cur) =>{
//    if(output[pre.key] != output[cur.key]){
//     //
//     output[pre.key].push(cur)
//    }else{
//     output[pre.key] = [cur]
//    }
// })
// console.log(output);
let num = [3, 5, 5, 53, [9, 9, [7, 8]], 10];
let b = num.toString();
let c = num.join("-");
console.log(c);

// pop will delete last element
let r = num.pop();
console.log(r);
// push  will add the value into last position
num.push(30);
console.log(num);

// shift will remove value from start of the array
num.shift();
console.log(num);

// unshift will add value first in the array
num.unshift(300);
console.log(num);

let u = num.flat(2);
console.log(u);
/// it's call back function
u.forEach((item) => {
  console.log(item);
});

//  for

for (let i = 0; i < u.length; i++) {
   console.log(u[i]);    
}


// map
let dubled = u.map((n) => n+1)
console.log(dubled);


/// fiter

let post = [
    {
        title: 'past 1',
        author: 'cnadn'
    },
    {
        title: 'past 3',
        author: 'cnadn'
    },
    {
        title: 'past 2',
        author: 'chandan'
    }
]


let densPost = post.filter( p => p.author === 'chandan')
console.log(densPost);


// this will count
let totals = u.reduce((total, currentVal) => total+currentVal)
console.log(totals);
