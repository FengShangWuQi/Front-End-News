> # Daily-Front-End-News

[![cover][img]][link]

[img]: https://github.com/fengshangwuqi/Daily-Front-End-News/blob/master/history/2018/07/08/feather.jpg "feather"
[link]: https://feather-apps.com/

## 前端

- [一个 Vue 页面的内存泄露分析](https://zhuanlan.zhihu.com/p/38448752)：什么是内存泄露？内存泄露是指 new 了一块内存，但无法被释放或者被垃圾回收。new 了一个对象之后，它申请占用了一块堆内存，当把这个对象指针置为 null 时或者离开作用域导致被销毁，那么这块内存没有人引用它了在 JS 里面就会被自动垃圾回收。但是如果这个对象指针没有被置为 null，且代码里面没办法再获取到这个对象指针了，就会导致无法释放掉它指向的内存，也就是说发生了内存泄露；

## 移动端

- [移动端跨平台开发的深度解析](移动端跨平台开发的深度解析)：跨平台一直是老生常谈的话题，cordova、ionic、react-native、weex、kotlin-native、flutter 等跨平台框架的百花齐放，颇有一股推倒原生开发者的势头。（事实上更多是共存发展）看完本篇，相信你会对于当下跨平台移动开发的现状、实现原理、框架的选择等有更深入的理解；

## 工具

- [feather](https://feather-apps.com/)：有人为 Flutter 写了 Windows 和 Mac 的渲染器。也就是说，Flutter 写好的 App 不仅能在手机上跑，现在还能在桌面跑。理论上，Flutter 能在任何操作系统运行，它是一套原生控件，只要能编译出来，就能运行；

## 开源项目

- [2018 成为 React 开发者的路线图](https://github.com/adam-golab/react-developer-roadmap)：该仓库旨在给想在 2018 成为 React 开发者的同学一些提示；
