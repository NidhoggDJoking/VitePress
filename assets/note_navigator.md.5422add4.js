import{_ as s,o as a,c as n,a as l}from"./app.4854f1f3.js";const C=JSON.parse('{"title":"Navigator","description":"","frontmatter":{},"headers":[{"level":2,"title":"navigator.getBattery()","slug":"navigator-getbattery","link":"#navigator-getbattery","children":[]},{"level":2,"title":"navigator.connection","slug":"navigator-connection","link":"#navigator-connection","children":[]}],"relativePath":"note/navigator.md","lastUpdated":1685154224000}'),o={name:"note/navigator.md"},e=l(`<h1 id="navigator" tabindex="-1">Navigator <a class="header-anchor" href="#navigator" aria-hidden="true">#</a></h1><h2 id="navigator-getbattery" tabindex="-1"><code>navigator.getBattery()</code> <a class="header-anchor" href="#navigator-getbattery" aria-hidden="true">#</a></h2><blockquote><p><code>getBattery()</code> 方法提供了系统的电量信息，它返回一个 <code>battery</code> 的 <code>promise</code> 对象，兑现后得到 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/BatteryManager" target="_blank" rel="noreferrer">BatteryManager</a> 对象，它提供了一些新的事件和方法以方便你监控电池的状态。这个方法实现了<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Battery_Status_API" target="_blank" rel="noreferrer">电源状态 API</a>，参见那篇文档，以获得更多细节、使用方法和实例代码。</p></blockquote><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">navigator</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getBattery</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">battery</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 获取设备电量剩余百分比</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">level</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">battery</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">level</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//最大值为1,对应电量100%</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Level: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">level</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">100</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 获取设备充电状态</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">charging</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">battery</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">charging</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">充电状态: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">charging</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 获取设备完全充电需要的时间</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">chargingTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">battery</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">chargingTime</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">完全充电需要的时间: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">chargingTime</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 获取设备完全放电需要的时间</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dischargingTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">battery</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">dischargingTime</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">完全放电需要的时间: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dischargingTime</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><div class="danger custom-block"><p class="custom-block-title">兼容问题</p><p>目前（2022）不兼容（Safari）!</p></div><h2 id="navigator-connection" tabindex="-1"><code>navigator.connection</code> <a class="header-anchor" href="#navigator-connection" aria-hidden="true">#</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/connection" target="_blank" rel="noreferrer"><code>Navigator.connection</code></a> 只读属性返回一个包含有关系统网络连接信息的 <code>NetworkInformation</code> 对象</p><div class="danger custom-block"><p class="custom-block-title">兼容不行（Safari）</p><p>数据网络带宽无参考价值，暂无（2022年）实际用途</p></div>`,8),p=[e];function t(r,c,i,y,F,D){return a(),n("div",null,p)}const d=s(o,[["render",t]]);export{C as __pageData,d as default};