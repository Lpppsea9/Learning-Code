function muti(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num * num)
        }, 1000)
    })
}

const nums = [1,2,3]

// nums.forEach(async (i) => { //forEach是同步的遍历
//     const res = await muti(i)
//     console.log(res);
// })

!(async function(){
    for(let i of nums) {
        const res = await muti(i)
        console.log(res);
    }
})()

