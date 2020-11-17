//数组 slice 和 splice 的区别
//[10,20,30].map(parseInt)返回结果
//ajax 请求 get 和 post 的区别

const arr = [1, 5, 6, 8, 7]

// //1. slice 纯函数 //第二个参数是下标!!!!!
// const arr1 = arr.slice()
// const arr2 = arr.slice(1,4)
// const arr3 = arr.slice(2) //截到最后
// const arr4 = arr.slice(-2) //截最后两个，-3就是三个

// //splice 非纯函数 //第二个参数是长度!!!!!
// const spliceRes1 = arr.splice(1,3,'a','b','c') //剪切加替换
// const spliceRes2 = arr.splice(1,3) //纯剪切
// const spliceRes3 = arr.splice(1,0,'a','b','c') //纯替换

// console.log(spliceRes,arr);


// 2. [10,20,30].map(parseInt)

// 思考？ map的参数和返回值
// parseInt 参数和返回值

const res = [10, 20, 30].map(parseInt)
console.log(res);

//拆解，考察map函数的意思
[10, 20, 30].map((num,index) => {
    return parseInt(num, index)
})
//map 参数是函数，返回一个数组

//ajax 请求get 和 post的区别

//get 一般用于查询操作，post 一般用户提交操作
//get 参数拼接在 url 上，post放在请求体内(数据体积可更大)
//安全性：post 易于防止 CSRF