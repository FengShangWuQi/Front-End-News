> # Daily-Front-End-News

[![cover][img]][link]

[img]: https://github.com/fengshangwuqi/Daily-Front-End-News/blob/master/history/2018/07/15/vue-handbook.jpg "Vue 手册：全方位了解 Vue"
[link]: https://medium.freecodecamp.org/the-vue-handbook-a-thorough-introduction-to-vue-js-1e86835d8446

## 前端

- [React 转微信小程序：双模板联动](https://zhuanlan.zhihu.com/p/39609588)：小程序封死了操作 DOM 的可能性，并且也不让我们操作视图，所有与视图有关的东西一律接触不了。而它的自定义组件是非常恶心，基本不配叫组件，不能继承叫什么组件。因此我们使用它更早期的动态模板技术：template。作者思路如下，通过编译组件的 render 方法，将里面的自定义组件变成 template 类，然后在 template 类中自己初始化，得到 props, state 再传给小程序的 template 标签；

## TypeScript

- [如何用 TypeScript 构建更好的 React 应用程序](https://blog.bitsrc.io/how-to-use-typescript-to-build-better-react-applications-e8e6086d2cae)：将 TypeScript 和 React 一同使用，会大大提高开发体验。TypeScript 允许你以 type 接口的形式定义复杂的定义。当你要在应用程序中使用复杂的 type（例如包含其他属性的对象）时，会进行严格的审查，减少了可能产生的错误。在这篇文章中，作者将向您展示如何使用 TypeScript 改进 React 应用程序的代码；

## Vue

- [Vue 手册：全方位了解 Vue](https://medium.freecodecamp.org/the-vue-handbook-a-thorough-introduction-to-vue-js-1e86835d8446)：Vue 由于简单性能好，正逐渐受到很多开发者的青睐。本篇文章介绍了 Vue 的基本特点、如何构建 Vue 应用程序、深入了解 Vue CLI、Vue 组件、使用 Vuex 管理状态、使用 Vue Router 处理 URL 等 20 多个内容，Vue 的初级开发者可点进原文链接自取；

## 新闻

- [在最新测试中 Chrome 打败 Edge 和 Firefox](https://www.solidot.org/story?sid=57203)：VentureBeat 测试了三大主流浏览器 Chrome、Edge 和 Firefox，在九项测试中，Chrome 领先了四项，Edge 为三项，而 Firefox 为两项，但值得一提的是 Firefox 虽然只赢了两项，但九项测试没有一次屈居第三，三大浏览器的性能看起来其实在伯仲之间，用户未必能感知其中的性能差异。Edge 在 SunSpider、JetStream 和 MotionMark 测试中领先，而 Chrome 领先的测试包括 Octane、Speedometer、BaseMar 和 HTML5Test，Firefox 在 Kraken 和 WebXPRT 两项测试中领先；
