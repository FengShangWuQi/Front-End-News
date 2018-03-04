
> # Daily-Front-End-News

## CSS

- [atomiks/30-seconds-of-css](https://github.com/atomiks/30-seconds-of-css)：从 [30 seconds of code](https://github.com/Chalarangelo/30-seconds-of-code) 受到启发，有用的 CSS 代码片段诞生了。

## Node 

- [npm v5.7.0 发布](https://nodejs.org/en/blog/release/v9.7.0/)：该版本带来了很多令人激动的新特性与错误修复，引入 package-lock.json 文件的自动合并功能；引入新的 ci 命令，其仅会安装 lock 文件中的依赖项，并且会在 package.json 与 lock 文件不一致的时候抛出错误，该命令相较于 npm install 有 2 ~ 10 倍的性能速度提升，能够极大优化目前的 CI 持续集成流程。

## React
- [提高 React 应用性能要知道的 4 个库](https://javascriptreport.com/four-libraries-to-improve-the-performance-of-your-react-app/)：本文介绍了作者发现的提高 React 性能的 4 个库，主要是启动性能，比如页面加载等。

## webpack

- [webpack 4 正式发布](https://medium.com/webpack/webpack-4-released-today-6cdb994702d4)：新增 mode 配置项，webpack 4 更快，构建速度得到极大的提升；废弃并移除了 CommonsChunkPlugin，使用默认值及 optimize.splitChunks 来代替；提供更多的类型支持。
