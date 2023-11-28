---
outline: 'deep'
---

# Vue 源码解析<Badge type="tip" text="八股文" />

---

## Vue2

---

## Vue3

::: details Vue3 相对 Vue2 有以下性能上的优化：

1.更快的渲染速度：`Vue3` 中引入了新的响应式系统`Proxy`，它比 `Vue2` 的 `Object.defineProperty()` 实现更快，能够提高组件的渲染性能。

2.更小的包大小：`Vue3` 使用 `Tree-shaking` 技术，打包时只会将用到的代码打入最终 `bundle`，使得包的大小更小，减少了用户加载和解析的时间。

3.更少的内存占用：`Vue3` 在渲染组件时使用了更少的内部对象，避免了过多对象的创建和回收，减少了内存占用。

4.静态节点提取：`Vue3` 通过编译阶段对静态节点的分析，可以在运行时跳过对这些节点的处理，减少了不必要的计算。

:::

## 轮子

[lodash](https://www.lodashjs.com/)

[futil](https://smartprocure.github.io/futil-js/)