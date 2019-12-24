> # Daily-Front-End-News

## 前端

- [彻底理解浏览器的缓存机制](http://suo.im/4VDKUx)：强制缓存优先于协商缓存进行，若强制缓存(Expires 和 Cache-Control)生效则直接使用缓存，若不生效则进行协商缓存(Last-Modified / If-Modified-Since 和 Etag / If-None-Match)，协商缓存由服务器决定是否使用缓存，若协商缓存失效，那么代表该请求的缓存失效，重新获取请求结果，再存入浏览器缓存中，生效则返回 304，继续使用缓存；

## 阅读

- [Oracle 发布通用型虚拟机 GraalVM 1.0，支持多种编程语言](http://www.10tiao.com/html/773/201804/2247487702/1.html)：Oracle 发布了一个很神奇的产品 GraalVM，我们知道，Java 最厉害的就是它的虚拟机 JVM，现在这个虚拟机扩展成可以支持多种语言，不同语言都可以被它编译成字节码，然后运行；

## CSS

- [CSS 如何实现内凹角效果](https://www.w3cplus.com/css/scooped-corners.html?from=timeline&isappinstalled=0)：本文作者带领大家实现内凹角效果，并分享中途踩过的一些坑；

## 招聘

- [今日头条商业产品前端团队招聘公告](http://suo.im/4O7xGu)：；北京今日头条招聘高级 web 前端开发工程师和 web 前端开发实习生；
