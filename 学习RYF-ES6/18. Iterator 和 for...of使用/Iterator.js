/* 
  Iterator的作用有三个:
  Iterator的遍历过程:
*/

// 模拟 next 方法返回值的例子
//1. Iterator(遍历器)的概念
function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function () {
      return nextIndex < array.length ?
        { value: array[nextIndex++], done: false } :
        { value: undefined, done: true}
    }
  } 
}

// 对于遍历器对象来说, done: false 和 value: undefined属性都是可以省略的.
// 可以简写成以下格式
function makeIteratorSimp(array) {
  var nextIndex = 0;
  return {
    next: function () {
      return nextIndex < array.length ?
        { value: array[nextIndex++] } :
        { done: true }
    }
  }
}

function idMaker() {
  var index = 0;

  return {
    next: function () {
      return {value: index++, done: false}
    }
  }
}

var it = makeIteratorSimp(['a', 'b'])
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

//2. 默认 Iterator 接口
/* 
Iterator 接口的目的，就是为所有数据结构，提供了一种统一的访问机制，即
for...of循环。当使用for...of循环遍历某种数据结构时，该循环会自动去寻找
Iterator 接口
*/

let testList = [1, 2, 3]
// console.log(testList.constructor === Array);
function Foo() {
  console.log("我是Foo");
}

// let Na = new Foo()

const aFunc = new Function()
console.log(aFunc);