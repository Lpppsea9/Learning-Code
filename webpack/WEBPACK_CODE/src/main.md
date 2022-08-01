- hmr

- oneOf

- include 和 exclude 只处理或排除某些文件 只针对 js

- cache 提升第二次及以后的打包速度

  - cacheDirectory: true, // 开启 babel 缓存
  - cacheCompression: false, // 关闭缓存文件压缩(压缩也需要时间，压缩文件用不到，不管大小)
  - 在 node_modules 目录下

- Thread 对 js 文件处理主要是 eslint babel Terser，可以开启多进程打包

- Tree Shaking 通常用于描述移除 javascript 中没有用到的代码， 依赖于 Es-module webpack 已经默认开启这个功能

- babel/plugin-transform-runtime Babel 为编译的每个文件都插入了辅助代码，使代码体积过大！可以禁用了 Babel 自动对每个文件的 runtime 注入

### 优化代码提升性能

1.  Code Split (动态 import)

2.  Preload/Prefetch
    告诉浏览器立即加载资源 告诉浏览器在空闲时才开始加载资源

- 共同点:

  - 只会加载资源，并不执行
  - 都有缓存

- 区别:

  - Preload 加载优先级高，Prefetch 加载优先级低
  - Preload 只能加载当前页面需要使用的资源， Prefetch 可以加载当前页面资源，也可以加载下一个页面需要使用的资源

- 总结

  - 当前页面优先级高的资源用 Preload 加载
  - 下一个页面需要使用的资源用 Prefetch 加载

- 他们的问题：兼容性较差
  - 我们可以去 [CanIUse](https://caniuse.com/) 网站查询 API 的兼容性问题
  - Preload 相对于 Prefetch 兼容性好一点(IE 不兼容)
  - image.png

3. Network Cache

- 缓存配置 contenthash runtimeChunk

4. Core.js
   core.js 是专门用来做 ES6 以及以上 API 的 polyfill
   polyfill 翻译过来叫做 垫片/补丁。就是用社区上提供的一段代码，让我们在不兼容某些新特性的浏览器上，使用该新特性
