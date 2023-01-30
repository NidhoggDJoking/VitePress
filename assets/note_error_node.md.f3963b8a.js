import{_ as s,o as n,c as a,a as l}from"./app.a7703032.js";const F=JSON.parse(`{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"MYSQL的版本为8.0+的时候 ， 用NODEJS查询数据库报错:","slug":"mysql的版本为8-0-的时候-用nodejs查询数据库报错","link":"#mysql的版本为8-0-的时候-用nodejs查询数据库报错","children":[]},{"level":3,"title":"Access denied for user 'jokingnidhogg'@'localhost' (using password: NO)","slug":"access-denied-for-user-jokingnidhogg-localhost-using-password-no","link":"#access-denied-for-user-jokingnidhogg-localhost-using-password-no","children":[]}],"relativePath":"note/error/node.md","lastUpdated":1675090386000}`),p={name:"note/error/node.md"},o=l(`<h3 id="mysql的版本为8-0-的时候-用nodejs查询数据库报错" tabindex="-1">MYSQL的版本为8.0+的时候 ， 用NODEJS查询数据库报错: <a class="header-anchor" href="#mysql的版本为8-0-的时候-用nodejs查询数据库报错" aria-hidden="true">#</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">ER_NOT_SUPPORTED_AUTH_MODE</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><a href="https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server" target="_blank" rel="noreferrer">stackoverflow</a></p><p>解决方法:</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/local/mysql/bin</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span></span>
<span class="line"><span style="color:#FFCB6B;">Enter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">password:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">enter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">your</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">password</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">mysql&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">USER</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">localhost</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">IDENTIFIED</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">WITH</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql_native_password</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">BY</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">your_new_password</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">mysql&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">FLUSH</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PRIVILEGES</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">mysql&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">quit</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="access-denied-for-user-jokingnidhogg-localhost-using-password-no" tabindex="-1">Access denied for user &#39;jokingnidhogg&#39;@&#39;localhost&#39; (using password: NO) <a class="header-anchor" href="#access-denied-for-user-jokingnidhogg-localhost-using-password-no" aria-hidden="true">#</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/local/mysql/bin</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span></span>
<span class="line"><span style="color:#FFCB6B;">Enter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">password:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">enter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">your</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">password</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">mysql&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">+------------------+</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">user</span><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#FFCB6B;">+------------------+</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">jokingnidhogg</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">mysql.infoschema</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">mysql.session</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">mysql.sys</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">root</span><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#FFCB6B;">+------------------+</span></span>
<span class="line"><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> rows </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> set </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0.00</span><span style="color:#A6ACCD;"> sec</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/local/mysql/bin</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">jokingnidhogg</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Enter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">password:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">enter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">your</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">password</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">mysql&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,8),e=[o];function r(c,t,C,y,i,D){return n(),a("div",null,e)}const d=s(p,[["render",r]]);export{F as __pageData,d as default};
