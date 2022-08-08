function fn1(a,b,c){
    console.log('this1',this);
    console.log(a,b,c);
    return 'this is fn1'
}

const fn2 = fn1.bind({x:100}, 10, 20, 30)
const res = fn2()
console.log(res);

//模拟 bind
// Function.prototype.bind1 = function () {
//     // 将参数拆解为数组
//     const args = Array.prototype.slice.call(arguments)

//     //获取 this
//     const t = args.shift()

//     //fn1.bind(...) 中的fn1
//     const self = this

//     //返回一个函数
//     return function() {
//         return self.apply(t,args)
//     }
// }









Function.prototype.mybind = function () {
    const args = Array.prototype.slice.call(arguments)
    const t = args.shift()
    const self = this
    return function () {
        return self.apply(t,args)
    }
}