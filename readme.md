# 3D项目创建工具

这是一个方便大家创建3D项目的工具，你可以直接使用命令行创建Egret 3D项目。

**仅支持Mac OS X系统**

> Windows系统请自行解决。

## 更新说明

此次更新，增加了一个名称为`update`的命令，用于更新项目中的3D引擎。

默认模板修正为当前最新的项目模板，该模板由Dily提供，已内置在Wing中。

#### 安装方法

1. 从github上拉取最新的3D引擎主干分支，放在你的本地目录中，如目录为`/Users/mebius/Documents/work/3d/egret3dgit/egret-3d`。
2. 用任意记事本文件，打开`egd`文件。
1. 修改`egd`文件中的第二行和第三行。
2. 第二行内容修改为，你的github拉取到本地的路径。如`var egret3dgiturl = "/Users/mebius/Documents/work/3d/egret3dgit/egret-3d";`
3. 修改第三行代码，为3D项目源码，一般这个目录不会改变。如：`var egret3dgitsourcepath = "/Egret3D/"`。
4. 其他文件拷贝到固定安装目录下，内容不变。

> 此次新增加了一个`build3dsource`文件，此文件务必也拷贝到`/usr/local/egd`目录中。否则将无法更新。


#### 使用方法

在命令行中进入到你当前的项目中，如：`cd /Users/mebius/Desktop/newtemp/demo`

然后执行 `egd update`

升级成功后，将提示`升级完成`。

## 安装

将当前目录中的`egd`文件和`temp`文件夹拷贝到 `/usr/local/egd`目录下，你的机器不可能有这个目录，自己新疆一个。

执行下面命令，为 `egd` 文件设置执行权限。

```
cd /usr/local/egd/
chmod +x egd
```

设置你的环境变量，修改 `~/.bash_profile` 文件。添加如下内容：

```
export EGD=/usr/local/egd
export PATH=$EGD:$PATH
```

保存文件，然后执行下面命令：

```
source ~/.bash_profile
```

安装完成。

## 使用

进入到你要创建项目的路径中，比如：

```
cd ~/Document/3d_demo
```

执行egd命令

```
egd create proname
```

其中 `proname` 这个就是你项目的名称。

执行完成后，你就能在当前目录下，看到一个全新的3D项目了。

Good!!真是太TMD方便了！！！
