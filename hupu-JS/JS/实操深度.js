// 解决以下异步代码问题 -- 深度。

function fetchData(x) {
    return new Promise( /* SDK Code Hidden */ )
}

function renderPage(dataArr) {
    console.log(dataArr);
}
// 业务需求：10次并发请求，满足要求后渲染
someButton.addEventListener('click', () => {
    fetchAndRenderPage(10)
        .then(_ => console.log('render ok'), e => console.error(e))
})
// 问题一：n次并发请求，且有一次正确返回即可渲染
// 问题二：指定n次串行请求，失败n次以内皆可渲染
// 问题三：n次并发请求(n≥3)，其中有3次正确返回才可渲染
function fetchAndRenderPage(n) { 
    
}

Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        // 遍历所有promise获取每个promise的结果
        promises.forEach((p, index) => {
            p.then(
                value => { //成功的回调
                    // 一旦有成功了，将return变为成功
                    resolve(value)
                },
                reason => { //失败的回调
                    // 一旦有失败了，将return
                    reject(reason)
                }
            )
        })
    })
}