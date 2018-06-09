
> # Daily-Front-End-News

## 前端

- [体验友好的数值输入 "InputMode"](https://css-tricks.com/finger-friendly-numerical-inputs-with-inputmode/)：数值输入框都需要一个数值输入的 UI 界面。在大多数小屏幕手机上，只要把 input的 type 设置为 number，就可以轻松唤出数字键盘，处理数字输入。可是在稍大点的手机屏幕上，在输入框最右侧会像 PC 端一样出现一个默认的小上下箭头，当手指去点这个箭头，体验会非常不好，这不是我们希望的结果。当我们输入的内容不仅仅是数字，还包括加号、减号时，input='number' 并不能很好地工作。能解决这一问题的 InputMode 已经被 WHATWG 提倡了很多年，现在 Chrome 66 终于率先支持这一模式；

## 状态管理

- [有了 Meiosis，也许你不再需要 Redux，MobX 或 RxJS](https://medium.com/@foxdonut00/you-dont-need-redux-mobx-rxjs-cerebral-6a735b150a02)：Meiosis 实际上并不是一个库，它只是提供一个更简单的状态管理模式。它的特点是：你在开发时有更多的自由空间，不必依赖库的支持；没有"黑科技"，你完全知道代码在做什么；提供可复用的纯函数对象组件；具有和 Render Props，React Context 相同的功能；支持第三方插件的引用如 Bootstrap、jQuery 等；

## 区块链

- [使用 Ehters.js 进行以太坊代币相关操作](http://suo.im/4Advpp)：本文主要详细介绍了怎么使用 Ethers.js 来进行以太坊代币的操作，这里的 token 暂时只基于　ERC20　标准；

## Git

- [Git Merge 怎么用](https://dev.to/neshaz/how-to-use-git-merge-the-correctway-25pd)：将功能用不同的分支来管理，对于认真的开发人员来说是至关重要的事情。 通过分离开每个功能、错误修复或者一些实验性代码，能帮您避免很多问题并保持开发分支的清洁。直到某个时候，一段代码会达到了你想要将它与项目其余部分整合的状态，这时候就要用到 git merge 命令了；