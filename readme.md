# 3D项目创建工具

这是一个方便大家创建3D项目的工具，你可以直接使用命令行创建Egret 3D项目。

**仅支持Mac OS X系统**

> Windows系统请自行解决。

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
