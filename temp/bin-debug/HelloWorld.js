/**
 * @language zh_CN
 * @classdesc
 * 创建立方体使用示例
 * @version Egret 3.0
 * @platform Web,Native
 */
var HelloWorld = (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld() {
        _super.call(this);
        ///创建Canvas对象。
        this._egret3DCanvas = new egret3d.Egret3DCanvas();
        ///Canvas的起始坐标，页面左上角为起始坐标(0,0)。
        this._egret3DCanvas.x = 0;
        this._egret3DCanvas.y = 0;
        ///设置Canvas页面尺寸。
        this._egret3DCanvas.width = window.innerWidth;
        this._egret3DCanvas.height = window.innerHeight;
        ///创建View3D对象,页面左上角为起始坐标(0,0),其参数依次为:
        ///@param x: number 起始坐标x,
        ///@param y: number 起始坐标y
        ///@param  width: number 显示区域的宽
        ///@param  height: number 显示区域的高
        this._view3D = new egret3d.View3D(0, 0, window.innerWidth, window.innerHeight);
        ///当前对象对视位置,其参数依次为:
        ///@param pos 对象的位置
        ///@param target 目标的位置
        this._view3D.camera3D.lookAt(new egret3d.Vector3D(0, 0, -1000), new egret3d.Vector3D(0, 0, 0));
        ///View3D的背景色设置
        this._view3D.backColor = 0xffffffff;
        ///将View3D添加进Canvas中
        this._egret3DCanvas.addView3D(this._view3D);
        ///创建颜色材质
        var mat = new egret3d.TextureMaterial();
        ///创建立方体对象
        var geometery = new egret3d.CubeGeometry();
        ///通过材质和立方体对象生成Mesh
        this._cube = new egret3d.Mesh(geometery, mat);
        ///将mesh插入view3D
        this._view3D.addChild3D(this._cube);
        ///启动Canvas。
        this._egret3DCanvas.start();
        ///注册每帧更新，让cube进行旋转
        this._egret3DCanvas.addEventListener(egret3d.Event3D.ENTER_FRAME, this.update, this);
        this.InitCameraCtl();
        this.CloseLoadingView();
        ///设置window resize事件
        egret3d.Input.addEventListener(egret3d.Event3D.RESIZE, this.OnWindowResize, this);
    }
    var d = __define,c=HelloWorld,p=c.prototype;
    /**
    * @language zh_CN
    * 窗口尺寸变化事件
    * @version Egret 3.0
    * @platform Web,Native
    */
    p.OnWindowResize = function (e) {
        ///重置ui大小
        this._egret3DCanvas.width = window.innerWidth;
        this._egret3DCanvas.height = window.innerHeight;
        this._view3D.width = window.innerWidth;
        this._view3D.height = window.innerHeight;
    };
    /**
   * @language zh_CN
   * 初始化相机控制
   * @version Egret 3.0
   * @platform Web,Native
   */
    p.InitCameraCtl = function () {
        ///摄像机控制类
        this.cameraCtl = new egret3d.LookAtController(this._view3D.camera3D, new egret3d.Object3D());
        ///设置目标和相机的距离
        this.cameraCtl.distance = 1000;
        ///设置相机x轴旋转
        this.cameraCtl.rotationX = 60;
    };
    p.update = function (e) {
        ///旋转
        this._cube.rotationY += 0.5;
        this.cameraCtl.update();
    };
    return HelloWorld;
})(LoadingUI);
egret.registerClass(HelloWorld,'HelloWorld');
