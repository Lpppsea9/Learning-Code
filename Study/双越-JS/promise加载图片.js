const url1 = 'https://img3.sycdn.imooc.com/5f1e975c000114da05180518-140-140.jpg'
const url2 = 'https://img4.sycdn.imooc.com/szimg/5eddd7aa09cfdb1c12000676-360-202.png'


function loadImg(src) {
    const p =  new Promise(
        (resolve,reject) => {
            const img = document.createElement('img')
            img.onload = () => {
                resolve(img)
            }
            img.onerror = () => {
                const err = new Error(`图片加载失败 ${src}`)
                reject(err)
            }
            img.src = src
        }
    )
    return p
}

loadImg(url1).then(img1 => {
    console.log(img1.width);
    return img1 // 普通对象
}).then(img1 => {
    console.log(img1.height);
    return loadImg(url2) //promise 实例
}).then(img2 => {
    console.log(img2.width);
    return img2
})