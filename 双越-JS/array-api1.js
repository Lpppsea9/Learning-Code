let arr = [1,2,3,4,50]
// //pop 不传参
// const popA = arr.pop() // 返回的是抛出的数
// console.log(popA,arr);
//原数组最后一个数被抛出

// push 传参
// const pushA = arr.push(60) //返回的是一个length
// console.log(pushA,arr);
//返回现数组的长度，原数组被添加一个数值

// unshift 传参
// const unshiftA = arr.unshift(5) //返回一个length
// console.log(unshiftA,arr);
//返回现数组的长度，原数组开头被插入一个数组

// shift 不传参
// const shiftA =arr.shift() //返回的是被删除的数
// console.log(shiftA,arr);
//原数组第一个数被删除


//扩展，哪一些数组的API是纯函数？
//1. 不改变原数组(没有副作用) 2.返回一个数组

//concat
const arr1 = arr.concat([2,5,6])
console.log(arr);
console.log(arr1);

//map
const arr2 = arr.map(num => num*10)
console.log(arr);
console.log(arr2);

//filter
const arr3 = arr.filter(num => num > 3)
console.log(arr);
console.log(arr3);

//slice
const arr4 = arr.splice()
console.log(arr);
console.log(arr4);

// 非纯函数
// push pop shift unshift
// forEach
// some every
// reduce


