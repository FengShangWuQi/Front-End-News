
> # Daily-Front-End-News

[![anime](https://github.com/fengshangwuqi/Daily-Front-End-News/blob/master/history/2018/06/22/anime.jpg)](http://animejs.com/)

## 前端

- [JavaScript 的 this 原理](http://www.ruanyifeng.com/blog/2018/06/javascript-this.html)：本文通过一个简单的示例为大家详细阐释了 this 的原理：obj.foo() 是通过 obj 找到 foo，所以就是在 obj 环境执行。一旦 var foo = obj.foo，变量 foo 就直接指向函数本身，所以 foo() 就变成在全局环境执行；

## 后端

- [结合源码分析 Node.js 模块加载与运行原理](http://efe.baidu.com/blog/nodejs-module-analyze/)：在 Node.js 中使用模块非常简单，我们日常开发中几乎都有过这样的经历：写一段 JavaScript 代码，require 一些想要的包，然后将代码产物 exports 导出。但是，对于 Node.js 模块化背后的加载与运行原理，我们是否清楚呢。首先抛出以下几个问题：Node.js 中的模块支持哪些文件类型？核心模块和第三方模块的加载运行流程有什么不同？除了 JavaScript 模块以外，怎样去写一个 C/C++ 扩展模块？本篇文章，就会结合 Node.js 源码，探究一下以上这些问题背后的答案；

## 开源项目

- [anime：一个 JavaScript 动画引擎](http://animejs.com/)：一个轻量级的 JavaScript 动画库，它适用于任何 CSS 属性，单个 CSS transforms，SVG 或任何 DOM 属性以及 JavaScript 对象；

## 阅读

- [玩大了！ 阿里工程师的年会竟然这样搞](http://t.cn/Rrz78Nj)：这是阿里巴巴信息平台一群 90 后工程师，用两周时间开发的一套年会开场秀系统：观众在经过人脸识别后，系统会根据人脸表情特征，识别出观众的花名（名字）与微笑指数，同时吐出一句“评语”。当笑容越灿烂，评价就会越高。同时通过技术手段，这些信息还会上屏展示与互动；
