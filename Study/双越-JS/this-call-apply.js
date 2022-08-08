function fn1() {
    console.log(this);
}
fn1()

fn1.call({b:100})
fn1.call({b:200},{c:300})

const zhangsan = {
    name:'张三',
    sayHi(){
        console.log(this);
    },
    wait() {
        setTimeout(() => {
            console.log(this);
        }, 1000);
    }
}

zhangsan.sayHi()
zhangsan.wait()