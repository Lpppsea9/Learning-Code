Function.prototype.mycall = function (context) {
  if (typeof this !== "function") {
    console.log("type error");
  }
  let args = [...arguments].slice(1);
  let result = null;
  context = context || window;
  context.fn = this;
  result = context.fn(...args);
  delete context.fn;

  return result
}

Function.prototype.myapply = function (context) {
  if (typeof this !== "function") {
    console.log("error");
  }
  let result = null;
  context = context || window;
  context.fn = this;
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn()
  }
  delete context.fn;
  return result;
}

Function.prototype.mybind = function (context) {
  if (typeof this !== "function") {
    console.log("error");
  }

  var args = [...arguments].slice(1),  //传入的参数
    fn = this;  //调用对象的本身
  
  return function Fn() {
    return fn.apply(this instanceof Fn ? this : context,args.concat(...arguments))
  }
}