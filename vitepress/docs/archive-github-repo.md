# 存档 GitHub 仓库
许多第三方软件与应用程序（照着 bedev 写的。二者有什么区别吗？问咩咩）都会选择开放源代码，并使用 Git 进行多人协作与版本控制，而最常用的源代码托管平台非 GitHub 莫属。此时，使用合适的方法备份这些资源就显得十分重要。本页面记录了如何备份 GitHub 仓库。

顺带一提，本文的作者在某一天意外地发现服务端开发者 Sysca11 注销（歧义？）了账号，导致 BedrockX 等已停更服务端的主仓库被删除。因此他决定抓紧时间备份已停更软件与应用程序的 Git 仓库，并写下了这篇教程。

## 存档 Git 仓库
每个 GitHub 仓库的主体都是一个 Git 仓库，它是树状结构，忠诚地记录了源代码的所有版本。（我没有系统学过Git，部分名词可能不专业，请高人指正）

通常情况下，我们从 GitHub 拉取 Git 仓库到本地时，会使用如下命令：

```
git clone https://github.com/username/reponame.git
```

代码块里不能用斜体！！气死我了不管了（细想也有道理，代码应该是纯文本）

<s><pre><code>git clone https://github.com/<em>username</em>/<em>reponame</em>.git</code></pre></s>

其中 `username` 是用户名，`reponame` 是仓库名。这样可以克隆绝大部分东西，比如所有的提交（commit），但是，现实远比这复杂。

为了确保我们可以克隆到尽可能多的东西，我们必须花费一些心思了：

### 寻找原始的仓库
首先，我们需要找到尽可能原始的仓库：

1.  直接克隆 GitHub 上的主仓库（？）。

    主仓库包含最全面的信息。

    使用 `--mirror` 参数可以额外克隆remote branches和other refs，它们可能有用处但用处不大，所以即使没能使用 `--mirror` 参数克隆到主仓库也不必懊恼。

2.  克隆 GitHub 上对主仓库的复刻（fork）。

    如果主仓库已经被删除，那么你可以找找看有没有留存下来的复刻。

    但是，不是所有的复刻都与主仓库相同。有些复刻的创建者可能在复刻后忘了及时更新（在以前这比较麻烦，但现在只需点击“Sync fork”即可），导致复刻落后于主仓库；有些复刻的创建者可能会向复刻中加入自己的提交（比如，使用Pull Request来更新复刻，或者添加一些小功能），但大多数添加都不是很重要。

    下表中使用“落后”、“超前”和“等价”来表示各个复刻与主仓库之间的关系。其中“落后”指该复刻缺少主仓库的部分提交；“超前”指该复刻加入了主仓库所没有的提交；“等价”指该复刻的提交与主仓库的提交完全相同。判断复刻是否等价的方法非常简单：只需看该复刻的最后一次提交与主仓库的（`11b79db`）是否相同。

    <details><summary>BedrockX及其现存复刻（fork）列表</summary>

    （主仓库以提交 `11b79dbede565a0e58c82a3e5011dc5bf67ceb37` 为准）（落后与超前有争议）

    | 仓库                  | 提交（commit）数量 | 与主仓库的关系 |
    | --------------------- | ------------------ | -------------- |
    | Sysca11（原主仓库）   |                 57 | —             |
    | 3JoB                  |                 58 | 超前           |
    | allankevinrichie      |                 59 | 落后且超前     |
    | CivicXFB              |                 57 | 等价           |
    | Extollite（现主仓库） |                 31 | 落后           |
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

    如果主仓库已经被删除，而且所有的复刻都被删除或者不完整（判断复刻是否完整的方法见上），那么你只能试着从自己的私人存储中寻找仓库，或者询问其他相关的人（比如开发者），看看他们有没有留存备份。

如果以上的方法都没有奏效，那么很不幸，你只能选择一份尽可能原始的仓库进行存档了。

### 克隆仓库
*如果你通过方法 3 找到了仓库，请把它复制到你的工作目录下，然后跳过这一（段落or章节？）。*

克隆仓库，并下载所有LFS文件：<sup>[\[注 1\]](#注释)</sup>

```
git clone --mirror https://github.com/username/reponame.git
cd reponame.git
git lfs fetch --all
```

### bundle 仓库
```
git bundle create "../GitHub username reponame.bundle" --all
```

## 存档 Releases

## 存档 Issues 与 Pull Requests

## 存档 Wiki
GitHub 仓库中的 Wiki 本质上就是一个 Git 仓库，你可以使用上面的方法克隆并 bundle 它。

## 注释
1.  有时，执行 `git lfs fetch --all` 会输出类似信息：
    ```
    fetch: 1 object found, done.
    ```
    但是并不会下载任何东西。这是因为 Git LFS 把空文件当作了 LFS 指针。详见 <https://github.com/git-lfs/git-lfs/discussions/5123>。

（脚注暂未写入gfm，故暂不使用）

Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].  

You can also use words, to fit your writing style more closely[^note].

[^1]: My reference.
[^2]: Every new line should be prefixed with 2 spaces.  
  This allows you to have a footnote with multiple lines.
[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  
    This footnote also has been made with a different syntax using 4 spaces for new lines.
