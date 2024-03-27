# 存档 Android 版
本页面记录了如何存档 Android 版。

Android 版目前发布于 [Amazon Appstore](https://www.amazon.com/dp/B00992CF6W) 及 [Google Play](https://play.google.com/store/apps/details?id=com.mojang.minecraftpe)。

## 从 Google Play 请求旧版
[Aurora Store](https://auroraoss.com/) 是一款第三方 Google Play 应用，可以通过 API 从 Google Play 请求旧版应用。目前存档者们已经使用 Aurora Store 存档了几乎所有 Android 版安装包。

要使用 Aurora Store 存档 Android 版，你需要一台可以访问外网的 Android 设备（或虚拟机）和一个购买了 Minecraft Android 版的 Google Play 账号。
1.  安装 Aurora Store。
2.  使用 Aurora Store 登录 Google 账号。
3.  进入 Minecraft 详情页。
4.  点击右上角的“…”，选择“手动下载”。
5.  输入 version code。
     -  例如，[携带版 0.14.1](https://zh.minecraft.wiki/w/%E6%90%BA%E5%B8%A6%E7%89%880.14.1) 有以下四个安装包：
         -  720140100（适用于 armeabi-v7a、Android 2.3+）
         -  740140100（适用于 armeabi-v7a、Android 3.0+）
         -  760140100（适用于 armeabi-v7a、Android 4.1+）
         -  780140100（适用于 x86、Android 2.3+）
     -  你可以在 [Omniarchive index (WIP)](https://docs.google.com/spreadsheets/d/1CMU3H4Hpgb03pnTmfS5lxP2AqrkbbWoqIY6dl_dg1bg)、[中文 Minecraft Wiki](https://zh.minecraft.wiki/)、[Minecraft 版本库](https://mcarc.gitee.io/)等地方找到所有版本的 version code。
6.  点击“检查”。若版本代码可用且设备支持，则会开始下载；否则会提示“你请求的版本代码不可用”。
7.  下载完成后会自动打开安装界面。下载的安装包位于 `/storage/emulated/0/Android/data/com.aurora.store/files/Downloads/com.mojang.minecraftpe/`。

以上方法只能下载与设备架构、API 版本<sup>[需要验证]</sup>相符的安装包。要下载其他架构的安装包，你可以：
 -  使用对应架构、API 版本的虚拟机安装 Aurora Store。
 -  使用 Aurora Store 的“伪装”功能，伪装成想要的设备。注意目前伪装列表中缺少 x86 设备的信息，需要手动导入。

## 收集他人保存的安装包
有些玩家会将自己收集的安装包、整理的版本库发布到网络上，你可以将这些资源整合到你的版本库中。可惜的是，在通过 API 请求旧版的方法被发现后，所有旧版安装包都能轻易获取，这些收藏也就失去了价值。
