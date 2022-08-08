// 解释jsonp的原理，为何它不是真正的ajax？
// document load 和 ready 的区别
// == 和 === 的不同



// 1. 服务端，ngix是不是跨域？叫转发
    // 浏览器的同源策略 (服务端没有同源策略) 和跨域
    // 哪些html标签能绕过跨域？ img的src 和 script 
    // jsonp 的原理(不是一个真正的ajax，因为他没有真正用的=到           XMLhttpRequest这个API，他是一个js加载的变种方案，要实现跨域，必须要受到服务端的支持和允许才可以)

// 2. 
    //load
    window.addEventListener('load', function(){})
    // 页面的全部资源加载完才会执行，包括图片、视频等


    //ready 即 DOMcontentLoaded
    document.addEventListener('DOMContentLoaded', function(){
        // DOM渲染完即可执行，此时图片、视频可能没有加载完
    })


// == 会尝试类型转换
// === 严格相等
// 哪些场景采用==

