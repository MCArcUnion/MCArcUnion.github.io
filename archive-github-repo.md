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
    <details><summary>BedrockX及其现存复刻（fork）列表</summary>
    
    （主分支以提交 `11b79dbede565a0e58c82a3e5011dc5bf67ceb37` 为准）
    | 分支                  | 提交（commit）数量 | 与主分支的关系 |
    | --------------------- | ------------------ | -------------- |
    | Sysca11（原主分支）   |                 57 | 主分支          |
    | 3JoB                  |                 58 | 超前           |
    | allankevinrichie      |                 59 | 落后           |
    | CivicXFB              |                 57 | 等价           |
    | Extollite（现主分支）  |                 31 | 落后           |
    | hapi888               |                 57 | 等价           |
    | jfishing              |                 57 | 等价           |
    | mclk623               |                 57 | 等价           |
    | moxisuki              |                 57 | 等价           |
    | oldsheep0205          |                 43 | 落后           |
    | Rhycraft              |                 33 | 落后           |
    | SakuranaRanbom        |                 57 | 等价           |
    | saranfeishuang        |                 46 | 落后           |
    | ShrBox                |                 57 | 等价           |
    | SkipM4                |                 57 | 等价           |
    | untitledunrevised     |                 31 | 落后           |
    | whoismek              |                 57 | 等价           |
    | WillowSauceR          |                 58 | 超前           |
    | yzu999                |                 57 | 等价           |

    </details>
3.  从自己或他人的存储中取得。
    如果原仓库已经被删除，而且所有的复刻都被删除或者不完整（判断复刻是否完整的方法见上），那么你只能试着从自己私人存储中寻找仓库，或者询问其他相关的人（比如开发者），看看他们有没有留存备份。

如果以上的方法都没有奏效，那么很不幸，你只能选择一份尽可能原始的仓库进行存档了。

### 克隆仓库
*如果你通过方法 3 找到了仓库，请把它复制到你的工作目录下，然后跳过这一（段落or章节？）。*

### bundle 仓库

## 存档 Releases

## 存档 Issues 与 Pull Requests
