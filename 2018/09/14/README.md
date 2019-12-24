> # Daily-Front-End-News

[![cover][img]][link]

[img]: https://github.com/fengshangwuqi/Daily-Front-End-News/blob/master/history/2018/09/14/cover.jpg "Yarn Plug'n'Play: 摆脱 node_modules"
[link]: https://github.com/yarnpkg/rfcs/pull/101

## 前端

- [Yarn Plug'n'Play: 摆脱 node_modules](https://github.com/yarnpkg/rfcs/pull/101)：Yarn 将有一个新功能，可以彻底摆脱 node_modules 目录。实现很简单，就是所有 Node 应用的依赖都放在一个中央缓存里面。每个项目不再有自己的 node_modules，而会多一个.pnp.js 文件，里面列出依赖的版本，直接读缓存；

## V8

- [V8 十年故事：从农场诞生的星球最强 JS 引擎](https://mp.weixin.qq.com/s/Z2nm2wYC5GV6OadcgKcPbA)：这个月不仅有谷歌 Chrome 的十岁生日，也有 V8 的十周年纪念日。这篇文章将为你讲述 V8 在过去 10 年中经历的主要里程碑，以及在它诞生之前的那些秘密的岁月；

## CSS

- [styled-components v4 测试版发布：原生支持 ref，性能提升 25%](https://mp.weixin.qq.com/s/SKzIXO8DeBH5Gy48RnYuZw)：近日，styled-components v4 正式发布测试版，新版本的主要包括文件更小，全新的 createGlobalStyle API，支持“as” prop，与 React v16 完全兼容的 StrictMode，原生支持 ref 等特性，为了确保人们有足够的时间进行压力测试，测试版时间约为 1 个月；

## 性能优化

- [前端性能优化—js 代码打包](https://juejin.im/post/5b9550806fb9a05cff31f7b3)：现在的 web 应用，内容一般都很丰富，站点需要加载的资源也特别多，尤其要加载很多 js 文件。js 文件从服务端获取，体积大小决定了传输的快慢；浏览器端拿到 js 文件之后，还需要经过解压缩、解析、编译、执行操作，所以，控制 js 代码的体积以及按需加载对前端性能以及用户体验是十分的重要。本文从 Tree Shaking 和 代码分割 两部分介绍 js 打包优化
