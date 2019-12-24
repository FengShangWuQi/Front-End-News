> # Daily-Front-End-News

[![cover][img]][link]

[img]: https://github.com/fengshangwuqi/Daily-Front-End-News/blob/master/history/2018/09/12/cover.jpg "Windows 10 拦截用户安装Firefox和Chrome"
[link]: https://www.ghacks.net/2018/09/12/microsoft-intercepting-firefox-chrome-installation-on-windows-10

## 前端

- [精读《REST, GraphQL, gRPC 如何选型》](https://zhuanlan.zhihu.com/p/44140864)：每当项目进入联调阶段，或者提前约定接口时，前后端就会聚在一起热火朝天的讨论起来。可能 99% 的场景都在约定 Http 接口，讨论 URL 是什么，入参是什么，出参是什么。有的团队前后端接口约定更加高效，后端会拿出接口定义代码，前端会转换成（或自动转成）Typescript 定义文件。但这些工作都针对于 Http 接口，今天通过 when-to-use-what-rest-graphql-webhooks-grpc 一文，抛开联调时千遍一律的 Http 接口，一起看看接口还可以怎么约定，分别适用于哪些场景，你现在处于哪个场景；

## JavaScript

- [如何在 JavaScript 中更好地使用数组](https://juejin.im/post/5b8d0a74f265da431d0e7ec0)：本文短小精悍，我保证。在过去的数个月里，我注意到在我审阅的 pull request 中有四个（关于数组使用的）错误经常出现。同时，我自己也会犯这些错误，因此有了这篇文章。让我们一起学习，以确保以后能正确地使用数组方法；

## 开源项目

- [Ky: 基于浏览器 Fetch API 的简洁优雅的 HTTP 客户端](https://github.com/sindresorhus/ky)：Ky 是 github 上新鲜出炉的基于浏览器 Fetch API 的轻量简洁 HTTP 客户端。比起原生 Fetch，它的优势在于：比原生 Fetch 简单，简洁的接口操作，把非 200+的状态都当做 error 处理，请求失败时自动重新尝试，支持 JSON 配置，支持超时操作等。对于不支持 Fetch API 的浏览，你需要 polyfill；

## 其他

- [Windows 10 拦截用户安装 Firefox 和 Chrome](https://www.ghacks.net/2018/09/12/microsoft-intercepting-firefox-chrome-installation-on-windows-10/)：微软不放过任何机会推销自家的浏览器。即将在下个月发布的 Windows 10 更新将包含更多使用 Microsoft Edge 的提示，它会拦截用户安装 Chrome 和 Firefox，提醒用户：你已经有了更快更安全的浏览器 Microsoft Edge？赶快打开 Microsoft Edge 吧，不管，继续安装；
