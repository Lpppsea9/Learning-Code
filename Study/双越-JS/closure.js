// 函数作为返回值

function create() {
    let a = 100
    return function () {
        console.log(a);
    }
}

const fn1 = create();
const a = 200;
fn1()


// 函数作为参数

function print(fn) {
    let b = 200
    fn2()
}

let b = 100;
function fn2() {
    console.log(b);
}

print(fn2)