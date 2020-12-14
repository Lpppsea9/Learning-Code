//具名导出

export let site = "后盾人"; //导出变量要有名字

export function show() {    //导出变量要有名字
    return "show function";
}

export class User{          //导出类要有名字
    static render() {
        return 'user static render';
    }
}

//也可以将上面的expoet去掉，放在下面一起导出
// export { site, show, User };