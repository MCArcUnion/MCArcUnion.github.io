# 存档 GitHub 仓库
许多第三方软件与应用程序（照着 bedev 写的。二者有什么区别吗？问咩咩）都会选择开放源代码，并使用 Git 进行多人协作与版本控制，而最常用的源代码托管平台非 GitHub 莫属。此时，使用合适的方法备份这些资源就显得十分重要。本页面记录了如何备份 GitHub 仓库。

顺带一提，本文的作者在某一天意外地发现服务端开发者 Sysca11 注销（歧义？）了账号，导致 BedrockX 等已停更服务端的仓库丢失。因此他决定抓紧时间备份已停更软件与应用程序的 Git 仓库，并写下了这篇教程。

## 存档 Git 仓库
每个 GitHub 仓库的主体都是一个 Git 仓库，它是树状结构，忠诚地记录了源代码的所有版本。（我没有系统学过Git，部分名词可能不专业，请高人指正）

通常情况下，我们从 GitHub 拉取 Git 仓库到本地时，会使用如下命令：

```
git clone https://github.com/*username*/*reponame*.git
```

代码块里不能用斜体！！

<pre><code>git clone https://github.com/<em>username</em>/<em>reponame</em>.git</code></pre>

这样可以克隆绝大部分东西，比如所有的提交（commit），但是，blah blah

为了确保我们可以克隆到尽可能多的东西，我们必须花费一些心思了：

### 寻找完整的仓库
首先，我们需要找到尽可能原始的仓库：

1.  直接克隆 GitHub 上的原始仓库。
    原仓库包含最全面的信息。
    <pre><code>git clone --mirror https://github.com/<em>username</em>/<em>reponame</em>.git</code></pre>
2.  克隆 GitHub 上对原仓库的复刻（fork）。
    如果原仓库已经被删除，那么你可以找找看有没有留存下来的复刻。
    <details>
        <summary>点击显示或隐藏表格</summary>
        <!-- Formatted by VSCode -->
        <table>
            <caption>BedrockX及其现存复刻（fork）列表</caption>
            <thead>
                <tr>
                    <th>分支</th>
                    <th>提交（commit）数量</th>
                    <th>与主分支的关系</th>
                </tr>
            </thead>
            <tbody>
                <tr style="opacity: 0.5">
                    <td>Sysca11（原主分支）</td>
                    <td>57</td>
                    <td>—</td>
                </tr>
                <tr>
                    <td>3JoB</td>
                    <td>58</td>
                    <td>有冗余</td>
                </tr>
                <tr>
                    <td>allankevinrichie</td>
                    <td>59</td>
                    <td>有缺失，有冗余</td>
                </tr>
                <tr>
                    <td>CivicXFB</td>
                    <td>57</td>
                    <td>等价</td>
                </tr>
                <tr>
                    <td>Extollite（现主分支）</td>
                    <td>31</td>
                    <td>有缺失</td>
                </tr>
                <tr>
                    <td>hapi888</td>
                    <td>57</td>
                    <td>等价</td>
                </tr>
                <tr>
                    <td>jfishing</td>
                    <td>57</td>
                    <td>等价</td>
                </tr>
                <tr>
                    <td>mclk623</td>
                    <td>57</td>
                    <td>等价</td>
                </tr>
                <tr>
                    <td>moxisuki</td>
                    <td>57</td>
                    <td>等价</td>
                </tr>
                <tr>
                    <td>oldsheep0205</td>
                    <td>43</td>
                    <td>有缺失</td>
                </tr>
                <tr>
                    <td>Rhycraft</td>
                    <td>33</td>
                    <td>有缺失</td>
                </tr>
                <tr>
                    <td>SakuranaRanbom</td>
                    <td>57</td>
                    <td>等价</td>
                </tr>
                <tr>
                    <td>saranfeishuang</td>
                    <td>46</td>
                    <td>有缺失</td>
                </tr>
                <tr>
                    <td>ShrBox</td>
                    <td>57</td>
                    <td>等价</td>
                </tr>
                <tr>
                    <td>SkipM4</td>
                    <td>57</td>
                    <td>等价</td>
                </tr>
                <tr>
                    <td>untitledunrevised</td>
                    <td>31</td>
                    <td>有缺失</td>
                </tr>
                <tr>
                    <td>whoismek</td>
                    <td>57</td>
                    <td>等价</td>
                </tr>
                <tr>
                    <td>WillowSauceR</td>
                    <td>58</td>
                    <td>有冗余</td>
                </tr>
                <tr>
                    <td>yzu999</td>
                    <td>57</td>
                    <td>等价</td>
                </tr>
            </tbody>
        </table>
    </details>
<!--   | 分支                  | 提交（commit）数量 | 与主分支的关系 |
   | --------------------- | ------------------ | -------------- |
   | Sysca11（原主分支）   |                 57 | 主分支         |
   | 3JoB                  |                 58 | 有冗余         |
   | allankevinrichie      |                 59 | 有缺失，有冗余 |
   | CivicXFB              |                 57 | 等价           |
   | Extollite（现主分支） |                 31 | 有缺失         |
   | hapi888               |                 57 | 等价           |
   | jfishing              |                 57 | 等价           |
   | mclk623               |                 57 | 等价           |
   | moxisuki              |                 57 | 等价           |
   | oldsheep0205          |                 43 | 有缺失         |
   | Rhycraft              |                 33 | 有缺失         |
   | SakuranaRanbom        |                 57 | 等价           |
   | saranfeishuang        |                 46 | 有缺失         |
   | ShrBox                |                 57 | 等价           |
   | SkipM4                |                 57 | 等价           |
   | untitledunrevised     |                 31 | 有缺失         |
   | whoismek              |                 57 | 等价           |
   | WillowSauceR          |                 58 | 有冗余         |
   | yzu999                |                 57 | 等价           | -->
3.  从自己或他人的存储中取得。
    如果原仓库已经被删除，而且所有的复刻都被删除或者不完整（判断复刻是否完整的方法见上），那么你只能试着从自己私人存储中寻找仓库，或者询问其他相关的人（比如开发者），看看他们有没有留存备份。

如果以上的方法都没有奏效，那么很不幸，你只能选择一份尽可能原始的仓库进行存档了。

### 克隆仓库
*如果你通过方法 3 找到了仓库，请把它复制到你的工作目录下，然后跳过这一（段落or章节？）。*

### bundle 仓库

## 存档 Releases

## 存档 Issues 与 Pull Requests
