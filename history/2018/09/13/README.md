> # Daily-Front-End-News

[![cover][img]][link]

[img]: https://github.com/fengshangwuqi/Daily-Front-End-News/blob/master/history/2018/09/13/cover.jpg "HHVM 将停止支持 PHP"
[link]: https://hhvm.com/blog/2018/09/12/end-of-php-support-future-of-hack.html

## 前端

- [浏览器输入 URL 后发生了什么](https://zhuanlan.zhihu.com/p/43369093)：这是一道非常经典的题目，没有固定的答案，涉及计算机图形学、操作系统、编译原理、计算机网络、通信原理、分布式系统、浏览器原理等多个不同的学科、领域。但无论从哪个领域入手，软件角度或硬件角度，铺开来讲都可以是长篇大论；

## 微前端

- [用微前端的方式搭建类单页应用](https://juejin.im/post/5b921b415188255c9031b0c3)：微前端由 ThoughtWorks 2016 年提出，将后端微服务的理念应用于浏览器端，即将 Web 应用由单一的单体应用转变为多个小型前端应用聚合为一的应用；

## 开源项目

- [WatermelonDB：下一代功能强大的 React 和 React Native APP 的数据库](https://github.com/Nozbe/WatermelonDB)：WatermelonDB 特地为复杂的 React 和 React Native APP 做了优化，首要目标就是性能，换句话说就是要快速启动。当应用简单时，可以使用 Redux 或者 Mobx，但如果扩展到数千或数万个数据库记录，应用程序启动速度会受到很大影响，尤其在速度较慢的 Android 设备上，将完整的数据库加载到 JavaScript 代价巨大。WatermelonDB 的解决方案就是延迟加载，并且因为所有查询都是以单线程的方式直接在 SQLite 数据库上执行，所以即使在较慢的 Android 设备上，大多数查询也会在不到 1 毫秒的时间内解析，即使有 10000 条记录；

## 其他

- [HHVM 将停止支持 PHP](https://hhvm.com/blog/2018/09/12/end-of-php-support-future-of-hack.html)：Facebook 开发的 PHP 执行引擎 HHVM 宣布将停止支持 PHP，以后只支持 Facebook 自已的 Hack 语言。现在不好判断这对 PHP 有什么影响。很清楚的一点是，大公司越来越倾向于用自己的语言：谷歌有 go 和 dart，苹果有 swift，微软有.net 和 TS，Facebook 有 Hack；
