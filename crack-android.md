# 破解 Android 版验证
本页面记录了如何手动破解 Android 版的正版验证和原版验证。

## 破解正版验证
Android 版加入过两次正版验证。第一次是从携带版0.1.0到携带版0.3.x，第二次是从[基岩版1.2.0.7](https://minecraft.fandom.com/zh/wiki/%E5%9F%BA%E5%B2%A9%E7%89%881.2.0.7)至今。

## 准备工作
+ MT管理器(或其它可以修改安装包dex的应用)
+ Minecarft安装包

注：若是[apks格式](https://developer.android.google.cn/guide/app-bundle)的Minecraft请转成apk格式（通过“NP管理器”或“[MT管理器](https://mt2.cn/)(需VIP)”或“[ApkTool M](https://maximoff.su/apktool/?lang=zh)(时间很久)”）

也可以将apks安装包zip解压后对base.apk单独进行破解操作

## 开始破解
### 携带版alpha0.1
+ 使用MT管理器的"Dex编辑器++"功能打开Minecraft安装包的classes.dex
+ 找到`com.android.vending.licensing.b`类
+ 找到`a(Lcom/android/vending/licensing/l;)V`方法
+ 找到`if-eqz v0, :cond_15`,改为`if-ne v0, v0, :cond_15`
### 携带版alpha0.2-0.3
+ 使用MT管理器的"Dex编辑器++"功能打开Minecraft安装包的classes.dex
+ 找到`com.android.vending.licensing.h`类
+ 找到`a(Lcom/android/vending/licensing/t;)V`方法
+ 找到`if-eqz v0, :cond_15`,改为`if-ne v0, v0, :cond_15`
### 基岩版1.2.0.7至1.16.100.53
#### 方案一[1]
+ 使用MT管理器的"Dex编辑器++"功能打开Minecraft安装包的classes.dex
+ 找到`com.googleplay.licensing.LicenseChecker`类
+ 找到`checkAccess`方法
+ 找到`if-eqz v1, :cond_17`,删掉
#### 方案二[2]
+ 使用MT管理器的"Dex编辑器++"功能打开Minecraft安装包的classes.dex
+ 找到`com.googleplay.licensing.ServerManagedPolicy`类
+ 找到`allowAccess`方法
+ 找到`const/4 v2, 0x0`,改为`const/4 v2, 0x1`
### 基岩版1.16.100.53至今
+ 使用MT管理器的"Dex编辑器++"功能打开Minecraft安装包的classes.dex
+ 找到`com.googleplay.licensing.ServerManagedPolicy`类
+ 找到`allowAccess`方法
+ 找到`const/4 v4, 0x0`,改为`const/4 v4, 0x1`

## 注意事项
+ 若有多个dex文件（如classes2.dex），优先查看classes.dex文件，或在破解时直接勾选所有的dex文件，也可以先合并这些dex文件再进行破解
+ 1.16.20之前这样破解后会无法登录Xbox账号，因为1.16.20之前的Minecraft会进行签名校验[3]
+ 同理，1.16.20之前的共存版也是无法登录的
+ 1.16.20之后不再进行签名检验，这样破解后可直接登录
+ 1.16.100.53以后通过葫芦侠三楼的破解器破解Minecraft可能会导致Minecraft闪退

## 资料来源
[1]:[【教程】某些游戏中Google Play 许可证验证的简单除方法](http://bbs.huluxia.com/wap/thread/875715.html?para=37Hftt%2Bz37Dftd%2B037Hfs9%2Bz3p%2FfuN%2B337Xft9%2Bx37U%3D%0A&product=floor)

\[2\]:[【非原创】【教程】手动破解Minecraft授权验证](http://bbs.huluxia.com/wap/thread/659805.html?para=37Hftt%2Bx37Xfud%2B137jfuN%2B13p%2Fftt%2B137nfuN%2Bw37U%3D%0A&product=floor)

\[3\]:[【资源】Minecraft验证破解器v1.4](http://bbs.huluxia.com/wap/thread/82471.html?para=37Hft9%2B037bft9%2B037ffsN%2B13p%2FfuN%2By37Tft9%2Bx%0A&product=floor)

##### 以上内容仅用做学习交流
