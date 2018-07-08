
> # Daily-Front-End-News

[![cover][img]][link]

[img]: https://github.com/fengshangwuqi/Daily-Front-End-News/blob/master/history/2018/07/05/cartoonify.jpg "danmacnish/cartoonify"
[link]: https://github.com/danmacnish/cartoonify

## 前端

- [WebAssembly 现状与实战](https://www.ibm.com/developerworks/cn/web/wa-lo-webassembly-status-and-reality/index.html)：WebAssembly 并不是一门编程语言，而是一份字节码标准，需要用高级编程语言编译出字节码放到 WebAssembly 虚拟机中才能运行， 浏览器厂商需要做的就是根据 WebAssembly 规范实现虚拟机。本文重点介绍如何使用 AssemblyScript 来编写 WebAssembly；

## 移动端

- [React Native 性能优化总结](https://github.com/amandakelake/blog/issues/49)：作者最近在进行 RN 项目重构，通过查阅各种资料，从 RN 底层出发，思考总结了一些从 react 到 react-native 的性能优化相关问题。作者总结了 RN 性能核心优化点主要体现在首屏渲染优化、UI 更新优化和其他方面（代码层面）；

## 开源项目

- [danmacnish/cartoonify](https://github.com/danmacnish/cartoonify)：很有创意的一个发明 -- 自制的“拍立得”照相机，拍出来的不是照片，而是卡通图片！它的内部是摄像头+树莓派+热敏打印机。获得照片以后，自动调用谷歌的服务，处理成卡通图片，然后打印出来；

## 其他

- [Firefox 和 Chrome 下架流行扩展 Stylish](https://www.solidot.org/story?sid=57084)：用户样式管理器 Stylish 是一个非常受欢迎的浏览器扩展，但在被多次转手之后，这个扩展开始变得恶意了。软件工程师 Robert Heaton 对其代码进行分析后指出，Stylish 窃取了用户所有的浏览历史。在收到报告之后，Firefox 和 Chrome 从其各种的扩展网站移除了 Stylish，Firefox 还建议所有用户禁用该扩展。想要继续使用自定义样式的用户可选择安装 Stylish 的分支 Stylus（ Google Chrome）；