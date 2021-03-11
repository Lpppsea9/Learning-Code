//1. 引入express
const express = require('express')

//2.创建应用对象
const app = express();

//3.创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置响应体
    response.send('HELLO AJAX--2')
});

//可以接受任意类型的请求
app.all('/server', (request, response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    response.send('HELLO AJAX POST');
});

app.all('/server-json', (request, response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    const data = {
        name: 'LPPPP'
    }
    let str = JSON.stringify(data);
    response.send(str);
});

//ie缓存问题
app.get('/ie', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send('HELLO IE --5')
});

//延时响应
app.get('/delay', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*')
    //加个定时器
    setTimeout(()=>{
        response.send('请求超时与网络异常')
    }, 3000);
});

//jQuery 服务
app.all('/jquery-server', (request, response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //允许自定义头部
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Max-Age','60')
    const data = { name: 'Lppp' };
    response.send(JSON.stringify(data));
    // setTimeout(()=>{
    //     const data = { name: 'LPPP' };
    //     response.send(JSON.stringify(data));
    // },1000)
    
});

//axios 服务
app.all('/axios-server', (request, response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //允许自定义头部
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {name: 'Lppp'};
    response.send(JSON.stringify(data));
});

//fetch 服务
app.all('/fetch-server', (request, response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //允许自定义头部
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {
        name: 'Lppp'
    };
    response.send(JSON.stringify(data));
});

//jsonp 服务
app.all('/jsonp-server', (request, response) => {
    // response.send('console.log("hello jsonp")')
    const data = {
        name: '刘大烘'
    };
    //将数据转换成字符串   
    let str = JSON.stringify(data);
    //返回结果
    response.end(`handle(${str})`)
});

//用户名检测是否存在
app.all('/check-username', (request, response) => {
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    };
    //将数据转化成字符串
    let str = JSON.stringify(data);
    response.send(`handle(${str})`)
});


//CORS跨域
app.get('/cors-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('CORS-server')
});

//4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中....");
})