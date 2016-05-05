declare module egret3d {
    class Egret3DState {
        private static use;
        private static _info;
        private static _time;
        private static _dataInfo;
        private static _objectInfo;
        static initState(): void;
        static showTime(time: number, delay: number): void;
        static showDataInfo(...data: any[]): void;
    }
}
declare module egret3d {
    /**
    * @private
    */
    enum TextureMethodType {
        diffuse = 0,
        normal = 1,
        specular = 2,
        color = 3,
        shadow = 4,
    }
}
declare module egret3d {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.UV
     * @classdesc
     * UV类，用来存储模型顶点uv数据
     *
     * @see egret3d.GeometryData
     *
     * @version Egret 3.0
     * @platform Web,Native
     */
    class UV {
        /**
        * @language zh_CN
        * u
        */
        u: number;
        /**
        * @language zh_CN
        * v
        */
        v: number;
        /**
        * @language zh_CN
        * constructor
        */
        constructor(u?: number, v?: number);
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Point
     * @classdesc
     * Point 对象表示二维坐标系统中的某个位置，其中 x 表示水平轴，y 表示垂直轴。
     * @version Egret 3.0
     * @platform Web,Native
     */
    class Point {
        /**
         * @language en_US
         * The horizontal coordinate of the point. The default value is 0.
         */
        /**
         * @language zh_CN
         * x坐标
         */
        x: number;
        /**
         * @language en_US
         * The vertical coordinate of the point. The default value is 0.
         */
        /**
         * @language zh_CN
         * y坐标
         */
        y: number;
        /**
         * @language en_US
         * The length of the line segment from(0,0) to this point.
         * @returns length
         */
        /**
         * @language zh_CN
         * 返回从(0, 0)到(x, y)的距离
         * @returns 当前2维向量的长度
         */
        length: number;
        /**
         * @language en_US
         * Creates a new point. If you pass no parameters to this method, a point is
         * created at(0,0).
         *
         * @param x The horizontal coordinate.
         * @param y The vertical coordinate.
         */
        /**
         * @language zh_CN
         * 创建一个Point实例
         * @param x
         * @param y
         */
        constructor(x?: number, y?: number);
        /**
         * @language en_US
         * Adds the coordinates of another point to the coordinates of this point to
         * create a new point.
         *
         * @param v The point to be added.
         * @returns The new point.
         */
        /**
         * @language zh_CN
         * 当前Point加上v Point，结果返回新的实例
         * @param v
         */
        add(v: Point): Point;
        /**
         * @language en_US
         * Creates a copy of this Point object.
         *
         * @returns The new Point object.
         */
        /**
         * @language zh_CN
         * 克隆Point
         * @param 返回克隆后的Point
         */
        clone(): Point;
        /**
         * @language zh_CN
         * 复制源Point的值
         * @param sourcePoint
         */
        copyFrom(sourcePoint: Point): void;
        /**
         * @language en_US
         * Determines whether two points are equal. Two points are equal if they have
         * the same <i>x</i> and <i>y</i> values.
         *
         * @param toCompare The point to be compared.
         * @returns A value of <code>true</code> if the object is equal to this Point
         *         object; <code>false</code> if it is not equal.
         */
        /**
         * @language zh_CN
         * 比较两个Point是否全等
         * @param toCompare 被比较的Point
         */
        equals(toCompare: Point): boolean;
        /**
         * @language en_US
         * Scales the line segment between(0,0) and the current point to a set
         * length.
         *
         * @param thickness The scaling value. For example, if the current point is
         *                 (0,5), and you normalize it to 1, the point returned is
         *                  at(0,1).
         */
        /**
         * @language zh_CN
         * 当前Point标准化
         * @param thickness 使当前Point的长度为thickness 原点(0, 0)到(x, y)的距离
         */
        normalize(thickness?: number): void;
        /**
         * @language en_US
         * Offsets the Point object by the specified amount. The value of
         * <code>dx</code> is added to the original value of <i>x</i> to create the
         * new <i>x</i> value. The value of <code>dy</code> is added to the original
         * value of <i>y</i> to create the new <i>y</i> value.
         *
         * @param dx The amount by which to offset the horizontal coordinate,
         *           <i>x</i>.
         * @param dy The amount by which to offset the vertical coordinate, <i>y</i>.
         */
        /**
         * @language zh_CN
         * 当前Point偏移位置
         * @param dx 偏移的x坐标
         * @param dx 偏移的y坐标
         */
        offset(dx: number, dy: number): void;
        /**
         * @language en_US
         * Subtracts the coordinates of another point from the coordinates of this
         * point to create a new point.
         *
         * @param v The point to be subtracted.
         * @returns The new point.
         */
        /**
         * @language zh_CN
         * 当前Point减去v Point,结果返回一个新实例
         * @param v
         * @returns 结果返回
         */
        subtract(v: Point): Point;
        /**
         * @language en_US
         * Returns a string that contains the values of the <i>x</i> and <i>y</i>
         * coordinates. The string has the form <code>"(x=<i>x</i>,
         * y=<i>y</i>)"</code>, so calling the <code>toString()</code> method for a
         * point at 23,17 would return <code>"(x=23, y=17)"</code>.
         *
         * @returns The string representation of the coordinates.
         */
        /**
        * @language zh_CN
        * 当前Point以字符串形式返回
        * @returns string
        */
        toString(): string;
        /**
         * @language en_US
         * Returns the distance between <code>pt1</code> and <code>pt2</code>.
         *
         * @param pt1 The first point.
         * @param pt2 The second point.
         * @returns The distance between the first and second points.
         */
        /**
        * @language zh_CN
        * 计算两个Point之间的距离
        * @returns 返回两个Point之间的距离
        */
        static distance(pt1: Point, pt2: Point): number;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Vector3D
     * @classdesc
     * 用 Vector3D 表示三维空间中的位置,也可以做4维向量,当为3维向量时w始终为0。</p>
     * 定义了一个三元的浮点向量。</p>
     * 当使用一个向量表示一个表面法线时，向量应该是标准化的。</p>
     * 其他用途的定向矢量的大小不变。当用作一个点，元素的矢量表示在三维空间中的位置。</p>
     * @version Egret 3.0
     * @platform Web,Native
     */
    class Vector3D {
        /**
        * @language en_US
        * The x axis defined as a Vector3D object with coordinates (1,0,0).
        */
        /**
        * @language zh_CN
        * X轴坐标 (1,0,0).
        */
        static X_AXIS: Vector3D;
        /**
        * @language en_US
        * The y axis defined as a Vector3D object with coordinates (0,1,0).
        */
        /**
        * @language zh_CN
        * Y轴坐标 (0,1,0).
        */
        static Y_AXIS: Vector3D;
        /**
        * @language en_US
        * The z axis defined as a Vector3D object with coordinates (0,0,1).
        */
        /**
        * @language zh_CN
        * Z轴坐标 (0,0,1).
        */
        static Z_AXIS: Vector3D;
        /**
        * @language en_US
        * The first element of a Vector3D object, such as the x coordinate of
        * a point in the three-dimensional space. The default value is 0.
        */
        /**
        * @language zh_CN
        * 在三维空间中x坐标，默认值是0
        */
        x: number;
        /**
        * @language en_US
        * The second element of a Vector3D object, such as the y coordinate of
        * a point in the three-dimensional space. The default value is 0.
        */
        /**
        * @language zh_CN
        * 在三维空间中y坐标，默认值是0
        */
        y: number;
        /**
        * @language en_US
        * The third element of a Vector3D object, such as the y coordinate of
        * a point in the three-dimensional space. The default value is 0.
        */
        /**
        * @language zh_CN
        * 在三维空间中z坐标，默认值是0
        */
        z: number;
        /**
        * @language zh_CN
        * 可作为一种透视投影的三维位置或投影
        * 也可以做四元数中的w
        */
        w: number;
        /**
        * @language en_US
        *  得到w分量
        */
        /**
        * @language en_US
        *  设置w分量
        */
        a: number;
        /**
        * @language en_US
        *  得到x分量
        */
        /**
        * @language en_US
        *  设置x分量
        */
        r: number;
        /**
        * @language en_US
        *  得到y分量
        */
        /**
        * @language en_US
        *  设置y分量
        */
        g: number;
        /**
        * @language en_US
        *  得到z分量
        */
        /**
        * @language en_US
        *  设置z分量
        */
        b: number;
        /**
        * @language en_US
        * The length, magnitude, of the current Vector3D object from the
        * origin (0,0,0) to the object's x, y, and z coordinates. The w
        * property is ignored. A unit vector has a length or magnitude of
        * one.
        */
        /**
        * @language zh_CN
        * 向量的长度，原点(0, 0, 0)到(x, y, z)的距离
        */
        length: number;
        /**
        * @language en_US
        * The square of the length of the current Vector3D object, calculated。
        * using the x, y, and z properties. The w property is ignored. Use the
        * <code>lengthSquared()</code> method whenever possible instead of the
        * slower <code>Math.sqrt()</code> method call of the
        * <code>Vector3D.length()</code> method.
        */
        /**
        * @language zh_CN
        * 3维向量的坐标x的平方加 y的平方加 z的平方
        */
        lengthSquared: number;
        /**
        * @language en_US
        * Creates an instance of a Vector3D object. If you do not specify a。
        * parameter for the constructor, a Vector3D object is created with
        * the elements (0,0,0,0).
        *
        * @param x The first element, such as the x coordinate.
        * @param y The second element, such as the y coordinate.
        * @param z The third element, such as the z coordinate.
        * @param w An optional element for additional data such as the angle
        *          of rotation.
        */
        /**
        * @language zh_CN
        * 创建一个对象实例，默认为(0, 0, 0, 0)
        */
        constructor(x?: number, y?: number, z?: number, w?: number);
        /**
        * @language en_US
        * Adds the value of the x, y, and z elements of the current Vector3D。
        * object to the values of the x, y, and z elements of another Vector3D
        * object. The <code>add()</code> method does not change the current
        * Vector3D object. Instead, it returns a new Vector3D object with
        * the new values.
        *
        * <p>The result of adding two vectors together is a resultant vector.
        * One way to visualize the result is by drawing a vector from the
        * origin or tail of the first vector to the end or head of the second
        * vector. The resultant vector is the distance between the origin
        * point of the first vector and the end point of the second vector.
        * </p>
        */
        /**
        * @language zh_CN
        * 向量相加，结果返回一个新实例
        * @returns Vector3D 结果返回
        */
        add(a: Vector3D): Vector3D;
        /**
        * @language en_US
        * Returns a new Vector3D object that is an exact copy of the current
        * Vector3D object.
        *
        * @returns A new Vector3D object that is a copy of the current
        * Vector3D object.
        */
        /**
        * @language zh_CN
        * 克隆一个Vector3D
        * @returns 返回克隆后的实例
        */
        clone(): Vector3D;
        /**
        * @language en_US
        * Copies all of vector data from the source Vector3D object into the
        * calling Vector3D object.
        *
        * @param src The Vector3D object from which to copy the data.
        */
        /**
        * @language zh_CN
        * 复制Vector3D对象
        * @param src 数据源
        */
        copyFrom(src: Vector3D): void;
        /**
        * @language en_US
        * Returns a new Vector3D object that is perpendicular (at a right。
        * angle) to the current Vector3D and another Vector3D object. If the
        * returned Vector3D object's coordinates are (0,0,0), then the two
        * Vector3D objects are parallel to each other.
        *
        * <p>You can use the normalized cross product of two vertices of a
        * polygon surface with the normalized vector of the camera or eye
        * viewpoint to get a dot product. The value of the dot product can
        * identify whether a surface of a three-dimensional object is hidden
        * from the viewpoint.</p>
        *
        * @param a A second Vector3D object.
        * @returns A new Vector3D object that is perpendicular to the current
        *          Vector3D object and the Vector3D object specified as the
        *          parameter.
        */
        /**
        * @language zh_CN
        * 两个Vector3D进行叉乘 this 叉乘 a
        * 叉乘后的结果是这两条向量的垂直向量
        * @param a
        * @returns 返回叉乘结果
        */
        crossProduct(a: Vector3D): Vector3D;
        /**
        * @language en_US
        * Decrements the value of the x, y, and z elements of the current。
        * Vector3D object by the values of the x, y, and z elements of
        * specified Vector3D object. Unlike the
        * <code>Vector3D.subtract()</code> method, the
        * <code>decrementBy()</code> method changes the current Vector3D
        * object and does not return a new Vector3D object.
        *
        * @param a The Vector3D object containing the values to subtract from
        *          the current Vector3D object.
        */
        /**
        * @language zh_CN
        * 当前向量减去a向量，结果赋值给自己
        * @param a 减去的向量
        */
        decrementBy(a: Vector3D): void;
        /**
        * @language en_US
        * Returns the distance between two Vector3D objects. The。
        * <code>distance()</code> method is a static method. You can use it
        * directly as a method of the Vector3D class to get the Euclidean
        * distance between two three-dimensional points.
        *
        * @param pt1 A Vector3D object as the first three-dimensional point.
        * @param pt2 A Vector3D object as the second three-dimensional point.
        * @returns The distance between two Vector3D objects.
        */
        /**
        * @language zh_CN
        * 计算两个Vector3D之间的距离
        * @param pt1 坐标1
        * @param pt2 坐标2
        * @returns 两个Vector3D之间的距离
        */
        static distance(pt1: Vector3D, pt2: Vector3D): number;
        /**
        * @language en_US
        * If the current Vector3D object and the one specified as the。
        * parameter are unit vertices, this method returns the cosine of the
        * angle between the two vertices. Unit vertices are vertices that
        * point to the same direction but their length is one. They remove the
        * length of the vector as a factor in the result. You can use the
        * <code>normalize()</code> method to convert a vector to a unit
        * vector.
        *
        * <p>The <code>dotProduct()</code> method finds the angle between two
        * vertices. It is also used in backface culling or lighting
        * calculations. Backface culling is a procedure for determining which
        * surfaces are hidden from the viewpoint. You can use the normalized
        * vertices from the camera, or eye, viewpoint and the cross product of
        * the vertices of a polygon surface to get the dot product. If the dot
        * product is less than zero, then the surface is facing the camera or
        * the viewer. If the two unit vertices are perpendicular to each
        * other, they are orthogonal and the dot product is zero. If the two
        * vertices are parallel to each other, the dot product is one.</p>
        *
        * @param a The second Vector3D object.
        * @returns A scalar which is the dot product of the current Vector3D
        *          object and the specified Vector3D object.
        *
        */
        /**
        * @language zh_CN
        * 计算两个Vector3D的点积,返回两个Vector3D之间的夹角关系
        * @param a 另一个Vector3D
        * @returns 返回两个Vector3D之间的夹角关系
        */
        dotProduct(a: Vector3D): number;
        /**
        * @language en_US
        * @param toCompare The Vector3D object to be compared with the current
        *                  Vector3D object.
        * @param allFour   An optional parameter that specifies whether the w
        *                  property of the Vector3D objects is used in the
        *                  comparison.
        * @returns A value of true if the specified Vector3D object is equal
        *          to the current Vector3D object; false if it is not equal.
        */
        /**
        * @language zh_CN
        * 求两个Vector3D的值是否全等
        * @param toCompare 与些Vector3D进行比较
        * @param allFour 是否比较w分量
        * @returns 全等返回true
        */
        equals(toCompare: Vector3D, allFour?: boolean): boolean;
        /**
        * @language en_US

        * Increments the value of the x, y, and z elements of the current
        * Vector3D object by the values of the x, y, and z elements of a
        * specified Vector3D object. Unlike the <code>Vector3D.add()</code>
        * method, the <code>incrementBy()</code> method changes the current
        * Vector3D object and does not return a new Vector3D object.
        *
        * @param a The Vector3D object to be added to the current Vector3D
        *          object.
        */
        /**
        * @language zh_CN
        * 当前Vector3D加等于a Vector3D，只加x y z 3个分量
        * @param a 加等a
        */
        incrementBy(a: Vector3D): void;
        cross(v: any): Vector3D;
        divide(v: any): Vector3D;
        unit(): Vector3D;
        dot(v: any): Vector3D;
        /**
        * @language en_US
        * Sets the current Vector3D object to its inverse. The inverse object
        * is also considered the opposite of the original object. The value of
        * the x, y, and z properties of the current Vector3D object is changed
        * to -x, -y, and -z.
        */
        /**
        * @language zh_CN
        * 当前Vector3D x y z 3个分量取反
        */
        negate(): void;
        /**
        * @language en_US
        * Scales the line segment between(0,0) and the current point to a set
        * length.
        *
        * @param thickness The scaling value. For example, if the current
        * Vector3D object is (0,3,4), and you normalize it to
        * 1, the point returned is at(0,0.6,0.8).
        */
        /**
        * @language zh_CN
        * 当前Vector3D标准化
        * @param thickness 使当前Vector3D的长度为thickness 原点(0, 0, 0)到(x, y, z)的距离
        */
        normalize(thickness?: number): void;
        /**
        * @language en_US
        * Scales the current Vector3D object by a scalar, a magnitude. The
        * Vector3D object's x, y, and z elements are multiplied by the scalar
        * number specified in the parameter. For example, if the vector is
        * scaled by ten, the result is a vector that is ten times longer. The
        * scalar can also change the direction of the vector. Multiplying the
        * vector by a negative number reverses its direction.
        *
        * @param s A multiplier (scalar) used to scale a Vector3D object.
        */
        /**
        * @language zh_CN
        * 当前Vector3D扩大s倍
        * @param s 扩大的倍数
        */
        scaleBy(s: number): void;
        /**
        * @language en_US
        * Sets the members of Vector3D to the specified values
        *
        * @param xa The first element, such as the x coordinate.
        * @param ya The second element, such as the y coordinate.
        * @param za The third element, such as the z coordinate.
        */
        /**
        * @language zh_CN
        * 填充当前Vector3D的x, y, z
        * @param xa
        * @param yz
        * @param za
        * @param wz
        */
        setTo(xa: number, ya: number, za: number, wa?: number): void;
        /**
        * @language en_US
        * Subtracts the value of the x, y, and z elements of the current
        * Vector3D object from the values of the x, y, and z elements of
        * another Vector3D object. The <code>subtract()</code> method does not
        * change the current Vector3D object. Instead, this method returns a
        * new Vector3D object with the new values.
        *
        * @param a The Vector3D object to be subtracted from the current
        *          Vector3D object.
        * @returns A new Vector3D object that is the difference between the
        *          current Vector3D and the specified Vector3D object.
        */
        /**
        * @language zh_CN
        * 当前Vector3D减去a Vector3D 结果返回新实例
        * @param a 减去的Vector3D
        * @param target 如果当前参数为null那么就会new一个新的Vector3D返回
        * @returns 结果返回
        */
        subtract(a: Vector3D, target?: Vector3D): Vector3D;
        /**
        * @language zh_CN
        * 当前Vector3D乘other Vector3D 结果返回新实例
        * @param a 相乘的Vector3D
        * @param target 如果当前参数为null那么就会new一个新的Vector3D返回
        * @returns 结果返回
        */
        multiply(other: Vector3D, target?: Vector3D): Vector3D;
        /**
        * @language zh_CN
        * 当前Vector3D除以other Vector3D 结果返回新实例
        * @param a 相除的Vector3D
        * @param target 如果当前参数为null那么就会new一个新的Vector3D返回
        * @returns 结果返回
        */
        divided(other: Vector3D, target?: Vector3D): Vector3D;
        /**
        * @language zh_CN
        * 计算两个Vector3D之间的线性差值，结果为当前对象
        * @param v0 Vector3D 1
        * @param v1 Vector3D 2
        * @param t 时刻
        */
        lerp(v0: Vector3D, v1: Vector3D, t: number): void;
        /**
        * @language zh_CN
        * 当前Vector3D以字符串形式返回
        * @returns string
        */
        toString(): string;
        /**
        * @language zh_CN
        * 解析字符串为Vector3D
        * @param str 格式用空格间隔开，只解析为x,y,z
        */
        parsing(str: string): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Rectangle
     * @classdesc
     * Rectangle 类 表示矩形
     *
     * Rectangle 对象是按其位置（由它左上角的点 (x, y) 确定）以及宽度和高度定义的区域。
     *
     * Rectangle 类的 x、y、width 和 height 属性相互独立；更改一个属性的值不会影响其它属性。
     *
     * 您可以使用 new Rectangle() 构造函数创建 Rectangle 对象。
     * @version Egret 3.0
     * @platform Web,Native
    
     */
    class Rectangle {
        /**
        * @language zh_CN
        * 矩形左上角的 x 坐标
        */
        x: number;
        /**
        * @language zh_CN
        * 矩形左上角的 y 坐标
        */
        y: number;
        /**
        * @language zh_CN
        * 矩形的宽度
        */
        width: number;
        /**
        * @language zh_CN
        * 矩形的高度
        */
        height: number;
        /**
         * @language zh_CN
         * 创建一个新 Rectangle 对象，其左上角由 x 和 y 参数指定，并具有指定的 width 和 height 参数。
         * @param x 矩形左上角的 x 坐标。
         * @param y 矩形左上角的 y 坐标。
         * @param width 矩形的宽度
         * @param height 矩形的高度
         */
        constructor(x?: number, y?: number, width?: number, height?: number);
        /**
         * @language zh_CN
         * 检测x y 是否在当前矩形内
         * @param x  x 坐标。
         * @param y  y 坐标。
         */
        inner(x: number, y: number): boolean;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Quaternion
     * @classdesc
     * Quaternion类
     *
     * 定义了一个四元数表示物体在空间的旋转。
     * 四元数通常用作替代欧拉角和旋转矩阵的方式来实现平滑插值和避免万向节锁
     * 注意，这四元数类不自动保持四元数标准化。因此，在必要的时候，必须采取单位化的四元数，通过调用单位化方法
     * @version Egret 3.0
     * @platform Web,Native
     */
    class Quaternion {
        /**
        * @language en_US
        * The x value of the quaternion.
        */
        /**
        * @language zh_CN
        * 四元数的x值.
        */
        x: number;
        /**
        * @language en_US
        * The y value of the quaternion.
        */
        /**
        * @language zh_CN
        * 四元数的y值.
        */
        y: number;
        /**
        * @language en_US
        * The z value of the quaternion.
        */
        /**
        * @language zh_CN
        * 四元数的z值.
        */
        z: number;
        /**
        * @language en_US
        * The w value of the quaternion.
        */
        /**
        * @language zh_CN
        * 四元数的w值.
        */
        w: number;
        /**
        * @language en_US
        * Creates a new Quaternion object.
        * @param x The x value of the quaternion.
        * @param y The y value of the quaternion.
        * @param z The z value of the quaternion.
        * @param w The w value of the quaternion.
        */
        /**
        * @language zh_CN
        * 创建一个四元数.
        * @param x
        * @param y
        * @param z
        * @param w
        */
        constructor(x?: number, y?: number, z?: number, w?: number);
        /**
        * @language en_US
        *
        * @returns the magnitude of the quaternion object.
        */
        /**
        * @language zh_CN
        *
        * 返回四元数的大小.
        * @param w
        * @returns 四元数的大小.
        */
        magnitude: number;
        /**
        * @language en_US
        * Fills the quaternion object with the result from a multiplication of two quaternion objects.
        *
        * @param    qa    The first quaternion in the multiplication.
        * @param    qb    The second quaternion in the multiplication.
        */
        /**
        * @language zh_CN
        * 两个四元数相乘,然后结果给当调用者.
        * @param qa 第一个四元数
        * @param qb 第二个四元数
        */
        multiply(qa: Quaternion, qb: Quaternion): void;
        /**
        * @language zh_CN
        * 四元数乘以一个3维向量，结果返回一个四元数
        * @param vector 相乘的向量
        * @param target 返回的结果，如果为null就会实例化一个四元数对象返回
        * @returns 返回相乘后的结果
        */
        multiplyVector(vector: Vector3D, target?: Quaternion): Quaternion;
        /**
        * @language en_US
        * Fills the quaternion object with values representing the given rotation around a vector.
        *
        * @param    axis    The axis around which to rotate
        * @param    angle    The angle in radians of the rotation.
        */
        /**
        * @language zh_CN
        * 创建一个以axis轴为中心旋转angle角度的四元数
        *
        * @param axis   旋转轴
        * @param angle  旋转角度
        */
        fromAxisAngle(axis: Vector3D, angle: number): void;
        /**
        * @language zh_CN
        * 返回四元数绕轴心和角度
        *
        * @param axis 轴心
        * @returns 角度
        */
        toAxisAngle(axis: Vector3D): number;
        /**
        * @language en_US
        * Spherically interpolates between two quaternions, providing an interpolation between rotations with constant angle change rate.
        * @param qa The first quaternion to interpolate.
        * @param qb The second quaternion to interpolate.
        * @param t The interpolation weight, a value between 0 and 1.
        */
        /**
        * @language zh_CN
        * 两个四元数之间球形插值，插值之间提供旋转恒定角变化率。
        *
        * @param qa 四元数1
        * @param qb 四元数2
        * @param t 差值时刻
        */
        slerp(qa: Quaternion, qb: Quaternion, t: number): void;
        /**
        * @language en_US
        * Linearly interpolates between two quaternions.
        * @param qa The first quaternion to interpolate.
        * @param qb The second quaternion to interpolate.
        * @param t The interpolation weight, a value between 0 and 1.
        */
        /**
        * @language zh_CN
        * 两个四元数之间的线性插值
        *
        * @param qa 四元数1
        * @param qb 四元数2
        * @param t 差值时刻
        */
        lerp(qa: Quaternion, qb: Quaternion, t: number): void;
        /**
        * @language en_US
        * Fills the quaternion object with values representing the given euler rotation.
        *
        * @param    ax        The angle in radians of the rotation around the ax axis.
        * @param    ay        The angle in radians of the rotation around the ay axis.
        * @param    az        The angle in radians of the rotation around the az axis.
        */
        /**
        * @language zh_CN
        * 用数值表示给定的欧拉旋转填充四元数对象。
        *
        * @param ax x轴旋转角度
        * @param ay y轴旋转角度
        * @param az z轴旋转角度
        */
        fromEulerAngles(ax: number, ay: number, az: number): Quaternion;
        /**
        * @language en_US
        * Fills a target Vector3D object with the Euler angles that form the rotation represented by this quaternion.
        * @param target An optional Vector3D object to contain the Euler angles. If not provided, a new object is created.
        * @returns The Vector3D containing the Euler angles.
        */
        /**
        * @language zh_CN
        * 把四元数转成欧拉角返回
        *
        * @param target 转成的欧拉返回值，如果为null就新建一个对象返回
        * @retruns 转成的欧拉返回值
        */
        toEulerAngles(target?: Vector3D): Vector3D;
        /**
        * @language en_US
        * Normalises the quaternion object.
        */
        /**
        * @language zh_CN
        * 单位化四元数
        */
        normalize(val?: number): void;
        /**
        * @language en_US
        * Used to trace the values of a quaternion.
        *
        * @returns A string representation of the quaternion object.
        */
        /**
        * @language zh_CN
        * 以字符串形式返回四元数的值
        * @returns
        */
        toString(): string;
        /**
        * @language en_US
        * Converts the quaternion to a Matrix3D object representing an equivalent rotation.
        * @param target An optional Matrix3D container to store the transformation in. If not provided, a new object is created.
        * @returns A Matrix3D object representing an equivalent rotation.
        */
        /**
        * @language zh_CN
        * 把一个四元数转换成矩阵
        * @param target 返回转换后的矩阵，如果为null就新建一个对象返回
        * @see egret3d.Matrix4_4
        * @returns 返回转换后的矩阵
        */
        toMatrix3D(target?: Matrix4_4): Matrix4_4;
        /**
        * @language en_US
        * Extracts a quaternion rotation matrix out of a given Matrix3D object.
        * @param matrix The Matrix3D out of which the rotation will be extracted.
        */
        /**
        * @language zh_CN
        * 用一个旋转矩阵生成四元数
        * @param matrix 旋转矩阵
        */
        fromMatrix(matrix: Matrix4_4): void;
        /**
        * @language zh_CN
        * 返回一个把当前四元数取逆后的四元数
        * @param target 如果当前参数为null那么就会new一个新的四元数对象返回
        */
        inverse(target?: Quaternion): Quaternion;
        /**
        * @language en_US
        * Clones the quaternion.
        * @returns An exact duplicate of the current Quaternion.
        */
        /**
        * @language zh_CN
        * 克隆一个四元数
        * @returns 当前四元数复制后返回.
        */
        clone(): Quaternion;
        /**
        * @language en_US
        * Rotates a point.
        * @param vector The Vector3D object to be rotated.
        * @param target An optional Vector3D object that will contain the rotated coordinates. If not provided, a new object will be created.
        * @returns A Vector3D object containing the rotated point.
        */
        /**
        * @language zh_CN
        * 旋转一个3量坐标点
        * @param vector 被旋转的对象
        * @param target 旋转后的坐标对象。如果为null，将创建一个新的对象
        * @returns 返回旋转后的坐标对象
        */
        transformVector(vector: Vector3D, target?: Vector3D): Vector3D;
        /**
        * @language en_US
        * Copies the data from a quaternion into this instance.
        * @param q The quaternion to copy from.
        */
        /**
        * @language zh_CN
        * 将数据从四元数复制到该实例
        * @param q 被复制的四元数对象
        */
        copyFrom(q: Quaternion): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Orientation3D
     * @classdesc
     * 定义 Orientation3D 常量。</p>
     * Matrix4_4.decompose 会分 axisAngle、eulerAngles、quaternion这3种类型进行分解。</p>
     * 比如:</p>
     <pre>
     matrix.decompose(Orientation3D.QUATERNION)
     </pre>
     *
     * @see egret3d.Matrix4_4
     * @see egret3d.Quaternion
     *
     * @version Egret 3.0
     * @platform Web,Native
     */
    class Orientation3D {
        /**
        * @language zh_CN
        * 按轴旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        static AXIS_ANGLE: string;
        /**
        * @language zh_CN
        * 按欧拉角旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        static EULER_ANGLES: string;
        /**
        * @language zh_CN
        * 四元数旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        static QUATERNION: string;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Plane3D
     * @classdesc
     * Plane3D 类 3D空间中的平面表示数据
     * 由a,b,c,d4个分量组成 在三维空间中定义了一个平面 Ax + By + Cz + D = 0
     * @version Egret 3.0
     * @platform Web,Native
     */
    class Plane3D {
        /**
         * @language en_US
         * The A coefficient of this plane. (Also the x dimension of the plane normal)
         */
        /**
         * @language zh_CN
         * 平面中的a分量
         */
        a: number;
        /**
         * @language en_US
         * The B coefficient of this plane. (Also the y dimension of the plane normal)
         */
        /**
         * @language zh_CN
         * 平面中的b分量
         */
        b: number;
        /**
         * @language en_US
         * The C coefficient of this plane. (Also the z dimension of the plane normal)
         */
        /**
         * @language zh_CN
         * 平面中的c分量
         */
        c: number;
        /**
         * @language en_US
         * The D coefficient of this plane. (Also the inverse dot product between normal and point)
         */
        /**
         * @language zh_CN
         * 平面中的d分量
         */
        d: number;
        /**
         * @private
         */
        static ALIGN_ANY: number;
        /**
         * @private
         */
        static ALIGN_XY_AXIS: number;
        /**
         * @private
         */
        static ALIGN_YZ_AXIS: number;
        /**
         * @private
         */
        static ALIGN_XZ_AXIS: number;
        /**
         * @language en_US
         * Create a Plane3D with ABCD coefficients
         */
        /**
         * @language zh_CN
         * 创建一个平面实例
         * @param a
         * @param b
         * @param c
         * @param d
         */
        constructor(a?: number, b?: number, c?: number, d?: number);
        /**
         * @language zh_CN
         * 填充平面的各分量的值
         * @param a
         * @param b
         * @param c
         * @param d
         */
        setTo(a?: number, b?: number, c?: number, d?: number): void;
        /**
         * @language en_US
         * Fills this Plane3D with the coefficients from 3 points in 3d space.
         * @param p0 Vector3D
         * @param p1 Vector3D
         * @param p2 Vector3D
         */
        /**
         * @language zh_CN
         * 由3个坐标来创建一个3d平面
         * @param p0 Vector3D
         * @param p1 Vector3D
         * @param p2 Vector3D
         */
        fromPoints(p0: Vector3D, p1: Vector3D, p2: Vector3D): void;
        /**
         * @language en_US
         * Fills this Plane3D with the coefficients from the plane's normal and a point in 3d space.
         * @param normal Vector3D
         * @param point  Vector3D
         */
        /**
         * @language zh_CN
         * 由一条normal向量和一个坐标创建一个3d平面
         * @param normal Vector3D
         * @param point  Vector3D
         */
        fromNormalAndPoint(normal: Vector3D, point: Vector3D): void;
        /**
         * @language en_US
         * Normalize this Plane3D
         * @returns Plane3D This Plane3D.
         */
        /**
         * @language zh_CN
         * 单位化3d平面
         * @returns 返回平面长度
         */
        normalize(): number;
        /**
         * @language en_US
         * Returns the signed distance between this Plane3D and the point p.
         * @param p Vector3D
         * @returns Number
         */
        /**
         * @language zh_CN
         * 计算3d平面到点p的距离
         * @param p Vector3D
         * @returns 返回计算后的距离
         */
        distance(p: Vector3D): number;
        /**
         * @language en_US
         * Classify a point against this Plane3D. (in front, back or intersecting)
         * @param p Vector3D
         * @param epsilon
         * @returns PlaneClassification.FRONT在平面正面
         * PlaneClassification.BACK在平面背面面
         * PlaneClassification.INTERSECT在平面上
         */
        /**
         * @language zh_CN
         * 计算3d平面和点p的空间关系
         * @param p Vector3D
         * @param epsilon 相对偏移值
         * @returns int Plane3.FRONT or Plane3D.BACK or Plane3D.INTERSECT
         */
        classifyPoint(p: Vector3D, epsilon?: number): number;
        /**
         * @language zh_CN
         * 当前Plane3D以字符串形式返回
         * @returns string
         */
        toString(): string;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Matrix4_4
     * @classdesc
     *
     * Matrix4_4 类表示一个转换矩阵，该矩阵确定三维 (3D) 显示对象的位置和方向。
     * 该矩阵可以执行转换功能，包括平移（沿 x、y 和 z 轴重新定位）、旋转和缩放（调整大小）.
     * Matrix4_4 类还可以执行透视投影，这会将 3D 坐标空间中的点映射到二维 (2D) 视图.
     * 单一矩阵可以将多个转换组合在一起，并一次性对 3D 显示对象应用这些转换.
     * 例如，可以将一个矩阵应用于 3D 坐标，以便依次执行旋转和平移.
     *
     * @version Egret 3.0
     * @platform Web,Native
     */
    class Matrix4_4 {
        /**
        * @language zh_CN
        * 一个由 16 个数字组成的矢量，其中，每四个元素可以是 4x4 矩阵的一行或一列
        */
        rawData: Float32Array;
        private result;
        private m;
        /**
        * @language zh_CN
        * 构造
        * @param datas {number[16]}
        */
        constructor(datas?: Float32Array);
        /**
        * @language en_US
        * Build a lookat matrix. (left-handed)
        * @param eye The eye position.
        * @param at The target position.
        * @param up The up direction.
        */
        /**
        * @language zh_CN
        * 生成一个注视目标的矩阵.
        * @param eye 眼睛的位置.
        * @param at 目标的位置.
        * @param up 向上的方向.
        */
        lookAt(eye: Vector3D, at: Vector3D, up: Vector3D): void;
        multiply(mat4: Matrix4_4): void;
        /**
        * @private
        * @language zh_CN
        */
        perspectiveB(fov: number, aspect: number, near: number, far: number): Matrix4_4;
        /**
        * @private
        * @language zh_CN
        */
        frustum(l: number, r: number, b: number, t: number, n: number, f: number): Matrix4_4;
        /**
        * @language en_US
        * Build a perspective projection matrix. (left-handed)
        * @param fovy .
        * @param aspect .
        * @param zn min z.
        * @param zf max z.
        */
        /**
        * @language zh_CN
        * 生成一个透视投影矩阵.
        * @param fovy 观察时y 轴方向的角度，就是观察范围夹角。
        * @param aspect 横纵比，在视空间宽度除以高度.
        * @param zn 近裁剪面位置Z值.
        * @param zf 远裁剪面位置Z值.
        */
        perspective(fovy: number, aspect: number, zn: number, zf: number): void;
        /**
        * @language en_US
        * Build an ortho matrix. (left-handed)
        * @param w screen width.
        * @param h screen height.
        * @param zn min z.
        * @param zf max z.
        */
        /**
        * @language zh_CN
        * 生成一个透视投影矩阵.
        * @param w 屏幕的宽度。
        * @param h 屏幕的高度.
        * @param zn 近裁剪面位置Z值.
        * @param zf 远裁剪面位置Z值.
        */
        ortho(w: number, h: number, zn: number, zf: number): void;
        /**
        * @language en_US
        * Build an ortho matrix. (left-handed)
        * @param l min x.
        * @param r max x.
        * @param b min y.
        * @param t max y.
        * @param zn min z.
        * @param zf max z.
        */
        /**
        * @language zh_CN
        * 生成一个透视投影矩阵.
        * @param l 观察时X轴最小值.
        * @param r 观察时X轴最大值.
        * @param b 观察时Y轴最小值。
        * @param t 观察时Y轴最大值.
        * @param zn 近裁剪面位置Z值.
        * @param zf 远裁剪面位置Z值.
        */
        orthoOffCenter(l: number, r: number, b: number, t: number, zn: number, zf: number): void;
        /**
        * @language en_US
        * matrix multiply
        * @param lhs .
        */
        /**
        * @language zh_CN
        * 通过将当前 Matrix4_4 对象与另一个 Matrix4_4 对象相乘来前置一个矩阵
        * @param lhs 目标矩阵.
        */
        append(lhs: Matrix4_4): void;
        /**
        * @language en_US
        * matrix add
        * @param lhs
        * @returns
        */
        /**
        * @language zh_CN
        * 矩阵相加.
        * @param lhs 目标矩阵.
        * @returns 相加后的结果.
        */
        add(lhs: Matrix4_4): Matrix4_4;
        /**
        * @language en_US
        * matrix add
        * @param lhs
        * @returns reslut
        */
        /**
        * @language zh_CN
        * 矩阵相减.
        * @param lhs 目标矩阵.
        * @returns 相加减的结果.
        */
        sub(lhs: Matrix4_4): Matrix4_4;
        /**
        * @language zh_CN
        * 矩阵乘分量.
        * @param v .
        * @returns 返回一个相乘后的结果 矩阵.
        */
        mult(v: number): Matrix4_4;
        /**
        * @language zh_CN
        * 创建一个欧拉旋转矩阵.
        * @param x 绕x轴旋转角度.
        * @param y 绕y轴旋转角度.
        * @param z 绕z轴旋转角度.
        */
        rotation(x: number, y: number, z: number): void;
        /**
        * @language zh_CN
        * 当前矩阵乘 (按axis轴旋转degrees角度创建出来的矩阵)
        * @param degrees 旋转角度.
        * @param axis 绕axis轴旋转角度.
        */
        appendRotation(degrees: number, axis: Vector3D): void;
        /**
        * @language zh_CN
        * 生成一个缩放矩阵
        * @param xScale x轴缩放
        * @param yScale y轴缩放
        * @param zScale z轴缩放
        */
        appendScale(xScale: number, yScale: number, zScale: number): void;
        /**
        * @language zh_CN
        * 加上一个平移矩阵
        * @param x x轴坐标
        * @param y y轴坐标
        * @param z z轴坐标
        */
        appendTranslation(x: number, y: number, z: number): void;
        /**
        * @language zh_CN
        * 返回一个当前矩阵的克隆矩阵
        * @returns 克隆后的矩阵
        */
        clone(): Matrix4_4;
        /**
        * @language zh_CN
        * 给当前矩阵其中一行赋值
        * @param column 拷贝的行
        * @param vector3D 拷贝的值
        */
        copyColumnFrom(column: number, vector3D: Vector3D): void;
        /**
        * @language zh_CN
        * 拷贝矩阵中的其中一行 把值存在vector3D.
        * @param column 拷贝的行
        * @param vector3D 拷贝存值目标
        */
        copyRowTo(column: number, vector3D: Vector3D): void;
        /**
        * @language zh_CN
        * 把一个矩阵的值赋给当前矩阵.
        * @param sourceMatrix3D 源矩阵.
        * @returns 返回当前矩阵
        */
        copyFrom(sourceMatrix3D: Matrix4_4): Matrix4_4;
        /**
        * @language zh_CN
        * 把一个 float 数组赋值给当前矩阵.
        * @param vector 源数组.
        * @param index 从数组的index 开始copy.
        * @param transpose 是否转置当前矩阵.
        */
        copyRawDataFrom(vector: Float32Array, index?: number, transpose?: boolean): void;
        /**
        * @language zh_CN
        * 把当前矩阵的值拷贝给一个 float 数组.
        * @param vector 目标数组.
        * @param index 从数组的index 开始copy.
        * @param transpose 是否转置当前矩阵.
        */
        copyRawDataTo(vector: Float32Array, index?: number, transpose?: boolean): void;
        /**
        * @language zh_CN
        * 给当前矩阵的某一列 赋值
        * @param col 列
        * @param vector3D 值来源
        */
        copyColFrom(col: number, vector3D: Vector3D): void;
        /**
        * @language zh_CN
        * 拷贝当前矩阵的某一列
        * @param col 列
        * @param vector3D 拷贝目标
        */
        copyColTo(col: number, vector3D: Vector3D): void;
        /**
        * @language zh_CN
        * 拷贝当前矩阵
        * @param dest 拷贝目标
        */
        copyToMatrix3D(dest: Matrix4_4): void;
        /**
        * @language zh_CN
        * 分解当前矩阵
        * @param orientationStyle 分解类型
        * @returns Vector3D[3] pos rot scale
        */
        decompose(orientationStyle?: string): Vector3D[];
        /**
        * @language zh_CN
        * 当前矩阵变换一个向量
        * @param v 要变换的向量
        * @param target 如果当前参数为null那么就会new一个新的Vector3D返回
        * @returns 变换后的向量
        */
        deltaTransformVector(v: Vector3D, target?: Vector3D): Vector3D;
        /**
        * @language zh_CN
        * 单位化当前矩阵
        */
        identity(): void;
        /**
        * @language zh_CN
        * 填充当前矩阵
        * @param value 填充的值
        */
        fill(value: number): void;
        /**
        * @language zh_CN
        * 当前矩阵求逆
        */
        invers33(): void;
        /**
        * @language zh_CN
        * 当前矩阵求逆
        * @returns 是否能求逆
        */
        invert(): boolean;
        /**
        * @language zh_CN
        * 生成一个变换矩阵
        * @param pos  位移
        * @param scale 缩放
        * @param rot 旋转
        */
        makeTransform(pos: Vector3D, scale: Vector3D, rot: Quaternion): void;
        /**
        * @language zh_CN
        * 生成一个变换矩阵
        * @param components Vector3D[3] 位移 旋转 缩放
        * @returns 生成是否成功
        */
        recompose(components: Vector3D[]): boolean;
        /**
        * @language zh_CN
        * 用当前矩阵变换一个3D向量
        * @param v 变换的向量
        * @param target 如果当前参数为null那么就会new一个新的Vector3D返回
        * @returns 变换后的向量
        */
        transformVector(v: Vector3D, target?: Vector3D): Vector3D;
        /**
  * @language zh_CN
  * 用当前矩阵变换一个3D向量
  * @param v 变换的向量
  * @param target 如果当前参数为null那么就会new一个新的Vector3D返回
  * @returns 变换后的向量
  */
        transformVector4(v: Vector3D, target?: Vector3D): Vector3D;
        /**
         * @language zh_CN
         * 用当前矩阵变换一个3D向量
         * @param v 变换的向量
         * @param target 如果当前参数为null那么就会new一个新的Vector3D返回
         * @returns 变换后的向量
         */
        mat3TransformVector(v: Vector3D, target?: Vector3D): Vector3D;
        /**
        * @language zh_CN
        * 用当前矩阵变换一个3D平面
        * @param plane 变换的平面
        * @returns 变换后的平面
        */
        transformPlane(plane: Plane3D): Plane3D;
        private oRawData;
        /**
        * @language zh_CN
        * 当前矩阵转置
        */
        transpose(): void;
        /**
        * @language zh_CN
        * 生成一个(以x,y,z为中心轴旋转degrees角度)的矩阵
        * @param x 中心轴的x
        * @param y 中心轴的y
        * @param z 中心轴的z
        * @param degrees 旋转角度
        */
        static getAxisRotation(x: number, y: number, z: number, degrees: number): Matrix4_4;
        /**
        * @language zh_CN
        * 返回矩阵行列式
        *
        * @returns 行列式值
        */
        determinant: number;
        /**
        * @language zh_CN
        * 返回矩阵位移
        *
        * @returns 位移
        */
        /**
        * @language zh_CN
        * 设置矩阵位移
        *
        * @param value 位移
        */
        position: Vector3D;
        /**
        * @language zh_CN
        * 返回矩阵缩放
        *
        * @returns 缩放
        */
        scale: Vector3D;
        /**
        * @language zh_CN
        * 以字符串返回矩阵的值
        *
        * @returns 字符
        */
        toString(): string;
        /**
        * @language zh_CN
        * 求两个矩阵之间的差值
        * @param m0 矩阵0
        * @param m1 矩阵1
        * @param t 时间差 0.0 - 1.0
        */
        lerp(m0: Matrix4_4, m1: Matrix4_4, t: number): void;
    }
}
declare module egret3d {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.EyesMatrix
     * @classdesc
     * 可使用 EyesMatrix 类 对左，右眼睛矩阵的操作
     * 它会在摄像机的位置做一个左 右偏移 模拟出眼睛的矩阵
     * @version Egret 3.0
     * @platform Web,Native
     */
    class EyesMatrix {
        /**
        * @language zh_CN
        * 左眼睛矩阵
        */
        leftEyeMatrix: Matrix4_4;
        /**
        * @language zh_CN
        * 右眼睛矩阵
        */
        rightEyeMatrix: Matrix4_4;
        /**
        * @language zh_CN
        * @private
        */
        eyeSpace: number;
        private eyePosition;
        private eyeRotation;
        private eyeLookTarget;
        private eyeFocalLength;
        private leftPos;
        private rightPos;
        private targetPos;
        private lookAtPos;
        private quaternion;
        private dir;
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        /**
        * @private
        * @language zh_CN
        * 数据更新
        * @param matrix 当前相机矩阵
        */
        update(camera: Camera3D): void;
    }
}
declare module egret3d {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.PlaneClassification
     * @classdesc
     * 定义 PlaneClassification 常量
     * @version Egret 3.0
     * @platform Web,Native
     */
    class PlaneClassification {
        static BACK: number;
        static FRONT: number;
        static IN: number;
        static OUT: number;
        static INTERSECT: number;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.MathUtil
    * @classdesc
    * 可使用 MathUtil 类 进行3d矩阵的计算
    * @version Egret 3.0
    * @platform Web,Native
    */
    class MathUtil {
        /**
        * @language zh_CN
        * 1弧度为多少角度
        */
        static RADIANS_TO_DEGREES: number;
        /**
        * @language zh_CN
        * 1角度为多少弧度
        */
        static DEGREES_TO_RADIANS: number;
        /**
        * @private
        * 1角度为多少弧度
        */
        static RAW_DATA_CONTAINER: Float32Array;
        /**
        * @private
        */
        static CALCULATION_MATRIX: Matrix4_4;
        /**
        * @private
        */
        static CALCULATION_QUATERNION: Quaternion;
        /**
        * @language zh_CN
        * 四元数转矩阵
        * @param quarternion 源四元数
        * @param m 目标矩阵
        * @returns 返回转出矩阵
        */
        static quaternion2matrix(quarternion: Quaternion, m?: Matrix4_4): Matrix4_4;
        /**
        * @language zh_CN
        * 得到矩阵朝前的方向
        * @param m 源矩阵
        * @param v 返回的方向 可为null
        * @returns 返回方向
        */
        static getForward(m: Matrix4_4, v?: Vector3D): Vector3D;
        /**
        * @language zh_CN
        * 得到矩阵朝上的方向
        * @param m 源矩阵
        * @param v 返回的方向 可为null
        * @returns 返回方向
        */
        static getUp(m: Matrix4_4, v?: Vector3D): Vector3D;
        /**
        * @language zh_CN
        * 得到矩阵朝右的方向
        * @param m 源矩阵
        * @param v 返回的方向 可为null
        * @returns 返回方向
        */
        static getRight(m: Matrix4_4, v?: Vector3D): Vector3D;
        /**
        * @language zh_CN
        * 比较两个矩阵是否相同
        * @param m1 矩阵1
        * @param m2 矩阵2
        * @returns 相同返回true
        */
        static compare(m1: Matrix4_4, m2: Matrix4_4): boolean;
        /**
        * @language zh_CN
        * 得到平面的反射矩阵
        * @param plane 反射的面
        * @param target 计算返回的矩阵
        * @returns 返回计算的结果
        */
        static reflection(plane: Plane3D, target?: Matrix4_4): Matrix4_4;
        /**
        * @language zh_CN
        * 得到矩阵的平移
        * @param transform 计算的矩阵
        * @param result 计算返回平移坐标
        * @returns 返回平移坐标
        */
        static getTranslation(transform: Matrix4_4, result?: Vector3D): Vector3D;
        /**
        * @language zh_CN
        * 把一个值固定在一个范围之内
        * @param value 当前判定的值
        * @param min_inclusive 最小取值
        * @param max_inclusive 最大取值
        * @returns 计算后的结果
        */
        static clampf(value: number, min_inclusive: number, max_inclusive: number): number;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Ray
     * @classdesc
     * 射线是指直线上的一点和它一旁的部分所组成的直线，射线有且仅有一个端点，无法测量，由一个原点,和一个方向构成
     * 用于检测射线,也可用于鼠标拣选场景中的模型
     *
     * @see egret3d.Picker
     * @see egret3d.Vector3D
     *
     * @version Egret 3.0
     * @platform Web,Native
     */
    class Ray {
        /**
        * @language zh_CN
        * 射线原点
        */
        origin: Vector3D;
        /**
        * @language zh_CN
        * 射线方向
        */
        dir: Vector3D;
        /**
        * @language zh_CN
        * constructor
        * @origin 射线原点
        * @direction 射线方向
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(origin?: Vector3D, direction?: Vector3D);
        /**
        * @language zh_CN
        * 计算一个三角形和一个射线的交点
        * @param v0 三角形的第一个顶点
        * @param v1 三角形的第二个顶点
        * @param v2 三角形的第三个顶点
        * @param ret t(交点到射线起始点的距离) u(交点在v1-v0上的投影的位置) v(交点在v1-v2上的投影的位置, 交点为ret=v0+pU*(v1-v0)+pV*(v2-v0))
        * @returns 相交返回true
        * @version Egret 3.0
        * @platform Web,Native
        */
        IntersectTriangle(v0: Vector3D, v1: Vector3D, v2: Vector3D, ret?: Array<number>): boolean;
        /**
        * @language zh_CN
        * 检测射线相交模型
        * @param renderItem 检测的模型
        * @param inPos 相交点
        * @returns 相交返回true
        * @version Egret 3.0
        * @platform Web,Native
        */
        IntersectMeshEx(renderItem: IRender, uv_offset: number, result: PickResult): boolean;
        /**
        * @language zh_CN
        * 检测射线相交模型
        * @param verticesData 检测的模型的顶点数据
        * @param indexData 检测的模型的索引数据
        * @param offset 每个顶点的大小
        * @param faces 模型面数
        * @param inPos 返回相交点
        * @param mMat 顶点的世界变换矩阵
        * @returns 相交返回true
        * @version Egret 3.0
        * @platform Web,Native
        */
        IntersectMesh(verticesData: Array<number>, indexData: Array<number>, offset: number, faces: number, uv_offset: number, mMat: Matrix4_4, result: PickResult): boolean;
        private invViewMat;
        /**
        * @language zh_CN
        * 计算摄像机的射线
        * @param width 视口宽
        * @param height 视口高
        * @param viewMat 相机视图矩阵
        * @param projMat 相机投影矩阵
        * @param x 鼠标x
        * @param y 鼠标y
        * @version Egret 3.0
        * @platform Web,Native
        */
        CalculateAndTransformRay(width: number, height: number, viewMat: Matrix4_4, projMat: Matrix4_4, x: number, y: number): void;
        /**
        * @language zh_CN
        * 射线重置
        * @version Egret 3.0
        * @platform Web,Native
        */
        reset(): void;
    }
}
declare module egret3d {
    /**
    * @private
     * @language zh_CN
     * @class egret3d.Color
     * @classdesc
     * 可使用 Color 类调整显示对象的颜色值
     * @version Egret 3.0
     * @platform Web,Native
     */
    class Color {
        /**
        * @language zh_CN
        * alpha
        */
        a: number;
        /**
        * @language zh_CN
        * red
        */
        r: number;
        /**
        * @language zh_CN
        * green
        */
        g: number;
        /**
        * @language zh_CN
        * blue
        */
        b: number;
        /**
        * @language zh_CN
        * 返回白色
        * @retrun 白色
        */
        static white(): Color;
        /**
        * @language zh_CN
        * 返回黑色
        * @retrun 黑色
        */
        static black(): Color;
        /**
        * @language zh_CN
        * 返回白色
        * @retrun 白色
        */
        static red(): Color;
        /**
        * @language zh_CN
        * 返回绿色
        * @retrun 绿色
        */
        static green(): Color;
        /**
        * @language zh_CN
        * 返回蓝色
        * @retrun 蓝色
        */
        static blue(): Color;
        /**
        * @language zh_CN
        * constructor
        * @param r red
        * @param g green
        * @param b blue
        * @param a alpha
        */
        constructor(r?: number, g?: number, b?: number, a?: number);
        /**
        * @language zh_CN
        * 以number值返加颜色
        * @param colorFormat 格式
        * @returns 颜色
        */
        getColor(colorFormat?: number): number;
        /**
        * @language zh_CN
        * 颜色取差值
        * @param c0
        * @param c1
        * @param t (0.0-1.0)
        */
        lerp(c0: Color, c1: Color, t: number): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Bound
     * @classdesc
     * 可使用 Bound 类 取得包围盒的数据。</p>
     * 包含包围盒的各顶点信息，当包围盒要进行世界变换时，应当变换各顶点信息。</p>
     * @version Egret 3.0
     * @platform Web,Native
     */
    class Bound {
        /**
        * @language zh_CN
        * 顶点数据
        */
        vexData: Array<number>;
        /**
        * @language zh_CN
        * 索引数据
        */
        indexData: Array<number>;
        /**
        * @language zh_CN
        * 顶点长度
        */
        vexLength: number;
        /**
        * @language zh_CN
        * 子包围盒
        */
        childBound: Bound;
        protected owner: Object3D;
        constructor(owner: Object3D);
        /**
        * @language zh_CN
        * 得到变换矩阵
        * @returns 变换矩阵
        */
        transform: Matrix4_4;
        /**
        * @language zh_CN
        * 检测一个点是否包围盒内
        * @param pos 检测的点
        * @returns 成功返回true
        */
        pointIntersect(pos: Vector3D): boolean;
        /**
        * @language zh_CN
        * 检测两个包围对象是否相交
        * @param 检测的目标
        * @param 相交的结果 可以为null
        * @returns  成功返回true
        */
        intersect(target: Bound, intersect?: Bound): boolean;
        /**
        * @private
        * @language zh_CN
        */
        inBound(frustum: Frustum): boolean;
        protected updateAABB(): void;
    }
}
declare module egret3d {
    class HashMap {
        private data;
        private list;
        constructor(useOrderList?: boolean);
        isHas(key: string): boolean;
        getValue(key: string): any;
        getList(): Array<any>;
        add(key: string, value: any): void;
        remove(key: string): void;
        dispose(): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Bound
     * @classdesc
     * 可使用 Bound 类 取得包围盒的数据。</p>
     * 包含包围盒的各顶点信息，当包围盒要进行世界变换时，应当变换各顶点信息。</p>
     * @see egret3d.Bound
     * @version Egret 3.0
     * @platform Web,Native
     */
    class BoundBox extends Bound {
        /**
        * @language zh_CN
        * 盒子最小点
        */
        min: Vector3D;
        /**
        * @language zh_CN
        * 盒子最大点
        */
        max: Vector3D;
        /**
        * @language zh_CN
        * 盒子宽
        */
        width: number;
        /**
        * @language zh_CN
        * 盒子高
        */
        heigth: number;
        /**
        * @language zh_CN
        * 盒子长
        */
        depth: number;
        /**
        * @language zh_CN
        * 盒子体积
        */
        volume: number;
        /**
        * @language zh_CN
        * 盒子包围球中心点
        */
        center: Vector3D;
        /**
        * @language zh_CN
        * 盒子包围球半径
        */
        radius: number;
        /**
        * @language zh_CN
        * constructor
        * @param min
        * @param max
        */
        constructor(owner?: Object3D, min?: Vector3D, max?: Vector3D);
        /**
        * @language zh_CN
        * 拷贝一个包围盒
        * @param box
        */
        copyFrom(box: BoundBox): void;
        /**
        * @language zh_CN
        * 填充当前包围盒
        * @param box
        */
        fillBox(min: Vector3D, max: Vector3D): void;
        /**
        * @language zh_CN
        * 检测一个点是否包围盒内
        * @param pos 检测的点
        * @returns 成功返回true
        */
        pointIntersect(pos: Vector3D): boolean;
        /**
        * @language zh_CN
        * 检测两个包围盒是否相交
        * @param box2 其中一个包围盒
        * @param boxIntersect 相交的包围盒 默认为空
        * @returns 成功返回true
        */
        intersectAABBs(box2: BoundBox, boxIntersect?: BoundBox): boolean;
        /**
        * @language zh_CN
        * 检测两个包围对象是否相交
        * @param 检测的目标
        * @param 相交的结果 可以为null
        * @returns  成功返回true
        */
        intersect(target: Bound, intersect?: Bound): boolean;
        /**
        * @language zh_CN
        * 以字符串形式返回box的值
        * @returns 字符串
        */
        toString(): string;
        /**
        * @language zh_CN
        * 计算包围盒数据
        */
        calculateBox(): void;
        /**
        * @language zh_CN
        * 检测一个盒子是否在视椎体内
        * @param frustum 视椎体
        * @returns 在视椎内返回ture
        * @version Egret 3.0
        * @platform Web,Native
        */
        inBound(frustum: Frustum): boolean;
        protected updateAABB(): void;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.PickResult
    * @classdesc
    * 鼠标拾取返回数据。</p>
    * 鼠标拾取模型上的交点 (本地坐标、世界坐标)。</p>
    * 鼠标拾取模型的uv。</p>
    * @version Egret 3.0
    * @platform Web,Native
    */
    class PickResult {
        /**
        * @language zh_CN
        * 鼠标拾取模型上的交点 (本地坐标)。
        * @version Egret 3.0
        * @platform Web,Native
        */
        localPosition: Vector3D;
        /**
        * @language zh_CN
        * 鼠标拾取模型上的交点 (世界坐标)。
        * @version Egret 3.0
        * @platform Web,Native
        */
        globalPosition: Vector3D;
        /**
        * @language zh_CN
        * 鼠标拾取模型的uv。
        * @version Egret 3.0
        * @platform Web,Native
        */
        uv: Vector3D;
    }
}
declare module egret3d {
    /**
    * @private
    */
    interface IDispatchEvent {
        dispatchEvent(event: Event3D): any;
    }
}
declare module egret3d {
    /**
   * @language zh_CN
   * @class egret3d.Event3D
   * @classdesc
   * Event3D 类作为创建 Event3D 对象的基类，当发生事件时，Event3D 对象将作为参数传递给事件侦听器。Event3D 类的属性包含有关事件的基本信息，例如事件的类型。对于许多事件（如由 Event3D 类常量表示的事件），此基本信息就足够了。但其他事件可能需要更详细的信息。例如，与鼠标单击关联的事件需要包括有关单击事件的位置以及在单击事件期间是否按下了任何键的其他信息。您可以通过扩展 Event3D 类（MouseEvent 类执行的操作）将此类其他信息传递给事件侦听器。
   * @version Egret 3.0
   * @platform Web,Native
   */
    class Event3D {
        /**
        * @language zh_CN
        * COMPLETE 常量定义 相关完成事件。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static COMPLETE: string;
        /**
        * @language zh_CN
        * CHANGE_PROPERTY 常量定义 changeProperty 事件对象的 type 属性的值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static CHANGE: string;
        /**
        * @language zh_CN
        * ENTER_FRAME 定义 时实 更新tick。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static ENTER_FRAME: string;
        /**
        * @language zh_CN
        * RESIZE 定义 修改大小时发生。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static RESIZE: string;
        /**
        * @language zh_CN
        * 事件目标。
        * @param value {any}
        * @version Egret 3.0
        * @platform Web,Native
        */
        target: any;
        /**
        * @language zh_CN
        * 3D引擎中的事件的类型
        * @returns {any}
        * @version Egret 3.0
        * @platform Web,Native
        */
        eventType: string;
        /**
        * @language zh_CN
        * 附加数据。
        * @returns {string}
        * @version Egret 3.0
        * @platform Web,Native
        */
        data: any;
        /**
        * @language zh_CN
        * 当前时间。
        * @returns {number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        time: number;
        /**
        * @language zh_CN
        * 每帧延时。
        * @returns {number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        delay: number;
        /**
        * @language zh_CN
        * 创建一个作为参数传递给事件侦听器的 Event3D 对象。
        * @param typeName {string} 事件类型
        * @param data {any}附加数据(可选)
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(eventType?: string, data?: any);
    }
}
declare module egret3d {
    /**
     * @private
     * @language zh_CN
     * 鼠标键码
     * @version Egret 3.0
     * @platform Web,Native
     */
    enum MouseCode {
        Mouse_Left = 0,
        Mouse_Mid = 1,
        Mouse_Right = 2,
    }
    /**
    * @language zh_CN
    * @class egret3d.MouseEvent3D
    * @classdesc
    * MouseEvent3D 是所有引擎中可操作鼠标事件节点 的事件类型标记。
    * 只有Input.addEventListener 才会产生下类事件
    * @includeExample events/MouseEvent3D.ts
    * @see egret3d.Event3D
    * @see egret3d.EventDispatcher
    * @see egret3d.Input
    * @version Egret 3.0
    * @platform Web,Native
    */
    class MouseEvent3D extends Event3D {
        /**
         * @language zh_CN
         * MOUSE_CLICK 常量定义 onClick 事件对象的 type 属性的值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        static MOUSE_CLICK: string;
        /**
         * @language zh_CN
         * MOUSE_DOWN 常量定义 onMouseDown 事件对象的 type 属性的值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        static MOUSE_DOWN: string;
        /**
         * @language zh_CN
         * MOUSE_UP 常量定义 onMouseUp 事件对象的 type 属性的值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        static MOUSE_UP: string;
        /**
         * @language zh_CN
         * MOUSE_MOVE 常量定义 onMouseMove 事件对象的 type 属性的值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        static MOUSE_MOVE: string;
        /**
         * @language zh_CN
         * MOUSE_OVER 常量定义 onMouseMove 事件对象的 type 属性的值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        static MOUSE_OVER: string;
        /**
         * @language zh_CN
         * MOUSE_WHEEL 常量定义 onMouseWheel 事件对象的 type 属性的值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        static MOUSE_WHEEL: string;
        /**
         * @language zh_CN
         * 鼠标code值
         * @version Egret 3.0
         * @platform Web,Native
         */
        mouseCode: number;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.TouchEvent3D
    * @classdesc
    * TouchEvent3D 是所有引擎中可操作触摸事件节点 的事件类型标记。
    * 只有Input.addEventListener 才会产生下类事件
    * @see egret3d.Event3D
    * @see egret3d.EventDispatcher
    * @see egret3d.Input
    * @version Egret 3.0
    * @platform Web,Native
    */
    class TouchEvent3D extends Event3D {
        /**
         * @language zh_CN
         * TOUCH_MOVE 常量定义 onTouchMove 事件对象的 type 属性的值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        static TOUCH_MOVE: string;
        /**
        * @language zh_CN
        * TOUCH_END 常量定义 onTouchEnd 事件对象的 type 属性的值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static TOUCH_START: string;
        /**
        * @language zh_CN
        * TOUCH_START 常量定义 onTouchStart 事件对象的 type 属性的值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static TOUCH_END: string;
        /**
        * @language zh_CN
        * touch列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        targetTouches: any;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.PickEvent3D
    * @classdesc
    * PickEvent3D 是所有引擎中可操作物体拣选事件的事件类型标记。
    * 当IRender对象开启了 enablePick ，并且监听了PickEvent3D事件后，
    * 鼠标或触摸对IRender对象进行操作后会产生一些对应的事件进行影响。
    * 只有Object3D对象调用addEventListener 才会产生下类事件
    * @includeExample events/PickEvent3D.ts
    * @see egret3d.Event3D
    * @see egret3d.EventDispatcher
    * @see egret3d.Object3D
    * @version Egret 3.0
    * @platform Web,Native
    */
    class PickEvent3D extends Event3D {
        /**
         * @language zh_CN
         * PICK_CLICK 点击拣选事件
         * @version Egret 3.0
         * @platform Web,Native
         */
        static PICK_CLICK: string;
        /**
         * @language zh_CN
         * PICK_DOWN  按下拣选事件
         * @version Egret 3.0
         * @platform Web,Native
         */
        static PICK_DOWN: string;
        /**
         * @language zh_CN
         * PICK_UP 弹起拣选事件
         * @version Egret 3.0
         * @platform Web,Native
         */
        static PICK_UP: string;
        /**
         * @language zh_CN
         * PICK_MOVE 光标移动拣选
         * @version Egret 3.0
         * @platform Web,Native
         */
        static PICK_MOVE: string;
        /**
         * @language zh_CN
         * PICK_WHEEL 滚轮滚动拣选事件
         * @version Egret 3.0
         * @platform Web,Native
         */
        static PICK_WHEEL: string;
        /**
         * @language zh_CN
         * 拣选结果数据。
         * @version Egret 3.0
         * @platform Web,Native
         */
        pickResult: PickResult;
    }
}
declare module egret3d {
    /**
     * @private
     * @language zh_CN
     * 按键码
     * @version Egret 3.0
     * @platform Web,Native
     */
    enum KeyCode {
        Key_BackSpace = 8,
        Key_Tab = 9,
        Key_Clear = 12,
        Key_Enter = 13,
        Key_Shift_L = 16,
        Key_Control_L = 17,
        Key_Alt_L = 18,
        Key_Pause = 19,
        Key_CapsLock = 20,
        Key_Escape = 21,
        Key_Space = 32,
        Key_Prior = 33,
        Key_Next = 34,
        Key_End = 35,
        Key_Home = 36,
        Key_Left = 37,
        Key_Up = 38,
        Key_Right = 39,
        Key_Down = 40,
        Key_Select = 41,
        Key_Print = 42,
        Key_Execute = 43,
        Key_Insert = 45,
        Key_Delete = 46,
        Key_Help = 47,
        Key_0 = 48,
        Key_1 = 49,
        Key_2 = 50,
        Key_3 = 51,
        Key_4 = 52,
        Key_5 = 53,
        Key_6 = 54,
        Key_7 = 55,
        Key_8 = 56,
        Key_9 = 57,
        Key_A = 65,
        Key_B = 66,
        Key_C = 67,
        Key_D = 68,
        Key_E = 69,
        Key_F = 70,
        Key_G = 71,
        Key_H = 72,
        Key_I = 73,
        Key_J = 74,
        Key_K = 75,
        Key_L = 76,
        Key_M = 77,
        Key_N = 78,
        Key_O = 79,
        Key_P = 80,
        Key_Q = 81,
        Key_R = 82,
        Key_S = 83,
        Key_T = 84,
        Key_U = 85,
        Key_V = 86,
        Key_W = 87,
        Key_X = 88,
        Key_Y = 89,
        Key_Z = 90,
        Key_KP_0 = 96,
        Key_KP_1 = 97,
        Key_KP_2 = 98,
        Key_KP_3 = 99,
        Key_KP_4 = 100,
        Key_KP_5 = 101,
        Key_KP_6 = 102,
        Key_KP_7 = 103,
        Key_KP_8 = 104,
        Key_KP_9 = 105,
        Key_Multiply = 106,
        Key_Add = 107,
        Key_Separator = 108,
        Key_Subtract = 109,
        Key_Decimal = 110,
        Key_Divide = 111,
        Key_F1 = 112,
        Key_F2 = 113,
        Key_F3 = 114,
        Key_F4 = 115,
        Key_F5 = 116,
        Key_F6 = 117,
        Key_F7 = 118,
        Key_F8 = 119,
        Key_F9 = 120,
        Key_F10 = 121,
        Key_F11 = 122,
        Key_F12 = 123,
        Key_F13 = 124,
        Key_F14 = 125,
        Key_F15 = 126,
        Key_F16 = 127,
        Key_F17 = 128,
        Key_F18 = 129,
        Key_F19 = 130,
        Key_F20 = 131,
        Key_F21 = 132,
        Key_F22 = 133,
        Key_F23 = 134,
        Key_F24 = 135,
        Key_Num_Lock = 136,
        Key_Scroll_Lock = 137,
    }
    /**
    * @language zh_CN
    * @class egret3d.MouseEvent3D
    * @classdesc
    * KeyEvent3D 按键事件，
    * 只有Input.addEventListener 才会产生下类事件
    * @includeExample events/KeyEvent3D.ts
    * @see egret3d.Event3D
    * @see egret3d.EventDispatcher
    * @see egret3d.Input
    * @version Egret 3.0
    * @platform Web,Native
    */
    class KeyEvent3D extends Event3D {
        /**
         * @language zh_CN
         * KEY_CLICK 常量定义 onKeyClick 事件对象的 type 属性的值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        static KEY_CLICK: string;
        /**
         * @language zh_CN
         * KEY_DOWN 常量定义 onKeyDown 事件对象的 type 属性的值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        static KEY_DOWN: string;
        /**
         * @language zh_CN
         * KEY_UP 常量定义 onKeyUp 事件对象的 type 属性的值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        static KEY_UP: string;
        /**
         * @language zh_CN
         * 按键code值
         * @version Egret 3.0
         * @platform Web,Native
         */
        keyCode: number;
    }
}
declare module egret3d {
    /**
     * @private
     * @language zh_CN
     * 设备的方向(设备横向持有或纵向持有)。
     * @version Egret 3.0
     * @platform Web,Native
     */
    enum Orientation {
        /**
         * 设备纵向持有0°,即纵向主方向。
         * @version Egret 3.0
         * @platform Web,Native
         */
        Portrait_Primary = 0,
        /**
         * 设备纵向持有180°，即纵向次方向
         * @version Egret 3.0
         * @platform Web,Native
         */
        Portrait_Secondary = 180,
        /**
         * 设备横向持有-90°,即横向主方向。
         * @version Egret 3.0
         * @platform Web,Native
         */
        Landscape_Primary = -90,
        /**
        * 设备横向持有90°,即横向次方向。
        * @version Egret 3.0
        * @platform Web,Native
        */
        Landscape_Secondary = 90,
    }
    /**
    * @language zh_CN
    * @class egret3d.MouseEvent3D
    * @classdesc
    * OrientationEvent3D 是所有引擎中可重力感应事件节点的事件类型标记。
    * 只有Input.addEventListener 才会产生下类事件
    * @see egret3d.Event3D
    * @see egret3d.EventDispatcher
    * @see egret3d.Input
    * @version Egret 3.0
    * @platform Web,Native
    */
    class OrientationEvent3D extends Event3D {
        /**
         * @language zh_CN
         * ORIENTATION_CHANGE 常量定义 onOrientationChange 事件对象的 type 属性的值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        static ORIENTATION_CHANGE: string;
        /**
         * @language zh_CN
         * DEVICE_MOTION 常量定义 onDeviceMotion 事件对象的 type 属性的值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        static DEVICE_MOTION: string;
        /**
         * @language zh_CN
         * DEVICE_ORIENTATION 常量定义 onDeviceOrientation 事件对象的 type 属性的值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        static DEVICE_ORIENTATION: string;
        private _orientation;
        /**
         * @language zh_CN
         * 获取设备的方向枚举值,枚举值为其对应角度
         * @return {Orientation} 设备的方向枚举值
         * @version Egret 3.0
         * @platform Web,Native
         */
        orientation: Orientation;
        private _acceleration;
        /**
         * @language zh_CN
         * 获取排除重力影响的加速度
         * @return {DeviceAcceleration} 加速度,单位是m/s2
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置排除重力影响的加速度
         * @param deviceAcceleration {DeviceAcceleration} 加速度,单位是m/s2。
         * @version Egret 3.0
         * @platform Web,Native
         */
        acceleration: DeviceAcceleration;
        private _accelerationIncludingGravity;
        /**
        * @language zh_CN
        * 获取受到重力影响的加速度
        * @return {DeviceAcceleration} 加速度,单位是m/s2
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置受到重力影响的加速度
        * @param deviceAcceleration {DeviceAcceleration} 加速度,单位是m/s2。
        * @version Egret 3.0
        * @platform Web,Native
        */
        accelerationIncludingGravity: DeviceAcceleration;
        private _rotationRate;
        /**
         * @language zh_CN
         * 获取旋转角度的变化速率
         * @return {DeviceAcceleration} 旋转速率,单位是deg/s。
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置旋转速率
         * @param deviceRotationRate {DeviceRotationRate} 旋转速率,单位是deg/s。
         * @version Egret 3.0
         * @platform Web,Native
         */
        rotationRate: DeviceRotationRate;
        private _absolute;
        /**
         * @language zh_CN
         * 获取是否是绝对旋转重力方向
         * @return {boolean}。
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置是否是绝对旋转重力方向
         * @param value {boolean}。
         * @version Egret 3.0
         * @platform Web,Native
         */
        absolute: boolean;
        private _alpha;
        /**
         * @language zh_CN
         * 获取Alpha旋转，围绕Z轴旋转，即水平方向旋转
         * @return {number} 旋转角度。
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置Alpha旋转，围绕Z轴旋转，即水平方向旋转
         * @param value {number} 旋转角度。
         * @version Egret 3.0
         * @platform Web,Native
         */
        alpha: number;
        private _beta;
        /**
         * @language zh_CN
         * 获取Beta旋转，围绕X轴旋转，即前后方向旋转
         * @return {number} 旋转角度。
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置Beta旋转，围绕X轴旋转，即前后方向旋转
         * @param value {number} 旋转角度。
         * @version Egret 3.0
         * @platform Web,Native
         */
        beta: number;
        private _gamma;
        /**
         * @language zh_CN
         * 获取Gamma旋转，围绕Y轴旋转，即左右方向旋转
         * @return {number} 旋转角度。
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置Gamma旋转，围绕Y轴旋转，即左右方向旋转
         * @param value {number} 旋转角度。
         * @version Egret 3.0
         * @platform Web,Native
         */
        gamma: number;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.LoaderEvent3D
    * @classdesc
    * LoaderEvent3D 使用URLLoader加载资源的事件返回对象
    * 只有URLLoader对象调用addEventListener 才会产生下类事件
    * @includeExample events/LoaderEvent3D.ts
    * @see egret3d.Event3D
    * @see egret3d.EventDispatcher
    @ @see egret3d.URLLoader
    * @version Egret 3.0
    * @platform Web,Native
    */
    class LoaderEvent3D extends Event3D {
        /**
         * @language zh_CN
         * LOADER_COMPLETE 常量定义 onLoadComplete 事件对象的 type 属性的值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        static LOADER_COMPLETE: string;
        /**
        * @language zh_CN
        * LOADER_PROGRESS 常量定义 onLoadProgress 事件对象的 type 属性的值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static LOADER_PROGRESS: string;
        /**
        * @language zh_CN
        * LOADER_ERROR 常量定义 onLoadError 事件对象的 type 属性的值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static LOADER_ERROR: string;
        /**
        * @language zh_CN
        * 加载对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        loader: URLLoader;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.ParserEvent3D
    * @classdesc
    * ParserEvent3D 使用ParserUtils加载资源的事件返回对象
    * @see egret3d.Event3D
    * @see egret3d.EventDispatcher
    * @version Egret 3.0
    * @platform Web,Native
    */
    class ParserEvent3D extends Event3D {
        /**
         * @language zh_CN
         * PARSER_COMPLETE 常量定义 onParserComplete 事件对象的 type 属性的值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        static PARSER_COMPLETE: string;
        /**
        * @language zh_CN
        * 解析对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        parser: ParserUtils;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.EventDispatcher
    * @classdesc
    * EventDispatcher 类是可调度事件的所有类的基类。
    * @version Egret 3.0
    * @platform Web,Native
    */
    class EventDispatcher {
        /**
         * @language zh_CN
         * @private
         */
        protected listeners: any;
        /**
         * @language zh_CN
         * 派发一个 Event3D 事件到所有注册了特定类型侦听器的对象中。
         * @param event {any} 事件类型。
         * @version Egret 3.0
         * @platform Web,Native
         */
        dispatchEvent(event3D: Event3D): void;
        /**
        * @language zh_CN
        * 使用 EventDispatcher 对象注册事件侦听器对象，以使侦听器能够接收事件通知。可以为特定类型的事件和优先级注册事件侦听器。成功注册一个事件侦听器后，无法通过额外调用 addEventListener() 来更改其优先级。要更改侦听器的优先级，必须首先调用 removeEventListener()。然后，可以使用新的优先级再次注册该侦听器。
        * @param type {string} 事件的类型。
        * @param callback {Function} 处理事件的侦听器函数。此函数必须接受 Event3D 对象作为其唯一的参数，并且不能返回任何结果，
        * 如下面的示例所示： function(evt:Event3D):void 函数可以有任何名称。
        * @param  priority {number} 事件侦听器的优先级。优先级由一个带符号的 32 位整数指定。数字越大，优先级越高。优先级为 n 的所有侦听器会在
        * 优先级为 n -1 的侦听器之前得到处理。如果两个或更多个侦听器共享相同的优先级，则按照它们的添加顺序进行处理。默认优先级为 0。
         * @version Egret 3.0
         * @platform Web,Native
        */
        addEventListener(type: string, callback: Function, thisObject: any, priolity?: number): number;
        /**
         * @language zh_CN
         * 移除事件侦听器。
         * @param type {string} 事件名。
         * @param callback {Function} 侦听函数。
         * @version Egret 3.0
         * @platform Web,Native
         */
        removeEventListener(type: string, callback: Function, thisObject: any): void;
        /**
         * @language zh_CN
         * 移除事件侦听器。
         * @param id  事件id, addEventListener 的返回值.
         * @version Egret 3.0
         * @platform Web,Native
         */
        removeEventListenerAt(id: number): void;
        /**
         * @language zh_CN
         * 移除所有事件侦听器。
         * @version Egret 3.0
         * @platform Web,Native
         */
        clearEventListener(): void;
        /**
        * @language zh_CN
        * 检测是否存在监听器。
        * @param type {string}
        * @returns {boolean}
         * @version Egret 3.0
         * @platform Web,Native
        */
        containEventListener(type: string): boolean;
        /**
        * @language zh_CN
        * 检测是否存在监听器。
        * @param type {string} 事件名
        * @param callback {Function} 处理事件的侦听器函数
        * @returns {boolean}
        * @version Egret 3.0
        * @platform Web,Native
        */
        hasEventListener(type: string, thisObject: any, callback: Function): boolean;
    }
}
declare module egret3d {
    /**
    * @private
    * @language zh_CN
    * @class egret3d.EventManager
    * @classdesc
    * 事件管理。
    * @version Egret 3.0
    * @platform Web,Native
    */
    class EventManager {
        private _canvas;
        private _pickEvent3d;
        private _retRenderList;
        private _view3ds;
        /**
        * @language zh_CN
        * 构造函数
        * @param canvas 画布
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(canvas: Egret3DCanvas);
        /**
        * @language zh_CN
        * 清理EventManager
        * @version Egret 3.0
        * @platform Web,Native
        */
        onClear(): void;
        /**
        * @language zh_CN
        * 清除绑定关系。
        * @version Egret 3.0
        * @platform Web,Native
        */
        onClearListeners(): void;
        /**
         * @language zh_CN
         * 分发事件。
         * @param e {any} 事件参数
         * @param typeStr {string} 事件类型
         * @version Egret 3.0
         * @platform Web,Native
         */
        private sendEvent(e, typeStr, func);
        private initPickEvent3D(typeStr, e, render);
        private onTouchMove(e);
        private onTouchUp(e);
        private onTouchDown(e);
        private onMouseClick(e);
        private onMouseDown(e);
        private onMouseUp(e);
        private onMouseMove(e);
    }
}
declare module egret3d {
    /**
    * @private
    * @private
    * @class egret3d.ShaderBase
    * @classdesc
    * shader 基类
    */
    class ShaderBase {
        protected index: number;
        protected shadersName: Array<string>;
        protected endShadername: string;
        protected stateChange: boolean;
        /**
        * @language zh_CN
        *
        */
        maxBone: number;
        shaderType: number;
        shader: Shader;
        /**
        * @language zh_CN
        * constructor
        * @param materialData
        * @param usage
        */
        constructor();
        /**
        * @language zh_CN
        *
        * @param shaderName xxx
        */
        addUseShaderName(shaderName: string): void;
        /**
        * @language zh_CN
        *
        * @param shaderName xxx
        */
        addEndShaderName(shaderName: string): void;
        /**
        * @language zh_CN
        *
        * @returns string
        */
        getShader(passUsage: PassUsage): Shader;
    }
}
declare module egret3d.GLSL {
    /**
    * @private
    * @class egret3d.VarRegister
    * @classdesc
    * shader 变量 基类
    *
    * @version Egret 3.0
    * @platform Web,Native
    */
    class VarRegister {
        /**
        * @language zh_CN
        * 值名字
        */
        varName: string;
        /**
        * @language zh_CN
        * 变量名
        */
        name: string;
        /**
        * @language zh_CN
        * 变量属性类型
        */
        key: string;
        /**
        * @language zh_CN
        * 变量类型
        */
        valueType: string;
        /**
        * @language zh_CN
        * 变量值
        */
        value: any;
        /**
        * @language zh_CN
        * usage use
        */
        data: any;
        /**
        * @language zh_CN
        * texture
        */
        texture: ITexture;
        /**
        * @language zh_CN
        * uniform Index
        */
        uniformIndex: any;
        /**
        * @language zh_CN
        * active Texture Index
        */
        activeTextureIndex: number;
        /**
        * @language zh_CN
        * index
        */
        index: number;
        /**
        * @language zh_CN
        * level
        */
        level: string;
        size: number;
        dataType: number;
        normalized: boolean;
        stride: number;
        offset: number;
        offsetIndex: number;
        offsetBytes: number;
        /**
        * @language zh_CN
        * 得到组合后的字符串
        * @param compoments
        */
        var(compoments: string): string;
        /**
        * @language zh_CN
        *
        * @param compoments
        */
        use(compoments?: string): string;
        /**
        * @language zh_CN
        *
        * @returns VarRegister
        */
        clone(): VarRegister;
        protected computeVarName(): void;
    }
}
declare module egret3d.GLSL {
    /**
    * @private
    * @class egret3d.Attribute
    * @classdesc
    * 变量属性
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Attribute extends VarRegister {
        /**
        * @language zh_CN
        * constructor
        * @param name
        * @param valueType
        */
        constructor(name: string, valueType: string);
    }
}
declare module egret3d.GLSL {
    /**
    * @private
    * @class egret3d.AttributeType
    * @classdesc
    *
    * shader中的变量属性类型
    * @version Egret 3.0
    * @platform Web,Native
    */
    class AttributeType {
        /**
        * shader int类型
        * @version Egret 3.0
        * @platform Web,Native
        */
        static int: string;
        /**
        * shader float类型
        * @version Egret 3.0
        * @platform Web,Native
        */
        static float: string;
        /**
        * shader vec2类型 两个 float 组成
        * @version Egret 3.0
        * @platform Web,Native
        */
        static vec2: string;
        /**
        * shader vec3类型 三个 float 组成
        * @version Egret 3.0
        * @platform Web,Native
        */
        static vec3: string;
        /**
        * shader vec4类型 四个 float 组成
        * @version Egret 3.0
        * @platform Web,Native
        */
        static vec4: string;
        /**
        * shader 2x2 矩阵
        * @version Egret 3.0
        * @platform Web,Native
        */
        static mat2: string;
        /**
        * shader 3x3 矩阵
        * @version Egret 3.0
        * @platform Web,Native
        */
        static mat3: string;
        /**
        * shader 4x4 矩阵
        * @version Egret 3.0
        * @platform Web,Native
        */
        static mat4: string;
    }
}
declare module egret3d.GLSL {
    /**
    * @private
    * @class egret3d.ConstVar
    * @classdesc
    * shader中常量类型变量的所有数据
    * 包含变量类型，变量名，变量的值
    *
    * @see egret3d.AttributeType
    *
    * @version Egret 3.0
    * @platform Web,Native
    */
    class ConstVar extends VarRegister {
        /**
        * @language zh_CN
        * 构造
        * @param name 常量名
        * @param valueType 常量类型
        * @param value 常量的值
        */
        constructor(name: string, valueType: string, value: string);
    }
}
declare module egret3d.GLSL {
    /**
    * @private
    * @class egret3d.Sampler2D
    * @classdesc
    *
    * shader中sampler2D类型变量的所有数据
    * 包含变量类型，变量名，变量的值
    *
    * @see egret3d.AttributeType
    *
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Sampler2D extends VarRegister {
        /**
        * @language zh_CN
        * 构造
        * @param name 变量名
        */
        constructor(name: string);
    }
}
declare module egret3d.GLSL {
    /**
    * @private
    * @private
    * @class egret3d.Sampler3D
    * @classdesc
    *
    * shader中samplerCube类型变量的所有数据
    * 包含变量类型，变量名，变量的值
    *
    * @see egret3d.AttributeType
    *
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Sampler3D extends VarRegister {
        /**
        * @language zh_CN
        * 构造
        * @param name 变量名
        */
        constructor(name: string);
    }
}
declare module egret3d.GLSL {
    /**
    * @private
    * @class egret3d.TmpVar
    * @classdesc
    *
    * shader中临时变量类型的所有数据
    * 包含变量类型，变量名，变量的值
    *
    * @see egret3d.AttributeType
    *
    * @version Egret 3.0
    * @platform Web,Native
    */
    class TmpVar extends VarRegister {
        /**
        * @language zh_CN
        * 构造
        * @param name 变量名
        * @param valueType 变量类型
        */
        constructor(name: string, valueType: string);
    }
}
declare module egret3d.GLSL {
    /**
    * @private
    * @class egret3d.Uniform
    * @classdesc
    *
    * shader中uniform类型的所有数据
    * 包含变量类型，变量名，变量的值
    *
    * @see egret3d.AttributeType
    *
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Uniform extends VarRegister {
        /**
        * @language zh_CN
        * 创建一个Uniform对象
        * @param name 变量名
        * @param valueType 变量类型
        */
        constructor(name: string, valueType: string);
    }
}
declare module egret3d.GLSL {
    /**
    * @private
    * @class egret3d.UniformType
    * @classdesc
    * shader Uniform 变量的类型
    */
    class UniformType {
        /**
        * shader bool类型
        * @version Egret 3.0
        * @platform Web,Native
        */
        static bool: string;
        /**
        * shader int类型
        * @version Egret 3.0
        * @platform Web,Native
        */
        static int: string;
        /**
        * shader float类型
        * @version Egret 3.0
        * @platform Web,Native
        */
        static float: string;
        /**
        * shader vec2类型 两个 float 组成
        * @version Egret 3.0
        * @platform Web,Native
        */
        static vec2: string;
        /**
        * shader vec3类型 三个 float 组成
        * @version Egret 3.0
        * @platform Web,Native
        */
        static vec3: string;
        /**
        * shader vec4类型 四个 float 组成
        * @version Egret 3.0
        * @platform Web,Native
        */
        static vec4: string;
        /**
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static bvec2: string;
        /**
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static bvec3: string;
        /**
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static bvec4: string;
        /**
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static ivec2: string;
        /**
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static ivec3: string;
        /**
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static ivec4: string;
        /**
        * shader 2x2 矩阵
        * @version Egret 3.0
        * @platform Web,Native
        */
        static mat2: string;
        /**
        * shader 3x3 矩阵
        * @version Egret 3.0
        * @platform Web,Native
        */
        static mat3: string;
        /**
        * shader 4x4 矩阵
        * @version Egret 3.0
        * @platform Web,Native
        */
        static mat4: string;
        /**
        * shader 贴图对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        static sampler2D: string;
        /**
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static sampleCube: string;
    }
}
declare module egret3d.GLSL {
    /**
    * @private
    * @class egret3d.VarConstName
    * @classdesc
    * shader 变量 名字定义
    * 用户在写自定义shader时，按照引擎中已经列取出来的变量名进行命名
    */
    class VarConstName {
        static attribute_position: string;
        static attribute_normal: string;
        static attribute_tangent: string;
        static attribute_vertexColor: string;
        static attribute_uv0: string;
        static attribute_uv1: string;
        static varying_pos: string;
        static varying_normal: string;
        static varying_tangent: string;
        static varying_color: string;
        static varying_uv0: string;
        static varying_uv1: string;
        static varying_globalPos: string;
        static varying_lightDir: string;
        static varying_eye: string;
        static uniform_floatv_0: string;
        static uniform_floatv_1: string;
        static uniform_floatv_2: string;
        static uniform_iv_0: string;
        static uniform_iv_1: string;
        static uniform_iv_2: string;
        static uniform_bv_0: string;
        static uniform_bv_1: string;
        static uniform_bv_2: string;
        static uniform_vec2fv_0: string;
        static uniform_vec2fv_1: string;
        static uniform_vec2fv_2: string;
        static uniform_vec3fv_0: string;
        static uniform_vec3fv_1: string;
        static uniform_vec3fv_2: string;
        static uniform_vec4fv_0: string;
        static uniform_vec4fv_1: string;
        static uniform_vec4fv_2: string;
        static uniform_vec2iv_0: string;
        static uniform_vec2iv_1: string;
        static uniform_vec2iv_2: string;
        static uniform_vec3iv_0: string;
        static uniform_vec3iv_1: string;
        static uniform_vec3iv_2: string;
        static uniform_vec4iv_0: string;
        static uniform_vec4iv_1: string;
        static uniform_vec4iv_2: string;
        static uniform_vec2bv_0: string;
        static uniform_vec2bv_1: string;
        static uniform_vec2bv_2: string;
        static uniform_vec3bv_0: string;
        static uniform_vec3bv_1: string;
        static uniform_vec3bv_2: string;
        static uniform_vec4bv_0: string;
        static uniform_vec4bv_1: string;
        static uniform_vec4bv_2: string;
        static uniform_modelMatrix: string;
        static uniform_projectionMatrix: string;
        static uniform_normalMatrix: string;
        static uniform_eye: string;
        static uniform_lightDir: string;
        static texture2D_0: string;
        static texture2D_1: string;
        static texture2D_2: string;
        static texture2D_3: string;
        static texture2D_4: string;
    }
}
declare module egret3d.GLSL {
    /**
    * @private
    * @class egret3d.Varying
    * @classdesc
    *
    * shader中varying类型的所有数据
    * 包含变量类型，变量名，变量的值
    *
    * @see egret3d.AttributeType
    *
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Varying extends VarRegister {
        /**
        * @language zh_CN
        * 构造函数
        * @param name 变量名
        * @param valueType 变量类型
        */
        constructor(name: string, valueType: string);
    }
}
declare module egret3d.GLSL {
    /**
    * @private
    * @class egret3d.Extension
    * @classdesc
    * 变量属性
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Extension extends VarRegister {
        /**
        * @language zh_CN
        * constructor
        * @param name
        * @param valueType
        */
        constructor(name: string);
    }
}
declare module egret3d.GLSL {
    /**
    * @private
    * @class egret3d.VaryingType
    * @classdesc
    * shader中varying 变量 类型
    * @version Egret 3.0
    * @platform Web,Native
    */
    class VaryingType {
        /**
        * shader bool类型
        * @version Egret 3.0
        * @platform Web,Native
        */
        static bool: string;
        /**
        * shader int类型
        * @version Egret 3.0
        * @platform Web,Native
        */
        static int: string;
        /**
        * shader float类型
        * @version Egret 3.0
        * @platform Web,Native
        */
        static float: string;
        /**
        * shader vec2类型 两个 float 组成
        * @version Egret 3.0
        * @platform Web,Native
        */
        static vec2: string;
        /**
        * shader vec3类型 三个 float 组成
        * @version Egret 3.0
        * @platform Web,Native
        */
        static vec3: string;
        /**
        * shader vec4类型 四个 float 组成
        * @version Egret 3.0
        * @platform Web,Native
        */
        static vec4: string;
        /**
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static bvec2: string;
        /**
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static bvec3: string;
        /**
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static bvec4: string;
        /**
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static ivec2: string;
        /**
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static ivec3: string;
        /**
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static ivec4: string;
        /**
        * shader 2x2 矩阵
        * @version Egret 3.0
        * @platform Web,Native
        */
        static mat2: string;
        /**
        * shader 3x3 矩阵
        * @version Egret 3.0
        * @platform Web,Native
        */
        static mat3: string;
        /**
        * shader 4x4 矩阵
        * @version Egret 3.0
        * @platform Web,Native
        */
        static mat4: string;
        /**
        * shader 贴图对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        static sampler2D: string;
        /**
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static sampleCube: string;
    }
}
declare module egret3d {
    /**
   * @private
    * @language zh_CN
    * @class egret3d.VertexShader
    * @classdesc
    * 顶点着色器。
    * @version Egret 3.0
    * @platform Web,Native
    */
    class FragmentShader extends ShaderBase {
        /**
        * @language zh_CN
        * 创建一个新的 VertexShader 对象。
        * @param materialData {MaterialData}
        * @param usage {MethodUsageData}
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(materialData: MaterialData, usage: PassUsage);
        /**
        * @language zh_CN
        * 设置顶点着色器。
        * @param geometry {GeometryBase}
        * @version Egret 3.0
        * @platform Web,Native
        */
        setVertexShader(): void;
        /**
        * @language zh_CN
        * 返回 Shader 源。
        * @returns {String}
        * @version Egret 3.0
        * @platform Web,Native
        */
        getShaderSource(): string;
        /**
        * @language zh_CN
        * 构建 VertexShader。
        * @version Egret 3.0
        * @platform Web,Native
        */
        build(): void;
        /**
        * @language zh_CN
        * 添加 Method。
        * @version Egret 3.0
        * @platform Web,Native
        * @param method {MethodBase}
        */
        addMethod(method: MethodBase): void;
    }
}
declare module egret3d {
    /**
    * @private
    */
    class ShaderLib {
        static lib: {
            [key: string]: string;
        };
    }
}
declare module egret3d {
    /**
    * @private
    */
    class ShaderPool {
        static programlib: HashMap;
        static vsShaderHashMap: HashMap;
        static fsShaderHashMap: HashMap;
        private static context;
        constructor();
        static register(context: Context3DProxy): void;
        static getGPUShader(shaderType: number, shaderID: string, source: string): Shader;
        static getProgram(vs_shaderID: string, fs_shaderID: string): Program3D;
        private static unRegisterShader(list);
        private static registerProgram(vsShader, fsShader);
        private static unRegisterProgram(vsKey, fsKey);
    }
}
declare module egret3d.GLSL {
    /**
    * @private
    * @class egret3d.ShaderContent
    * @classdesc
    * shader文件解析后的数据内容
    * 每种变量类型都进行了规类
    * 用相应的列表进行存储，这样可以便于shader文件进行合并
    * @version Egret 3.0
    * @platform Web,Native
    */
    class ShaderContent {
        /**
        * @private
        * shader文件名
        * @version Egret 3.0
        * @platform Web,Native
        */
        name: string;
        source: string;
        funcNames: Array<string>;
        funcDict: any;
        /**
        * @private
        * 结构体列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        structDict: any;
        structNames: Array<string>;
        /**
        * @private
        * attribute列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        attributeList: Array<Attribute>;
        /**
        * @private
        * varying列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        varyingList: Array<Varying>;
        /**
        * @private
        * uniform列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        uniformList: Array<Uniform>;
        /**
        * @private
        * const列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        constList: Array<ConstVar>;
        /**
        * @private
        * 临时变量列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        tempList: Array<TmpVar>;
        /**
        * @private
        * sampler2D列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        sampler2DList: Array<Sampler2D>;
        /**
        * @private
        * sampler3D列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        sampler3DList: Array<Sampler3D>;
        extensionList: Array<Extension>;
        /**
        * @private
        * 增加一个变量对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        addVar(sVar: VarRegister): void;
        /**
        * @private
        * 增加一个函数
        * @version Egret 3.0
        * @platform Web,Native
        */
        addFunc(name: string, func: string): void;
        /**
        * @private
        * 增加一个结构体
        * @version Egret 3.0
        * @platform Web,Native
        */
        addStruct(name: string, structStr: string): void;
        /**
        * @private
        * 合并一个shader内容
        * @version Egret 3.0
        * @platform Web,Native
        */
        addContent(otherContent: ShaderContent): void;
        private mergeMainFunc(func1, func2);
        clone(): ShaderContent;
    }
}
declare module egret3d {
    /**
    * @private
    * @class egret3d.FuncData
    * @classdesc
    * shader系统工具类，管理所有要用到的shader文件
    * @version Egret 3.0
    * @platform Web,Native
    */
    class ShaderUtil {
        private static _shaderLibs;
        private static _methodLibs;
        private _shaderContentDict;
        private static _instance;
        private vs_begin;
        private vs_end;
        private fs_begin;
        private fs_end;
        /**
        * @language zh_CN
        *
        * 单例
        */
        static instance: ShaderUtil;
        /**
        * @language zh_CN
        * @private
        * 加载shader文件
        */
        load(): void;
        private readShader(str);
        /**
        * @language zh_CN
        * 返回组合shader后的内容
        * @param shaderNameList 要组合的shader名字列表
        * @param usage
        * @returns shader 内容
        */
        fillShaderContent(shaderBase: ShaderBase, shaderNameList: Array<string>, usage: PassUsage): Shader;
        private synthesisShader(content, shaderBase);
        /**
        * @language zh_CN
        *
        * @param att
        */
        static connectAtt(att: GLSL.Attribute): string;
        /**
        * @language zh_CN
        *
        * @param tempVar
        */
        private static connectTemp(tempVar);
        /**
        * @language zh_CN
        *
        * @param struct
        */
        private static connectStruct(struct);
        /**
        * @language zh_CN
        *
        * @param constVar
        */
        private static connectConst(constVar);
        /**
        * @language zh_CN
        *
        * @param varying
        */
        private static connectVarying(varying);
        /**
        * @language zh_CN
        *
        * @param unifrom
        */
        private static connectUniform(unifrom);
        /**
        * @language zh_CN
        *
        * @param sampler
        */
        private static connectSampler(sampler);
        private static connectSampler3D(sampler);
        private static connectExtension(extension);
        private static getTexture2DIndex(i);
    }
}
declare module egret3d {
    /**
    * @private
    */
    class AnimationNode {
        name: string;
        vertex_ShaderName: string;
        frament_ShaderName: string;
        vertex_data: Float32Array;
        frament_data: Float32Array;
        attributes: Array<GLSL.VarRegister>;
        state: IAnimationState;
        build(geometry: Geometry, count: number): void;
        update(time: number, delay: number, geometry: Geometry, context: Context3DProxy): void;
    }
}
declare module egret3d {
    class AnimationCurve {
    }
}
declare module egret3d {
    interface IAnimationState {
        name: string;
        vertex_shaders: string[];
        fragment_shaders: string[];
        numberOfVertices: number;
        vertexSizeInBytes: number;
        animNodes: AnimationNode[];
        keyFrames: AnimationCurve[];
    }
}
declare module egret3d {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.IAnimation
     * @classdesc
     * 动画接口
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample animation/IAnimation.ts
     */
    interface IAnimation {
        /**
        * @language zh_CN
        * 骨骼动画控制器对象
        * 只有骨骼动画对象才有此接口
        * @version Egret 3.0
        * @platform Web,Native
        */
        skeletonAnimationController?: SkeletonAnimation;
        /**
        * @language zh_CN
        * 粒子动画控制器对象。
        * 只有粒子动画对象才有此接口
        * @version Egret 3.0
        * @platform Web,Native
        */
        particleAnimationController?: ParticleAnimation;
        /**
        * @language zh_CN
        * 总时间
        */
        time: number;
        /**
        * @language zh_CN
        * 帧间隔时间
        */
        delay: number;
        /**
        * @language zh_CN
        * 动画播放速度
        */
        speed: number;
        /**
        * @language zh_CN
        * 更新调度
        * @param time 总时间
        * @param delay 帧间隔时间
        */
        update(time: number, delay: number, geometry: Geometry, context: Context3DProxy): void;
        /**
        * @language zh_CN
        * 播放动画
        * @param animName 动画名称
        * @param speed 播放速度（默认为1）
        */
        play(animName?: string, speed?: number): void;
        /**
        * @language zh_CN
        * 停止动画播放
        */
        stop(): void;
        /**
        * @language zh_CN
        * 是否正在播放
        */
        isPlay(): boolean;
        /**
        * @language zh_CN
        * 获取动画列表
        * @return 动画名称数组
        */
        animStateNames: string[];
        /**
        * @language zh_CN
        * 获取动画节点
        * @return 动画节点数组
        */
        animStates: IAnimationState[];
        addAnimState(animState: IAnimationState): any;
        removeAnimState(animState: IAnimationState): any;
        /**
        * @language zh_CN
        * 克隆新的IAnimation对象
        * @return 新的IAnimation对象
        */
        clone(): IAnimation;
    }
}
declare module egret3d {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.Joint
     * @classdesc
     * Joint 类表示骨骼关节，属于骨架类的组成部分， Joint类属于骨架实现的内部类，无需直接实例化。
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample animation/skeletonAnimation/Joint.ts
     */
    class Joint {
        /**
        * @language zh_CN
        * 骨骼矩阵是否有效
        */
        jointMatrixValid: boolean;
        /**
        * @language zh_CN
        * 骨骼世界矩阵是否有效
        */
        worldMatrixValid: boolean;
        /**
        * @language zh_CN
        * 骨骼矩阵
        */
        jointMatrix: Matrix4_4;
        /**
        * @language zh_CN
        * 骨骼世界矩阵
        */
        worldMatrix: Matrix4_4;
        /**
        * @language zh_CN
        * 骨骼名称
        */
        name: string;
        /**
        * @language zh_CN
        * 父骨骼名称
        */
        parent: string;
        /**
        * @language zh_CN
        * 父骨骼索引编号
        */
        parentIndex: number;
        /**
        * @language zh_CN
        * 骨骼逆矩阵
        */
        inverseBindPose: Matrix4_4;
        /**
        * @language zh_CN
        * 骨骼缩放量
        */
        scale: Vector3D;
        /**
        * @language zh_CN
        * 骨骼旋转量
        */
        orientation: Quaternion;
        /**
        * @language zh_CN
        * 骨骼平移量
        */
        translation: Vector3D;
        /**
        * @language zh_CN
        * 骨骼本地矩阵
        */
        localMatrix: Matrix4_4;
        /**
        * @language zh_CN
        * 构造函数
        * @param name 骨骼名称
        */
        constructor(name: string);
        /**
        * @language zh_CN
        * 克隆新骨骼对象
        * @return 新骨骼对象
        */
        clone(): Joint;
        /**
        * @language zh_CN
        * 设置骨骼逆矩阵
        * @param translation 平移量
        * @param rotation 旋转量
        * @param scaling 缩放量
        */
        setInverseBindPose(translation: Vector3D, rotation: Vector3D, scaling: Vector3D): void;
        /**
        * @language zh_CN
        * 设置骨骼本地置换
        * @param orientation 旋转量
        * @param scale 缩放量
        * @param translation 平移量
        */
        setLocalTransform(orientation: Quaternion, scale: Vector3D, translation: Vector3D): void;
    }
}
declare module egret3d {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.Skeleton
     * @classdesc
     * Skeleton 类表示骨架类，其中包含若干个 Joint（骨骼关节） 对象，Skeleton（骨架类）是组成骨骼动画的单帧单位。
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample animation/skeletonAnimation/Skeleton.ts
     */
    class Skeleton {
        /**
        * @language zh_CN
        * 当前骨架帧时间
        */
        frameTime: number;
        /**
        * @language zh_CN
        * 骨架包含的骨骼
        */
        joints: Array<Joint>;
        /**
        * @language zh_CN
        * 骨架矩阵是否有效
        */
        skeletonMatrixValid: boolean;
        private _skeletonMatrix;
        private _initialSkeleton;
        private _temp_q0;
        private _temp_q1;
        private _temp_q2;
        private _temp_v0;
        private _temp_v1;
        private _temp_v2;
        constructor(initialSkeleton?: Skeleton);
        /**
        * @language zh_CN
        * 克隆新骨架对象
        * @return 新骨架对象
        */
        clone(): Skeleton;
        /**
        * @language zh_CN
        * 重置骨架数据
        */
        reset(): void;
        /**
        * @language zh_CN
        * 初始骨架
        */
        /**
        * @language zh_CN
        * 设置初始骨架
        * @param value 初始骨架
        */
        initialSkeleton: Skeleton;
        /**
        * @language zh_CN
        * 骨架矩阵阵列
        */
        skeletonMatrix: Float32Array;
        /**
        * @language zh_CN
        * 骨骼数量
        */
        numJoint: number;
        /**
        * @language zh_CN
        * 通过名称查找指定骨骼
        * @param name 骨骼名称
        * @return 骨骼对象
        */
        findJoint(name: string): Joint;
        /**
        * @language zh_CN
        * 通过名称查找骨骼索引编号
        * @param name 骨骼名称
        * @return 骨骼索引编号
        */
        findJointIndex(name: string): number;
        /**
        * @language zh_CN
        * 骨架插值
        * @param skeleton0 骨架0
        * @param skeleton1 骨架1
        * @param tNow 新骨架帧时间（骨架0.frameTime ~ 骨架1.frameTime）
        */
        skeletonLerp(skeleton0: Skeleton, skeleton1: Skeleton, tNow: number): void;
        /**
        * @language zh_CN
        * 骨架插值计算
        * @param skeleton0 骨架0
        * @param skeleton1 骨架1
        * @param t 时间因子(0.0~1.0);
        */
        lerp(skeleton0: Skeleton, skeleton1: Skeleton, t: number): void;
        /**
        * @language zh_CN
        * 骨架转矩阵阵列数组
        * @param target 用于储存的矩阵阵列数组
        * @return 矩阵阵列数组
        */
        toMatrixData(target?: Float32Array): Float32Array;
        /**
        * @language zh_CN
        * 更新骨架矩阵
        */
        updateSkeletonMatrix(): void;
        /**
        * @language zh_CN
        * 计算骨骼世界矩阵
        * @param initialSkeleton 初始骨架对象
        */
        calculateJointWorldMatrix(initialSkeleton: Skeleton): void;
        private calculateAbsoluteMatrix(currentSkeletonPose, jointIndex, initialSkeleton);
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.SkeletonAnimation
     * @classdesc
     * SkeletonAnimation 类表示骨骼动画控制类
     *
     * 骨骼动画控制类中管理若干个 SkeletonAnimationClip（骨骼动画） 对象，每个SkeletonAnimationClip对象，都是对*.eam 文件的实例。
     * @includeExample anim/skeletonAnimation/SkeletonAnimation.ts
     * @see egret3d.SkeletonAnimationClip
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample animation/skeletonAnimation/SkeletonAnimation.ts
     */
    class SkeletonAnimation extends EventDispatcher implements IAnimation {
        /**
        * @language zh_CN
        * 动画播放完一个周期的事件
        */
        static EVENT_PLAY_COMPLETE: string;
        /**
        * @language zh_CN
        * 动画帧更改的事件
        */
        static EVENT_FRAME_CHANGE: string;
        /**
        * @language zh_CN
        * 时间
        */
        time: number;
        /**
        * @language zh_CN
        * 延迟
        */
        delay: number;
        /**
        * @language zh_CN
        * 速度
        */
        speed: number;
        /**
        * @language zh_CN
        * 当前动画
        */
        currentAnim: string;
        /**
        * @language zh_CN
        * 是否开启平滑
        */
        smooth: boolean;
        /**
       * @language zh_CN
       * 获取动画列表
       * @return 动画名称数组
       */
        animStateNames: string[];
        /**
        * @language zh_CN
        * 获取动画节点
        * @return 动画节点数组
        */
        animStates: IAnimationState[];
        private _initialSkeleton;
        private _animList;
        private _skeletonMatrix;
        private _animationSkeleton;
        private _bindList;
        private _enabledSkeletonAnimationClips;
        private _eventCallbackList;
        private _skeletonAnimationClips;
        private _blendSkeleton;
        private _useCache;
        private _dirtyFrameNumber;
        private _playSpeed;
        private _playing;
        private _currentFrame;
        private _currentTime;
        private _temp_smooth;
        private _temp_quat;
        private _temp_vec3;
        private _event3D;
        constructor(initialSkeleton: Skeleton);
        /**
        * @language zh_CN
        * 骨骼动画容器
        * @return SkeletonAnimation对象
        */
        skeletonAnimationController: SkeletonAnimation;
        /**
        * @language zh_CN
        * 克隆新的SkeletonAnimation对象
        * @return 新的SkeletonAnimation对象
        */
        clone(): SkeletonAnimation;
        /**
        * @language zh_CN
        * 当前播放的骨架矩阵阵列数组
        */
        currentSkeletonMatrixData: Float32Array;
        /**
        * @language zh_CN
        * 骨骼数
        */
        jointNumber: number;
        addAnimState(animState: IAnimationState): void;
        removeAnimState(animState: IAnimationState): void;
        /**
        * @language zh_CN
        * 添加SkeletonAnimationClip对象
        * @param animationState SkeletonAnimationClip对象
        * @return SkeletonAnimationClip对象
        */
        addSkeletonAnimationClip(animationState: SkeletonAnimationClip): SkeletonAnimationClip;
        /**
        * @language zh_CN
        * 更新
        * @param time 总时间
        * @param delay 延迟时间
        */
        update(time: number, delay: number): void;
        /**
        * @language zh_CN
        * 播放
        * @param animName 动画名称
        * @param speed 速度
        * @return 是否成功
        */
        play(animName?: string, speed?: number): boolean;
        /**
        * @language zh_CN
        * 播放一次
        * @param animName 动画名称
        * @param speed 播放速度
        * @return 是否成功
        */
        playOnce(animName?: string, speed?: number): boolean;
        /**
        * @language zh_CN
        * 当前帧索引
        */
        /**
        * @language zh_CN
        * 当前帧索引
        */
        currentFrame: number;
        /**
        * @language zh_CN
        * 获取总帧数
        * @param animName 动画名称
        * @return 动画总帧数
        */
        getTotalNumberOfFrame(animName?: string): number;
        /**
        * @language zh_CN
        * 停止动画播放
        */
        stop(): void;
        /**
        * @language zh_CN
        * 动画是否在播放
        * @return 是否在播放
        */
        isPlay(): boolean;
        /**
        * @language zh_CN
        * 设置动画播放速度
        * @param speed 播放速度
        */
        setPlaySpeed(speed: number): void;
        /**
        * @language zh_CN
        * 绑定3D对象到骨骼
        * @param jointName 骨骼名称
        * @param obj3d 3D对象
        * @return 是否成功
        */
        bindToJointPose(jointName: string, obj3d: Object3D): boolean;
        private updateBindList(skeletonPose);
        /**
        * @language zh_CN
        * 脏帧数
        * @return xxx
        */
        dirtyFrameNumber: number;
        /**
        * @language zh_CN
        * 获取SkeletonAnimationClip对象
        * @param name 动画名称
        * @return SkeletonAnimationClip对象
        */
        getAnimationState(name: string): SkeletonAnimationClip;
        /**
        * @language zh_CN
        * 移除动画
        * @param name 动画名称
        */
        removeAnimationState(name: string): void;
        /**
        * @language zh_CN
        * 移除所有动画
        */
        removeAllAnimationStates(): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.SkeletonAnimationClip
     * @classdesc
     * SkeletonAnimationClip 类为骨骼动画
     *
     * SkeletonAnimationClip类为骨骼动画，其中保存管理若干个Skeleton（骨架对象），每个骨架对象都为该动画某时刻的骨骼帧信息。
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample animation/skeletonAnimation/SkeletonAnimationClip.ts
     */
    class SkeletonAnimationClip {
        /**
        * @language zh_CN
        * 帧数
        */
        frameCount: number;
        private _animName;
        private _sampling;
        private _timePosition;
        private _loop;
        private _playing;
        private _enabled;
        private _weight;
        private _length;
        private _parent;
        private _poseArray;
        constructor(animName?: string);
        /**
        * @language zh_CN
        * 父对象
        */
        parent: SkeletonAnimation;
        /**
        * @language zh_CN
        * 动画Pose骨架序列
        */
        /**
        * @language zh_CN
        * 动画Pose骨架序列
        */
        poseArray: Array<Skeleton>;
        /**
        * @language zh_CN
        * 克隆新的SkeletonAnimationClip对象
        * @return 新的SkeletonAnimationClip
        */
        clone(): SkeletonAnimationClip;
        /**
        * @language zh_CN
        * 是否已经结束
        * @return 是否已经结束
        */
        hasEnded(): boolean;
        /**
        * @language zh_CN
        * 添加动画播放时间偏移量
        * @param offset 时间增量
        */
        addTime(offset: number): void;
        /**
        * @language zh_CN
        * 当前帧索引
        */
        /**
        * @language zh_CN
        * 当前帧索引
        */
        currentFrameIndex: number;
        /**
        * @language zh_CN
        * 下一帧的索引
        */
        nextFrameIndex: number;
        /**
        * @language zh_CN
        * 动画名称
        */
        /**
        * @language zh_CN
        * 动画名称
        */
        animationName: string;
        /**
        * @language zh_CN
        * 动画长度
        */
        length: number;
        /**
        * @language zh_CN
        * 采样率
        */
        /**
        * @language zh_CN
        * 采样率
        */
        sampling: number;
        /**
        * @language zh_CN
        * 是否循环
        */
        /**
        * @language zh_CN
        * 是否循环
        */
        loop: boolean;
        /**
        * @language zh_CN
        * 是否播放中
        */
        /**
        * @language zh_CN
        * 是否播放
        */
        play: boolean;
        /**
        * @language zh_CN
        * 是否启用
        */
        /**
        * @language zh_CN
        * 是否启用
        */
        enabled: boolean;
        /**
        * @language zh_CN
        * 混合权重
        */
        /**
        * @language zh_CN
        * 混合权重
        */
        weight: number;
        /**
        * @language zh_CN
        * 播放的时间位置
        */
        /**
        * @language zh_CN
        * 播放的时间位置
        */
        timePosition: number;
        /**
        * @language zh_CN
        * 填充帧
        * @param initialSkeleton 初始骨架
        */
        fillFrame(initialSkeleton: Skeleton): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Channel
     * @classdesc
     * Channel 类控制应用程序中的声音，对声音执行更精细的控制。每个声音均分配给一个声道，而且应用程序可以具有混合在一起的多个声道。
     * @version Egret 3.0
     * @platform Web,Native
     */
    class Channel {
        /**
        * @language zh_CN
        * 音量，范围从 0（静音）至 1（最大幅度）。
        * @version Egret 3.0
        * @platform Web,Native
        */
        volume: number;
        /**
        * @language zh_CN
        * 是否循环播放 使声音播放结束时重新开始播放。
        * @version Egret 3.0
        * @platform Web,Native
        */
        loop: boolean;
        /**
        * @language zh_CN
        * 当前播放速度。1.0 正常速度。0.5 半速（更慢）。2.0 倍速（更快）。-1.0 向后。正常速度。-0.5 向后，半速。
        * @version Egret 3.0
        * @platform Web,Native
        */
        pitch: number;
        protected context: any;
        protected sound: Sound;
        private paused;
        private startTime;
        private startOffset;
        protected gain: any;
        protected source: any;
        /**
        * @language zh_CN
        * 创建一个新的 Channel 对象。
        * @param sound {Sound} Sound 对象 音频的数据源。
        * @param {Object} options {any} ["volume":1,"loop":true volume] 回放音量, 0 到 1 ， loop 是否循环播放。
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(sound: Sound, options: any);
        /**
        * @language zh_CN
        * 开始在该声道中播放声音。
        * @version Egret 3.0
        * @platform Web,Native
        */
        play(): void;
        /**
        * @language zh_CN
        * 暂时停止在该声道中播放声音。
        * @version Egret 3.0
        * @platform Web,Native
        */
        pause(): void;
        /**
        * @language zh_CN
        * 从暂停的位置继续在该声道中播放声音。
        * @version Egret 3.0
        * @platform Web,Native
        */
        unpause(): void;
        /**
        * @language zh_CN
        * 停止在该声道中播放声音。
        * @version Egret 3.0
        * @platform Web,Native
        */
        stop(): void;
        private setLoop(value);
        private setVolume(value);
        private setPitch(value);
        /**
        * @language zh_CN
        * 是否正在播放。
        * @returns {boolean}
        * @version Egret 3.0
        * @platform Web,Native
        */
        isPlaying(): boolean;
        /**
        * @language zh_CN
        * 音频持续时间。
        * @returns {number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        getDuration(): number;
        protected createSource(): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Channel3d
     * @classdesc
     * Channel3d 类控制应用程序中 在三维空间中播放的声音。每个声音均分配给一个声道，而且应用程序可以具有混合在一起的多个声道。
     * @version Egret 3.0
     * @platform Web,Native
     */
    class Channel3d extends Channel {
        private _panner;
        private _listener;
        /**
        * @language zh_CN
        * 返回监听者位置。
        * @returns Vector3D 监听者位置。
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置监听者位置。
        * @param value Vector3D监听者位置。
        * @version Egret 3.0
        * @platform Web,Native
        */
        listener: Vector3D;
        /**
        * @language zh_CN
        * 创建一个新的 Channel3d 对象。
        * @param sound {Sound} Sound 对象 音频的数据源。
        * @param {Object} options {any} ["volume":1,"loop":true volume] 回放音量, 0 到 1 ， loop 是否循环播放。
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(sound: Sound, options: any);
        private _position;
        /**
        * @language zh_CN
        * 三维空间中的位置。
        * @returns {Vector3D}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 三维空间中的位置。
        * @param opsition {Vector3D}
        * @version Egret 3.0
        * @platform Web,Native
        */
        position: Vector3D;
        private _velocity;
        /**
        * @language zh_CN
        * 传播方向。
        * @returns {Vector3D}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 传播方向。
        * @param velocity {Vector3D}
        * @version Egret 3.0
        * @platform Web,Native
        */
        velocity: Vector3D;
        private _maxDistance;
        /**
        * @language zh_CN
        * 最大距离。
        * @returns {Vector3D}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 最大距离。
        * @param max{Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        maxDistance: number;
        private _minDistance;
        /**
        * @language zh_CN
        * 最小距离。
        * @returns {Vector3D}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 最小距离。
        * @param min{Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        minDistance: number;
        private _rollOffFactor;
        /**
        * @language zh_CN
        * rollOff 系数。
        * @returns {Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * rollOff 系数。
        * @param factor {Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        rollOffFactor: number;
        protected createSource(): void;
        private fallOff(posOne, posTwo, refDistance, maxDistance, rolloffFactor);
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Sound
     * @classdesc
     * Sound 类允许您在应用程序中使用声音。</p>
     * 使用 Sound 类可以创建 Sound 对象、将外部 MP3 文件加载到该对象并播放该文件、关闭声音流，以及访问有关声音的数据，如有关流中字节数和 ID3 元数据的信息。</p>
     * 可通过以下项对声音执行更精细的控制：声音源（声音的 Channel 和 Channel3d）用于控制向计算机扬声器输出声音的属性。  </p>
     * @version Egret 3.0
     * @platform Web,Native
     */
    class Sound {
        private isLoaded;
        /**
        * @language zh_CN
        * HTML音频 数据源。
        * @version Egret 3.0
        * @platform Web,Native
        */
        audio: HTMLAudioElement;
        private _buffer;
        /**
        * @language zh_CN
        * Web音频 数据源。
        * @returns {AudioBuffer}
        * @version Egret 3.0
        * @platform Web,Native
        */
        buffer: any;
        private _success;
        private _error;
        /**
        * @language zh_CN
        * 创建一个新的 Sound 对象。一旦某个 Sound 对象加载完成声音文件，就不能再将另一个声音文件加载到该 Sound 对象中。要加载另一个声音文件，请创建新的 Sound 对象。
        * @param {String}   指向外部音频文件的 URL。
        * @param {Function} 一个可选的音频文件加载成功的事件处理函数。
        * @param {Function} 一个可选的音频文件加载失败的事件处理函数。
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(url: string, success?: Function, error?: Function);
        private xhr;
        private loadAudioFile(url);
        private audioLoadend(e);
        private decodeSuccessCallback(buffer);
        private onended(ev);
        private oncanplaythrough(ev);
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.AudioManager
    * @classdesc
    * AudioManager 类允许您在应用程序中 播放 HTML5 Audio 和 Web Audio。
    * @includeExample audio/AudioManager.ts
    * @version Egret 3.0
    * @platform Web,Native
    */
    class AudioManager {
        /**
         * @language zh_CN
         * AudioContext 上下文。
         * @version Egret 3.0
         * @platform Web,Native
         */
        context: any;
        /**
        * @language zh_CN
        * 音量，范围从 0（静音）至 1（最大幅度）。
        * @version Egret 3.0
        * @platform Web,Native
        */
        volume: number;
        /**
        * @language zh_CN
        * 创建一个新的 AudioManager 对象。
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
        * @language zh_CN
        * 是否支持 HTML5 Audio tag API。
        * @returns {boolean}
        * @version Egret 3.0
        * @platform Web,Native
        */
        hasAudio(): boolean;
        /**
        * @language zh_CN
        * 是否支持 Web Audio API。
        * @returns {boolean}
        * @version Egret 3.0
        * @platform Web,Native
        */
        hasAudioContext(): boolean;
        private codecs;
        /**
        * @language zh_CN
        * 浏览器是否可以播放这种音频类型。
        * @param url 指向外部音频文件的 URL。
        * @param audio {HTMLAudioElement} HTMLAudio元素
        * @returns {boolean}
        * @version Egret 3.0
        * @platform Web,Native
        */
        isSupported(url: string, audio: HTMLAudioElement): boolean;
        /**
        * @language zh_CN
        * 生成一个新的 Sound 对象 ，将声音数据加载到 Sound 对象中。
        * @param url {String}   指向外部音频文件的 URL。
        * @param success {Function} 一个可选的音频文件加载成功的事件处理函数。
        * @param error {Function} 一个可选的音频文件加载失败的事件处理函数。
        * @returns {Sound}
        * @version Egret 3.0
        * @platform Web,Native
        */
        createSound(url: string, success?: Function, error?: Function): Sound;
        /**
        * @language zh_CN
        * 生成一个新的 Channel 对象来播放该声音。此方法返回 Channel 对象，访问该对象可停止声音并监控音量。
        * @param sound{Sound} 要播放的声音数据。
        * @param options{any}   ["volume":1,"loop":true volume] 回放音量, 0 到 1 ， loop 是否循环播放。
        * @returns {Channel}
        * @version Egret 3.0
        * @platform Web,Native
        */
        playSound(sound: Sound, options: any): Channel;
        /**
        * @language zh_CN
        * 生成一个新的 Channel3d 对象来播放该声音。此方法返回 Channel3d 对象，访问该对象可停止声音并监控音量。
        * @param sound {Sound}  要播放的声音数据。
        * @param position {Vector3D} 在三维空间中播放的位置。
        * @param options {any} ["volume":1,"loop":true volume] 回放音量, 0 到 1 ， loop 是否循环播放。
        * @returns {Channel}
        * @version Egret 3.0
        * @platform Web,Native
        */
        playSound3d(sound: Sound, position: Vector3D, options: any): Channel3d;
        private static _instance;
        /**
        * @language zh_CN
        * AudioManager类的单例模式，返回一个 AudioManager 对象。
        * @returns AudioManager
        * @version Egret 3.0
        * @platform Web,Native
        */
        static instance: AudioManager;
    }
}
declare module egret3d {
    /**
    * @private
    * @class egret3d.ControllerBase
    * @classdesc
    * 控制器 基类, 抽象控制器的一些数据
    * @version Egret 3.0
    * @platform Web,Native
    */
    class ControllerBase {
        protected _autoUpdate: boolean;
        protected _target: Object3D;
        protected _lookAtObject: Object3D;
        protected _origin: Vector3D;
        /**
        * @language zh_CN
        * 构造函数
        * @param targetObject 控制的目标
        */
        constructor(targetObject?: Object3D, lookAtObject?: Object3D);
        /**
        * @language zh_CN
        *
        * @returns 返回当前的目标
        */
        /**
        * @language zh_CN
        *
        * @param val 当前的目标
        */
        target: Object3D;
        /**
        * @language zh_CN
        *
        * @returns 是否自动更新
        */
        /**
        * @language zh_CN
        *
        * @param val 是否自动更新
        */
        autoUpdate: boolean;
        protected notifyUpdate(): void;
        /**
        * @language zh_CN
        * 数据更新
        */
        update(): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.LookAtController
    * @classdesc
    * look at 摄像机控制器 。</p>
    * 指定摄像机看向的目标对象。</p>
    * 1.按下鼠标左键并移动鼠标可以使摄像机绕着目标进行旋转。</p>
    * 2.按下键盘的(w s a d) 可以摄像机(上 下 左 右)移动。</p>
    * 3.滑动鼠标滚轮可以控制摄像机的视距。</p>
    *
    * @includeExample controller/ctl/LookAtController.ts
    * @version Egret 3.0
    * @platform Web,Native
    */
    class LookAtController extends ControllerBase {
        protected _lookAtObject: Object3D;
        protected _origin: Vector3D;
        protected _lookAtPosition: Vector3D;
        private _eyesPos;
        private _up;
        private _eyesLength;
        private _rotaEyesLine;
        private _rotaAngle;
        private _matRot;
        private _quaRot;
        private _tempVec;
        private _matTemp;
        private _mouseDown;
        private _mouseRightDown;
        private _screenMoveStartDetail;
        private _screenMoveDelay;
        private _isUpdate;
        private _elapsed;
        private _speed;
        private _xAngle;
        private _ctl;
        private _alt;
        private _shift;
        private _needctl;
        private _needalt;
        private _needshift;
        private _keyArray;
        /**
        * @language zh_CN
        * 目标点偏移
        * @version Egret 3.0
        * @platform Web,Native
        */
        lookAtOffset: Vector3D;
        /**
        * @language zh_CN
        * 是否第一人称相机
        * @version Egret 3.0
        * @platform Web,Native
        */
        firstCamera: boolean;
        /**
        * @language zh_CN
        * 控制的目标相机，目标对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(targetObject?: Object3D, lookAtObject?: Object3D, needCtl?: boolean, needAlt?: boolean);
        private mouseMove(m);
        private mouseWheel(m);
        private mouseUp(m);
        private mouseDown(m);
        private touchMove(t);
        private touchUp(m);
        private touchDown(m);
        private keyDown(key);
        private keyUp(key);
        /**
        * @language zh_CN
        * 返回目标的位置
        *
        * @returns 目标的位置
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置目标坐标
        *
        * @param val 摄像机看向的目标点
        * @version Egret 3.0
        * @platform Web,Native
        */
        lookAtPosition: Vector3D;
        /**
        * @language zh_CN
        *
        * 返回目标对象
        * @returns 目标对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        *
        * 设置目标对象
        * @param val 目标
        * @version Egret 3.0
        * @platform Web,Native
        */
        lookAtObject: Object3D;
        /**
        * @language zh_CN
        * 得到目标和相机的距离
        * @returns number 距离
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置目标和相机的距离
        * @param length 距离
        * @version Egret 3.0
        * @platform Web,Native
        */
        distance: number;
        /**
        * @language zh_CN
        * 得到相机x轴旋转
        * @returns x 旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置相机x轴旋转
        * @param x 旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        rotationX: number;
        /**
        * @language zh_CN
        * 得到相机x轴旋转
        * @returns y 旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置相机y轴旋转
        * @param y 旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        rotationY: number;
        /**
        * @language zh_CN
        * 得到相机x轴旋转
        * @returns z 旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置相机z轴旋转
        * @param z 旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        rotationZ: number;
        /**
        * @language zh_CN
        * 控制器数据更新
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.HoverController
    * @classdesc
    * 摄像机控制器 ,实现摄像机平滑移动
    * 指定摄像机看向的目标对象
    * 1.按下鼠标左键并移动鼠标(或手机手指滑动)可以使摄像机绕着目标进行旋转.
    * 2.滑动鼠标滚轮(或双指滑动)可以控制摄像机的视距.
    *
    * 示例:
    * @includeExample controller/ctl/HoverController.ts
    * @version Egret 3.0
    * @platform Web,Native
    */
    class HoverController extends ControllerBase {
        private _currentPanAngle;
        private _currentTiltAngle;
        private _panAngle;
        private _tiltAngle;
        private _distance;
        private _minPanAngle;
        private _maxPanAngle;
        private _minTiltAngle;
        private _maxTiltAngle;
        private _maxDistance;
        private _minDistance;
        private _steps;
        private _yFactor;
        private _wrapPanAngle;
        private _lookAtPosition;
        private _mouseDown;
        private _mouseRightDown;
        private _keyArray;
        /**
        * @language zh_CN
        * @param targetObject 控制的目标相机，目标对象
        * @param lookAtObject 相机看向的对象
        * @param panAngle 相机看向的对象
        * @param tiltAngle 相机看向的对象
        * @param distance 相机看向的对象
        * @param minTiltAngle 相机看向的对象
        * @param maxTiltAngle 相机看向的对象
        * @param minPanAngle 相机看向的对象
        * @param maxPanAngle 相机看向的对象
        * @param steps 相机看向的对象
        * @param yFactor 相机看向的对象
        * @param wrapPanAngle 相机看向的对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(targetObject?: Object3D, lookAtObject?: Object3D, panAngle?: number, tiltAngle?: number, distance?: number, minTiltAngle?: number, maxTiltAngle?: number, minPanAngle?: number, maxPanAngle?: number, steps?: number, yFactor?: number, wrapPanAngle?: boolean);
        private mouseMove(m);
        private mouseWheel(m);
        private mouseUp(m);
        private mouseDown(m);
        private touchMove(t);
        private touchUp(m);
        private touchDown(m);
        private keyDown(key);
        private keyUp(key);
        /**
        * @language zh_CN
        * 返回目标的位置
        *
        * @returns 目标的位置
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置目标坐标
        *
        * @param val 摄像机看向的目标点
        * @version Egret 3.0
        * @platform Web,Native
        */
        lookAtPosition: Vector3D;
        /**
        * @private
        */
        /**
        * @private
        */
        steps: number;
        /**
        * @language zh_CN
        * 得到相机y轴旋转角度
        * @returns 相机y轴旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置相机y轴旋转
        * @param val 旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        panAngle: number;
        /**
        * @language zh_CN
        * 得到相机x轴旋转角度
        * @returns 相机x轴旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置相机x轴旋转
        * @param val 旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        tiltAngle: number;
        /**
        * @language zh_CN
        * 得到目标和相机的距离
        * @returns 目标和相机的距离
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置目标和相机的距离
        * @param val 距离
        * @version Egret 3.0
        * @platform Web,Native
        */
        distance: number;
        /**
        * @language zh_CN
        * 得到相机最小y轴旋转角度
        * @returns 相机最小x轴旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置相机最小y轴旋转角度
        * @param val 相机最小x轴旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        minPanAngle: number;
        /**
        * @language zh_CN
        * 得到相机最大y轴旋转角度
        * @returns 相机最大y轴旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置相机最大y轴旋转角度
        * @param val 相机最大y轴旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        maxPanAngle: number;
        /**
        * @language zh_CN
        * 得到相机最小x轴旋转角度
        * @returns 相机最小x轴旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置相机最小x轴旋转角度
        * @param val 相机最小x轴旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        minTiltAngle: number;
        /**
        * @language zh_CN
        * 得到相机最大x轴旋转角度
        * @returns 相机最大x轴旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置相机最大x轴旋转角度
        * @param val 相机最大x轴旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        maxTiltAngle: number;
        /**
        * @language zh_CN
        * 得到相机和目标最大的距离
        * @returns 相机和目标最大的距离
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置相机和目标最大的距离
        * @param val 相机和目标最大的距离
        * @version Egret 3.0
        * @platform Web,Native
        */
        maxDistance: number;
        /**
        * @language zh_CN
        * 得到相机和目标最小的距离
        * @returns 相机和目标最小的距离
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置相机和目标最小的距离
        * @param val 相机和目标最小的距离
        * @version Egret 3.0
        * @platform Web,Native
        */
        minDistance: number;
        /**
        * @private
        */
        /**
        * @private
        */
        yFactor: number;
        /**
        * @private
        */
        /**
        * @private
        */
        wrapPanAngle: boolean;
        /**
        * @language zh_CN
        * 控制器数据更新
        * @param interpolate
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(interpolate?: boolean): void;
    }
}
declare module egret3d {
    /**
    * @private
    */
    enum InternalFormat {
        PixelArray = 0,
        CompressData = 1,
        ImageData = 2,
    }
    /**
    * @private
    */
    /**
    * @private
    */
    enum FrameBufferType {
        shadowFrameBufrfer = 0,
        defaultFrameBuffer = 1,
        positionFrameBuffer = 2,
        normalFrameBuffer = 3,
        specularFrameBuffer = 4,
        leftEyeFrameBuffer = 5,
        rightEyeFrameBuffer = 6,
        nextFrameBuffer = 7,
    }
    /**
    * @private
    */
    enum FrameBufferFormat {
        FLOAT_RGB = 0,
        FLOAT_RGBA = 1,
        UNSIGNED_BYTE_RGB = 2,
        UNSIGNED_BYTE_RGBA = 3,
    }
    /**
    * @language zh_CN
    * 渲染混合模式
    * BlendMode 类中的一个值，用于指定要使用的混合模式。 内部绘制位图的方法有两种。 如果启用了混合模式或外部剪辑遮罩，则将通过向矢量渲染器添加有位图填充的正方形来绘制位图。 如果尝试将此属性设置为无效值，则 Flash 运行时会将此值设置为 BlendMode.NORMAL。
    * blendMode 属性影响显示对象的每个像素。每个像素都由三种原色（红色、绿色和蓝色）组成，每种原色的值介于 0x00 和 0xFF 之间。Flash Player 或 Adobe AIR 将影片剪辑中一个像素的每种原色与背景中像素的对应颜色进行比较。例如，如果 blendMode 设置为 BlendMode.LIGHTEN，则 Flash Player 或 Adobe AIR 会将显示对象的红色值与背景的红色值进行比较，然后使用两者中较亮的一种颜色作为显示颜色的红色成分的值。
    * 下表将对 blendMode 设置进行说明。BlendMode 类定义可使用的字符串值。表中的插图显示应用于交叠于显示对象 (1) 之上的圆形显示对象 (2) 的 blendMode 值。
    * @version Egret 3.0
    * @platform Web,Native
    */
    enum BlendMode {
        /**
         * @language zh_CN
         * 将显示对象的每个像素的 Alpha 值应用于背景。
         * @version Egret 3.0
         * @platform Web,Native
         */
        ALPHA = 0,
        /**
         * @language zh_CN
         * 强制为该显示对象创建一个透明度组。
         * @version Egret 3.0
         * @platform Web,Native
         */
        LAYER = 1,
        /**
        * @language zh_CN
        * 该显示对象出现在背景前面。
        * @version Egret 3.0
        * @platform Web,Native
        */
        NORMAL = 2,
        /**
        * @language zh_CN
        * 将显示对象的原色值与背景颜色的原色值相乘，然后除以 0xFF 进行标准化，从而得到较暗的颜色。
        * @version Egret 3.0
        * @platform Web,Native
        */
        MULTIPLY = 3,
        /**
        * @language zh_CN
        * 将显示对象的原色值添加到它的背景颜色中，上限值为 0xFF。
        * @version Egret 3.0
        * @platform Web,Native
        */
        ADD = 4,
        /**
        * @language zh_CN
        * 从背景颜色的值中减去显示对象原色的值，下限值为 0。
        * @version Egret 3.0
        * @platform Web,Native
        */
        SUB = 5,
        /**
        * @language zh_CN
        * 将显示对象颜色的补色（反色）与背景颜色的补色相除。
        * @version Egret 3.0
        * @platform Web,Native
        */
        DIV = 6,
        /**
        * @language zh_CN
        * 将显示对象颜色的补色（反色）与背景颜色的补色相乘，会产生漂白效果。
        * @version Egret 3.0
        * @platform Web,Native
        */
        SCREEN = 7,
    }
    /**
     * @private
     * @class egret3d.ContextSamplerType
     * @classdesc
     * 贴图采样类型
     */
    class ContextSamplerType {
        /**
        * @language zh_CN
        * 纹理0数据
        */
        static TEXTURE_0: any;
        /**
        * @language zh_CN
        * 纹理1数据
        */
        static TEXTURE_1: any;
        /**
        * @language zh_CN
        * 纹理2数据
        */
        static TEXTURE_2: any;
        /**
        * @language zh_CN
        * 纹理3数据
        */
        static TEXTURE_3: any;
        /**
        * @language zh_CN
        * 纹理4数据
        */
        static TEXTURE_4: any;
        /**
        * @language zh_CN
        * 纹理5数据
        */
        static TEXTURE_5: any;
        /**
        * @language zh_CN
        * 纹理6数据
        */
        static TEXTURE_6: any;
        /**
        * @language zh_CN
        * 纹理7数据
        */
        static TEXTURE_7: any;
        /**
        * @language zh_CN
        * 纹理8数据
        */
        static TEXTURE_8: any;
        /**
        * @language zh_CN
        * 重复 0~1 的纹理坐标 例如：5.2 % 1 = 0.2
        */
        static REPEAT: number;
        /**
        * @language zh_CN
        * 重复 0~1 的纹理坐标 例如：5.2 % 1 = 0.2
        */
        static NEAREST: number;
        /**
        * @language zh_CN
        * 重复 0~1 的纹理坐标 例如：5.2 % 1 = 0.2
        */
        static LINEAR: number;
    }
    /**
    * @class egret3d.DrawMode
    * @classdesc
    * 渲染模式
    * LINES 线框显示模式
    * POINTS 点显示模式
    * TRIANGLES 三角形显示模式
    * LINE_STRIP 连接线显示模式
    */
    class DrawMode {
        /**
         * @language zh_CN
         * 线框显示模式
         */
        static LINES: number;
        /**
         * @language zh_CN
         * 点显示模式
         */
        static POINTS: number;
        /**
         * @language zh_CN
         * 三角形显示模式
         */
        static TRIANGLES: number;
        /**
         * @language zh_CN
         * 连接线显示模式
         */
        static LINE_STRIP: number;
    }
    /**
    * @class egret3d.Egret3DDrive
    * @classdesc
    * 3d 驱动 一些配置类型
    */
    class ContextConfig {
        /**
        * @private
        */
        static Direct3D_Opengl_Auto: string;
        /**
        * @private
        */
        static Direct3D_9_0: string;
        /**
        * @private
        */
        static Direct3D_10_0: string;
        /**
        * @private
        */
        static Direct3D_11_0: string;
        /**
        * @private
        */
        static OpenGLES_2_0: string;
        /**
        * @private
        */
        static OpenGLES_3_0: string;
        /**
        * @private
        */
        static OpenGL: string;
        /**
        * @private
        */
        static context3D: Context3DProxy;
        /**
        * @private
        */
        static canvas: HTMLCanvasElement;
        /**
        * @private
        */
        static VERTEX_SHADER: number;
        /**
        * @private
        */
        static FRAGMENT_SHADER: number;
        /**
        * @private
        */
        static BLEND: number;
        /**
        * @private
        */
        static FLOAT: number;
        /**
        * @private
        */
        static CULL_FACE: number;
        /**
         * @language zh_CN
         * 裁剪正面进行反面渲染
         * @version Egret 3.0
         * @platform Web,Native
         */
        static FRONT: number;
        /**
        * @language zh_CN
        * 裁剪反面进行正面渲染
        * @version Egret 3.0
        * @platform Web,Native
        */
        static BACK: number;
        /**
        * @language zh_CN
        * 裁剪正面和反面
        * @version Egret 3.0
        * @platform Web,Native
        */
        static FRONT_AND_BACK: number;
        /**
        * @language zh_CN
        * 深度测试
        * @version Egret 3.0
        * @platform Web,Native
        */
        static DEPTH_TEST: number;
        /**
        * @language zh_CN
        * 深度缓冲值
        * @version Egret 3.0
        * @platform Web,Native
        */
        static DEPTH_BUFFER_BIT: number;
        /**
        * @private
        */
        static ELEMENT_ARRAY_BUFFER: number;
        /**
        * @private
        */
        static UNSIGNED_SHORT: number;
        /**
        * @private
        */
        static NEAREST: number;
        /**
        * @private
        */
        static REPEAT: number;
        /**
        * @private
        */
        static ONE: number;
        /**
        * @private
        */
        static ZERO: number;
        /**
        * @private
        */
        static SRC_ALPHA: number;
        /**
        * @private
        */
        static ONE_MINUS_SRC_ALPHA: number;
        /**
        * @private
        */
        static SRC_COLOR: number;
        /**
        * @private
        */
        static ONE_MINUS_SRC_COLOR: number;
        /**
        * @private
        */
        static ColorFormat_RGB565: number;
        /**
        * @private
        */
        static ColorFormat_RGBA5551: number;
        /**
        * @private
        */
        static ColorFormat_RGBA4444: number;
        /**
        * @private
        */
        static ColorFormat_RGBA8888: number;
        /**
        * @private
        */
        static ColorFormat_DXT1_RGB: number;
        /**
        * @private
        */
        static ColorFormat_DXT1_RGBA: number;
        /**
        * @private
        */
        static ColorFormat_DXT3_RGBA: number;
        /**
        * @private
        */
        static ColorFormat_DXT5_RGBA: number;
        /**
        * canvas窗口矩形
        */
        static canvasRectangle: Rectangle;
        /**
        * 用户窗口矩形
        */
        static clientRect: ClientRect;
        static LEQUAL: number;
    }
}
declare module egret3d {
    /**
    * @class egret3d.Context3DProxy
    * @classdesc
    * Context3D 类提供了用于呈现几何定义图形的上下文。</p>
    *
    * 渲染上下文包括一个绘图表面及其关联的资源和状态。</p>
    * Context3D 渲染上下文是一个可编程的管道，基于OpenGL ES 2.0规范。</p>
    * 您可以通过提供适当的顶点和像素片段程序来创建 2D/3D渲染器，不同的平台有不同的硬件限制，对于移动端限制要求比较大。</p>
    * 一个canvas 只能申请一个Context3DProxy。</p>
    *
    * @see egret3d.Program3D
    * @see egret3d.IndexBuffer3D
    * @see egret3d.VertexBuffer3D
    * @see egret3d.Texture2D
    * @see egret3d.Shader
    * @see egret3d.CubeTexture
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Context3DProxy {
        private _cacheProgram;
        /**
         * @language zh_CN
         * @private
         * WebGLRenderingContext 的引用
        */
        static gl: WebGLRenderingContext;
        /**
         * @language zh_CN
         * @private
        */
        version: string;
        /**
        * @language zh_CN
        * @private
        * 渲染3D 的驱动设备是否存在，或者丢失。
        * 一般情况下，当切换程序的时候，设备将会丢失，
        * 这个时候就需要快速重新申请设备，并将相应的资源buffer，texture重新提交至显卡
        */
        isLost: boolean;
        /**
       * @language zh_CN
       * get GPU Context3D
       * 注册并初始化相关 GPU 参数配置信息
       * 用于设置显卡的相关参数
       * @param GPU_CONFIG
       * @param canvasRec
       * @event call
       */
        register(): void;
        /**
        * @language zh_CN
        * 视口设置定义，用来确定我们定义的视口在canvas中的所在位置
        * @param x position X
        * @param y position Y
        * @param width  3D canvas width
        * @param height  3D canvas  height
        * @see egret3d.Egret3DCanvas
        */
        viewPort(x: number, y: number, width: number, height: number): void;
        /**
        * @language zh_CN
        * 创建 显卡程序
        * @param vsShader
        * @param fsShader
        */
        creatProgram(vsShader: Shader, fsShader: Shader): Program3D;
        /**
        * @language zh_CN
        * 创建 顶点索引流
        * @param indexData
        */
        creatIndexBuffer(indexData: Array<number>): IndexBuffer3D;
        /**
        * @language zh_CN
        * 创建 顶点数据流
        * @param vertexData
        */
        creatVertexBuffer(vertexData: Array<number>, dawType?: number): VertexBuffer3D;
        uploadVertexBuffer(vertexBuffer3D: VertexBuffer3D): void;
        /**
        * @language zh_CN
        * 设置2D纹理状态 来确定贴图的采样方式
        * @param min_filter
        * @param mag_filter
        * @param wrap_u_filter
        * @param wrap_v_filter
        */
        setTexture2DSamplerState(min_filter: number, mag_filter: number, wrap_u_filter: number, wrap_v_filter: number): void;
        /**
        * @language zh_CN
        * 提交2D纹理
        * @param mipLevel
        * @param texture
        */
        upLoadTextureData(mipLevel: number, texture: Texture2D): void;
        /**
        * @language zh_CN
        * 提交2D压缩纹理，用硬件来解析dds贴图
        * @param mipLevel
        * @param texture
        */
        upLoadCompressedTexture2D(mipLevel: number, texture: Texture2D): void;
        /**
        * @language zh_CN
        * 创建 2维贴图 向显卡提交buffer申请 并创建Texture2D对象
        */
        creatTexture2D(): Texture2D;
        /**
        * @language zh_CN
        * 创建 Cube贴图 向显卡提交buffer申请 并创建Texture3D对象
        */
        creatCubeTexture(): Texture3D;
        /**
        * @language zh_CN
        * @private
        * @param tex
        */
        uploadCubetexture(tex: Texture3D): void;
        /**
        * @language zh_CN
        * @private
        * @param width
        * @param height
        * @param format
        */
        createFramebuffer(width: number, height: number, format: FrameBufferFormat): Texture2D;
        /**
        * @language zh_CN
        * @private
        * @param texture
        * @param enableDepthAndStencil
        * @param surfaceSelector
        */
        setRenderToTexture(texture: Texture2D, enableDepthAndStencil?: Boolean, surfaceSelector?: number): void;
        /**
        * @language zh_CN
        * @private
        *
        */
        setRenderToBackBuffer(): void;
        /**
        * @language zh_CN
        * 向显卡请求创建顶点shader对象
        * @param source shader代码内容
        */
        creatVertexShader(source: string): Shader;
        /**
        * @language zh_CN
        * 向显卡请求创建片段shader对象
        * @param source shader代码内容
        */
        creatFragmentShader(source: string): Shader;
        /**
        * @language zh_CN
        * 清除渲染buffer
        * @param BUFFER_BIT r g b a 0x00000000
        */
        clear(BUFFER_BIT: number): void;
        /**
        * @language zh_CN
        * 清除渲染区域的颜色 深度
        * @param r 红色值
        * @param g 绿色值
        * @param b 蓝色值
        * @param a alpha值
        */
        clearColor(r: number, g: number, b: number, a: number): void;
        /**
        * @language zh_CN
        * 清除渲染区域的 模板
        * @param stencil 模板值
        */
        clearStencil(stencil: number): void;
        /**
        * @language zh_CN
        * 使用显卡着色器
        * @param program 设置当学显卡当前渲染程序
        */
        setProgram(program: Program3D): void;
        /**
        * @language zh_CN
        * 获取矩阵变量ID
        * @param program
        * @param name
        */
        getUniformLocation(programe3D: Program3D, name: string): any;
        /**
        * @language zh_CN
        * 传值给shader一个float
        * @param location 指明要更改的uniform变量
        * @param x  uniform变量变量值
        */
        uniform1f(location: any, x: number): void;
        /**
        * @language zh_CN
        * 传值给shader 一个vec3(float, float, float) 也可以是一个vec3数组
        * @param location 指明要更改的uniform变量
        * @param v uniform变量变量值Float32Array[3]
        */
        uniform1fv(location: any, v: any): void;
        /**
        * @language zh_CN
        * 传值给shader一个int
        * @param location 指明要更改的uniform变量
        * @param x uniform变量变量值
        */
        uniform1i(location: any, x: number): void;
        /**
        * @language zh_CN
        * 传值给shader一个int数组
        * @param location 指明要更改的uniform变量
        * @param v int数组的值
        */
        uniform1iv(location: any, v: Int32Array): void;
        /**
        * @language zh_CN
        * 传值给shader两个float
        * @param location 指明要更改的uniform变量
        * @param x float x 的值
        * @param y float y 的值
        */
        uniform2f(location: any, x: number, y: number): void;
        /**
        * @language zh_CN
        * 传值给shader vec(float, float)
        * @param location 指明要更改的uniform变量
        * @param v Float32Array[2]
        */
        uniform2fv(location: any, v: any): void;
        /**
        * @language zh_CN
        * 传值给shader 两个int值
        * @param location 指明要更改的uniform变量
        * @param x number x 的值
        * @param y number y 的值
        */
        uniform2i(location: any, x: number, y: number): void;
        /**
        * @language zh_CN
        * 传值给shader
        * @param location 指明要更改的uniform变量
        * @param v
        */
        uniform2iv(location: any, v: Int32Array): void;
        /**
        * @language zh_CN
        * 传值给shader 3个float
        * @param location 指明要更改的uniform变量
        * @param x
        * @param y
        * @param z
        */
        uniform3f(location: any, x: number, y: number, z: number): void;
        /**
        * @language zh_CN
        * 传值给shader vec3(float, float, float)
        * @param location 指明要更改的uniform变量
        * @param v Float32Array[3]
        */
        uniform3fv(location: any, v: any): void;
        /**
        * @language zh_CN
        * 传值给shader 3个int
        * @param location 指明要更改的uniform变量
        * @param x
        * @param y
        * @param z
        */
        uniform3i(location: any, x: number, y: number, z: number): void;
        /**
        * @language zh_CN
        * 传值给shader vec3(int, int, int)
        * @param location 指明要更改的uniform变量
        * @param v Int32Array[3]
        */
        uniform3iv(location: any, v: Int32Array): void;
        /**
        * @language zh_CN
        * 传值给shader 4个float值
        * @param location 指明要更改的uniform变量
        * @param x
        * @param y
        * @param z
        * @param w
        */
        uniform4f(location: any, x: number, y: number, z: number, w: number): void;
        /**
        * @language zh_CN
        * 传值给shader vec(float, float, float, float)
        * @param location 指明要更改的uniform变量
        * @param v Float32Array[4]
        */
        uniform4fv(location: any, v: any): void;
        /**
        * @language zh_CN
        * 传值给shader 4个int值
        * @param location 指明要更改的uniform变量
        * @param x
        * @param y
        * @param z
        * @param w
        */
        uniform4i(location: any, x: number, y: number, z: number, w: number): void;
        /**
        * @language zh_CN
        * 传值给shader vec4(int, int, int, int)
        * @param location 指明要更改的uniform变量
        * @param v Int32Array[4]
        */
        uniform4iv(location: any, v: Int32Array): void;
        /**
        * @language zh_CN
        * 传值给shader 2 * 2矩阵
        * @param location 指明要更改的uniform变量
        * @param transpose 是否转置
        * @param value 矩阵值 Float32Array[4]
        */
        uniformMatrix2fv(location: any, transpose: boolean, value: any): void;
        /**
        * @language zh_CN
        * 传值给shader 3 * 3矩阵
        * @param location 指明要更改的uniform变量
        * @param transpose 是否转置
        * @param value 矩阵值 Float32Array[9]
        */
        uniformMatrix3fv(location: any, transpose: boolean, value: any): void;
        /**
        * @language zh_CN
        * 传值给shader 4 * 4矩阵
        * @param location 指明要更改的uniform变量
        * @param transpose 是否转置
        * @param value 矩阵值 Float32Array[16]
        */
        uniformMatrix4fv(location: any, transpose: boolean, value: any): void;
        /**
        * @language zh_CN
        * 设置 绘制混合模式
        * @param src
        * @param dst
        */
        setBlendFactors(src: number, dst: number): void;
        /**
        * @language zh_CN
        * 设置 绘制剔除模式
        * @param mode
        * @see egret3d.ContextConfig.FRONT
        * @see egret3d.ContextConfig.BACK
        */
        setCulling(mode: number): void;
        /**
        * @language zh_CN
        * 开启 绘制模式
        * @param cap
        */
        enable(cap: number): void;
        /**
        * @language zh_CN
        * 关闭 绘制模式
        * @param cap
        */
        disable(cap: number): void;
        /**
        * @language zh_CN
        * 开启 深度模式 及 深度测试比较模式
        * @param flag
        * @param compareMode
        */
        depthFunc(compareMode?: number): void;
        /**
        * @language zh_CN
        * 开启 深度模式 及 深度测试比较模式
        * @param flag
        * @param compareMode
        */
        enableDepthTest(flag: boolean, compareMode?: number): void;
        /**
        * @language zh_CN
        * 获取顶点着色器变量 索引
        * @param programe
        * @param attribName
        * @returns 着色器变量
        */
        getShaderAttribLocation(programe: Program3D, attribName: string): any;
        /**
        * @language zh_CN
        * 指定顶点着色器变量索引及结构
        * @param index 变量索引
        * @param size  数据个数
        * @param dataType  数据类型
        * @param normalized 是否单位化
        * @param stride 字节数
        * @param offset 当前变量字节偏移
        */
        vertexAttribPointer(index: number, size: number, dataType: number, normalized: boolean, stride: number, offset: number): void;
        /**
        * @language zh_CN
        * @private
        * 实时传入显卡顶点着色器变量数组数据
        * @param floats
        * @param offest
        * @param numLen
        */
        setVertexShaderConstData(floats: Float32Array, offest: number, numLen: number): void;
        /**
        * @language zh_CN
        * @private
        * 实时传入显卡片段着色器变量数组数据
        * @param floats
        * @param offest
        * @param numLen
        */
        setFragmentShaderConstData(floats: Float32Array, offest: number, numLen: number): void;
        /**
        * @language zh_CN
        * 设置贴图采样 第一个参数并不是类型
        * @param samplerIndex  ContextSamplerType
        * @param uniLocation
        * @param index
        * @param texture
        * @see egret3d.ContextSamplerType
        */
        setTexture2DAt(samplerIndex: number, uniLocation: number, index: number, texture: Texture2D): void;
        /**
        * @language zh_CN
        * 设置贴图采样 第一个参数并不是类型
        * @param samplerIndex  ContextSamplerType
        * @param uniLocation
        * @param index
        * @param texture
        * @see egret3d.ContextSamplerType
        */
        setCubeTextureAt(samplerIndex: number, uniLocation: number, index: number, texture: Texture3D): void;
        /**
        * @language zh_CN
        * @private
        * 设置矩形裁切区域
        * @param rectangle
        */
        setScissorRectangle(x: number, y: number, width: number, height: number): void;
        /**
        * @language zh_CN
        * @private
        * 设置模板测试
        */
        setStencilReferenceValue(): void;
        /**
        * @language zh_CN
        * @private
        * 设置模板测试
        */
        setStencilActions(triangleFace: string, compareMode: string, actionOnBothPass: string, actionOnDepthFail: string, actionOnDepthPassStencilFail: string): void;
        /**
        * @language zh_CN
        * 绑定顶点Buffer
        * @param vertexBuffer
        */
        bindVertexBuffer(vertexBuffer: VertexBuffer3D): void;
        /**
       * @language zh_CN
       * 绑定顶点索引Buffer
       * @param vertexBuffer
       */
        bindIndexBuffer(indexBuffer: IndexBuffer3D): void;
        /**
        * @language zh_CN
        * 绘制模型元素
        * @param type 图元类型
        * @param first 第一个顶点索引
        * @param length 顶点个数
        */
        drawArrays(type: number, first: number, length: number): void;
        /**
        * @language zh_CN
        * 绘制模型元素
        * @param type 图元类型
        * @param indexBuffer 索引数据
        * @param offset 顶点索引偏移 (字节数)
        * @param length 顶点个数
        */
        drawElement(type: number, offset: number, length: number): void;
        /**
        * @language zh_CN
        * @private
        * 绘制提交
        */
        flush(): void;
    }
}
declare module egret3d {
    /**
    * @private
    * @class egret3d.FrameBuffer
    * @classdesc
    * FrameBuffer 类提供了用于呈现几何定义图形的上下文的帧缓冲对象。</p>
    *
    * 渲染上下文包括一个绘图表面及其关联的资源帧缓冲对象。</p>
    * 通过context creatFrameBuffer 来创建，不能直接使用 new 的方式实例化。</p>
    * @see egret3d.Program3D
    * @see egret3d.IndexBuffer3D
    * @see egret3d.VertexBuffer3D
    * @see egret3d.Texture2D
    * @see egret3d.Shader
    * @see egret3d.CubeTexture
    * @version Egret 3.0
    * @platform Web,Native
    */
    class FrameBuffer {
        /**
        * @language zh_CN
        * @private
        * frame buferr 的buffer 名字
        */
        frameBufferName: number;
        /**
        * @language zh_CN
        * @private
        * frame buferr 的 像素宽度
        */
        width: number;
        /**
        * @language zh_CN
        * @private
        * frame buferr 的 像素高度
        */
        height: number;
        /**
        * @language zh_CN
        * @private
        * RenderTexture 的引用
        */
        texture: Texture2D;
    }
}
declare module egret3d {
    /**
    * @class egret3d.IndexBuffer3D
    * @classdesc
    * IndexBuffer3D 用于表示顶点索引列表，由图形子系统保留的图形元素构成。</p>
    *
    * 定义一个立方图纹理，以便在渲染期间使用。立方体贴图可用于多种渲染技术，例如环境图、skyboxes 和 skylight 光照。</p>
    * 不能直接创建 CubeTexture 对象，而应使用 Context3D createCubeTexture()。</p>
    *
    * 由 IndexBuffer3D 对象管理的索引可用于从顶点流中选择顶点。索引为 16 位无符号整数。所允许的最大索引值为 65535 (0xffff)。图形子系统不会保留对提供给此对象的顶点的引用。修改或丢弃上载到此对象中的数据不会影响已存储的值。</p>

    * 无法直接实例化 IndexBuffer3D。使用 Context3D.CreateIndexBuffer() 可创建实例。</p>
    * @see egret3d.Context3D
    * @see egret3d.CubeTexture
    * @version Egret 3.0
    * @platform Web,Native
    */
    class IndexBuffer3D {
        /**
        * @language zh_CN
        * @private
        * WebGLBuffer 的引用
        */
        buffer: WebGLBuffer;
        /**
         * @language zh_CN
         * @private
         */
        arrayBuffer: ArrayBuffer;
        /**
        * @language zh_CN
        * 构造
        * @param buffer webglbuffer
        */
        constructor(buffer: WebGLBuffer);
    }
}
declare module egret3d {
    /**
     * @class egret3d.IndexBuffer3D
     * @classdesc
     * IndexBuffer3D 用于表示顶点索引列表，由图形子系统保留的图形元素构成。</p>
     * VertexBuffer3D 类表示上载到渲染上下文的一组顶点数据。</p>
     * 使用 VertexBuffer3D 对象定义与一组顶点中每个点相关联的数据。</p>
     * 您可以从 Vector 数组或 ByteArray 上载顶点数据。（上载完成后，将不再引用原始数组中的数据；更改或放弃源数组不会更改顶点数据。）</p>
     * 与每个顶点相关联的数据采用应用程序定义的格式，并用作顶点着色器程序的输入。</p>
     * 使用 Context3D.vertexAttribPointer  函数标识哪些值属于哪个顶点程序输入。</p>
     * 一个顶点程序最多可以使用 8 个输入（也称为顶点属性寄存器）。</p>
     * 每个输入可能需要 1 到 4 个 32 位值。</p>
     * 例如，一个顶点的 [x,y,z] 位置坐标可以作为包含 3 个 32 位值的矢量传递到顶点程序。</p>
     * 您最多可以为每个点提供 64 个 32 位值（256 字节）数据（但在这种情况下，单个顶点着色器无法使用所有数据）。</p>
     * @see egret3d.Context3DProxy
     * @see egret3d.CubeTexture
     * @version Egret 3.0
     * @platform Web,Native
     */
    class VertexBuffer3D {
        /**
         *
         * @language zh_CN
         * @private
         * WebGLBuffer的引用
         */
        buffer: WebGLBuffer;
        /**
         * @language zh_CN
         * @private
         */
        arrayBuffer: ArrayBuffer;
        /**
         * @language zh_CN
         * 构造
         * @param buffer webglbuffer
         */
        constructor(buffer: WebGLBuffer);
    }
}
declare module egret3d {
    /**
    * @private
    * @class egret3d.MipmapData
    * @classdesc
    * 一个贴图的不同LOD层级数据。</p>
    * 生成 mipmap 可以使用 TextureUtil.generateMipMaps() 来制作lod mipmapdata。</p>
    *
    *
    * @see egret3d.openGLES.Program3D
    * @see egret3d.openGLES.IndexBuffer3D
    * @see egret3d.openGLES.VertexBuffer3D
    * @see egret3d.openGLES.Texture2D
    * @see egret3d.openGLES.Shader
    * @see egret3d.openGLES.CubeTexture
    * @version Egret 3.0
    * @platform Web,Native
    */
    class MipmapData {
        /**
        *
        * @language zh_CN
        *
        * array buffer类型的 像素值信息
        */
        data: Uint8Array;
        /**
        *
        * @language zh_CN
        *
        * 此mipmap的大小宽度
        */
        width: number;
        /**
        *
        * @language zh_CN
        *
        * 此mipmap的大小高度
        */
        height: number;
        constructor(data: Uint8Array, width: number, height: number);
    }
}
declare module egret3d {
    /**
    * @class egret3d.Program3D
    * @classdesc
    * Program3D 类表示上载到渲染上下文的一对渲染程序（也称为“编译后的着色器”）。</p>
    *
    * 由 Program3D 对象管理的程序控制 drawTriangles 调用期间的整个三角形渲染。使用 upload 方法将二进制字节码上载到渲染上下文。（上载完成后，将不再引用原始字节数组中的数据；更改或放弃源字节数组不会更改该程序。）。</p>
    * 这些程序始终由两个相互关联的部分组成：顶点程序和片段程序。</p>
    * 顶点程序会操作 VertexBuffer3D 中定义的数据，负责将顶点投影到剪辑空间，并将任何所需的顶点数据（例如颜色）传递到片段着色器。</p>
    * 片段着色器会操作顶点程序传递给它的属性，并为三角形的每个栅格化片段生成颜色，最终形成像素颜色。请注意，片段程序在 3D 编程文献中具有多个名称，包括片段着色器和像素着色器。</p>
    * 通过将相应 Program3D 实例传递到 Context3D setProgram() 方法，指定后续渲染操作要使用的程序对。</p>
    * 您无法直接创建 Program3D 对象；请改用 Context3D createProgram() 方法。</p>
    *
    * @see egret3d.Program3D
    * @see egret3d.IndexBuffer3D
    * @see egret3d.VertexBuffer3D
    * @see egret3d.Texture2D
    * @see egret3d.Shader
    * @see egret3d.CubeTexture
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Program3D {
        /**
        * @language zh_CN
        * @private
        * WebGLBuffer 的引用
        */
        /**
        * @language zh_CN
        * @private
        * WebGLProgram 的引用
        */
        program: WebGLProgram;
        /**
        * @language zh_CN
        * 构造
        */
        constructor(pg3D: WebGLProgram);
    }
}
declare module egret3d {
    /**
    * @class egret3d.Texture2D
    * @classdesc
    * Texture 类表示上载到渲染上下文的二维纹理。</p>
    *
    * 定义一个 2D 纹理，以便在渲染期间使用。</p>
    * 无法直接实例化 Texture。使用 Context3D createTexture() 方法创建实例。</p>
    * @see egret3d.Program3D
    * @see egret3d.IndexBuffer3D
    * @see egret3d.VertexBuffer3D
    * @see egret3d.Texture2D
    * @see egret3d.Shader
    * @see egret3d.CubeTexture
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Texture2D {
        /**
       * @language zh_CN
       * @private
       * 提交显卡的 index
       */
        index: number;
        /**
        * @language zh_CN
        * @private
        * 显卡中上传使用的 border 边框像素大小
        */
        border: number;
        /**
        * @language zh_CN
        * @private
        * 纹理贴图的颜色模式
        */
        colorFormat: number;
        /**
        * @language zh_CN
        * @private
        * 纹理贴图标准的格式
        */
        internalFormat: InternalFormat;
        /**
        * @language zh_CN
        * @private
        * context.creatTexture()接口生成的GPU纹理
        */
        texture: WebGLTexture;
        /**
         * @language zh_CN
         * 是否使用mipmap
         */
        useMipmap: boolean;
        /**
        * @language zh_CN
        * 是否自动模糊
        */
        smooth: boolean;
        /**
         * @language zh_CN
         * 贴图元素对象
         */
        imageData: HTMLImageElement;
        /**
         * @language zh_CN
         * mipmap数据
         */
        mimapData: Array<MipmapData>;
        /**
         * @private
        */
        frameBuffer: WebGLFramebuffer;
        /**
        * @private
        */
        renderbuffer: WebGLRenderbuffer;
        /**
        * @language zh_CN
        * 提交给显卡的贴图尺寸大小 贴图宽度
        * <p>当作为renderTexture使用时一定要传入真实尺寸
        */
        width: number;
        /**
   * @language zh_CN
   * 提交给显卡的贴图尺寸大小 贴图高度
   * <p>当作为renderTexture使用时一定要传入真实尺寸
   */
        height: number;
        /**
         * @language zh_CN
         * 构造函数
         */
        constructor();
    }
}
declare module egret3d {
    /**
    * @class egret3d.RenderTexture
    * @private
    * @classdesc
    * RenderTexture 类为渲染目标纹理，用于离屏渲染中。
    *
    * @version Egret 3.0
    * @platform Web,Native
    * @includeExample texture/RenderTexture.ts
    */
    class RenderTexture extends Texture2D {
        /**
         * @language zh_CN
         * 构造函数
         * @param texture ITexture2D对象
         */
        constructor();
    }
}
declare module egret3d {
    /**
    * @class egret3d.Shader
    * @classdesc
    * Shader 类表示上载到渲染上下文的一对渲染程序中的 顶点找色shader，或片段着色的shader 。</p>
    *
    * shader 是基于 opengl es 2.0 标准 也就是webgl版本的shader着色器。</p>
    *
    * @see egret3d.Program3D
    * @see egret3d.IndexBuffer3D
    * @see egret3d.VertexBuffer3D
    * @see egret3d.Texture2D
    * @see egret3d.Shader
    * @see egret3d.CubeTexture
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Shader {
        /**
      * @language zh_CN
      * @private
      * 声明 shader 为顶点 类型
      * @see egret3d.ShaderPool
      */
        static vertex: number;
        /**
   * @language zh_CN
   * @private
   * 声明 shader 为片段 类型
   * @see egret3d.ShaderPool
   */
        static fragment: number;
        /**
       * @language zh_CN
       * @private
       * 获取已经有的shader 的ID
       */
        static ID_COUNT: number;
        /**
        * @language zh_CN
        *
        * 获取已经有的shader 的ID
        */
        id: string;
        /**
        * @language zh_CN
        * @private
        * WebGLShader 的引用
        */
        private _shader;
        /**
        * @language zh_CN
        * 构造
        */
        constructor(shader: WebGLShader);
        /**
        * @language zh_CN
        * @private
        * WebGLShader 的引用
        */
        shader: WebGLShader;
    }
}
declare module egret3d {
    /**
    * @class egret3d.Texture3D
    * @classdesc
    * 由6加Texture2D 组成
    * 可以使一个6面体上贴出不同的贴图
    * @see egret3d.Program3D
    * @see egret3d.IndexBuffer3D
    * @see egret3d.VertexBuffer3D
    * @see egret3d.Texture2D
    * @see egret3d.Shader
    * @see egret3d.CubeTexture
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Texture3D {
        /**
       * @language zh_CN
       * @private
       * 提交显卡的 index
       */
        index: number;
        /**
        * @language zh_CN
        * @private
        * 显卡中上传使用的 border 边框像素大小
        */
        border: number;
        /**
        * @language zh_CN
        * @private
        * 纹理贴图的颜色模式
        */
        colorformat: number;
        /**
        * @language zh_CN
        * @private
        * 纹理贴图标准的格式
        */
        internalformat: InternalFormat;
        /**
        * @language zh_CN
        * @private
        * context.creatTexture()接口生成的GPU纹理
        */
        texture: WebGLTexture;
        /**
         * @language zh_CN
         * 是否使用mipmap
         */
        useMipmap: boolean;
        /**
         * @language zh_CN
         * mipmap数据
         */
        mimapData: Array<MipmapData>;
        image_front: Texture2D;
        image_back: Texture2D;
        image_left: Texture2D;
        image_right: Texture2D;
        image_up: Texture2D;
        image_down: Texture2D;
        /**
         * @language zh_CN
         * 构造函数
         */
        constructor();
    }
}
declare module egret3d {
    /**
    * @private
    * @class egret3d.IRender
    * @classdesc
    * 场景中的可见物体，可渲染的对象。
    * 在渲染之前会将渲染树中对象进行筛选.
    * 只有IRender对象才会进入渲染管线
    * @see egret3d.Object3D
    * @see egret3d.Geometry
    * @version Egret 3.0
    * @platform Web,Native
    */
    interface IRender extends IDispatchEvent {
        /**
        * @language zh_CN
        * 子对象列表。</p>
        * @version Egret 3.0
        * @platform Web,Native
        */
        childs: Array<Object3D>;
        /**
        * @language zh_CN
        * 网格信息。</p>
         * geometry 为渲染对象的网格信息 ，渲染对象需要 vertexBuffer  和 indexBuffer 信息 及顶点着色器shade。</p>
        * @version Egret 3.0
        * @platform Web,Native
        */
        geometry: Geometry;
        /**
        * @language zh_CN
        * 材质信息。</p>
        * 赋予对象节点可供渲染的材质球属性，让对象加入可渲染实体列表，及渲染对象与对象之间的混合，排序。</p>
        * @version Egret 3.0
        * @platform Web,Native
        */
        material: MaterialBase;
        /**
        * @language zh_CN
        * 动作对象，控制骨骼动画。</p>
        * 可拓展的动画功能属性，动画功能的驱动类总接口。</p>
        * @version Egret 3.0
        * @platform Web,Native
        */
        animation: IAnimation;
        /**
        * @language zh_CN
        * 返回 object 世界渲染矩阵
        * 如果有父亲节点对象的话，要乘以父对象的变换.
        * @returns IRender 世界渲染矩阵
        * @version Egret 3.0
        * @platform Web,Native
        */
        modelMatrix: Matrix4_4;
        /**
        * @language zh_CN
        * 鼠标拣选类型。</p>
        * 设置鼠标的拣选类型，可通过 PickType来进行设置。</p>
        * 快速拣选默认使用 正方形包围盒子。</p>
        * 高精度型需要 PositionPick ， uv pick 等。</p>
        * @see egret3d.PickType
        * @version Egret 3.0
        * @platform Web,Native
        */
        pickType: PickType;
        /**
        * @language zh_CN
        * 对象模型包围盒。</p>
        * 每个场景物件都需要有的 包围盒子，可以自定义包围盒形状大小，也可以根据模型本身生成。</p>
        * @version Egret 3.0
        * @platform Web,Native
        */
        bound: Bound;
        /**
        * @language zh_CN
        * 对象模型当前使用包围盒。
        * @see mouseChilder 根据这个值取不同的包围盒为true取大包围盒 false取子包围盒
        *
        * @version Egret 3.0
        * @platform Web,Native
        */
        currentBound: Bound;
        /**
        * @language zh_CN
        * 鼠标检测数据
        * @version Egret 3.0
        * @platform Web,Native
        */
        pickResult: PickResult;
        /**
        * @language zh_CN
        * 是否开启拣选检测
        * @version Egret 3.0
        * @platform Web,Native
        */
        enablePick: boolean;
        /**
        * @language zh_CN
        * 是否开启检测LOD盒子，每个物体的碰撞盒子中有一个小的盒子，当开启这个盒子后，
        * 鼠标检测就是用的这个小盒子来进行检测
        * @version Egret 3.0
        * @platform Web,Native
        */
        mouseChilder: boolean;
        /**
        * @language zh_CN
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        enableCulling: boolean;
        /**
        * @language zh_CN
        * 是否可见
        * @version Egret 3.0
        * @platform Web,Native
        */
        visible: boolean;
        update(time: number, delay: number, camera: Camera3D): any;
        renderDiffusePass(time: number, delay: number, context3DProxy: Context3DProxy, camera3D: Camera3D): any;
    }
}
declare module egret3d {
    /**
    * @class egret3d.Object3D
    * @classdesc
    * 拣选类型，拣选时可以分为，包围盒拣选、模型拣选返回模型拣选到的位置、模型拣选返回模型拣选到的UV坐标
    * 这几种拣选方式
    * 设置鼠标拣选的类型，鼠标拣选不同的类型有不同的效果作用，还有性能
    * 需要的拣选精度越高，性能要求就越高，反之亦然
    *
    * @see egret3d.Picker
    * @version Egret 3.0
    * @platform Web,Native
    */
    enum PickType {
        /**
        * 包围盒拣选
        */
        BoundPick = 0,
        /**
        * 模型拣选返回模型拣选到的位置
        */
        PositionPick = 1,
        /**
        * 模型拣选返回模型拣选到的UV坐标
        */
        UVPick = 2,
    }
    /**
    * @class egret3d.Object3D
    * @classdesc
    * 3d空间中的实体对象。
    * 场景图中的Object3D对象是一个树型结构，对象中包含了变换信息.
    * 这些变换信息应用于所有的子对象,子对象也有自己的变换信息,最终
    * 的变换信息要结合父对象的变换信息
    * 每个Object3D对象在生成时会创建一个包围盒
    *
    * @see egret3d.Vector3D
    * @see egret3d.Matrix4_4
    * @see egret3d.Quaternion
    * @see egret3d.Bound
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Object3D extends EventDispatcher {
        /**
         * @private
         * @language zh_CN
         * 当前对象名
         * @version Egret 3.0
         * @platform Web,Native
         */
        static renderListChange: boolean;
        protected static s_id: number;
        protected _modelMatrix3D: Matrix4_4;
        protected _transformChange: boolean;
        protected _pos: Vector3D;
        protected _rot: Vector3D;
        protected _sca: Vector3D;
        protected _orientation: Quaternion;
        protected _axis: Vector3D;
        protected _angle: number;
        protected _globalPos: Vector3D;
        protected _globalRot: Vector3D;
        protected _globalSca: Vector3D;
        protected _globalOrientation: Quaternion;
        protected _qut: Quaternion;
        protected _vec: Vector3D;
        protected _active: boolean;
        protected _isRoot: boolean;
        /**
        * @language zh_CN
        * 对象模型包围盒。</p>
        * 每个场景物件都需要有的 包围盒子，可以自定义包围盒形状大小，也可以根据模型本身生成。</p>
        * @version Egret 3.0
        * @platform Web,Native
        */
        bound: Bound;
        /**
        * @language zh_CN
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        canPick: boolean;
        /**
        * @language zh_CN
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        renderLayer: number;
        /**
        * @language zh_CN
        * 是否开启检测LOD盒子，每个物体的碰撞盒子中有一个小的盒子，当开启这个盒子后，
        * 鼠标检测就是用的这个小盒子来进行检测
        * @version Egret 3.0
        * @platform Web,Native
        */
        mouseChilder: boolean;
        /**
        * @language zh_CN
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        enableCulling: boolean;
        /**
        * @language zh_CN
        * 是否可见
        * @version Egret 3.0
        * @platform Web,Native
        */
        visible: boolean;
        /**
        * @language zh_CN
        * 当前对象名
        * @version Egret 3.0
        * @platform Web,Native
        */
        name: string;
        /**
        * @language zh_CN
        * 当前对象id
        * @version Egret 3.0
        * @platform Web,Native
        */
        id: number;
        /**
        * @language zh_CN
        * 渲染层级 。</p>
        * 渲染时分组进行依次渲染 前16位表示tag,后16位表示layer。</p>
        * @version Egret 3.0
        * @platform Web,Native
        */
        layer: number;
        /**
        * @language zh_CN
        * 渲染层级分类标签
        * @version Egret 3.0
        * @platform Web,Native
        */
        tag: Tag;
        /**
        * @language zh_CN
        * 是否开启拣选检测。</p>
        * 设定这个物件是否具有 鼠标交互能力的开关。</p>
        * @version Egret 3.0
        * @platform Web,Native
        */
        enablePick: boolean;
        /**
        * @language zh_CN
        * 是否需要视锥体裁剪。</p>
        * 设定这个物件是否具有 视锥体裁剪功能，为否的话，将永远不参加场景渲染剔除树，无论是否在显示范围内都会进行相关的渲染逻辑运算。</p>
        * @version Egret 3.0
        * @platform Web,Native
        */
        enableCut: boolean;
        /**
        * @language zh_CN
        * 父亲节点
        * @version Egret 3.0
        * @platform Web,Native
        */
        parent: Object3D;
        /**
        * @language zh_CN
        * 子对象列表。</p>
        * @version Egret 3.0
        * @platform Web,Native
        */
        childs: Array<Object3D>;
        /**
        * @language zh_CN
        * 是否控制，当摄像机被绑定摄像机动画时，这个值为false.
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        isController: boolean;
        /**
        * @language zh_CN
        * 是否关闭
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        isDisable: boolean;
        /**
        * @language zh_CN
        * 对象模型当前使用包围盒。
        * @see mouseChilder 根据这个值取不同的包围盒为true取大包围盒 false取子包围盒
        *
        * @version Egret 3.0
        * @platform Web,Native
        */
        currentBound: Bound;
        /**
        * @language zh_CN
        * 如果直接实例化这个类，就会生成一个空的3D容器，可以往里添加3D显示对象，作为对象的父级，但是本身没有渲染属性。
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
        * @language zh_CN
        * 返回位移。</p>
        * 获取容器的坐标位置，基于父节点的位置坐标。</p>
        * @returns 位移
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置位移。</p>
        * 设置基于父节点的位置坐标，当父容器发生变化时，子节点也会变化。</p>
        * @param vec 位移
        * @version Egret 3.0
        * @platform Web,Native
        */
        position: Vector3D;
        /**
        * @language zh_CN
        * 返回旋转。</p>
        * 获取容器的旋转信息，基于父节点的旋转信息 欧拉角信息。</p>
        * @returns 旋转 欧拉角信息
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置旋转 。</p>
        * 设置基于父节点的旋转信息 欧拉角信息，当父容器发生变化时，子节点也会变化。</p>
        * @param vec 旋转 欧拉角信息
        * @version Egret 3.0
        * @platform Web,Native
        */
        rotation: Vector3D;
        /**
        * @language zh_CN
        * 返回旋转。</p>
        * 返回 基于四元素的旋转信息。</p>
        * @returns 旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置旋转。</p>
        * 设置旋转 基于四元素 旋转信息，当父容器发生变化时，子节点也会变化。</p>
        * @param value 旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        orientation: Quaternion;
        /**
        * @language zh_CN
        * 返回缩放。</p>
        * 返回基于父容器的缩放信息。</p>
        * @returns 缩放
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置缩放。</p>
        * 设置基于父容器的缩放信息，当父容器发生变化时，子节点也会变化。</p>
        * @param vec 缩放
        * @version Egret 3.0
        * @platform Web,Native
        */
        scale: Vector3D;
        /**
        * @language zh_CN
        * 返回x坐标
        * 返回基于父容器的位置坐标信息值
        * @returns x坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置x坐标。</p>
        * 设置基于父容器的位置信息，当父容器发生变化时，子节点也会变化，值不变。</p>
        * @param value x坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        x: number;
        /**
        * @language zh_CN
        * 返回y坐标
        *
        * 返回基于父容器的位置坐标信息值
        * @returns y坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置y坐标。</p>
        * 设置基于父容器的位置信息，当父容器发生变化时，子节点也会变化，值不变。</p>
        * @param value y坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        y: number;
        /**
        * @language zh_CN
        * 返回z坐标
        *
        * 返回基于父容器的位置坐标信息值
        * @returns z坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置z坐标。</p>
        * 设置基于父容器的位置信息，当父容器发生变化时，子节点也会变化，值不变。</p>
        * @param value z坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        z: number;
        /**
        * @language zh_CN
        * 返回x旋转
        *
        * 返回基于父容器的位置旋转信息值
        * @returns x旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置x轴旋转。</p>
        * 设置基于父容器的旋转信息，当父容器发生变化时，子节点也会变化，值不变。</p>
        * @param value x轴旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        rotationX: number;
        /**
        * @language zh_CN
        * 返回y旋转
        *
        * 返回基于父容器的位置旋转信息值
        * @returns y旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置y轴旋转。</p>
        * 设置基于父容器的旋转信息，当父容器发生变化时，子节点也会变化，值不变。</p>
        * @param value y轴旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        rotationY: number;
        /**
        * @language zh_CN
        * 返回z旋转
        *
        * 返回基于父容器的位置旋转信息值
        * @returns z旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置z轴旋转。</p>
        * 设置基于父容器的旋转信息，当父容器发生变化时，子节点也会变化，值不变。</p>
        * @param value z轴旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        rotationZ: number;
        /**
        * @language zh_CN
        * 返回x缩放
        * 返回基于父容器的缩放信息值
        * @returns x缩放
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置x轴缩放。</p>
        * 设置基于父容器的旋转信息，当父容器发生变化时，子节点也会变化，值不变
        * @param value x轴缩放
        * @version Egret 3.0
        * @platform Web,Native
        */
        scaleX: number;
        /**
        * @language zh_CN
        * 返回y缩放
        * 返回基于父容器的缩放信息值
        * @returns y缩放
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置y轴缩放
        *
        * 设置基于父容器的旋转信息，当父容器发生变化时，子节点也会变化，值不变
        * @param value y轴缩放
        * @version Egret 3.0
        * @platform Web,Native
        */
        scaleY: number;
        /**
        * @language zh_CN
        * 返回z缩放
        * 返回基于父容器的缩放信息值
        * @returns z缩放
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置z轴缩放
        *
        * 设置基于父容器的旋转信息，当父容器发生变化时，子节点也会变化，值不变
        * @param value z轴缩放
        * @version Egret 3.0
        * @platform Web,Native
        */
        scaleZ: number;
        /**
        * @language zh_CN
        * 以axis轴为中心进行旋转
        * 设置基于父容器的旋转信息，数值通过axis的角度进行设置。当父容器发生变化时，子节点也会变化，值不变
        * @param axis 中心轴
        * @param angle 旋转的角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        setRotationFromAxisAngle(axis: Vector3D, angle: number): void;
        /**
        * @language zh_CN
        * 返回 object 世界渲染矩阵
        * 如果有父亲节点对象的话，要乘以父对象的变换.
        * @returns object 世界渲染矩阵
        * @version Egret 3.0
        * @platform Web,Native
        */
        modelMatrix: Matrix4_4;
        /**
        * @language zh_CN
        * 返回 object 世界渲染矩阵
        * 如果有父亲节点对象的话，要乘以父对象的变换.
        * @private
        * @returns object 世界渲染矩阵
        * @version Egret 3.0
        * @platform Web,Native
        */
        protected updateModleMatrix(): void;
        protected onUpdateTransform(): void;
        /**
        * @language zh_CN
        * 返回 object 世界位置 x
        * @returns object 世界位置x
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置 object 世界位置 x
        * @version Egret 3.0
        * @platform Web,Native
        */
        globalX: number;
        /**
        * @language zh_CN
        * 返回 object 世界位置 y
        * @returns object 世界位置 y
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置 object 世界位置 y
        * @version Egret 3.0
        * @platform Web,Native
        */
        globalY: number;
        /**
        * @language zh_CN
        * 返回 object 世界位置 z
        * @returns object 世界位置 z
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置 object 世界位置 z
        * @version Egret 3.0
        * @platform Web,Native
        */
        globalZ: number;
        /**
        * @language zh_CN
        * 返回 object 世界位置
        * 返回世界坐标系的 全局位置坐标
        * @returns object 世界位置
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置 object 世界位置
        * @version Egret 3.0
        * @platform Web,Native
        */
        globalPosition: Vector3D;
        /**
        * @language zh_CN
        * 返回 object 世界旋转x
        * @returns object 世界旋转x
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置 object 世界旋转 x
        * @version Egret 3.0
        * @platform Web,Native
        */
        globalRotationX: number;
        /**
        * @language zh_CN
        * 返回 object 世界旋转y
        * @returns object 世界旋转y
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置 object 世界旋转 y
        * @version Egret 3.0
        * @platform Web,Native
        */
        globalRotationY: number;
        /**
        * @language zh_CN
        * 返回 object 世界旋转z
        * @returns object 世界旋转z
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置 object 世界旋转 z
        * @version Egret 3.0
        * @platform Web,Native
        */
        globalRotationZ: number;
        /**
        * @language zh_CN
        * 返回 object 世界旋转
        * 返回世界坐标系的 全局旋转信息
        * @returns object 世界旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置 object 世界旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        globalRotation: Vector3D;
        /**
        * @language zh_CN
        * 返回 object 世界缩放
        * 返回世界坐标系的 全局缩放信息
        * @returns object 世界缩放
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置 object 世界缩放
        * @version Egret 3.0
        * @platform Web,Native
        */
        globalScale: Vector3D;
        /**
        * @language zh_CN
        * 获取 object 世界缩放 x
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置 object 世界缩放 x
        * @version Egret 3.0
        * @platform Web,Native
        */
        globalScaleX: number;
        /**
        * @language zh_CN
        * 获取 object 世界缩放 y
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置 object 世界缩放 y
        * @version Egret 3.0
        * @platform Web,Native
        */
        globalScaleY: number;
        /**
        * @language zh_CN
        * 获取 object 世界缩放 z
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置 object 世界缩放 z
        * @version Egret 3.0
        * @platform Web,Native
        */
        globalScaleZ: number;
        /**
        * @language zh_CN
        * 返回 object 世界旋转 四元数
        * 返回世界坐标系的 全局旋转信息，数据类型是 四元素
        * @returns object 世界旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置 object 世界旋转 四元数
        * @version Egret 3.0
        * @platform Web,Native
        */
        globalOrientation: Quaternion;
        /**
        * @language zh_CN
        * 增加一个子对象,并返回当前子对象
        * 在容器中添加子对象，如果有显示接口的，将会放到场景显示树种进行渲染逻辑运算，及渲染
        * @param child 增加的子对象
        * @returns 子对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        addChild(child: Object3D): Object3D;
        /**
        * @language zh_CN
        * 增加一个子对象,并返回当前子对象
        * 在容器中添加子对象，如果有显示接口的，将会放到场景显示树种进行渲染逻辑运算，及渲染
        * @param child 增加的子对象
        * @param index 子对象的下标
        * @returns 子对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        addChildAt(child: Object3D, index: number): Object3D;
        /**
        * @language zh_CN
        * 返回下标为index的子对象
        * @private
        * @param index 子对象下标
        * @returns 如果有就返回子对象,否则就返回null.
        * @version Egret 3.0
        * @platform Web,Native
        */
        getChildAt(index: number): Object3D;
        /**
        * @language zh_CN
        * @private
        * 返回子对角child的下标
        * @param child 子对象
        * @returns 如果有就返回子对象的下标,否则就返回-1.
        * @version Egret 3.0
        * @platform Web,Native
        */
        getChildIndex(child: Object3D): number;
        /**
        * @language zh_CN
        * 移除child子对象 并返回
        * 移除显示列表中的指定对象，如果为空将会返回
        * @param child 子对象
        * @returns Object3D 如果成功就返回child,否则返回null
        * @version Egret 3.0
        * @platform Web,Native
        */
        removeChild(child: Object3D): Object3D;
        /**
        * @language zh_CN
        * 移除下标为index的子对象 并返回
        * @private
        * @param index 子对象的下标
        * @returns 如果成功就返回child,否则返回null
        * @version Egret 3.0
        * @platform Web,Native
        */
        removeChildAt(index: number): Object3D;
        /**
        * @language zh_CN
        * 设置子对象的下标
        * @private
        * @param child 子对象
        * @param index 子对象的下标
        * @version Egret 3.0
        * @platform Web,Native
        */
        setChildIndex(child: Object3D, index: number): void;
        /**
        * @language zh_CN
        * @private
        * 交换子对象的位置
        * @param child1 子对象1
        * @param child2 子对象2
        * @version Egret 3.0
        * @platform Web,Native
        */
        swapChildren(child1: Object3D, child2: Object3D): void;
        /**
        * @language zh_CN
        * @private
        * 交换子对象的位置
        * @param index1 子对象1下标
        * @param index2 子对象2下标
        * @version Egret 3.0
        * @platform Web,Native
        */
        swapChildrenAt(index1: number, index2: number): void;
        /**
        * @language zh_CN
        * 当前对象对视位置
        * @private
        * @param pos 对象的位置
        * @param target 目标的位置
        * @param up 向上的方向
        * @version Egret 3.0
        * @platform Web,Native
        */
        lookAt(pos: Vector3D, target: Vector3D, up?: Vector3D): void;
        /**
        * @language zh_CN
        * 返回目标的位置
        *
        * @private
        * @returns 目标的位置
        * @version Egret 3.0
        * @platform Web,Native
        */
        lookAtPosition: Vector3D;
        protected updateTransformChange(change: boolean): void;
        /**
        * @language zh_CN
        * 当前对象数据更新
        * @private
        * @param camera 当前渲染的摄相机
        * @param time 当前时间
        * @param delay 每帧时间间隔
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(time: number, delay: number, camera: Camera3D): void;
        /**
        * @language zh_CN
        * 返回对象的屏幕坐标
        * 获取当前物体的屏幕坐标值，一般用来指定屏幕相关的ui绑定及其他功能
        * @param camera 对象渲染的摄像机
        * @returns 对象的屏幕坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 释放所有数据
        * 是否内存中的相关数据连接引用，移除逻辑运算，从主渲染刘表中挪出
        * @version Egret 3.0
        * @platform Web,Native
        */
        dispose(): void;
    }
}
declare module egret3d {
    /**
    * @private
    * @class egret3d.Entity
    * @classdesc
    * 3d空间中的实体对象 extends Object3D
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Entity extends Object3D {
        bound: any;
        canPick: boolean;
        renderLayer: number;
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
    }
}
declare module egret3d {
    /**
    * @class egret3d.Mesh
    * @classdesc
    * 3d模型网格 生成渲染模型
    * 创建一个Mesh网格数据和材质数据是必需的，如果是动态模型就加上动画数据
    * 继承Object3D对象，场景中实体渲染对象
    *
    * @see egret3d.Object3D
    * @see egret3d.Geometry
    * @see egret3d.MaterialBase
    * @see egret3d.IAnimation
    * @see egret3d.SkeletonAnimation
    *
    * 示例:
    * @includeExample core/node/Mesh.ts
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Mesh extends Object3D implements IRender, IQuadNode {
        /**
        * @language zh_CN
        * 网格信息。</p>
         * geometry 为渲染对象的网格信息 ，渲染对象需要 vertexBuffer  和 indexBuffer 信息 及顶点着色器shade。</p>
        * @version Egret 3.0
        * @platform Web,Native
        */
        geometry: Geometry;
        private _aabbBox;
        /**
        * @language zh_CN
        * 材质信息。</p>
        * 赋予对象节点可供渲染的材质球属性，让对象加入可渲染实体列表，及渲染对象与对象之间的混合，排序。</p>
        * @version Egret 3.0
        * @platform Web,Native
        */
        material: MaterialBase;
        private muiltMaterial;
        private _materialCount;
        /**
        * @language zh_CN
        * 动作对象，控制骨骼动画。</p>
        * 可拓展的动画功能属性，动画功能的驱动类总接口。</p>
        * @version Egret 3.0
        * @platform Web,Native
        */
        animation: IAnimation;
        /**
        * @language zh_CN
        * 鼠标拣选类型。</p>
        * 设置鼠标的拣选类型，可通过 PickType来进行设置。</p>
        * 快速拣选默认使用 正方形包围盒子。</p>
        * 高精度型需要 PositionPick ， uv pick 等。</p>
        * @see egret3d.PickType
        * @version Egret 3.0
        * @platform Web,Native
        */
        pickType: PickType;
        /**
        * @language zh_CN
        * 鼠标检测数据
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        pickResult: PickResult;
        /**
        * @language zh_CN
        * 构建一个Mesh对象
        * @param geometry 模型数据
        * @param material 模型材质
        * @param animation 模型动画
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(geometry: Geometry, material: MaterialBase, animation?: IAnimation);
        setMaterialByID(): void;
        aabb: QuadAABB;
        initAABB(): void;
        isTriangle: boolean;
        protected onUpdateTransform(): void;
        /**
        * @language zh_CN
        * 增加一个材质
        * @param id 材质id
        * @param material 模型材质
        * @version Egret 3.0
        * @platform Web,Native
        */
        addSubMaterial(id: number, material: MaterialBase): void;
        /**
        * @language zh_CN
        * 删除一个材质
        * @param id 材质id
        * @version Egret 3.0
        * @platform Web,Native
        */
        removeSubMaterial(id: number): void;
        /**
        * @language zh_CN
        * 用ID得到一个材质
        * @param id 材质id
        * @version Egret 3.0
        * @platform Web,Native
        */
        getMaterial(id: number): MaterialBase;
        /**
        * @language zh_CN
        * 得到所有材质的个数
        * @returns number
        * @version Egret 3.0
        * @platform Web,Native
        */
        materialCount(): number;
        /**
        * @language zh_CN
        * 克隆一个模型
        * @returns 克隆后的模型
        * @version Egret 3.0
        * @platform Web,Native
        */
        clone(): Mesh;
        /**
        * @language zh_CN
        * 当前对象数据更新，只有在视锥内的对象才会执行此更新
        * @param camera 当前渲染的摄相机
        * @param time 当前时间
        * @param delay 每帧时间间隔
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(time: number, delay: number, camera: Camera3D): void;
        /**
        * @language zh_CN
        * @private
        * 生成包围盒
        */
        protected buildBoundBox(): Bound;
        private _i;
        private _subGeometry;
        private _matID;
        /**
        * @private
        */
        renderDiffusePass(time: number, delay: number, context3DProxy: Context3DProxy, camera3D: Camera3D): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Billboard
     * @classdesc
     * 公告板渲染对象 始终面朝摄像机的面板
     * @version Egret 3.0
     * @platform Web,Native
     */
    class Billboard extends Mesh {
        /**
         * @language zh_CN
         * 指定材质，和公告板宽、高，构建一个公告板
         * @param material 渲染材质
         * @param width 公告板宽度
         * @param height 公告板高度
         * @version Egret 3.0
         * @platform Web,Native
         */
        constructor(material: MaterialBase, width?: number, height?: number);
        /**
        * @language zh_CN
        * 数据更新，不前对象的旋转和摄像机的旋转一致
        * @param camera 当前渲染的摄相机
        * @param time 当前时间
        * @param delay 间隔时间
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(time: number, delay: number, camera: Camera3D): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.Sky
    * @classdesc
    * 场景中天空盒子，是6面体cube，以6张无缝结合的贴图构成.
    *
    * @see egret3d.CubeTexture
    * @see egret3d.CubeTextureMaterial
    *
    * 示例:
    * @version Egret 3.0
    * @platform Web,Native
    * @includeExample core/node/Sky.ts
    */
    class Sky extends Mesh {
        private _camera;
        /**
        * @language zh_CN
        * 构建一个天空盒子对象
        * @param cubMaterial 天空盒子贴图材质
        * @param camera 天空盒子渲染相机
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(cubMaterial: CubeTextureMaterial, camera?: Camera3D);
        /**
        * @language zh_CN
        * 当前对象数据更新，只有在视锥内的对象才会执行此更新
        * @param camera 当前渲染的摄相机
        * @param time 当前时间
        * @param delay 每帧时间间隔
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(time: number, delay: number, camera: Camera3D): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.SphereSky
    * @classdesc
    * 天空球
    * 球形的天空盒子，需要sphere的360全景照片，可进行全景照片和video的球形显示
    * @version Egret 3.0
    * @platform Web,Native
    */
    class SphereSky extends Mesh {
        private _camera;
        /**
        * @language zh_CN
        * constructor
        * @param tex1 天空球贴图
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(material: MaterialBase, camera?: Camera3D);
        /**
        * @language zh_CN
        * 当前对象数据更新，只有在视锥内的对象才会执行此更新
        * @param camera 当前渲染的摄相机
        * @param time 当前时间
        * @param delay 每帧时间间隔
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(time: number, delay: number, camera: Camera3D): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Wireframe
     * @classdesc
     * 渲染线框 以线的形式渲染顶点。
     * 使用LINES的模式进行渲染。
     * 会使用两个索引来进行渲染一个线段。
     * 实例化一个Wireframe对象之后需要把geometry顶点数据和索引数据填充
     * @see egret3d.Geometry.setVerticesForIndex
     * @see egret3d.Geometry.indexData
     * @see egret3d.Geometry
     * @version Egret 3.0
     * @platform Web,Native
     */
    class Wireframe extends Mesh {
        /**
         * @language zh_CN
         * @version Egret 3.0
         * @platform Web,Native
         */
        constructor();
    }
}
declare module egret3d {
    /**
    *@language zh_CN
    *@private
    */
    enum LightType {
        pointlight = 0,
        directlight = 1,
        spotLightlight = 2,
    }
    /**
    * @class egret3d.DirectLight
    * @classdesc
    * 灯光的基础类型。</p>
    * 所有的灯光基本要素 灯光的颜色，强度，位置，方向。</p>
    * 颜色的色值均是16进制 red:0xffff0000 argb的定义模式。</p>
    * 每个材质球所能最大使用的灯光建议别太多，能省则省，尤其是移动端，能用灯光缓存图 lightmap 最好。</p>
    * @see egret3d.Object3D
    * @see egret3d.LightGroup
    * @see egret3d.LightBase
    * @see egret3d.PointLight
    * @see egret3d.SpotLight
    * @version Egret 3.0
    * @platform Web,Native
    */
    class LightBase extends Object3D {
        /**
         *@language zh_CN
         *@private
         * 类型
         */
        lightType: number;
        /**
         * @language zh_CN
         *@private
         * 环境颜色
         */
        protected _ambient: Vector3D;
        /**
         * @language zh_CN
         *@private
         * 漫反射
         */
        protected _diffuse: Vector3D;
        /**
         * @language zh_CN
         *@private
         * 镜面反射
         */
        protected _specular: Vector3D;
        /**
         * @language zh_CN
         *@private
         */
        protected _halfVector: Vector3D;
        /**
         * @language zh_CN
         *@private
         * @param value 强度
         */
        protected _intensity: number;
        protected _radius: number;
        protected _falloff: number;
        /**
        *@language zh_CN
        *@private
        * @param value 背光强度
        */
        protected _halfIntensity: number;
        /**
         * @language zh_CN
         *@private
         */
        protected _spotExponent: number;
        /**
         * @language zh_CN
         *@private
         */
        protected _spotCutoff: number;
        /**
         * @language zh_CN
         *@private
         */
        protected _spotCosCutoff: number;
        /**
         * @language zh_CN
         *@private
         */
        protected _constantAttenuation: number;
        /**
         * @language zh_CN
         *@private
         */
        protected _linearAttenuation: number;
        /**
         * @language zh_CN
         *@private
         */
        protected _quadraticAttenuation: number;
        /**
         * @language zh_CN
         *@private
         */
        _lightIndex: number;
        /**
         * @language zh_CN
         *@private
         */
        protected len: number;
        /**
         * @language zh_CN
         *@private
         */
        protected _change: boolean;
        /**
         * @language zh_CN
         *@private
         */
        protected lightViewPos: Vector3D;
        constructor();
        /**
         * @language zh_CN
         * 得到灯光强度。</p>
         * 影响灯光的强弱显示，值的范围0~没有上限，但是值过大会导致画面过度曝光。</p>
         */
        /**
         * @language zh_CN
         * 设置灯光强度。</p>
         * 影响灯光的强弱显示，值的范围0~没有上限，但是值过大会导致画面过度曝光。</p>
         */
        intensity: number;
        /**
         * @language zh_CN
         * 得到背光灯光强度。</p>
         * 影响背光灯光的强弱显示，值的范围0~没有上限，但是值过大会导致画面过度曝光。</p>
         */
        /**
        * @language zh_CN
        * 设置背光灯光强度。</p>
        * 影响背光灯光的强弱显示，值的范围0~没有上限，但是值过大会导致画面过度曝光。</p>
        */
        halfIntensity: number;
        /**
         * @language zh_CN
         * 获取 灯光环境颜色。</p>
         * 物体在未受到光的直接照射的地方 模拟间接环境光颜色，会影响背光面的颜色。</p>
         * return ambient  灯光环境颜色
         */
        /**
         * @language zh_CN
         * 设置灯光环境颜色。</p>
         * 物体在未受到光的直接照射的地方 模拟间接环境光颜色，会影响背光面的颜色。</p>
         */
        ambient: number;
        /**
         * @language zh_CN
         * 设置灯光漫反射颜色。</p>
         * 直接影响最终灯光的颜色色值 16进制的颜色 例如 red：0xffff0000。</p>
         * 也可以通过 diffusePower 来改变这个值的总体强弱。</p>
         * return diffuse
         */
        /**
         * @language zh_CN
         * 设置灯光漫反射颜色。</p>
         * 直接影响最终灯光的颜色色值 16进制的颜色, 例如 red：0xffff0000。</p>
         * 也可以通过 diffusePower 来改变这个值的总体强弱
         */
        diffuse: number;
        /**
         * @language zh_CN
         * 在灯光方向与物体和相机成一个反光角度的时候，就会产生反光，高光，而不同的物体会有不同的颜色色值，尤其是金属。</p>
         * 16进制的颜色 例如 red：0xffff0000。</p>
         * 也可以通过 specularPower 来改变这个值的总体强弱。</p>
         * return  灯光镜面高光反射颜色
         */
        /**
         * @language zh_CN
         * 设置灯光镜面高光反射颜色。</p>
         * 在灯光方向与物体和相机成一个反光角度的时候，就会产生反光，高光，而不同的物体会有不同的颜色色值，尤其是金属。</p>
         * 16进制的颜色 例如 red：0xffff0000。</p>
         * 也可以通过 specularPower 来改变这个值的总体强弱。</p>
         */
        specular: number;
        private init();
        /**
         * @language zh_CN
         * @private
         * 更新灯光数据
         * @param index 灯光ID
         * @param lightData 灯光数据
         */
        updateLightData(camera: Camera3D, index: number, lightData: Float32Array): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.DirectLight
    * @classdesc
    *
    * 点光源
    * 所有的灯光基本要素 灯光的颜色，强度，位置，方向
    * 颜色的色值均是16进制 red:0xffff0000 argb的定义模式
    * 每个材质球所能最大使用的灯光建议别太多，能省则省，尤其是移动端，能用灯光缓存图 lightmap 最好
    * 点光源是游戏中常常用到的动态光源，实时渲染中，灯光的数量会直接影响渲染性能
    * @see egret3d.Object3D
    * @see egret3d.LightGroup
    * @see egret3d.LightBase
    * @see egret3d.PointLight
    * @see egret3d.SpotLight
    * @includeExample lights/PointLight.ts
    * @version Egret 3.0
    * @platform Web,Native
    */
    class PointLight extends LightBase {
        /**
         * @language zh_CN
         * @private
         * 点光源的数据长度
         */
        static stride: number;
        /**
         * @language zh_CN
         * @private
         * constructor
         * @param color {Number}
         */
        constructor(color: number);
        radius: number;
        falloff: number;
        /**
         * @language zh_CN
         * @private
         * 更新灯光数据
         * @param index 灯光ID
         * @param lightData 灯光数据
         */
        updateLightData(camera: Camera3D, index: number, lightData: Float32Array): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.DirectLight
    * @classdesc
    * spot 的灯光 也就是筒灯
    * 所有的灯光基本要素 灯光的颜色，强度，位置，方向
    * 颜色的色值均是16进制 red:0xffff0000 argb的定义模式
    * 每个材质球所能最大使用的灯光建议别太多，能省则省，尤其是移动端，能用灯光缓存图 lightmap 最好
    * spot light 可以直接想象为点光源照了个罩子，有方向且有范围的灯光
    * @see egret3d.Object3D
    * @see egret3d.LightGroup
    * @see egret3d.LightBase
    * @see egret3d.PointLight
    * @see egret3d.SpotLight
    * @version Egret 3.0
    * @platform Web,Native
    */
    class SpotLight extends LightBase {
        /**
         * @language zh_CN
         * @priavete
         */
        static stride: number;
        /**
         * @language zh_CN
         * @priavete
         * constructor
         * @param color {Vector3D}
         */
        constructor(color: number);
        /**
         * @language zh_CN
         *
         * spot 的 裁切范围
         * spot light 照射范围的大小指数
         * @returns Cutoff -spot 的 裁切范围
         */
        /**
         * @language zh_CN
         *
         * spot 的 裁切范围
         * spot light 照射范围的大小指数
         *
         * @param value Cutoff
         */
        spotCosCutoff: number;
        /**
         * @language zh_CN
         *
         * spot 的 灯光强弱
         * spot light 灯光圆形范围内随半径大小改变发生的灯光强弱指数
         * @returns 灯光强弱指数
         */
        /**
         * @language zh_CN
         * spot 的 灯光强弱
         * spot light 灯光圆形范围内随半径大小改变发生的灯光强弱指数
         *
         * @param value 灯光强弱指数
         */
        spotExponent: number;
        /**
         * @language zh_CN
         * spot 的 灯光衰减
         * spot light 灯光圆形范围内随半径大小改变发生的灯光衰减常数指数
         * @returns 持续衰减
         */
        /**
         * @language zh_CN
         *
         * spot 的 灯光衰减
         * spot light 灯光圆形范围内随半径大小改变发生的灯光衰减常数指数
         * @param value 持续衰减
         */
        constantAttenuation: number;
        /**
         * @language zh_CN
         *
         * spot 的 灯光线性衰减
         * spot light 灯光圆形范围内随半径大小改变发生的灯光线性衰减
         * @returns 线性衰减
         */
        /**
         * @language zh_CN
         *
         * spot 的 灯光线性衰减
         * spot light 灯光圆形范围内随半径大小改变发生的灯光线性衰减
         * @param value 线性衰减
         */
        linearAttenuation: number;
        /**
         * @language zh_CN
         *
         * spot 的 灯光线性2次衰减
         * spot light 灯光圆形范围内随半径大小改变发生的灯光线性2次衰减
         * @returns 返回2次衰减
         */
        /**
         * @language zh_CN
         *
         * spot 的 灯光线性2次衰减
         * spot light 灯光圆形范围内随半径大小改变发生的灯光线性2次衰减
         * @param value 2次衰减
         */
        quadraticAttenuation: number;
        /**
         * @language zh_CN
         * @private
         * 更新灯光数据
         * @param index 灯光ID
         * @param lightData 灯光数据
         */
        updateLightData(camera: Camera3D, index: number, lightData: Float32Array): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.DirectLight
    * @classdesc
    * 平行灯光</p>
    * 平行光是一种只有方向，强弱度，没有大小范围的灯光，一般情况下，directlight 可以产生阴影;</p>
    * 如果要产生阴影 需要设置 egret3d.ShadowRender.castShadowLight = directLight; 及其他相关模型的设置.</p>
    *
    * @see egret3d.LightGroup
    * @see egret3d.LightBase
    * @see egret3d.PointLight
    * @see egret3d.SpotLight
    * @includeExample lights/DirectLight.ts
    * @version Egret 3.0
    * @platform Web,Native
    */
    class DirectLight extends LightBase {
        /**
        * @language zh_CN
        * @private
        * 光源数据结构长度
        */
        static stride: number;
        /**
        * @language zh_CN
        * @private
        * @param dir 光线的方向
        */
        constructor(dir: Vector3D);
        /**
        * @language zh_CN
        *
        * 背光颜色
        * 模拟间接光照而开发的背光，而不用去同时打两盏不同方向的组合灯光，可以优化显示效果
        * @param color 背光颜色色值
        */
        ambient: number;
        /**
         * @language zh_CN
         *
         * 是否产生阴影
         * 模拟间接光照而开发的背光，而不用去同时打两盏不同方向的组合灯光，可以优化显示效果
         * @param color 背光颜色色值
         */
        /**
         * @language en_US
         * @param index
         * @param lightData
         */
        /**
         * @language zh_CN
         * @private
         * 更新灯光数据
         * @param index 灯光ID
         * @param lightData 灯光数据
         */
        updateLightData(camera: Camera3D, index: number, lightData: Float32Array): void;
    }
}
declare module egret3d {
    /**
   * @class egret3d.DirectLight
   * @classdesc
   *
   * 灯光组。</p>
   * 把需要使用的灯光，放入一个组里面，然后给材质进行渲染。
   * @see egret3d.Object3D
   * @see egret3d.LightBase
   * @see egret3d.PointLight
   * @see egret3d.SpotLight
   * @version Egret 3.0
   * @platform Web,Native
   */
    class LightGroup {
        /**
        * @language zh_CN
        * 灯光个数
        * @version Egret 3.0
        * @platform Web,Native
        */
        lightNum: number;
        /**
        * @language zh_CN
        * 方向光列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        directLightList: Array<DirectLight>;
        /**
        * @language zh_CN
        * 聚光灯列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        spotLightList: Array<SpotLight>;
        /**
        * @language zh_CN
        * 点光源列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        pointLightList: Array<PointLight>;
        /**
        * @language zh_CN
        * 创建一个灯光组
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
        * @language zh_CN
        * 为灯光组,添加一个灯光
        * @param light Light
        * @version Egret 3.0
        * @platform Web,Native
        */
        addLight(light: LightBase): void;
        /**
        * @language zh_CN
        * 删除一个灯光
        * @param light Light
        * @version Egret 3.0
        * @platform Web,Native
        */
        removeLight(light: LightBase): void;
    }
}
declare module egret3d {
    /**
    * @private
    * @class egret3d.CollectBase
    * @classdesc
    * @version Egret 3.0
    * @platform Web,Native
    * Object3D 渲染对象收集器基类
    */
    class CollectBase {
        /**
        * @language zh_CN
        * 可渲染对象列表
        */
        renderList: Array<IRender>;
        /**
        * @language zh_CN
        * 拾取列表
        */
        mousePickList: Array<IRender>;
        rootScene: Scene3D;
        protected _nodes: Array<IRender>;
        protected _num: number;
        private _tempRootNode;
        private _objDict;
        /**
        * @language zh_CN
        * constructor
        * @param root 渲染根节点
        */
        constructor();
        root: Scene3D;
        /**
        * @language zh_CN
        * 数据更新
        * @param camera 当前摄像机
        */
        update(camera: Camera3D): void;
        /**
        * @language zh_CN
        * 查找一个对象在渲染列表的下标
        * @param obj 要查找的对象
        * @returns 返回对象在渲染列表的下标
        */
        findRenderObject(obj: IRender): number;
    }
}
declare module egret3d {
    /**
    * @private
    * @class egret3d.EntityCollect
    * @classdesc
    * Object3D 渲染对象收集器,把渲染对象进行可视筛选，
    * 并且划分渲染层级，依次排序到加入列表.
    *
    * @see egret3d.Scene3D
    * @see egret3d.View3D
    * @version Egret 3.0
    * @platform Web,Native
    */
    class EntityCollect extends CollectBase {
        private _normalRenderItems;
        private _alphaRenderItems;
        /**
        * @language zh_CN
        * constructor
        * @param root 渲染根节点
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        private applyRender(child, camera);
        /**
        * @language zh_CN
        * 尝试将一个渲染对象，进行视锥体裁剪，放入到渲染队列中
        * @param root 渲染根节点
        * @version Egret 3.0
        * @platform Web,Native
        */
        private addRenderList(renderItem, camera);
        /**
        * @language zh_CN
        * 数据更新 处理需要渲染的对象
        * @param camera 当前摄像机
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(camera: Camera3D): void;
        /**
        * @language zh_CN
        * 根据当前场景的节点分布情况，生成四叉树
        * @version Egret 3.0
        * @param quadList   需要被判定是否在视锥体里的节点列表
        * @param camera     相机
        * @platform Web,Native
        */
        private appendQuadList(quadList, camera);
        protected clearLayerList(): void;
        protected sort(a: Object3D, b: Object3D, camera: Camera3D): number;
    }
}
declare module egret3d {
    /**
    * @private
    * @class egret3d.Frustum
    * @classdesc
    * 摄像机视椎体,计算出摄像机的可视范围.
    *
    * @see egret3d.Camera3D
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Frustum {
        box: BoundBox;
        private _vtxNum;
        private _planeNum;
        private _vertex;
        private _pos;
        private _plane;
        /**
        * @language zh_CN
        * 视椎体中心点
        * @version Egret 3.0
        * @platform Web,Native
        */
        center: Vector3D;
        private _curVer;
        /**
        * @language zh_CN
        * 构造
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
        * @language zh_CN
        * 生成一个视椎体
        * @param fovY 观察时y 轴方向的角度，就是观察范围夹角。
        * @param aspectRatio 纵横比，在视空间宽度除以高度.
        * @param nearPlane 近裁剪面位置Z值.
        * @param farPlane 远裁剪面位置Z值.
        * @version Egret 3.0
        * @platform Web,Native
        */
        makeFrustum(fovY: number, aspectRatio: number, nearPlane: number, farPlane: number): void;
        /**
        * @language zh_CN
        * 数据更新.
        * @param camera 视椎的摄像机.
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(camera: Camera3D): void;
        /**
        * @language zh_CN
        * 检测一个坐标点是否在视椎体内
        * @param pos 检测的坐标
        * @returns 在视椎内返回ture
        * @version Egret 3.0
        * @platform Web,Native
        */
        inPoint(pos: Vector3D): boolean;
        /**
        * @language zh_CN
        * 检测一个球是否在视椎体内
        * @param center 球的坐标
        * @param radius 球的半径
        * @returns 在视椎内返回ture
        * @version Egret 3.0
        * @platform Web,Native
        */
        inSphere(center: Vector3D, radius: number): boolean;
        /**
        * @language zh_CN
        * 检测一个盒子是否在视椎体内
        * @param box 盒子
        * @returns 在视椎内返回ture
        * @version Egret 3.0
        * @platform Web,Native
        */
        inBox(box: BoundBox): boolean;
    }
}
declare module egret3d {
    /**
    * @private
    * @class egret3d.Layer
    * @classdesc
    * Object3D 渲染Layer
    * 每个Layer分两个渲染列表，一个是有alpha的对象列表，另一个是没有alpha的对象列表
    * 不同的Layer层级可以使用不同的渲染方式，来达到各组不同的渲染效果.
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Layer {
        /**
        * @language zh_CN
        * 是否清理深度
        */
        clearDepth: boolean;
        /**
        * @language zh_CN
        * 层级清理深度状态
        */
        cleanState: boolean;
    }
}
declare module egret3d {
    /**
    * @private
    * @class egret3d.Tag
    * @classdesc
    * Object3D 渲染tag
    * 图形属性标签页的属性，由layer列表组成，共用深度信息
    * 渲染每个tag他们的深度信息是不清理的
    *
    * @see egret3d.Layer
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Tag {
        /**
       * @language zh_CN
       * 没有alpha的对象列表
       */
        objects: Array<Object3D>;
        /**
         * @language zh_CN
         * layer 列表
         */
        layers: Array<Layer>;
        /**
        * @language zh_CN
        * 有alpha的对象列表
        */
        alphaObjects: Array<Object3D>;
        clearDepth: boolean;
    }
}
declare module egret3d {
    /**
    * @class egret3d.Picker
    * @classdesc
    * 射线对场景中的实体对像进行检测。</p>
    * 以摄像机向场景中产生的一条射线对所有场景中的对象进行拾取。</p>
    * 根据性能的需要分为几种拣选类型。</p>
    * 1.包围盒拣选。</p>
    * 2.模型拣选返回模型拣选到的位置。</p>
    * 3.模型拣选返回模型拣选到的UV坐标。</p>
    *
    * @see egret3d.Ray
    * @see egret3d.PickType
    *
    * 示例:鼠标拣选模型,拣选到的进行绕Y轴旋转
    * @includeExample core/traverse/Picker.ts
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Picker {
        protected static ray: Ray;
        /**
        * @language zh_CN
        * 返回鼠标拾取对象得到的所有对象,调用之前到设置被拣选对象的pickType.
        * @param canvas 当前canvas
        * @param view 当前检测view
        * @param objects 检测的对象列表
        * @param childBox 检测是否用子包围盒 默认false就可以了
        * @returns 拾取的object列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        static pickObject3DList(canvas: Egret3DCanvas, view: View3D, objects: Array<IRender>, childBox?: boolean, target?: Array<IRender>): Array<IRender>;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.GeometryType
     * @private
     * @classdesc
     * @version Egret 3.0
     * @platform Web,Native
     */
    enum GeometryType {
        normal_geometry = 0,
        skin_geometry = 1,
        particle_geometry = 2,
    }
    /**
     * @language zh_CN
     * @class egret3d.VertexFormat
     * @classdesc
     * 顶点数据格式类型 是由2进制组成 一个顶点可以由多个类型组成
     * @version Egret 3.0
     * @platform Web,Native
     */
    enum VertexFormat {
        /**
         * @private
         * @language zh_CN
         * 顶点坐标
         * @version Egret 3.0
         * @platform Web,Native
         */
        VF_POSITION = 1,
        /**
         * @private
         * @language zh_CN
         * 顶点法线
         * @version Egret 3.0
         * @platform Web,Native
         */
        VF_NORMAL = 2,
        /**
         * @private
         * @language zh_CN
         * 顶点切线
         * @version Egret 3.0
         * @platform Web,Native
         */
        VF_TANGENT = 4,
        /**
         * @private
         * @language zh_CN
         * 顶点颜色
         * @version Egret 3.0
         * @platform Web,Native
         */
        VF_COLOR = 8,
        /**
         * @private
         * @language zh_CN
         * 顶点uv
         * @version Egret 3.0
         * @platform Web,Native
         */
        VF_UV0 = 16,
        /**
         * @private
         * @language zh_CN
         * 顶点第二uv
         * @version Egret 3.0
         * @platform Web,Native
         */
        VF_UV1 = 32,
        /**
         * @private
         * @language zh_CN
         * 顶点蒙皮信息
         * @version Egret 3.0
         * @platform Web,Native
         */
        VF_SKIN = 64,
    }
    /**
     * @language zh_CN
     * @class egret3d.Geometry
     * @classdesc
     * 表示几何形状 子集
     * @see egret3d.VertexBuffer3D
     * @see egret3d.IndexBuffer3D
     * @see egret3d.SubGeometry
     *
     * @version Egret 3.0
     * @platform Web,Native
     */
    class Geometry {
        /**
        * @language zh_CN
        * 模型的类别，是属于 静态模型，还是蒙皮动画模型，还是粒子模型，还是 特定模型
        *
        */
        geomtryType: number;
        /**
       * @language zh_CN
       * 顶点格式
       */
        private _vertexFormat;
        /**
        * @language zh_CN
        * 顶点属性长度
        */
        vertexAttLength: number;
        /**
        * @language zh_CN
        * 顶点数据
        */
        verticesData: Array<number>;
        /**
        * @language zh_CN
        * 索引数据
        */
        indexData: Array<number>;
        /**
        * @language zh_CN
        * shader buffer
        */
        sharedVertexBuffer: VertexBuffer3D;
        /**
        * @language zh_CN
        * shader index
        */
        sharedIndexBuffer: IndexBuffer3D;
        /**
        * @private
        * @language zh_CN
        * 顶点坐标数据
        */
        source_positionData: Array<number>;
        /**
        * @private
        * @language zh_CN
        * 顶点法线数据
        */
        source_normalData: Array<number>;
        /**
        * @private
        * @language zh_CN
        * 顶点切线数据
        */
        source_tangentData: Array<number>;
        /**
        * @private
        * @language zh_CN
        * 顶点颜色数据
        */
        source_colorData: Array<number>;
        /**
        * @private
        * @language zh_CN
        * 顶点uv数据
        */
        source_uvData: Array<number>;
        /**
        * @private
        * @language zh_CN
        * 顶点第二uv数据
        */
        source_uv2Data: Array<number>;
        /**
        * @private
        * @language zh_CN
        * 顶点第二uv数据
        */
        source_SkinData: Array<number>;
        /**
        * @private
        */
        skeleton: Skeleton;
        /**
        * @language zh_CN
        * 顶点字节数
        */
        vertexSizeInBytes: number;
        /**
        * @language zh_CN
        * 顶点坐标大小
        */
        static positionSize: number;
        /**
        * @language zh_CN
        * 顶点法线大小
        */
        static normalSize: number;
        /**
        * @language zh_CN
        * 顶点切线大小
        */
        static tangentSize: number;
        /**
        * @language zh_CN
        * 顶点色大小
        */
        static colorSize: number;
        /**
        * @language zh_CN
        * 顶点uv大小
        */
        static uvSize: number;
        /**
        * @language zh_CN
        * 顶点uv2大小
        */
        static uv2Size: number;
        /**
        * @language zh_CN
        * 顶点uv2大小
        */
        static skinSize: number;
        /**
        * @language zh_CN
        * geometry子集
        */
        subGeometrys: Array<SubGeometry>;
        /**
        * @language zh_CN
        * @private
        * buffer 需要重新提交的时候
        */
        private _bufferDiry;
        _vertexCount: number;
        /**
        * @language zh_CN
        * 得到顶点的数量
        * @returns number 顶点的数量
        */
        /**
        * @language zh_CN
        * 设置顶点的数量
        * @param value 顶点的数量
        */
        vertexCount: number;
        /**
        * @language zh_CN
        * @private
        */
        buildDefaultSubGeometry(): void;
        /**
        * @language zh_CN
        * 获取顶点格式
        * @returns number 顶点格式
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 使用和定义顶点的数据结构
        *<p>例如 vertexFormat( VertexFormat.VF_POSITION )
        *设置这样的定义后,就会增加这样的数据顶点数据结构，
        *如果源文件中没有这样的数据结构，
        *就会通过计算的方式计算补全，
        *不能计算的就默认为0
        *@param vertexFormat 需要定义的顶点格式类型 VertexFormat.VF_COLOR | VertexFormat.VF_UV1
        * this.useVertexFormat( VertexFormat.VF_POSITION | VertexFormat.VF_NORMAL | VertexFormat.VF_COLOR |  VertexFormat.VF_UV0 | VertexFormat.VF_UV1 );//定义了一个完整的数据结构
        */
        vertexFormat: number;
        /**
        * @private
        * @language zh_CN
        * 根据顶点格式生成顶点buffer
        * @version Egret 3.0
        * @platform Web,Native
        */
        calculateVertexFormat(): void;
        /**
        * @private
        * @language zh_CN
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(time: number, delay: number, context3DProxy: Context3DProxy, camera3D: Camera3D): void;
        /**
        * @private
        * @language zh_CN
        * @version Egret 3.0
        * @platform Web,Native
        */
        upload(context3DProxy: Context3DProxy): void;
        /**
        * @language zh_CN
        * 由顶点索引根据格式拿到顶点数据
        * @param index 顶点索引
        * @param vf 得到顶点的需要的数据格式
        * @param target 得到数据返回目标可以为null
        * @version Egret 3.0
        * @platform Web,Native
        */
        getVertexForIndex(index: number, vf: VertexFormat, target?: Array<number>): Array<number>;
        /**
        * @language zh_CN
        * 由顶点索引根据格式设置顶点数据
        * @param index 顶点索引
        * @param vf 设置顶点的需要的数据格式
        * @param src 设置的数据
        * @param vertexCount 设置的顶点数量
        * @version Egret 3.0
        * @platform Web,Native
        */
        setVerticesForIndex(index: number, vf: VertexFormat, src: Array<number>, vertexCount?: number): void;
    }
}
declare module egret3d {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.GeometryData
     * @classdesc
     * GeometryData类 表示几何形状数据
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample geometry/GeometryData.ts
     */
    class GeometryData {
        /**
        * @language zh_CN
        * 顶点属性长度
        */
        vertexAttLength: number;
        /**
        * @language zh_CN
        * 数据长度
        */
        length: number;
        /**
        * @language zh_CN
        * 顶点长度
        */
        vertLen: number;
        /**
        * @language zh_CN
        * 面数
        */
        faces: number;
        /**
        * @language zh_CN
        * 索引数据
        */
        source_indexData: Array<number>;
        /**
        * @language zh_CN
        * 顶点数据
        */
        source_vertexData: Array<number>;
        /**
        * @language zh_CN
        * 顶点色数据
        */
        source_vertexColorData: Array<number>;
        /**
        * @language zh_CN
        * 顶点法线
        */
        source_normalData: Array<number>;
        /**
        * @language zh_CN
        * 顶点切线数据
        */
        source_tangtData: Array<number>;
        /**
        * @language zh_CN
        * 顶点uv数据
        */
        source_uvData: Array<number>;
        /**
        * @language zh_CN
        * 顶点uv2数据
        */
        source_uv2Data: Array<number>;
        /**
        * @language zh_CN
        * 蒙皮数据
        */
        source_skinData: Array<number>;
        /**
        * @language zh_CN
        * 顶点索引
        */
        vertexIndex: number;
        /**
        * @language zh_CN
        * 索引数据数组
        */
        indices: Array<number>;
        /**
        * @language zh_CN
        * 顶点数据数组(x、y、z)三个number为一个顶点数据
        */
        vertices: Array<number>;
        /**
        * @language zh_CN
        * 法线数据数组(x、y、z)三个number为一个法线数据
        */
        normals: Array<number>;
        /**
        * @language zh_CN
        * 切线数据数组(x、y、z)三个number为一个切线数据
        */
        tangts: Array<number>;
        /**
        * @language zh_CN
        * 顶点颜色数据数组
        */
        verticesColor: Array<number>;
        /**
        * @language zh_CN
        * 第一套UV数据数组
        */
        uvs: Array<number>;
        /**
        * @language zh_CN
        * 第二套UV数据数组
        */
        uv2s: Array<number>;
        /**
        * @language zh_CN
        * 蒙皮数据数组
        */
        skinMesh: Array<number>;
        /**
        * @language zh_CN
        * 面法线数据数组
        */
        faceNormals: Array<number>;
        /**
        * @language zh_CN
        * 面权重数据数组
        */
        faceWeights: Array<number>;
        /**
          * @language zh_CN
          * 顶点索引数据
          */
        vertexIndices: Array<number>;
        /**
        * @language zh_CN
        * uv索引数据
        */
        uvIndices: Array<number>;
        /**
        * @language zh_CN
        * uv2索引数据
        */
        uv2Indices: Array<number>;
        /**
        * @language zh_CN
        * 法线索引数据
        */
        normalIndices: Array<number>;
        /**
        * @language zh_CN
        * 顶点色索引数据
        */
        colorIndices: Array<number>;
        /**
        * @language zh_CN
        * 索引数据数组
        */
        indexIds: Array<any>;
        skeleton: Skeleton;
        /**
        * @language zh_CN
        * 顶点数据数组
        */
        vertexDatas: Array<number>;
        matCount: number;
        material: any;
        /**
        * @language zh_CN
        *
        * 构建顶点数据数组
        * @param source 未组合顶点数据的GeometryData对象
        * @param vertexFormat 生成顶点格式
        * @returns 经过组合并生成顶点数据数组的新GeometryData对象
        */
        static buildGeomtry(source: GeometryData, vertexFormat: number): Geometry;
        /**
        * 4 pos
        * 3 normal
        * 4 color
        * 2 uv
        * 2 uv2s
        * length 15
        */
        private static combinGeomtryData(geomtrtData, needTangent?);
        /**
         * Updates the normals for each face.
         */
        private static updateFaceNormals(geomtrtData);
        /**
         * Updates the vertex normals based on the geometry.
         */
        private static updateVertexNormals(geomtrtData);
        private static updateFaceTangents(geometry);
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.SubGeometry
     * @classdesc
     * 表示几何形状 子集 不同的子集渲染时使用的材质会不同。
     * 这样就可以用不同的材质来共用相同的geometry buffer
     *
     * @see egret3d.Geometry
     * @version Egret 3.0
     * @platform Web,Native
     */
    class SubGeometry {
        /**
         * @language zh_CN
         * 顶点索引
         * @version Egret 3.0
         * @platform Web,Native
         */
        start: number;
        /**
         * @language zh_CN
         * 顶点数量
         * @version Egret 3.0
         * @platform Web,Native
         */
        count: number;
        /**
         * @language zh_CN
         * 材质ID
         * @version Egret 3.0
         * @platform Web,Native
         */
        matID: number;
        /**
         * @language zh_CN
         * @private
         * @version Egret 3.0
         * @platform Web,Native
         */
        geometry: Geometry;
        /**
        * @language zh_CN
        * 材质球的漫反射贴图。
        */
        textureDiffuse: string;
        /**
         * @language zh_CN
         * 材质球的凹凸法线贴图。
         */
        textureNormal: string;
        /**
        * @language zh_CN
        * 材质球的高光贴图。
        */
        textureSpecular: string;
        preAttList: Array<GLSL.Attribute>;
        private attList;
        private _attributeDiry;
        /**
        * @language zh_CN
        * 创建一个SubGeometry
        */
        constructor();
        upload(passUsage: PassUsage, contextPorxy: Context3DProxy): void;
        /**
        * @private
        * @language zh_CN
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(time: number, delay: number, passUsage: PassUsage, contextPorxy: Context3DProxy): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.CubeGeometry
     * @classdesc
     * CubeGeometry类 表示立方体</p>
     *
     * 示例：</p>
     * 用 CubeGeometry 对象创建一个mesh，并给予默认纹理材质TextureMaterial（默认为棋盘格纹理）; </p>
     <pre>
      var box: egret3d.Mesh = new egret3d.Mesh( new egret3d.CubeGeometry(), new egret3d.TextureMaterial() );
     </pre>
     *
     * @see egret3d.Geometry
     * @see egret3d.Mesh
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample geometry/CubeGeometry.ts
     */
    class CubeGeometry extends Geometry {
        /**
        * @language zh_CN
        * Cube宽度
        *
        */
        width: number;
        /**
        * @language zh_CN
        * Cube高度
        *
        */
        height: number;
        /**
        * @language zh_CN
        * Cube深度
        *
        */
        depth: number;
        /**
        * @language zh_CN
        * 构造函数
        * @param width 宽度
        * @param height 高度
        * @param depth 深度
        */
        constructor(width?: number, height?: number, depth?: number);
        /**
        * @language zh_CN
        * 生成网格
        */
        buildGeomtry(front: boolean): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.CylinderGeometry
     * @classdesc
     * CylinderGeometry类 表示圆柱体</p>
     *
     * 示例：</p>
     * 用 CylinderGeometry 对象创建一个mesh，并给予默认纹理材质TextureMaterial（默认为棋盘格纹理)</p>
     <pre>
     var box: egret3d.Mesh = new egret3d.Mesh( new egret3d.CylinderGeometry(), new egret3d.TextureMaterial() );
     </pre>
     * @see egret3d.Geometry
     * @version Egret 3.0
     * @platform Web,Native
     */
    class CylinderGeometry extends Geometry {
        /**
        * @language zh_CN
        * 圆柱体高度
        *
        */
        height: number;
        /**
        * @language zh_CN
        * 圆柱体半径
        *
        */
        radius: number;
        /**
          * @language zh_CN
          * 构造函数
          */
        constructor(height?: number, radius?: number);
        /**
        * @private
        * @language zh_CN
        * 生成网格
        */
        buildGeomtry(): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.PlaneGeometry
     * @classdesc
     * PlaneGeometry类 表示面板几何体
     *
     * 示例：
     * //用 PlaneGeometry 对象创建一个mesh，并给予默认纹理材质TextureMaterial（默认为棋盘格纹理）;
     * var box: egret3d.Mesh = new egret3d.Mesh( new egret3d.PlaneGeometry(), new egret3d.TextureMaterial() );
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample geometry/CubeGeometry.ts
     */
    class PlaneGeometry extends Geometry {
        private _segmentsW;
        private _segmentsH;
        private _width;
        private _height;
        private _scaleU;
        private _scaleV;
        private _rotation;
        /**
        * @language zh_CN
        * 构造函数
        * @param width 宽度
        * @param height 高度
        * @param segmentsW 宽度分段数
        * @param segmentsH 高度分段数
        * @param uScale U缩放
        * @param vScale V缩放
        * @param aixs 0:Y轴为0 1:Z轴为0 2:X轴为0
        */
        constructor(width?: number, height?: number, segmentsW?: number, segmentsH?: number, uScale?: number, vScale?: number, aixs?: Vector3D);
        private buildGeometry(aixs?);
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.SphereGeometry
     * @classdesc
     * SphereGeometry类 表示球体
     *
     * 示例：
     * //用 SphereGeometry 对象创建一个mesh，并给予默认纹理材质TextureMaterial（默认为棋盘格纹理）;
     * var box: egret3d.Mesh = new egret3d.Mesh( new egret3d.SphereGeometry(), new egret3d.TextureMaterial() );
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample geometry/SphereGeometry.ts
     */
    class SphereGeometry extends Geometry {
        private _segmentsW;
        private _segmentsH;
        private _radius;
        /**
        * @language zh_CN
        * 构造函数
        * @param r 半径
        * @param segmentsW 宽度分段数
        * @param segmentsH 高度分段数
        */
        constructor(r?: number, segmentsW?: number, segmentsH?: number);
        private buildSphere(front?);
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Input
     * @classdesc
     * 处理输入设备,鼠标.键盘.触摸。
     * 当点事件产生时如果没有点击到任何的View3D内，
     * 当前事件将不用派发.
     * @includeExample input/Input.ts
     * @see egret3d.EventDispatcher
     *
     * @version Egret 3.0
     * @platform Web,Native
     */
    class Input extends EventDispatcher {
        /**
        * @language zh_CN
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static canvas: Egret3DCanvas;
        /**
        * @language zh_CN
        * 当前鼠标X坐标。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static mouseX: number;
        /**
        * @language zh_CN
        * 当前鼠标Y坐标。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static mouseY: number;
        /**
        * @language zh_CN
        * 鼠标滚轮增量值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static wheelDelta: number;
        /**
        * @language zh_CN
        * 鼠标X坐标的偏移值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static mouseOffsetX: number;
        /**
        * @language zh_CN
        * 鼠标Y坐标的偏移值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static mouseOffsetY: number;
        /**
        * @language zh_CN
        * 上一次鼠标X坐标。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static mouseLastX: number;
        /**
        * @language zh_CN
        * 上一次鼠标Y坐标。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static mouseLastY: number;
        private _time;
        private _keyStatus;
        private _mouseStatus;
        private _isTouchStart;
        protected _mouseEvent3d: MouseEvent3D;
        protected _keyEvent3d: KeyEvent3D;
        protected _touchEvent3d: TouchEvent3D;
        protected _windowsEvent3d: Event3D;
        protected _orientationEvent3d: OrientationEvent3D;
        /**
        * @language zh_CN
        * 游戏手柄Stick1事件侦听函数。
        * @version Egret 3.0
        * @platform Web,Native
        */
        private onGamepadStick1;
        /**
        * @language zh_CN
        * 游戏手柄Stick2事件侦听函数。
        * @version Egret 3.0
        * @platform Web,Native
        */
        private onGamepadStick2;
        private static _instance;
        /**
        * @language zh_CN
        * 获取Input类对象的单例。
        * @returns Input
        * @version Egret 3.0
        * @platform Web,Native
        */
        private static instance;
        /**
        * @language zh_CN
        * 创建一个新的 Input 对象。
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
        * @language zh_CN
        * 对象注册事件侦听器对象，以使侦听器能够接收事件通知。可以为特定类型的事件和优先级注册事件侦听器。
        * 成功注册一个事件侦听器后，不使用后 需要removeEventListenerAt().
        * @param type {string} 事件的类型。
        * @param callback {Function} 处理事件的侦听器函数。此函数必须接受 Event3D 对象作为其唯一的参数，并且不能返回任何结果，
        * 如下面的示例所示： function(evt:Event3D):void 函数可以有任何名称。
        * @returns 事件ID 返回值 removeEventListenerAt 时会用到
         * @version Egret 3.0
         * @platform Web,Native
        */
        static addEventListener(type: string, callback: Function, thisObject: any): number;
        /**
         * @language zh_CN
         * 根据addEventListener传入的事件数据信息,移除事件侦听器。
         * @param type {string} 事件名。
         * @param callback {Function} 侦听函数。
         * @version Egret 3.0
         * @platform Web,Native
         */
        static removeEventListener(type: string, callback: Function, thisObject: any): void;
        /**
         * @language zh_CN
         * 根据addEventListener 的返回值,移除事件侦听器。
         * @param id  事件id, addEventListener 的返回值.
         * @version Egret 3.0
         * @platform Web,Native
         */
        static removeEventListenerAt(id: number): void;
        private _gp;
        private ongamepaddisconnected(e);
        private ongamepadconnected(e);
        /**
        * @language zh_CN
        * 游戏手柄按钮是否按下。
        * @version Egret 3.0
        * @platform Web,Native
        * @param index {number}
        * @returns {boolean}
        */
        private getGamepadButtonState(index);
        /**
        * @language zh_CN
        * 游戏手柄摇杆方向 Stick1 。
        * @version Egret 3.0
        * @platform Web,Native
        * @returns {Vector3D}
        */
        private getGamepadStick1();
        /**
        * @language zh_CN
        * 游戏手柄摇杆方向 Stick2 。
        * @version Egret 3.0
        * @platform Web,Native
        * @returns {Vector3D}
        */
        private getGamepadStick2();
        private canGame();
        /**
        * @private
        * @language zh_CN
        * 更新游戏手柄信息。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static reportOnGamepad(): void;
        private printout();
        private onPinch(x, y, x1, y1);
        private onSwipe(x, y);
        private touchStart(e);
        private _oldPosition1;
        private _oldPosition2;
        private touchEnd(e);
        private touchMove(e);
        private mouseClick(e);
        private mouseEnd(e);
        protected deliverMessage(): boolean;
        private mouseStart(e);
        private mouseMove(e);
        private mouseOver(e);
        private mouseWheel(e);
        private keyDown(e);
        private keyUp(e);
        private onWindowsResize(e);
        private onOrientationChange(e);
        private onDeviceMotion(e);
        private onDeviceOrientation(e);
        private GetSlideAngle(dx, dy);
        /**
        * @language zh_CN
        * 根据起点和终点返回方向
        * @param  startX {Number} 起点X坐标
        * @param  startY {Number} 起点Y坐标
        * @param  endX   {Number} 终点X坐标
        * @param  endY   {Number} 终点Y坐标
        * @returns result {number} 1：向上，2：向下，3：向左，4：向右,0：未滑动
        */
        GetSlideDirection(startX: number, startY: number, endX: number, endY: number): number;
        private isEnlarge(op1, op2, np1, np2);
    }
}
declare module egret3d {
    /**
     * @private
     * @language zh_CN
     * @class egret3D.OrientationControler
     * @classdesc
     * 陀螺仪控制器
     */
    class OrientationController {
        private acc;
        private accGravity;
        private rotationRate;
        private orientation;
        private screenOrientation;
        private openDebug;
        private accDiv;
        private accGravityDiv;
        private rotationRateDiv;
        private orientationRateDiv;
        private stateDiv;
        /**
        * @language zh_CN
        * 偏移旋转
        */
        offsetRotation: Vector3D;
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        /**
        * @language zh_CN
        * 初始化
        */
        start(): void;
        /**
        * @language zh_CN
        * 释放
        */
        stop(): void;
        /**
        * @language zh_CN
        */
        orientationchangeHandler(): void;
        /**
        * @language zh_CN
        *
        * @param event
        */
        motionHandler(event: DeviceMotionEvent): void;
        /**
        * @language zh_CN
        *
        * @param event
        * @returns
        */
        orientationHandler(event: DeviceOrientationEvent): void;
        /**
        * @language zh_CN
        * 陀螺仪当前旋转角度
        */
        fixOritation: Vector3D;
        private state;
        private debug();
        /**
        * @language zh_CN
        *
        * @returns number
        */
        getOrientation(): number;
        private degtorad;
        private q;
        private q1;
        private outQ;
        /**
        * @language zh_CN
        * 由陀螺仪的角度值计算出旋转四元数
        * @param alpha
        * @param beta
        * @param gamma
        * @returns 旋转四元数
        */
        getQuaternion(alpha: number, beta: number, gamma: number): Quaternion;
        private fix;
        private fixinterpolate;
        private fixAxis;
        private caheFixAxis;
        private steps;
        private interpolate;
        /**
        * @language zh_CN
        * 数据更新
        * @param camera3D 当前相机
        */
        update(view3D: View3D): void;
        private getBaseQuaternion(alpha, beta, gamma);
    }
}
declare module egret3d {
    /**
     * @private
     */
    class DDS {
        mipmaps: Array<MipmapData>;
        width: number;
        height: number;
        format: number;
        mipmapCount: number;
        isCubemap: boolean;
        constructor();
    }
}
declare module egret3d {
    /**
     * @private
     * dds / st3c compressed texture formats
     */
    enum DDSFormat {
        RGB_S3TC_DXT1_FORMAT = 2001,
        RGBA_S3TC_DXT1_FORMAT = 2002,
        RGBA_S3TC_DXT3_FORMAT = 2003,
        RGBA_S3TC_DXT5_FORMAT = 2003,
    }
    /**
     * @private
     * @language zh_CN
     * @class egret3d.DDSParser
     * @classdesc
     * 用 DDSParser 类 解析.dds 文件
     */
    class DDSParser {
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        /**
         * @language zh_CN
         * @param buffer 二进制
         * @param loadMipmaps 是否加载mipmaps
         * @returns DDSTexture
         */
        static parse(buffer: ArrayBuffer, loadMipmaps?: boolean): DDSTexture;
        private static loadARGBMip(buffer, dataOffset, width, height);
        private static fourCCToInt32(value);
        private static int32ToFourCC(value);
        private static softSolutionDXT(width, height, format, byteArray);
    }
}
declare module egret3d {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.PVR
     * @classdesc
     * PVR  object
     */
    class PVR {
        mipmaps: Array<MipmapData>;
        width: number;
        height: number;
        format: number;
        mipmapCount: number;
        isCubemap: boolean;
        constructor();
    }
}
declare module egret3d {
    /**
    * @private
    */
    enum PVRFormat {
        RGB_PVRTC_4BPPV1_Format = 2100,
        RGB_PVRTC_2BPPV1_Format = 2101,
        RGBA_PVRTC_4BPPV1_Format = 2102,
        RGBA_PVRTC_2BPPV1_Format = 2103,
    }
    /**
     * @private
     * @language zh_CN
     * @class egret3d.PVRParser
     * @classdesc
     * �� PVRParser �� ����.pvr �ļ�
     */
    class PVRParser {
        constructor();
        /**
         * @language zh_CN
         * @param buffer
         */
        static parse(buffer: ArrayBuffer): PVR;
        private static _parseV2(pvrDatas);
        private static _parseV3(pvrDatas);
        private static _extract(pvrDatas);
    }
}
declare module egret3d {
    /**
     * @private
     */
    class TGA {
        width: number;
        height: number;
        data: Uint8Array;
        constructor(data: Uint8Array, width: number, height: number);
    }
}
declare module egret3d {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.TGAParser
     * @classdesc
     * 用 TGAParser 类 解析.tga 文件
     */
    class TGAParser {
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        /**
         * @language zh_CN
         * @param buffer 二进制流
         * @returns TGATexture
         */
        static parse(buffer: ArrayBuffer): TGATexture;
    }
}
declare module egret3d {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.EAMParser
     * @classdesc
     * 用 EAMParser 类 解析.eam 文件
     */
    class EAMParser {
        /**
         * @language zh_CN
         * @param datas 加载的二进制流
         * @returns SkeletonAnimationClip
         */
        static parse(datas: ArrayBuffer): SkeletonAnimationClip;
    }
}
declare module egret3d {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.EAMVersion
     * @classdesc
     *
     */
    class EAMVersion {
        static versionDictionary: any;
        static parserVersion_1(bytes: ByteArray): SkeletonAnimationClip;
    }
}
declare module egret3d {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.ECAParser
     * @classdesc
     * 用 EAMParser 类 解析.eca 文件
     */
    class ECAParser {
        /**
         * @language zh_CN
         * @param datas 加载的二进制流
         * @returns CameraAnimationController
         */
        static parse(datas: ArrayBuffer): CameraAnimationController;
    }
}
declare module egret3d {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.ECAVersion
     * @classdesc
     */
    class ECAVersion {
        static versionDictionary: any;
        static parserVersion_1(bytes: ByteArray): CameraAnimationController;
    }
}
declare module egret3d {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.ESMParser
     * @classdesc
     * 用 ESMParser 类 解析.esm 文件
     */
    class ESMParser {
        /**
          * @language zh_CN
          * 从二进制流中解析出模型Geometry信息
          * @param datas 加载的二进制流
          * @returns Geometry
          */
        static parse(datas: ArrayBuffer): Geometry;
    }
}
declare module egret3d {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.ESMVersion
     * @classdesc
     *
     */
    class ESMVersion {
        static versionDictionary: any;
        static parserVersion_1(bytes: ByteArray, geomtry: GeometryData): void;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.ParserUtils
    * @classdesc
    * 用 ParserUtils 类 解析所有egret自定义 文件
    * @see egret3d.EventDispatcher
    * @version Egret 3.0
    * @platform Web,Native
    */
    class ParserUtils extends EventDispatcher {
        /**
        * @language zh_CN
        * 解析出的文件对象
        */
        datas: any;
        /**
        * @language zh_CN
        * 文件格式
        */
        dataFormat: string;
        private _event;
        /**
        * @language zh_CN
        * 传入数据流对象，解析出相应的数据对象.
        * @param buffer 需要解析的数据流
        * @returns 是否解析成功
        */
        parser(buffer: ArrayBuffer): boolean;
        protected onLoad(img: HTMLImageElement): void;
        protected doLoadComplete(): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.URLLoader
     * @classdesc
     * URLLoader类
     * 用于加载和解析各类3d资源.
     * DDS, TGA, jpg, png等格式的贴图文件.
     * ESM, EAM, ECA等egret3d独有的模型文件,动作文件,相机动画文件
     * @includeExample loader/URLLoader.ts
     * @see egret3d.EventDispatcher
     *
     * @version Egret 3.0
     * @platform Web,Native
     */
    class URLLoader extends EventDispatcher {
        private _xhr;
        private _event;
        private _progressEvent;
        /**
         * @language zh_CN
         * 控制以哪种方式接收加载的数据.
         * 如果未赋值则通过加载文件的后缀名来判断加载的类型以解析.
         * 如果未赋值且加载的类型并非为内置支持的文件类型.将以文本格式进行加载
         * @version Egret 3.0
         * @platform Web,Native
         */
        private _dataformat;
        /**
         * @language zh_CN
         * 文件名字
         * @version Egret 3.0
         *@platform Web,Native
         */
        fileName: string;
        /**
         * @language zh_CN
         * 以二进制方式接收加载的数据
         * @version Egret 3.0
         * @platform Web,Native
         */
        static DATAFORMAT_BINARY: string;
        /**
         * @language zh_CN
         * 以文本的方式接收加载的数据
         * 默认方式
         * @version Egret 3.0
         * @platform Web,Native
         */
        static DATAFORMAT_TEXT: string;
        /**
         * @language zh_CN
         * 以音频的方式接收加载的数据
         * @version Egret 3.0
         * @platform Web,Native
         */
        static DATAFORMAT_SOUND: string;
        /**
         * @language zh_CN
         * 以图像的方式接收加载的数据
         * 支持jpg.png.等格式
         * @version Egret 3.0
         * @platform Web,Native
         */
        static DATAFORMAT_BITMAP: string;
        /**
         * @language zh_CN
         * 以DDS的方式接收加载的数据
         * @version Egret 3.0
         * @platform Web,Native
         */
        static DATAFORMAT_DDS: string;
        /**
         * @language zh_CN
         * 以TGA的方式接收加载的数据
         * @version Egret 3.0
         * @platform Web,Native
         */
        static DATAFORMAT_TGA: string;
        /**
         * @language zh_CN
         * 以ESM格式接收加载的数据
         * Egret3D独有的格式 模型+蒙皮
         * @version Egret 3.0
         * @platform Web,Native
         */
        static DATAFORMAT_ESM: string;
        /**
         * @language zh_CN
         * 以EAM格式接收加载的数据
         * Egret3D独有的格式 动作文件
         * @version Egret 3.0
         * @platform Web,Native
         */
        static DATAFORMAT_EAM: string;
        /**
         * @language zh_CN
         * 以ECA格式接收加载的数据
         * Egret3D独有的格式 相机动画文件
         * @version Egret 3.0
         * @platform Web,Native
         */
        static DATAFORMAT_ECA: string;
        /**
         * @private
         * @language zh_CN
         * 以pvr格式接收加载的数据
         * @version Egret 3.0
         * @platform Web,Native
         */
        static DATAFORMAT_PVR: string;
        /**
         * @language zh_CN
         * 构造函数
         * @param url 加载数据的地址.如果参数不为空的话.将直接开始加载
         * @param dataformat 以什么方式进行加载.如果为空的话.将通过目标文件的后缀名判断,
         * 如果为空且文件后缀不为内置支持的集中文件类型的话.将以文本格式进行加载解析
         * @version Egret 3.0
         * @platform Web,Native
         */
        constructor(url?: string, dataformat?: string);
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         * 加载目标地址的数据
         * @param url 数据地址
         * @version Egret 3.0
         * @platform Web,Native
         */
        load(url: string): void;
        /**
         * @language zh_CN
         * 控制以哪种方式接收加载的数据.
         * 如果未赋值则通过加载文件的后缀名来判断加载的类型以解析.
         * 如果未赋值且加载的类型并非为内置支持的文件类型.将以文本格式进行加载
         * @returns string
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 控制以哪种方式接收加载的数据.
         * 如果未赋值则通过加载文件的后缀名来判断加载的类型以解析.
         * 如果未赋值且加载的类型并非为内置支持的文件类型.将以文本格式进行加载
         * @param value
         * @version Egret 3.0
         * @platform Web,Native
         */
        dataformat: string;
        /**
        * @language zh_CN
        * 加载的地址
        * @version Egret 3.0
        * @platform Web,Native
        */
        url: string;
        /**
        * @language zh_CN
        * 加载的地址的上级目录，为了方便获取资源
        * @version Egret 3.0
        * @platform Web,Native
        */
        parentUrl: string;
        /**
        * @language zh_CN
        * 当前加载资源的名字
        * @version Egret 3.0
        * @platform Web,Native
        */
        resourceName: string;
        /**
        * @language zh_CN
        * 加载load 的临时资源，用户可自行配置的容器，大方便好用
        * @version Egret 3.0
        * @platform Web,Native
        */
        tempData: any;
        /**
        * @language zh_CN
        * 加载的数据.
        * @version Egret 3.0
        * @platform Web,Native
        */
        data: any;
        /**
        * @language zh_CN
        * 已经获取到的字节数
        * @version Egret 3.0
        * @platform Web,Native
        */
        bytesLoaded: number;
        /**
        * @language zh_CN
        * 需要获取的总字节数
        * @version Egret 3.0
        * @platform Web,Native
        */
        bytesTotal: number;
        private onReadyStateChange(event);
        private loadComplete();
        private onProgress(event);
        private onError(event);
        private getXHR();
        protected onLoad(img: HTMLImageElement): void;
        protected doLoadComplete(): void;
    }
}
declare module egret3d {
    /**
    * @private
    */
    interface MethodData {
        name: string;
        uniform: any;
        format: number;
        data: Float32Array;
    }
}
declare module egret3d {
    /**
    * @private
    */
    class MethodBase {
        methodType: number;
        vsShaderList: Array<string>;
        fsShaderList: Array<string>;
        materialData: MaterialData;
        upload(time: number, delay: number, usage: PassUsage, geometry: SubGeometry, context3DProxy: Context3DProxy, modeltransform: Matrix4_4, camera3D: Camera3D): void;
        update(time: number, delay: number, usage: PassUsage, geometry: SubGeometry, context3DProxy: Context3DProxy, modeltransform: Matrix4_4, camera3D: Camera3D): void;
        /**
        * @language zh_CN
        */
        dispose(): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.TerrainARGBMethod
    * @classdesc
    * 地形贴图混合渲染方法。
    * 使用一张贴图中的ARGB色来进行4张贴图进行混合。
    * @version Egret 3.0
    * @platform Web,Native
    */
    class TerrainARGBMethod extends MethodBase {
        private controlTex;
        private splat_0;
        private splat_1;
        private splat_2;
        private splat_3;
        private uvs;
        /**
        * @language zh_CN
        * 创建地形贴图混合渲染方法
        * @param controlTex 混合贴图
        * @param splat_0 第一张贴图
        * @param splat_1 第二张贴图
        * @param splat_2 第三张贴图
        * @param splat_3 第四张贴图
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(controlTex: ITexture, splat_0: ITexture, splat_1: ITexture, splat_2: ITexture, splat_3: ITexture);
        /**
        * @language zh_CN
        * 设置 UVTitling。
        * @param index {Number} 图层索引
        * @param x {Number} u 的重复次数
        * @param y {Number} v 的重复次数
        * @version Egret 3.0
        * @platform Web,Native
        */
        setUVTitling(index: number, x: number, y: number): void;
        /**
        * @language zh_CN
        * 设置第一张贴图
        * @param texture 贴图
        * @version Egret 3.0
        * @platform Web,Native
        */
        splat_0_Texture: ITexture;
        /**
        * @language zh_CN
        * 设置第二张贴图
        * @param texture 贴图
        * @version Egret 3.0
        * @platform Web,Native
        */
        splat_1_Texture: ITexture;
        /**
        * @language zh_CN
        * 设置第三张贴图
        * @version Egret 3.0
        * @platform Web,Native
        * @param texture 贴图
        */
        splat_2_Texture: ITexture;
        /**
        * @language zh_CN
        * 设置第四张贴图
        * @param texture 贴图
        * @version Egret 3.0
        * @platform Web,Native
        */
        splat_3_Texture: ITexture;
        /**
        * @language zh_CN
        * 设置混合贴图
        * @param texture 贴图
        * @version Egret 3.0
        * @platform Web,Native
        */
        controlTexture: ITexture;
        /**
        * @private
        * @language zh_CN
        * @param time
        * @param delay
        * @param usage
        * @param materialData
        * @param geometry
        * @param context3DProxy
        * @param modeltransform
        * @param modeltransform
        * @param camera3D
        */
        upload(time: number, delay: number, usage: PassUsage, geometry: SubGeometry, context3DProxy: Context3DProxy, modeltransform: Matrix4_4, camera3D: Camera3D): void;
        /**
        * @language zh_CN
        * @private
        */
        update(time: number, delay: number, usage: PassUsage, geometry: SubGeometry, context3DProxy: Context3DProxy, modeltransform: Matrix4_4, camera3D: Camera3D): void;
        /**
        * @language zh_CN
        * @private
        */
        dispose(): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.FogMethod
    * @classdesc
    * Exponential Height Fog渲染方法。
    * 实现3种fog类型： line、exp、exp height
    * @version Egret 3.0
    * @platform Web,Native
    */
    class FogMethod extends MethodBase {
        private uniform_globalFog;
        private _fogColor;
        private _globalDensity;
        private _fogStartDistance;
        private _fogDistanceScale;
        private _height;
        private _fogAlpha;
        /**
        * @language zh_CN
        * 创建一个雾的渲染方法
        * @param fogType 雾的类型 line/exp/expHeightFog
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(fogType?: string);
        /**
        * @language zh_CN
        * 获取雾颜色
        * @returns 雾颜色 rgb  0xffffff
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置雾颜色
        * @param value 雾颜色 rgb  0xffffff
        * @version Egret 3.0
        * @platform Web,Native
        */
        fogColor: number;
        /**
        * @language zh_CN
        * 获取雾的全局浓度
        * @returns number 雾的全局浓度
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置雾的全局浓度
        * @param value 雾的全局浓度
        * @version Egret 3.0
        * @platform Web,Native
        */
        globalDensity: number;
        /**
        * @language zh_CN
        * 获取雾的开始距离
        * @returns number 雾的开始距离
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置雾的开始距离
        * @param value 雾的开始距离
        * @version Egret 3.0
        * @platform Web,Native
        */
        fogStartDistance: number;
        /**
        * @language zh_CN
        * 获取雾的高度值
        * @returns number 雾的高度值
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置雾的高度值
        * @param value 雾的高度值
        * @version Egret 3.0
        * @platform Web,Native
        */
        fogHeight: number;
        /**
        * @language zh_CN
        * 获取雾的Alpha值
        * @returns number 雾的Alpha值
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置雾的Alpha值
        * @param value 雾的Alpha值
        * @version Egret 3.0
        * @platform Web,Native
        */
        fogAlpha: number;
        /**
        * @private
        * @language zh_CN
        * @param time
        * @param delay
        * @param usage
        * @param materialData
        * @param geometry
        * @param context3DProxy
        * @param modeltransform
        * @param modeltransform
        * @param camera3D
        */
        upload(time: number, delay: number, usage: PassUsage, geometry: SubGeometry, context3DProxy: Context3DProxy, modeltransform: Matrix4_4, camera3D: Camera3D): void;
        /**
         * @language zh_CN
         * @private
         */
        update(time: number, delay: number, usage: PassUsage, geometry: SubGeometry, context3DProxy: Context3DProxy, modeltransform: Matrix4_4, camera3D: Camera3D): void;
        /**
         * @language zh_CN
         * @private
         */
        dispose(): void;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.UVRollMethod
    * @classdesc
    * 用来实现UV滚动效果的渲染方法
    * @version Egret 3.0
    * @platform Web,Native
    */
    class UVRollMethod extends MethodBase {
        private _uvRoll;
        private _speedU;
        private _speedV;
        private _time;
        private _start;
        /**
        * @private
        * @language zh_CN
        */
        constructor();
        /**
        * @language zh_CN
        * 获取UV u的滚动速度
        * @returns number u的滚动速度
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 用来UV u的滚动速度
        * @param value u的滚动速度
        * @version Egret 3.0
        * @platform Web,Native
        */
        speedU: number;
        /**
        * @language zh_CN
        * 获取UV v的滚动速度
        * @returns number v的滚动速度
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 用来UV v的滚动速度
        * @param value v的滚动速度
        * @version Egret 3.0
        * @platform Web,Native
        */
        speedV: number;
        /**
        * @language zh_CN
        * 开始播放uv动画
        * @param rest 如果为ture就是重置播放
        * @version Egret 3.0
        * @platform Web,Native
        */
        start(rest?: boolean): void;
        /**
        * @language zh_CN
        * 停止播放uv动画
        * @version Egret 3.0
        * @platform Web,Native
        */
        stop(): void;
        /**
        * @private
        * @language zh_CN
        * @param time
        * @param delay
        * @param usage
        * @param materialData
        * @param geometry
        * @param context3DProxy
        * @param modeltransform
        * @param modeltransform
        * @param camera3D
        */
        upload(time: number, delay: number, usage: PassUsage, geometry: SubGeometry, context3DProxy: Context3DProxy, modeltransform: Matrix4_4, camera3D: Camera3D): void;
        /**
        * @private
        * @language zh_CN
        */
        update(time: number, delay: number, usage: PassUsage, geometry: SubGeometry, context3DProxy: Context3DProxy, modeltransform: Matrix4_4, camera3D: Camera3D): void;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.UVSpriteSheetMethod
    * @classdesc
    * 用来实现UV精灵动画的渲染方法 。
    * 一整张贴图中用行列来分割帧动画，然后实现每帧播放。
    * row * col 是总帧数， frameNum是只播放的帧数.
    * @version Egret 3.0
    * @platform Web,Native
    */
    class UVSpriteSheetMethod extends MethodBase {
        private _uvSpriteSheet;
        private _uvRectangle;
        private _speed;
        private _time;
        private _numTime;
        private _start;
        private _frameNum;
        private _row;
        private _column;
        private _currentFrame;
        private frameList;
        private _change;
        /**
        * @language zh_CN
        * 创建一个UV精灵动画的渲染方法对象
        * @param frameNum  帧数量
        * @param row 行数
        * @param column 列数
        * @param numTime 播放总时间
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(frameNum: number, row: number, column: number, numTime: number);
        private caculate();
        /**
        * @language zh_CN
        * 获取动画播放总时间
        * @returns number 播放总时间
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置动画播放总时间
        * @param value 播放总时间
        * @version Egret 3.0
        * @platform Web,Native
        */
        numTime: number;
        /**
        * @language zh_CN
        * 获取动画帧数
        * @returns number  动画帧数
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置动画帧数
        * @param value 动画帧数
        * @version Egret 3.0
        * @platform Web,Native
        */
        frameNum: number;
        /**
        * @language zh_CN
        * 获取动画行数
        * @returns number  动画行数
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置动画行数
        * @param value 动画行数
        * @version Egret 3.0
        * @platform Web,Native
        */
        row: number;
        /**
        * @language zh_CN
        * 获取动画列数
        * @returns number  动画列数
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置动画列数
        * @param value 动画列数
        * @version Egret 3.0
        * @platform Web,Native
        */
        column: number;
        /**
        * @language zh_CN
        * 开始播放uv精灵动画
        * @param rest 如果为ture就是重置播放
        * @version Egret 3.0
        * @platform Web,Native
        */
        start(rest?: boolean): void;
        /**
        * @language zh_CN
        * 停止播放uv精灵动画
        * @version Egret 3.0
        * @platform Web,Native
        */
        stop(): void;
        /**
        * @private
        * @language zh_CN
        * @param time
        * @param delay
        * @param usage
        * @param materialData
        * @param geometry
        * @param context3DProxy
        * @param modeltransform
        * @param modeltransform
        * @param camera3D
        */
        upload(time: number, delay: number, usage: PassUsage, geometry: SubGeometry, context3DProxy: Context3DProxy, modeltransform: Matrix4_4, camera3D: Camera3D): void;
        /**
        * @private
        */
        update(time: number, delay: number, usage: PassUsage, geometry: SubGeometry, context3DProxy: Context3DProxy, modeltransform: Matrix4_4, camera3D: Camera3D): void;
    }
}
declare module egret3d {
    /**
    * @private
    */
    class LightmapMethod extends MethodBase {
        private texture;
        /**
         * @language zh_CN
         */
        constructor();
        /**
         * @language zh_CN
         * @param texture
         */
        lightTexture: ITexture;
        /**
           * @language zh_CN
           * @param time
           * @param delay
           * @param usage
           * @param materialData
           * @param geometry
           * @param context3DProxy
           * @param modeltransform
           * @param modeltransform
           * @param camera3D
           */
        upload(time: number, delay: number, usage: PassUsage, geometry: SubGeometry, context3DProxy: Context3DProxy, modeltransform: Matrix4_4, camera3D: Camera3D): void;
        active(time: number, delay: number, usage: PassUsage, geometry: SubGeometry, context3DProxy: Context3DProxy, modeltransform: Matrix4_4, camera3D: Camera3D): void;
    }
}
declare module egret3d {
    /**
    * @private
    * @class egret3d.MethodUsageData
    * @classdesc
    * 方法中需要用到的数据。
    * @version Egret 3.0
    * @platform Web,Native
    */
    class PassUsage {
        /**
         * @language zh_CN
         */
        uniform_1ivs: Array<GLSL.Uniform>;
        /**
         * @language zh_CN
         */
        uniform_1fvs: Array<GLSL.Uniform>;
        /**
         * @language zh_CN
         */
        uniform_2ivs: Array<GLSL.Uniform>;
        /**
         * @language zh_CN
         */
        uniform_2fvs: Array<GLSL.Uniform>;
        /**
         * @language zh_CN
         */
        uniform_3ivs: Array<GLSL.Uniform>;
        /**
         * @language zh_CN
         */
        uniform_3fvs: Array<GLSL.Uniform>;
        /**
         * @language zh_CN
         */
        uniform_4ivs: Array<GLSL.Uniform>;
        /**
         * @language zh_CN
         */
        uniform_4fvs: Array<GLSL.Uniform>;
        /**
         * @language zh_CN
         */
        attribute_position: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        attribute_normal: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        attribute_tangent: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        attribute_color: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        attribute_uv0: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        attribute_uv1: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        attribute_boneIndex: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        attribute_boneWeight: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        attribute_offset: GLSL.Attribute;
        attribute_billboardXYZ: GLSL.Attribute;
        attribute_lifecycle: GLSL.Attribute;
        attribute_direction: GLSL.Attribute;
        attribute_speed: GLSL.Attribute;
        attribute_startScale: GLSL.Attribute;
        attribute_endScale: GLSL.Attribute;
        attribute_startColor: GLSL.Attribute;
        attribute_endColor: GLSL.Attribute;
        attribute_rotate: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        attribute_acceleRotate: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        attribute_scale: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        attribute_acceleScale: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        /**
         * @language zh_CN
         */
        attribute_startSpaceLifeTime: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        varying_pos: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        varying_normal: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        varying_tangent: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        varying_color: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        varying_uv0: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        varying_uv1: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        varying_eyeNormal: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        varying_eyedir: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        TBN: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        uniform_ModelMatrix: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_ProjectionMatrix: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_ViewProjectionMatrix: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_ViewMatrix: GLSL.Uniform;
        /**
        * @language zh_CN
        */
        uniform_ModelViewMatrix: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_NormalMatrix: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_ShadowMatrix: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_eyepos: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_PoseMatrix: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_sceneWidth: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_sceneHeight: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_time: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_cameraMatrix: GLSL.Uniform;
        uniform_enableBillboardXYZ: GLSL.Uniform;
        uniform_startColor: GLSL.Uniform;
        uniform_endColor: GLSL.Uniform;
        uniform_startScale: GLSL.Uniform;
        uniform_endScale: GLSL.Uniform;
        uniform_startRot: GLSL.Uniform;
        uniform_endRot: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        sampler2DList: Array<GLSL.Sampler2D>;
        /**
         * @language zh_CN
         */
        sampler3DList: Array<GLSL.Sampler3D>;
        /**
         * @language zh_CN
         */
        uniform_materialSource: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_LightSource: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_lightModelSource: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_directLightSource: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_sportLightSource: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_pointLightSource: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_skyLightSource: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        program3D: Program3D;
        /**
         * @language zh_CN
         */
        vs_shader: Shader;
        /**
         * @language zh_CN
         */
        fs_shader: Shader;
        vertexShader: ShaderBase;
        fragmentShader: ShaderBase;
        maxDirectLight: number;
        maxSpotLight: number;
        maxPointLight: number;
        maxBone: number;
        directLightData: Float32Array;
        spotLightData: Float32Array;
        pointLightData: Float32Array;
        /**
         * @language zh_CN
         */
        dispose(): void;
    }
}
declare module egret3d {
    /**
     * @private
     * @class egret3d.MaterialData
     */
    class MaterialData {
        /**
        * @private
        * @language zh_CN
        * 材质类型数组。
        * @每个材质球可能会有很多种贴图方法，而这个是做为默认支持的材质方法的添加通道。要使用的方法
        * @default MaterialType.DIFFUSE
        * @version Egret 3.0
        * @platform Web,Native
        */
        textureMethodTypes: Array<number>;
        /**
        * @language zh_CN
        * 深度 pass usage data。
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 法线 pass usage 数据。
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * position pass usage 数据。
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * post pass usage 数据。
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 灯光 pass usage 数据。
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 阴影 pass usage 数据。
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 材质球ID。
        * <p> 一个合成材质球，可以多维合成，用于标记 subGeometry 所用的材质方法
        * @version Egret 3.0
        * @platform Web,Native
        */
        matID: number;
        /**
        * @language zh_CN
        * 渲染模式。
        * @default DrawMode.TRIANGLES
        * @version Egret 3.0
        * @platform Web,Native
        */
        drawMode: number;
        /**
        * @language zh_CN
        * 阴影贴图。
        * @version Egret 3.0
        * @platform Web,Native
        */
        shadowMapTexture: ITexture;
        /**
        * @language zh_CN
        * 漫反射贴图。
        * @version Egret 3.0
        * @platform Web,Native
        */
        diffuseTexture: ITexture;
        /**
        * @language zh_CN
        * 法线贴图。
        * @default CheckerboardTexture.texture
        * @version Egret 3.0
        * @platform Web,Native
        */
        normalTexture: ITexture;
        /**
        * @language zh_CN
        * 特效贴图。
        * @default CheckerboardTexture.texture
        * @version Egret 3.0
        * @platform Web,Native
        */
        specularTexture: ITexture;
        /**
        * @language zh_CN
        * 灯光贴图。
        * @default CheckerboardTexture.texture
        * @version Egret 3.0
        * @platform Web,Native
        */
        lightTexture: ITexture;
        /**
        * @language zh_CN
        * ao 贴图。
        * @default CheckerboardTexture.texture
        * @version Egret 3.0
        * @platform Web,Native
        */
        aoTexture: ITexture;
        /**
        * @language zh_CN
        * 环境贴图。
        * @default CheckerboardTexture.texture
        * @version Egret 3.0
        * @platform Web,Native
        */
        environmentTexture: ITexture;
        /**
        * @language zh_CN
        * mask 贴图。
        * @default CheckerboardTexture.texture
        * @version Egret 3.0
        * @platform Web,Native
        */
        blendMaskTexture: ITexture;
        /**
        * @language zh_CN
        * splat_0 贴图。
        * @default CheckerboardTexture.texture
        * @version Egret 3.0
        * @platform Web,Native
        */
        splat_0Tex: ITexture;
        /**
        * @language zh_CN
        * splat_1 贴图。
        * @default CheckerboardTexture.texture
        * @version Egret 3.0
        * @platform Web,Native
        */
        splat_1Tex: ITexture;
        /**
        * @language zh_CN
        * splat_2 贴图。
        * @default CheckerboardTexture.texture
        * @version Egret 3.0
        * @platform Web,Native
        */
        splat_2Tex: ITexture;
        /**
        * @language zh_CN
        * splat_3 贴图。
        * @default CheckerboardTexture.texture
        * @version Egret 3.0
        * @platform Web,Native
        */
        splat_3Tex: ITexture;
        /**
        * @language zh_CN
        * layer。
        * @default 0
        * @version Egret 3.0
        * @platform Web,Native
        */
        layer: number;
        /**
        * @language zh_CN
        * 投射阴影 。
        * @default false
        * @version Egret 3.0
        * @platform Web,Native
        */
        castShadow: boolean;
        /**
        * @language zh_CN
        * 接受阴影。
        * @default true
        * @version Egret 3.0
        * @platform Web,Native
        */
        acceptShadow: boolean;
        /**
        * @language zh_CN
        * 深度测试 。
        * @default true
        * @version Egret 3.0
        * @platform Web,Native
        */
        depthTest: boolean;
        /**
        * @language zh_CN
        * 是否平滑 。
        * @default true
        * @version Egret 3.0
        * @platform Web,Native
        */
        smooth: boolean;
        /**
        * @language zh_CN
        * 混合模式 。
        * @default BlendMode.NORMAL
        * @version Egret 3.0
        * @platform Web,Native
        */
        blendMode: BlendMode;
        /**
        * @language zh_CN
        * blend_src 值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        blend_src: number;
        /**
        * @language zh_CN
        * blend_dest 值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        blend_dest: number;
        /**
        * @language zh_CN
        * alphaBlending。
        * @default false
        * @version Egret 3.0
        * @platform Web,Native
        */
        alphaBlending: boolean;
        /**
        * @language zh_CN
        * ambientColor 值。
        * @default 0x0
        * @version Egret 3.0
        * @platform Web,Native
        */
        ambientColor: number;
        /**
        * @language zh_CN
        * diffuseColor 值。
        * @default 0xffffff
        * @version Egret 3.0
        * @platform Web,Native
        */
        diffuseColor: number;
        /**
        * @language zh_CN
        * specularColor 值。
        * @default 0xffffff
        * @version Egret 3.0
        * @platform Web,Native
        */
        specularColor: number;
        /**
        * @language zh_CN
        * shininess 值。
        * @default 8.0
        * @version Egret 3.0
        * @platform Web,Native
        */
        shininess: number;
        /**
        * @language zh_CN
        * cutAlpha 值。
        * @default 0.7
        * @version Egret 3.0
        * @platform Web,Native
        */
        cutAlpha: number;
        /**
        * @language zh_CN
        * 是否重复。
        * @default false
        * @version Egret 3.0
        * @platform Web,Native
        */
        repeat: boolean;
        /**
        * @language zh_CN
        * bothside 值。
        * @default false
        * @version Egret 3.0
        * @platform Web,Native
        */
        bothside: boolean;
        /**
        * @language zh_CN
        * alpha 值。
        * @default 1.0
        * @version Egret 3.0
        * @platform Web,Native
        */
        alpha: number;
        /**
        * @language zh_CN
        * 光照光滑程度，会影响反光的面积，强度。
        * @default 1.0
        * @version Egret 3.0
        * @platform Web,Native
        */
        roughness: number;
        /**
         * @language zh_CN
         * 反射颜色的强度值，出射光照的出射率。
         * @default 1.0
         * @version Egret 3.0
         * @platform Web,Native
         */
        albedo: number;
        /**
        * @language zh_CN
        * 高光亮度的强度值,设置较大的值会让高光部分极亮。
        * @default 1.0
        * @version Egret 3.0
        * @platform Web,Native
        */
        specularScale: number;
        normalScale: number;
        /**
        * @language zh_CN
        * uv 在贴图上的映射区域，值的范围限制在0.0~1.0之间。
        * @default 1.0
        * @version Egret 3.0
        * @platform Web,Native
        */
        uvRectangle: Rectangle;
        /**
        * @language zh_CN
        * ambientPower 值。
        * @default 1.0
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * diffusePower。
        * @default 1.0
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * normalPower 值。
        * @default 1.0
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 材质数据需要变化。
        * @default true
        * @version Egret 3.0
        * @platform Web,Native
        */
        materialDataNeedChange: boolean;
        /**
        * @language zh_CN
        * 纹理变化。
        * @default false
        * @version Egret 3.0
        * @platform Web,Native
        */
        textureChange: boolean;
        /**
        * @language zh_CN
        * cullFrontOrBack。
        * @default Egret3DDrive.BACK
        * @version Egret 3.0
        * @platform Web,Native
        */
        cullFrontOrBack: number;
        /**
         * @language zh_CN
         */
        materialSourceData: Float32Array;
        /**
         * @language zh_CN
         */
        directLightData: Float32Array;
        /**
         * @language zh_CN
         */
        sportLightData: Float32Array;
        /**
         * @language zh_CN
         */
        pointLightData: Float32Array;
        /**
        * @language zh_CN
        * 克隆方法。
        * @returns {MaterialData}
        * @version Egret 3.0
        * @platform Web,Native
        */
        clone(): MaterialData;
        /**
        * @language zh_CN
        * 销毁。
        * @version Egret 3.0
        * @platform Web,Native
        */
        dispose(): void;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.MaterialPass
    * @classdesc
    * 材质渲染pass 根据Mesh数据、模型的材质还有灯光数据的不同。
    * 以不同的渲染方法，会组成相应的shader内容，然后渲染出不同的效果。
    * @see egret3d.Mesh
    * @version Egret 3.0
    * @platform Web,Native
    */
    class MaterialPass {
        protected _passUsage: PassUsage;
        protected _materialData: MaterialData;
        protected _passChange: boolean;
        /**
        * @private
        */
        methodList: Array<MethodBase>;
        /**
        * @private
        */
        methodDatas: Array<MethodData>;
        /**
        * @private
        */
        vsShaderNames: Array<string>;
        /**
        * @private
        */
        fsShaderNames: Array<string>;
        /**
        * @private
        */
        lightGroup: LightGroup;
        /**
        * @private
        */
        constructor(materialData: MaterialData);
        /**
        * @language zh_CN
        * 增加渲染方法
        * @param method 渲染方法
        * @version Egret 3.0
        * @platform Web,Native
        */
        addMethod(method: MethodBase): void;
        /**
        * @language zh_CN
        * 移除渲染方法
        * @param method 渲染方法
        * @version Egret 3.0
        * @platform Web,Native
        */
        removeMethod(method: MethodBase): void;
        protected materialDataChange(): void;
        /**
        * @private
        */
        passInvalid(): void;
        /**
       * @language zh_CN
       * 重置纹理。
       * @version Egret 3.0
       * @platform Web,Native
       */
        protected resetTexture(context3DProxy: Context3DProxy): void;
        /**
        * @language zh_CN
        * @private
        * 初始化 UseMethod。
        * @version Egret 3.0
        * @platform Web,Native
        */
        initUseMethod(animation: IAnimation, geom: Geometry): void;
        /**
        * @private
        */
        upload(time: number, delay: number, context3DProxy: Context3DProxy, modeltransform: Matrix4_4, camera3D: Camera3D, animation: IAnimation, geometry: Geometry): void;
        /**
        * @private
        */
        draw(time: number, delay: number, context3DProxy: Context3DProxy, modeltransform: Matrix4_4, camera3D: Camera3D, subGeometry: SubGeometry, animtion: IAnimation): void;
    }
}
declare module egret3d {
    /**
    * @private
    */
    class ColorPass extends MaterialPass {
        /**
       * @language zh_CN
       * @private
       * 初始化 UseMethod。
       * @version Egret 3.0
       * @platform Web,Native
       */
        initUseMethod(animation: IAnimation, geom: Geometry): void;
    }
}
declare module egret3d {
    /**
    * @private
    */
    class DiffusePass extends MaterialPass {
        constructor(materialData: MaterialData);
        /**
        * @language zh_CN
        * @private
        * 初始化 UseMethod。
        * @version Egret 3.0
        * @platform Web,Native
        */
        initUseMethod(animation: IAnimation, geom: Geometry): void;
    }
}
declare module egret3d {
    /**
    * @private
    */
    class CubePass extends MaterialPass {
        constructor(materialData: MaterialData);
        /**
        * @language zh_CN
        * @private
        * 初始化 UseMethod。
        * @version Egret 3.0
        * @platform Web,Native
        */
        initUseMethod(animation: IAnimation, geom: Geometry): void;
    }
}
declare module egret3d {
    /**
    * @private
    */
    class PBRPass extends MaterialPass {
        constructor(materialData: MaterialData);
        /**
        * @language zh_CN
        * @private
        * 初始化 UseMethod。
        * @version Egret 3.0
        * @platform Web,Native
        */
        initUseMethod(animation: IAnimation, geom: Geometry): void;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.MaterialBase
    * @classdesc
    * 材质球共有的基础类型，封装了材质球共有的基础数据设置方法。</p>
    * 不同的渲染通道pass。</p>
    * @version Egret 3.0
    * @platform Web,Native
    */
    class MaterialBase {
        /**
         * @language zh_CN
         * @private
         * @version Egret 3.0
         * @platform Web,Native
         */
        diffusePass: MaterialPass;
        /**
         * @language zh_CN
         * @private
         * @version Egret 3.0
         * @platform Web,Native
         */
        materialData: MaterialData;
        private _lightGroup;
        /**
        * @language zh_CN
        * @class egret3d.MaterialBase
        * @classdesc
        * TerrainMaterial,TextureMaterial 的基类。</p>
        * 材质球共有的基础类型，封装了材质球共有的基础数据设置方法。</p>
        * 不同的渲染通道pass。</p>
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(materialData?: MaterialData);
        /**
         * @language zh_CN
         * @private
         * @version Egret 3.0
         * @platform Web,Native
         */
        setData(data: MaterialData): void;
        /**
         * @language zh_CN
         * @private
         * @version Egret 3.0
         * @platform Web,Native
         */
        getData(): MaterialData;
        protected initPass(): void;
        /**
         * @language zh_CN
         * 设置材质 lightGroup 。
         * 设置材质球接受的灯光组。
         * @param lightGroup LightGroup
         * @version Egret 3.0
         * @platform Web,Native
         */
        lightGroup: LightGroup;
        /**
        * @language zh_CN
        * 返回材质 shadowMapTexture。
        * 返回材质球的阴影贴图。
        * @returns ITexture 阴影贴图
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
         * @language zh_CN
         * 设置材质 shadowMapTexture 。
         * 设置材质球的阴影贴图。
         * @param texture ITexture
         * @version Egret 3.0
         * @platform Web,Native
         */
        shadowMapTexture: ITexture;
        /**
        * @language zh_CN
        * 返回材质 diffuseTexture。
        * 返回材质球的漫反射贴图。
        * @returns ITexture 漫反射贴图
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
         * @language zh_CN
         * 设置材质 diffuseTexture 。
         * 设置材质球的漫反射贴图。
         * @param texture ITexture
         * @version Egret 3.0
         * @platform Web,Native
         */
        diffuseTexture: ITexture;
        /**
         * @language zh_CN
         * 得到材质球的凹凸法线贴图。
         * @returns ITexture
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置材质 normalTexture 。
         * 设置材质球的凹凸法线贴图。
         * @param texture {TextureBase}
         * @version Egret 3.0
         * @platform Web,Native
         */
        normalTexture: ITexture;
        /**
         * @language zh_CN
         * 得到材质球的高光贴图。
         * @returns ITexture
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置材质 specularTexture 。
         * 设置材质球的高光贴图。
         * @param texture {TextureBase}
         * @version Egret 3.0
         * @platform Web,Native
         */
        specularTexture: ITexture;
        /**
        * @language zh_CN
        * 设置模型渲染模式。模型可以以顶点的方式渲染，线框渲染（会需要特定模型），三角形渲染
        * DrawMode.POINTS
        * rawMode.LINES
        * DrawMode.TRIANGLES
        * @default DrawMode.TRIANGLES
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置模型渲染模式。模型可以以顶点的方式渲染，线框渲染（会需要特定模型），三角形渲染
        * DrawMode.POINTS
        * rawMode.LINES
        * DrawMode.TRIANGLES
        * @default DrawMode.TRIANGLES
        * @version Egret 3.0
        * @platform Web,Native
        */
        drawMode: number;
        /**
        * @language zh_CN
        * 获取材质 diffuseColor
        * @returns number 材质 diffuseColor
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置材质 diffuseColor。
        * 设置 16 进制的漫反射颜色
        * @param color {Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        diffuseColor: number;
        /**
        * @language zh_CN
        * 获取材质 ambientColor
        * @returns number 材质 ambientColor
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置材质 ambientColor。
        * 设置 16 进制的环境光颜色
        * @param color {Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        ambientColor: number;
        /**
        * @language zh_CN
        * 获取材质 specularColor
        * @returns number 材质 specularColor
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置材质 specularColor。
        * 设置 16 进制的镜面光反射颜色
        * @param color {Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        specularColor: number;
        /**
         * @language zh_CN
         * 返回材质 alpha 值。
         * 返回 alpha 颜色
         * @returns {Number}
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置材质 alpha 值。
         * 设置 材质球的透明度，如果透明度小于1会自动启用 alphablending
         * @param value {Number}
         * @version Egret 3.0
         * @platform Web,Native
         */
        alpha: number;
        /**
         * @language zh_CN
         * 返回材质 shininess 值。
         * 返回材质 光滑程度 值越大，越不光滑
         * @returns {Number}
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置材质 shininess 值。
         * 设置材质球的 光滑程度 值越大，越不光滑
         * @param value {Number}
         * @version Egret 3.0
         * @platform Web,Native
         */
        shininess: number;
        /**
         * @language zh_CN
         * 返回材质 roughness 值。
         * @returns {Number}
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置材质 roughness 值。
         * 设置材质 镜面平滑程度 值。
         * @param value {Number}
         * @version Egret 3.0
         * @platform Web,Native
         */
        roughness: number;
        /**
        * @language zh_CN
        * 映射贴图UV坐标，设置此材质要显示使用贴图的区域，用uvRectangl 的方式映射
        * @param x {Number}
        * @param y {Number}
        * @param width {Number}
        * @param height {Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        uvRectangle(x: number, y: number, width: number, height: number): void;
        /**
         * @language zh_CN
         * 设置材质 ambientPower 值。
         * 设置材质 环境光颜色的强度 值。
         * @param value {Number}
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 返回材质 ambientPower 值。
         * 返回材质 环境光颜色的强度 值。
         * @returns {Number}
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置材质 diffusePower 值。
         * 设置材质 漫反射颜色的强度 值。
         * @param value {Number}
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 返回材质 diffusePower 值。
         * 返回材质 漫反射颜色的强度 值。
         * @returns {Number}
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置材质 normalPower 值。
         * 设置材质 法线的强度 值。
         * @param value {Number}
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 返回材质 normalPower 值。
         * 返回材质 法线的强度 值。
         * @returns {Number}
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置材质 castShadow 值。
         * 设置材质是否接受阴影，设置了之后必须要给 shadowmaping 的方法。
         * @param value {boolean}
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 返回材质 castShadow 值。
         * 返回材质 是否产生阴影 值。
         * @returns {boolean}
         * @version Egret 3.0
         * @platform Web,Native
         */
        castShadow: boolean;
        /**
        * @language zh_CN
        * 返回材质 acceptShadow 值。
        * 返回材质是否接受阴影，设置了之后必须要给 shadowmaping 的方法。
        * @returns {boolean}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
         * @language zh_CN
         * 设置材质 acceptShadow 值。
         * 设置材质是否是否产生阴影，设置了之后必须要给 shadowmaping 的方法。
         * @param value {boolean}
         * @version Egret 3.0
         * @platform Web,Native
         */
        acceptShadow: boolean;
        /**
        * @language zh_CN
        * 返回材质 smooth 值。
        * 返回 材质纹理的采样方式，是否抗锯齿，是否精细显示。的开关
        * @returns {boolean}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
         * @language zh_CN
         * 设置材质 smooth 值。
         * 材质纹理的采样方式，是否抗锯齿，是否精细显示。
         * @param value {boolean}
         * @version Egret 3.0
         * @platform Web,Native
         */
        smooth: boolean;
        /**
        * @language zh_CN
        * 返回材质 repeat 值。
        * 返回材质 是否进行纹理重复采样的方式开关。
        * @returns {boolean}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
         * @language zh_CN
         * 设置材质 repeat 值。
         * 设置材质 是否进行纹理重复采样的方式开关。
         * @param value {boolean}
         * @version Egret 3.0
         * @platform Web,Native
         */
        repeat: boolean;
        /**
        * @language zh_CN
        * 返回材质 bothside 值。
       * 返回是否显示双面的开关。
        * @returns {boolean}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置材质 bothside 值。
        * 设置材质是否显示双面的开关。
        * @param value {boolean}
        * @version Egret 3.0
        * @platform Web,Native
        */
        bothside: boolean;
        /**
         * @language zh_CN
         * 返回 cull 模式。
         * @returns {Number}
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
       * @language zh_CN
       * 设置 cull 模式 正面渲染三角形或者背面渲染三角形。
       * @param value {Number}
       * @version Egret 3.0
       * @platform Web,Native
       */
        cullMode: number;
        /**
         * @language zh_CN
         * 设置材质 blendMode 值。
         * 设置材质球的 混合模式可以参照 blendmode 中的值
         * @param value {BlendMode}
         * @version Egret 3.0
         * @platform Web,Native
         */
        blendMode: BlendMode;
        /**
         * @language zh_CN
         * @private
         * @param value {BlendMode}
         * @version Egret 3.0
         * @platform Web,Native
         */
        renderDiffusePass(time: number, delay: number, matID: number, context3DProxy: Context3DProxy, modeltransform: Matrix4_4, camera3D: Camera3D, subGeometry: SubGeometry, animtion: IAnimation): void;
        /**
         * @language zh_CN
         * @private
         * @param value {BlendMode}
         * @version Egret 3.0
         * @platform Web,Native
         */
        renderXRayPass(): void;
        /**
         * @language zh_CN
         * @private
         * @param value {BlendMode}
         * @version Egret 3.0
         * @platform Web,Native
         */
        renderOutlinePass(): void;
        /**
         * @language zh_CN
         * @private
         * @param value {BlendMode}
         * @version Egret 3.0
         * @platform Web,Native
         */
        renderNormalPass(): void;
        /**
         * @language zh_CN
         * @private
         * @param value {BlendMode}
         * @version Egret 3.0
         * @platform Web,Native
         */
        renderDepthPass(): void;
        /**
         * @language zh_CN
         * @private
         * @param value {BlendMode}
         * @version Egret 3.0
         * @platform Web,Native
         */
        renderPositionPass(): void;
        /**
         * @language zh_CN
         * @private
         * @param value {BlendMode}
         * @version Egret 3.0
         * @platform Web,Native
         */
        renderUVPass(): void;
        /**
         * @language zh_CN
         * @private
         * @param value {BlendMode}
         * @version Egret 3.0
         * @platform Web,Native
         */
        renderScendUVPass(): void;
        /**
         * @language zh_CN
         * @private
         * @param value {BlendMode}
         * @version Egret 3.0
         * @platform Web,Native
         */
        renderVertexColorPass(): void;
        /**
         * @language zh_CN
         * @private
         * @param value {BlendMode}
         * @version Egret 3.0
         * @platform Web,Native
         */
        renderLightingPass(): void;
    }
}
declare module egret3d {
    /**
    * @private
    */
    class ColorMaterial extends MaterialBase {
        constructor(color?: number);
        protected initPass(): void;
        color: number;
        alpha: number;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.TextureMaterial
    * @classdesc
    * 纹理材质。
    * 标准的贴图材质球，可以设置三种贴图， diffuse ， normal ， speclar 贴图
    * 材质球中默认不设置纹理，显示的黑白棋盘格
    * @version Egret 3.0
    * @platform Web,Native
    */
    class TextureMaterial extends MaterialBase {
        /**
         * @language zh_CN
         * 创建一个新的 TextureMaterial 对象。
         * @param texture 用来渲染的贴图，默认会给出一张棋盘格贴图
         * @param materialData 材质数据信息，可以不指定
         * @version Egret 3.0
         * @platform Web,Native
         */
        constructor(texture?: ITexture, materialData?: MaterialData);
        protected initMatPass(): void;
        /**
         * @language zh_CN
         * 克隆方法。
         * 将材质球克隆一份，公用shader着色器和贴图，不公用参数
         * @returns {TextureMaterial}
         * @version Egret 3.0
         * @platform Web,Native
         */
        clone(): TextureMaterial;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.CubeTextureMaterial
    * @classdesc
    * cube纹理材质。
    * 6张无缝连接的贴图，使一个cube的6个面贴上不同的贴图。
    *
    * @version Egret 3.0
    * @platform Web,Native
    */
    class CubeTextureMaterial extends MaterialBase {
        /**
         * @language zh_CN
         * 创建一个新的 CubeTextureMaterial 对象。
         * @param texture {CubeTexture}
         * @param materialData {MaterialData}
         * @version Egret 3.0
         * @platform Web,Native
         */
        constructor(texture?: CubeTexture, materialData?: MaterialData);
        protected initMatPass(): void;
        /**
         * @language zh_CN
         * 克隆方法。
         * 将材质球克隆一份，公用shader着色器和贴图，不公用参数
         * @returns {TextureMaterial}
         * @version Egret 3.0
         * @platform Web,Native
         */
        clone(): CubeTextureMaterial;
    }
}
declare module egret3d {
    class PBRMaterial extends MaterialBase {
        constructor(texture?: ITexture, materialData?: MaterialData);
        protected initMatPass(): void;
    }
}
declare module egret3d {
    /**
    * @private
    * @class egret3d.RenderBase
    * @classdesc
    * 渲染器基类
    */
    class RenderBase {
        protected _renderIndex: number;
        protected _numEntity: number;
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        update(time: number, delay: number, collect: CollectBase, camera: Camera3D): void;
        /**
        * @language zh_CN
        * 每帧渲染
        * @param time 当前时间
        * @param delay 每帧间隔时间
        * @param context3D 设备上下文
        * @param collect 渲染对象收集器
        * @param camera 渲染时的相机
        */
        draw(time: number, delay: number, context3D: Context3DProxy, collect: CollectBase, camera: Camera3D): void;
    }
}
declare module egret3d {
    /**
    * @private
    * @class egret3d.SphereSky
    * @classdesc
    * default render
    * 把所有需要渲染的对象，依次进行渲染
    * @version Egret 3.0
    * @platform Web,Native
    */
    class DefaultRender extends RenderBase {
        private _renderItem;
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        update(time: number, delay: number, collect: CollectBase, camera: Camera3D): void;
        /**
        * @language zh_CN
        * 把所有需要渲染的对象，依次进行渲染
        * @param time 当前时间
        * @param delay 每帧间隔时间
        * @param context3D 设备上下文
        * @param collect 渲染对象收集器
        * @param camera 渲染时的相机
        */
        draw(time: number, delay: number, context3D: Context3DProxy, collect: CollectBase, camera: Camera3D): void;
    }
}
declare module egret3d {
    enum ValueType {
        float = 0,
        vec2 = 1,
        vec3 = 2,
        vec4 = 3,
    }
    class ValueShape {
        valueType: ValueType;
        calculate(num: number, valueShape?: ValueShape): any;
    }
    class ConstValueShape extends ValueShape {
        valueType: ValueType;
        value: number;
        calculate(num: number): any;
    }
    class ConstRandomValueShape extends ValueShape {
        valueType: ValueType;
        min: number;
        max: number;
        calculate(num: number): any;
    }
    class Vec2ConstValueShape extends ValueShape {
        valueType: ValueType;
        minX: number;
        minY: number;
        calculate(num: number): any;
    }
    class Vec2ConstRandomValueShape extends ValueShape {
        valueType: ValueType;
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
        calculate(num: number): any;
    }
    class Vec3ConstValueShape extends ValueShape {
        valueType: ValueType;
        minX: number;
        minY: number;
        minZ: number;
        calculate(num: number): any;
    }
    class Vec3ConstRandomValueShape extends ValueShape {
        valueType: ValueType;
        minX: number;
        minY: number;
        minZ: number;
        maxX: number;
        maxY: number;
        maxZ: number;
        calculate(num: number): any;
    }
    class CubeVector3DValueShape extends ValueShape {
        valueType: ValueType;
        width: number;
        height: number;
        depth: number;
        /**
        * @language zh_CN
        * @param num
        * @param parameters [width, height, depth]
        * @returns Vector3D[]
        */
        calculate(num: number): any;
    }
    class PlaneValueShape extends ValueShape {
        valueType: ValueType;
        width: number;
        height: number;
        calculate(num: number): any;
    }
    class CylinderValueShape extends ValueShape {
        valueType: ValueType;
        radius: number;
        height: number;
        calculate(num: number): any;
    }
    class Value {
        private emitter;
        private static _instance;
        constructor();
        static calculate(count: number, valueShape: ValueShape): Array<any>;
        static getValues(count: number, valueType: ValueType, parameters: any): void;
    }
}
declare module egret3d {
    /**
    * @private
    */
    class ParticleEndNode extends AnimationNode {
        constructor();
        build(geometry: Geometry, count: number): void;
    }
}
declare module egret3d {
    /**
    * @private
    */
    class ParticleTime extends AnimationNode {
        /**
        * 发射器的生命周期 粒子发射器的持续时间
        */
        duration: number;
        /**
        * 所有单位粒子出生延迟时间
        */
        delay: ValueShape;
        /**
        * 所有单位粒子的生命周期
        */
        life: ValueShape;
        /**
        * 所有单位粒子的生命周期
        */
        rate: ValueShape;
        private attribute_time;
        private particleAnimationState;
        constructor();
        build(geometry: Geometry, count: number): void;
    }
}
declare module egret3d {
    /**
    * @private
    */
    class ParticlePosition extends AnimationNode {
        positions: ValueShape;
        private particleAnimationState;
        private attribute_offsetPosition;
        constructor();
        build(geometry: Geometry, count: number): void;
    }
}
declare module egret3d {
    /**
    * @private
    */
    class ParticleRotation extends AnimationNode {
        rotations: ValueShape;
        private attribute_time;
        private particleAnimationState;
        private rotationMat;
        constructor();
        build(geometry: Geometry, count: number): void;
    }
}
declare module egret3d {
    /**
    * @private
    */
    class ParticleScale extends AnimationNode {
        scale: ValueShape;
        private particleAnimationState;
        private scaleMat;
        constructor();
        build(geometry: Geometry, count: number): void;
    }
}
declare module egret3d {
    /**
    * @private
    */
    class ParticleFollowNode extends AnimationNode {
        follow: Object3D;
        private attribute_followPosition;
        private attribute_followRotation;
        private count;
        private particleAnimationState;
        constructor();
        build(geometry: Geometry, count: number): void;
        private delay;
        private life;
        private space;
        private id;
        private duration;
        private tempTime;
        private numSpace;
        private timeIndex;
        private currentTime;
        update(time: number, delay: number, geometry: Geometry, context: Context3DProxy): void;
    }
}
declare module egret3d {
    /**
    * @private
    */
    class ParticleUniformSpeedNode extends AnimationNode {
        speedShape: ValueShape;
        private attribute_uniformSpeed;
        constructor();
        build(geometry: Geometry, count: number): void;
    }
}
declare module egret3d {
    /**
    * @private
    */
    class ParticleAccelerationSpeedNode extends AnimationNode {
        speedShape: ValueShape;
        private attribute_accelerationSpeed;
        constructor();
        build(geometry: Geometry, count: number): void;
    }
}
declare module egret3d {
    /**
    * @private
    */
    class ParticleScaleByLifeNode extends AnimationNode {
        start: ValueShape;
        end: ValueShape;
        allChange: boolean;
        private attribute_Scale;
        constructor();
        build(geometry: Geometry, count: number): void;
    }
}
declare module egret3d {
    /**
    * @private
    */
    class ParticleRotationNode extends AnimationNode {
        rotation: ValueShape;
        private attribute_Rotation;
        constructor();
        build(geometry: Geometry, count: number): void;
    }
}
declare module egret3d {
    class ParticleAnimationState implements IAnimationState {
        name: string;
        animNodes: AnimationNode[];
        keyFrames: AnimationCurve[];
        numberOfVertices: number;
        vertexSizeInBytes: number;
        vertex_shaders: string[];
        fragment_shaders: string[];
        totalTime: number;
        maxSpace: number;
        maxParticles: number;
        /**
        * @language zh_CN
        * 动画节点容器
        */
        rate: number;
        /**
        * @language zh_CN
        * 动画节点容器
        */
        loop: number;
        /**
        * @language zh_CN
        * 动画节点容器
        */
        duration: number;
        /**
        * @language zh_CN
        * 动画节点容器
        */
        reverse: number;
        followTarget: Object3D;
        constructor(name: string);
        /**
         * @language zh_CN
         * 添加动画功能节点
         * 添加继承 animNodeBase 功能节点 例如粒子的 加速度功能节点，匀速功能节点
         * @param node 节点对象
         */
        addNode(node: AnimationNode): void;
        /**
        * @language zh_CN
        * 移除动画功能节点
        * 删除指定的动画功能节点，但是不能动态删除，需要进行 功能重置
        * @param node 节点对象
        */
        removeNode(node: AnimationNode): void;
        /**
        * @language zh_CN
        * 计算节点
        * @private
        */
        calculate(geometry: Geometry): void;
        fill(geometry: Geometry, maxParticle: number): void;
        update(time: number, delay: number, geometry: Geometry, context: Context3DProxy): void;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.ParticleAnimation
    * @classdesc
    * 粒子动画
    * @version Egret 3.0
    * @platform Web,Native
    */
    class ParticleAnimation extends EventDispatcher implements IAnimation {
        emit: ParticleEmitter;
        particleAnimationState: ParticleAnimationState;
        /**
        * @language zh_CN
        * 总时间
        */
        time: number;
        /**
        * @language zh_CN
        * 帧间隔时间
        */
        delay: number;
        /**
        * @language zh_CN
        * 播放速度
        */
        speed: number;
        /**
        * @language zh_CN
        * 获取动画列表
        * @return 动画名称数组
        */
        animStateNames: string[];
        /**
        * @language zh_CN
        * 获取动画节点
        * @return 动画节点数组
        */
        animStates: IAnimationState[];
        /**
        * @language zh_CN
        * 动画节点容器
        */
        private _play;
        /**
        * @language zh_CN
        * 构造函数
        * @param nodeCollection 动画节点容器对象
        */
        constructor();
        /**
        * @language zh_CN
        * 更新调度
        * @param time 总时间
        * @param delay 帧间隔时间
        */
        update(time: number, delay: number, geometry: Geometry, context: Context3DProxy): void;
        /**
        * @language zh_CN
        * 播放动画
        * @param animName 动画名
        * @param speed 播放速度
        */
        play(animName?: string, speed?: number): void;
        /**
        * @language zh_CN
        * 停止播放
        */
        stop(): void;
        /**
        * @language zh_CN
        * 是否正在播放中
        * @return 是否播放中
        */
        isPlay(): boolean;
        /**
        * @language zh_CN
        * 添加动画状态
        * @return 动画名称列表
        */
        addAnimState(animState: IAnimationState): void;
        /**
        * @language zh_CN
        * 上传动画状态
        * @return 动画名称列表
        */
        removeAnimState(animState: IAnimationState): void;
        /**
        * @language zh_CN
        * 获取动画列表
        * @return 动画名称列表
        */
        getAnimList(): string[];
        /**
        * @language zh_CN
        * 获取动画节点
        * @return 动画节点数组
        */
        getAnimNode(): AnimationNode[];
        /**
        * @language zh_CN
        * 克隆新的ParticleAnimation对象;
        * @return 新的ParticleAnimation对象
        */
        clone(): IAnimation;
    }
}
declare module egret3d {
    /**
   * @class egret3d.ParticleEmitter
   * @classdesc
   * 粒子发射器 有多种发射器类型 还分为两种粒子类型，重力粒子只朝一个方向运动，范围粒子是随范围运动
   * @see egret3d.Mesh
   * @version Egret 3.0
   * @platform Web,Native
   */
    class ParticleEmitter extends Mesh {
        private particleGeometryShape;
        private particleAnimation;
        private _isChangeBuild;
        private _particleFollowNode;
        private _particleState;
        /**
        * @language zh_CN
        * 构造函数
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(geo?: Geometry, material?: MaterialBase, maxParticles?: number);
        followTarget: Object3D;
        play(): void;
        protected initlize(): void;
        private initMainAnimNode();
        private initOtherAnimNode();
        /**
        * @language zh_CN
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(time: number, delay: number, camera: Camera3D): void;
        /**
        * @private
        */
        renderDiffusePass(time: number, delay: number, context3DProxy: Context3DProxy, camera3D: Camera3D): void;
    }
}
declare module egret3d {
    /**
    * @private
    */
    class Scene3D {
        private _tree;
        private _root;
        /**
        * @language zh_CN
        * 四叉树根对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        private _quad;
        constructor();
        /**
        * @language zh_CN
        * 返回渲染根节点
        * 返回渲染场景的 scene3D
        * @returns Object3D
        * @version Egret 3.0
        * @platform Web,Native
        */
        root: Object3D;
        /**
        * @language zh_CN
        * 返回剖分场景四叉树根信息
        * @returns QuadRoot
        * @version Egret 3.0
        * @platform Web,Native
        */
        quad: QuadRoot;
        /**
        * @language zh_CN
        * 将一个 Object3D 实例添加到 Scene3D 实例中。
        * 将一个 Object3D 实例添加到 Scene3D 实例中。参与scene3D中的显示树优化，并且即时渲染出来
        * @param  child3D {Object3D}
        * @version Egret 3.0
        * @platform Web,Native
        */
        addChild3D(child3D: Object3D): void;
        removeChild3D(child3D: Object3D): void;
        update(): void;
        infrustumList(camera: Camera3D): Object3D[];
        /**
        * @language zh_CN
        * 根据当前场景的节点分布情况，生成四叉树
        * @version Egret 3.0
        * @platform Web,Native
        */
        createQuadTree(): void;
        /**
        * @language zh_CN
        * 遍历一个Object3D及其child节点，如果能够进入视锥体，则放入返回的列表中
        * @param  nodes 用于返回Quad元素结果
        * @param  obj   待遍历的对象
        * @returns Array<IQuadNode>
        * @version Egret 3.0
        * @platform Web,Native
        */
        private collectQuadList(nodes, obj);
    }
}
declare module egret3d {
    /**
    * @private
    * @class egret3d.TreeBase
    * @classdesc
    * @version Egret 3.0
    * @platform Web,Native
    */
    class TreeBase {
        private _root;
        private _searchList;
        constructor(object3D: Object3D);
        infrustumList(camera: Camera3D): Object3D[];
    }
}
declare module egret3d {
    /**
    * @private
    * @class egret3d.ITexture
    * @classdesc
    */
    interface ITexture {
        useMipmap: boolean;
        smooth: boolean;
        width: number;
        height: number;
        texture2D: Texture2D;
        texture3D: Texture3D;
        upload(context3D: Context3DProxy): any;
        uploadForcing(context3D: Context3DProxy): any;
    }
}
declare module egret3d {
    /**
    * @class egret3d.ImageTexture
    * @classdesc
    * ImageTexture 类为 图像贴图
    *
    * 图像贴图用于封装 HTMLImageElement（网页图像元素）到引擎内部可使用的Texture2D对象, </p>
     * HTMLImageElement 可通过内嵌HTML文件中获取。</p>
    *
     *
    * 示例：
    * 假设html中已有 &lt;img id="t1" src="xxx.png" /&gt;
    * <pre>
    * var img: HTMLImageElement = <HTMLImageElement>document.getElementById("t1");
    * var imageTexture: egret3d.ImageTexture = new egret3d.ImageTexture(img);
     * </pre>
    * @version Egret 3.0
    * @platform Web,Native
    */
    class ImageTexture implements ITexture {
        /**
         * @language zh_CN
         * 贴图数据
         *
         */
        imageData: HTMLImageElement;
        width: number;
        height: number;
        texture2D: Texture2D;
        texture3D: Texture3D;
        /**
       需要缓存这个值，看看是否优化
        */
        private _useMipmap;
        private _smooth;
        /**
         * @language zh_CN
         * 构造函数
         * @param img HTMLImageElement（网页图像元素）
         */
        constructor(img: HTMLImageElement);
        /**
         * @language zh_CN
         * 获取贴图是否使用 mipmap , mipmap为一个贴图的LOD层级贴图。例如（1024*1024的贴图，往下就会自动生成 512*512,256*256,128*128,64*64,32*32,16*16,8*8,4*4,2*2,1*1）
         * @param img HTMLImageElement（网页图像元素）
         */
        /**
         * @language zh_CN
         * 设置贴图是否使用 mipmap , mipmap为一个贴图的LOD层级贴图。例如（1024*1024的贴图，往下就会自动生成 512*512,256*256,128*128,64*64,32*32,16*16,8*8,4*4,2*2,1*1）
         * @param img HTMLImageElement（网页图像元素）
         */
        useMipmap: boolean;
        /**
         * @language zh_CN
         * 获取贴图是否使用 smooth
         * @param img HTMLImageElement（网页图像元素）
         */
        /**
         * @language zh_CN
         * 设置贴图是否使用 smooth
         * @param img HTMLImageElement（网页图像元素）
         */
        smooth: boolean;
        /**
         * @language zh_CN
         * 上传贴图数据给GPU
         * @param context3D
         */
        upload(context3D: Context3DProxy): void;
        /**
         * @language zh_CN
         * 强制上传贴图数据给GPU，强制要求贴图更新。
         * 在video 贴图类型需要立即改变显卡中的贴图内存
         * @param context3D
         */
        uploadForcing(context3D: Context3DProxy): void;
    }
}
declare module egret3d {
    /**
     * @private
     */
    class DDSTexture implements ITexture {
        width: number;
        height: number;
        texture2D: Texture2D;
        texture3D: Texture3D;
        internalFormat: InternalFormat;
        colorFormat: number;
        mimapData: Array<MipmapData>;
        private _smooth;
        /**
         * @language zh_CN
         * 获取贴图是否使用 mipmap , mipmap为一个贴图的LOD层级贴图。例如（1024*1024的贴图，往下就会自动生成 512*512,256*256,128*128,64*64,32*32,16*16,8*8,4*4,2*2,1*1）
         * @param img HTMLImageElement（网页图像元素）
         */
        /**
        * @language zh_CN
        * 设置贴图是否使用 mipmap , mipmap为一个贴图的LOD层级贴图。例如（1024*1024的贴图，往下就会自动生成 512*512,256*256,128*128,64*64,32*32,16*16,8*8,4*4,2*2,1*1）
        * @param img HTMLImageElement（网页图像元素）
        */
        useMipmap: boolean;
        /**
         * @language zh_CN
         * 获取贴图是否使用 smooth
         * @param img HTMLImageElement（网页图像元素）
         */
        /**
  * @language zh_CN
  * 设置贴图是否使用 smooth
  * @param img HTMLImageElement（网页图像元素）
  */
        smooth: boolean;
        upload(context3D: Context3DProxy): void;
        uploadForcing(context3D: Context3DProxy): void;
    }
}
declare module egret3d {
    /**
     * @private
     */
    class TGATexture implements ITexture {
        width: number;
        height: number;
        texture2D: Texture2D;
        texture3D: Texture3D;
        internalFormat: InternalFormat;
        colorFormat: number;
        mimapData: Array<MipmapData>;
        private _smooth;
        /**
         * @language zh_CN
         * 获取贴图是否使用 mipmap , mipmap为一个贴图的LOD层级贴图。例如（1024*1024的贴图，往下就会自动生成 512*512,256*256,128*128,64*64,32*32,16*16,8*8,4*4,2*2,1*1）
         * @param img HTMLImageElement（网页图像元素）
         */
        /**
        * @language zh_CN
        * 设置贴图是否使用 mipmap , mipmap为一个贴图的LOD层级贴图。例如（1024*1024的贴图，往下就会自动生成 512*512,256*256,128*128,64*64,32*32,16*16,8*8,4*4,2*2,1*1）
        * @param img HTMLImageElement（网页图像元素）
        */
        useMipmap: boolean;
        /**
         * @language zh_CN
         * 获取贴图是否使用 smooth
         * @param img HTMLImageElement（网页图像元素）
         */
        /**
  * @language zh_CN
  * 设置贴图是否使用 smooth
  * @param img HTMLImageElement（网页图像元素）
  */
        smooth: boolean;
        upload(context3D: Context3DProxy): void;
        uploadForcing(context3D: Context3DProxy): void;
    }
}
declare module egret3d {
    /**
     * @private
     */
    class PVRTexture implements ITexture {
        width: number;
        height: number;
        texture2D: Texture2D;
        texture3D: Texture3D;
        private _smooth;
        /**
         * @language zh_CN
         * 获取贴图是否使用 mipmap , mipmap为一个贴图的LOD层级贴图。例如（1024*1024的贴图，往下就会自动生成 512*512,256*256,128*128,64*64,32*32,16*16,8*8,4*4,2*2,1*1）
         * @param img HTMLImageElement（网页图像元素）
         */
        /**
         * @language zh_CN
         * 设置贴图是否使用 mipmap , mipmap为一个贴图的LOD层级贴图。例如（1024*1024的贴图，往下就会自动生成 512*512,256*256,128*128,64*64,32*32,16*16,8*8,4*4,2*2,1*1）
         * @param img HTMLImageElement（网页图像元素）
        */
        useMipmap: boolean;
        /**
         * @language zh_CN
         * 获取贴图是否使用 smooth
         * @param img HTMLImageElement（网页图像元素）
         */
        /**
  * @language zh_CN
  * 设置贴图是否使用 smooth
  * @param img HTMLImageElement（网页图像元素）
  */
        smooth: boolean;
        upload(context3D: Context3DProxy): void;
        uploadForcing(context3D: Context3DProxy): void;
    }
}
declare module egret3d {
    /**
     * @class egret3d.CubeTexture
     * @classdesc
     * CubeTexture 类为天空贴图
     *
     * 天空贴图用于Sky类使用，其内部是将6张HTMLImageElement（网页图片元素）封装到CubeTexture对象，CubeTexture为引擎内部使用对象。</p>
     *
     * 示例：</p>
     * 假设html中已有</p>
     <pre>
     <img id="t1" src="image_front.png" />
     <img id="t2" src="image_back.png" />
     <img id="t3" src="image_left.png" />
     <img id="t4" src="image_right.png" />
     <img id="t5" src="image_up.png" />
     <img id="t6" src="image_down.png" />
     </pre>
     使用示例：</p>
     <pre>
     var cubeTexture: CubeTexture = CubeTexture.createCubeTexture(
     <HTMLImageElement>document.getElementById("t1"),
     <HTMLImageElement>document.getElementById("t2"),
     <HTMLImageElement>document.getElementById("t3"),
     <HTMLImageElement>document.getElementById("t4"),
     <HTMLImageElement>document.getElementById("t5"),
     <HTMLImageElement>document.getElementById("t6")
     );
     </pre>
     * @see egret3d.Sky
     * @version Egret 3.0
     * @platform Web,Native
     */
    class CubeTexture implements ITexture {
        private image_front;
        private image_back;
        private image_left;
        private image_right;
        private image_up;
        private image_down;
        texture2D: Texture2D;
        texture3D: Texture3D;
        width: number;
        height: number;
        private _smooth;
        /**
         * @language zh_CN
         * 构造函数
         * @param image_front 前部HTMLImageElement图片元素
         * @param image_back 背部HTMLImageElement图片元素
         * @param image_left 左部HTMLImageElement图片元素
         * @param image_right 右部HTMLImageElement图片元素
         * @param image_up 顶部HTMLImageElement图片元素
         * @param image_down 底部HTMLImageElement图片元素
         */
        constructor(image_front: Texture2D, image_back: Texture2D, image_left: Texture2D, image_right: Texture2D, image_up: Texture2D, image_down: Texture2D);
        /**
         * @language zh_CN
         * 创建CubuTexture
         * @param image_front 前部HTMLImageElement图片元素
         * @param image_back 背部HTMLImageElement图片元素
         * @param image_left 左部HTMLImageElement图片元素
         * @param image_right 右部HTMLImageElement图片元素
         * @param image_up 顶部HTMLImageElement图片元素
         * @param image_down 底部HTMLImageElement图片元素
         */
        static createCubeTexture(image_front: HTMLImageElement, image_back: HTMLImageElement, image_left: HTMLImageElement, image_right: HTMLImageElement, image_up: HTMLImageElement, image_down: HTMLImageElement): CubeTexture;
        /**
         * @language zh_CN
         * 获取贴图是否使用 mipmap , mipmap为一个贴图的LOD层级贴图。例如（1024*1024的贴图，往下就会自动生成 512*512,256*256,128*128,64*64,32*32,16*16,8*8,4*4,2*2,1*1）
         * @param img HTMLImageElement（网页图像元素）
         */
        /**
        * @language zh_CN
        * 设置贴图是否使用 mipmap , mipmap为一个贴图的LOD层级贴图。例如（1024*1024的贴图，往下就会自动生成 512*512,256*256,128*128,64*64,32*32,16*16,8*8,4*4,2*2,1*1）
        * @param img HTMLImageElement（网页图像元素）
        */
        useMipmap: boolean;
        /**
         * @language zh_CN
         * 获取贴图是否使用 smooth
         * @param img HTMLImageElement（网页图像元素）
         */
        /**
          * @language zh_CN
          * 设置贴图是否使用 smooth
          * @param img HTMLImageElement（网页图像元素）
          */
        smooth: boolean;
        /**
         * @language zh_CN
         * 上传贴图数据给GPU
         * 更新上传 cube 贴图纹理到GPU 现存中缓存起来
         * @param context3D
         */
        upload(context3D: Context3DProxy): void;
        uploadForcing(context3D: Context3DProxy): void;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.CheckerboardTexture
    * @classdesc
    * CheckerboardTexture 类为 棋盘格纹理类</p>
    *
    * 棋盘格纹理为黑白间隔色块组成的一张纹理，主要用于判别模型UV的正确性，若某模型UV值不正确，其纹理表现必定乱序不规整。</p>
    * 使用示例:</p>
     <pre>
    var material: egret3d.TextureMaterial = new egret3d.TextureMaterial(egret3d.CheckerboardTexture.texture );
    var mesh: egret3d.Mesh = new egret3d.Mesh(new egret3d.CubeGeometry(), material);
     </pre>
    *
    * @version Egret 3.0
    * @platform Web,Native
    * @includeExample texture/CheckerboardTexture.ts
    */
    class CheckerboardTexture implements ITexture {
        /**
        * @private
        * @language zh_CN
        * 公用棋盘格实例对象
        */
        static texture: CheckerboardTexture;
        private _pixelArray;
        width: number;
        height: number;
        texture2D: Texture2D;
        texture3D: Texture3D;
        private _smooth;
        private _useMipmap;
        /**
         * @language zh_CN
         * 构造函数
         */
        constructor();
        /**
         * @language zh_CN
         * 获取贴图是否使用 mipmap , mipmap为一个贴图的LOD层级贴图。例如（1024*1024的贴图，往下就会自动生成 512*512,256*256,128*128,64*64,32*32,16*16,8*8,4*4,2*2,1*1）
         * @param img HTMLImageElement（网页图像元素）
         */
        /**
        * @language zh_CN
        * 设置贴图是否使用 mipmap , mipmap为一个贴图的LOD层级贴图。例如（1024*1024的贴图，往下就会自动生成 512*512,256*256,128*128,64*64,32*32,16*16,8*8,4*4,2*2,1*1）
        * @param img HTMLImageElement（网页图像元素）
        */
        useMipmap: boolean;
        /**
         * @language zh_CN
         * 获取贴图是否使用 smooth
         * @param img HTMLImageElement（网页图像元素）
         */
        /**
          * @language zh_CN
          * 设置贴图是否使用 smooth
          * @param img HTMLImageElement（网页图像元素）
          */
        smooth: boolean;
        /**
         * @language zh_CN
         * 上传贴图数据给GPU
         * @param context3D
         */
        upload(context3D: Context3DProxy): void;
        private buildCheckerboard();
        uploadForcing(context3D: Context3DProxy): void;
    }
}
declare module egret3d {
    /**
     * @private
     * @class egret3d.VideoTexture
     * @classdesc
     * VideoTexture 使用 Video 标签采集 video 视频 </p>
     * VideoTexture 仅且暂时只能在pc上正常使用，移动端需要直接与用户交互才可正常生成播放</p>
     * 需要设置贴图的宽度和高度。必须为2的N次</p>
     * @version Egret 3.0
     * @platform Web,Native
     */
    class VideoTexture implements ITexture {
        private video;
        private canUpdataTexture;
        private context;
        private tmpCanvas;
        width: number;
        height: number;
        texture2D: Texture2D;
        texture3D: Texture3D;
        private _smooth;
        constructor(width?: number, height?: number);
        private loadReady();
        /**
        * @language zh_CN
        * @private
        * 获取贴图是否使用 mipmap , mipmap为一个贴图的LOD层级贴图。例如（1024*1024的贴图，往下就会自动生成 512*512,256*256,128*128,64*64,32*32,16*16,8*8,4*4,2*2,1*1）
        * @param img HTMLImageElement（网页图像元素）
        */
        /**
        * @language zh_CN
        * @private
        * 设置贴图是否使用 mipmap , mipmap为一个贴图的LOD层级贴图。例如（1024*1024的贴图，往下就会自动生成 512*512,256*256,128*128,64*64,32*32,16*16,8*8,4*4,2*2,1*1）
        * @param img HTMLImageElement（网页图像元素）
        */
        useMipmap: boolean;
        /**
         * @language zh_CN
         * 获取贴图是否使用 smooth
         * @param img HTMLImageElement（网页图像元素）
         */
        /**
  * @language zh_CN
  * 设置贴图是否使用 smooth
  * @param img HTMLImageElement（网页图像元素）
  */
        smooth: boolean;
        /**
        * @language zh_CN
        * 返回 视频链接
        * 视频的链接地址，只要是h5 支持的格式都支持， 例如:ogv,mp4,avi
        */
        /**
         * @language zh_CN
         * 设置 视频链接
         * 设置 视频的链接地址，只要是h5 支持的格式都支持， 例如:ogv,mp4,avi
         * @param src 视频格式的链接地址
         */
        source: string;
        /**
        * @language zh_CN
        * 播放视频
        * 当视频缓冲好之后才能正常播放视频
        */
        play(): void;
        /**
        * @language zh_CN
        * 暂停视频
        * 控制视频的播放暂停状态
        */
        pause(): void;
        /**
         * @language zh_CN
         * 上传贴图数据给GPU
         * 将video的视频数据实时传输到GPU上
         * @param context3D
        */
        upload(context3D: Context3DProxy): void;
        uploadForcing(context3D: Context3DProxy): void;
    }
}
declare module egret3d {
    class RenderTargetTexture implements ITexture {
        useMipmap: boolean;
        smooth: boolean;
        width: number;
        height: number;
        texture2D: Texture2D;
        texture3D: Texture3D;
        upload(context3D: Context3DProxy): void;
        uploadForcing(context3D: Context3DProxy): void;
    }
}
declare module egret3d {
    /**
     * Endian 类中包含一些值，它们表示用于表示多字节数字的字节顺序。
     * 字节顺序为 bigEndian（最高有效字节位于最前）或 littleEndian（最低有效字节位于最前）。
     * @class egret3d.Endian
     * @classdesc
     */
    class Endian {
        /**
         * 表示多字节数字的最低有效字节位于字节序列的最前面。
         * 十六进制数字 0x12345678 包含 4 个字节（每个字节包含 2 个十六进制数字）。最高有效字节为 0x12。最低有效字节为 0x78。（对于等效的十进制数字 305419896，最高有效数字是 3，最低有效数字是 6）。
         * @constant {string} egret.Endian.LITTLE_ENDIAN
         */
        static LITTLE_ENDIAN: string;
        /**
         * 表示多字节数字的最高有效字节位于字节序列的最前面。
         * 十六进制数字 0x12345678 包含 4 个字节（每个字节包含 2 个十六进制数字）。最高有效字节为 0x12。最低有效字节为 0x78。（对于等效的十进制数字 305419896，最高有效数字是 3，最低有效数字是 6）。
         * @constant {string} egret.Endian.BIG_ENDIAN
         */
        static BIG_ENDIAN: string;
    }
    /**
     * @class egret.ByteArray
     * @classdesc
     * ByteArray 类提供用于优化读取、写入以及处理二进制数据的方法和属性。
     * 注意：ByteArray 类适用于需要在字节层访问数据的高级 开发人员。
     */
    class ByteArray {
        private static SIZE_OF_BOOLEAN;
        private static SIZE_OF_INT8;
        private static SIZE_OF_INT16;
        private static SIZE_OF_INT32;
        private static SIZE_OF_UINT8;
        private static SIZE_OF_UINT16;
        private static SIZE_OF_UINT32;
        private static SIZE_OF_FLOAT32;
        private static SIZE_OF_FLOAT64;
        private BUFFER_EXT_SIZE;
        private data;
        private _position;
        private write_position;
        /**
         * 更改或读取数据的字节顺序；egret.Endian.BIG_ENDIAN 或 egret.Endian.LITTLE_ENDIAN。
         * @default egret.Endian.BIG_ENDIAN
         * @member egret.ByteArray#endian
         */
        endian: string;
        /**
         * 创建一个 egret.ByteArray 对象以引用指定的 ArrayBuffer 对象
         * @param buffer {ArrayBuffer} 数据源
         */
        constructor(buffer?: ArrayBuffer);
        private _setArrayBuffer(buffer);
        /**
         * @private
         */
        buffer: ArrayBuffer;
        /**
         * @private
         */
        dataView: DataView;
        /**
         * @private
         */
        uncompress(type?: string): void;
        /**
         * @private
         */
        bufferOffset: number;
        /**
         * 将文件指针的当前位置（以字节为单位）移动或返回到 ByteArray 对象中。下一次调用读取方法时将在此位置开始读取，或者下一次调用写入方法时将在此位置开始写入。
         * @member {number} egret.ByteArray#position
         */
        position: number;
        /**
         * ByteArray 对象的长度（以字节为单位）。
         * 如果将长度设置为大于当前长度的值，则用零填充字节数组的右侧。
         * 如果将长度设置为小于当前长度的值，将会截断该字节数组。
         * @member {number} egret.ByteArray#length
         */
        length: number;
        /**
         * 可从字节数组的当前位置到数组末尾读取的数据的字节数。
         * 每次访问 ByteArray 对象时，将 bytesAvailable 属性与读取方法结合使用，以确保读取有效的数据。
         * @member {number} egret.ByteArray#bytesAvailable
         */
        bytesAvailable: number;
        /**
         * 清除字节数组的内容，并将 length 和 position 属性重置为 0。
         * @method egret.ByteArray#clear
         */
        clear(): void;
        /**
         * 从字节流中读取布尔值。读取单个字节，如果字节非零，则返回 true，否则返回 false
         * @returns 如果字节不为零，则返回 true，否则返回 false
         * @method egret.ByteArray#readBoolean
         */
        readBoolean(): boolean;
        /**
         * 从字节流中读取带符号的字节
         * @returns 介于 -128 和 127 之间的整数
         * @method egret.ByteArray#readByte
         */
        readByte(): number;
        /**
         * 从字节流中读取 length 参数指定的数据字节数。从 offset 指定的位置开始，将字节读入 bytes 参数指定的 ByteArray 对象中，并将字节写入目标 ByteArray 中
         * @param bytes 要将数据读入的 ByteArray 对象
         * @param offset bytes 中的偏移（位置），应从该位置写入读取的数据
         * @param length 要读取的字节数。默认值 0 导致读取所有可用的数据
         * @method egret.ByteArray#readBytes
         */
        readBytes(bytes: ByteArray, offset?: number, length?: number): void;
        /**
         * 从字节流中读取一个 IEEE 754 双精度（64 位）浮点数
         * @returns 双精度（64 位）浮点数
         * @method egret.ByteArray#readDouble
         */
        readDouble(): number;
        /**
         * 从字节流中读取一个 IEEE 754 单精度（32 位）浮点数
         * @returns 单精度（32 位）浮点数
         * @method egret.ByteArray#readFloat
         */
        readFloat(): number;
        /**
         * 从字节流中读取一个带符号的 32 位整数
         * @returns 介于 -2147483648 和 2147483647 之间的 32 位带符号整数
         * @method egret.ByteArray#readFloat
         */
        readInt(): number;
        /**
         * 使用指定的字符集从字节流中读取指定长度的多字节字符串
         * @param length 要从字节流中读取的字节数
         * @param charSet 表示用于解释字节的字符集的字符串。可能的字符集字符串包括 "shift-jis"、"cn-gb"、"iso-8859-1"”等
         * @returns UTF-8 编码的字符串
         * @method egret.ByteArray#readMultiByte
         */
        /**
         * 从字节流中读取一个带符号的 16 位整数
         * @returns 介于 -32768 和 32767 之间的 16 位带符号整数
         * @method egret.ByteArray#readShort
         */
        readShort(): number;
        /**
         * 从字节流中读取无符号的字节
         * @returns 介于 0 和 255 之间的 32 位无符号整数
         * @method egret.ByteArray#readUnsignedByte
         */
        readUnsignedByte(): number;
        /**
         * 从字节流中读取一个无符号的 32 位整数
         * @returns 介于 0 和 4294967295 之间的 32 位无符号整数
         * @method egret.ByteArray#readUnsignedInt
         */
        readUnsignedInt(): number;
        /**
         * 从字节流中读取一个无符号的 16 位整数
         * @returns 介于 0 和 65535 之间的 16 位无符号整数
         * @method egret.ByteArray#readUnsignedShort
         */
        readUnsignedShort(): number;
        /**
         * 从字节流中读取一个 UTF-8 字符串。假定字符串的前缀是无符号的短整型（以字节表示长度）
         * @returns UTF-8 编码的字符串
         * @method egret.ByteArray#readUTF
         */
        readUTF(): string;
        /**
         * 从字节流中读取一个由 length 参数指定的 UTF-8 字节序列，并返回一个字符串
         * @param length 指明 UTF-8 字节长度的无符号短整型数
         * @returns 由指定长度的 UTF-8 字节组成的字符串
         * @method egret.ByteArray#readUTFBytes
         */
        readUTFBytes(length: number): string;
        /**
         * 写入布尔值。根据 value 参数写入单个字节。如果为 true，则写入 1，如果为 false，则写入 0
         * @param value 确定写入哪个字节的布尔值。如果该参数为 true，则该方法写入 1；如果该参数为 false，则该方法写入 0
         * @method egret.ByteArray#writeBoolean
         */
        writeBoolean(value: boolean): void;
        /**
         * 在字节流中写入一个字节
         * 使用参数的低 8 位。忽略高 24 位
         * @param value 一个 32 位整数。低 8 位将被写入字节流
         * @method egret.ByteArray#writeByte
         */
        writeByte(value: number): void;
        /**
         * 将指定字节数组 bytes（起始偏移量为 offset，从零开始的索引）中包含 length 个字节的字节序列写入字节流
         * 如果省略 length 参数，则使用默认长度 0；该方法将从 offset 开始写入整个缓冲区。如果还省略了 offset 参数，则写入整个缓冲区
         * 如果 offset 或 length 超出范围，它们将被锁定到 bytes 数组的开头和结尾
         * @param bytes ByteArray 对象
         * @param offset 从 0 开始的索引，表示在数组中开始写入的位置
         * @param length 一个无符号整数，表示在缓冲区中的写入范围
         * @method egret.ByteArray#writeBytes
         */
        writeBytes(bytes: ByteArray, offset?: number, length?: number): void;
        /**
         * 在字节流中写入一个 IEEE 754 双精度（64 位）浮点数
         * @param value 双精度（64 位）浮点数
         * @method egret.ByteArray#writeDouble
         */
        writeDouble(value: number): void;
        /**
         * 在字节流中写入一个 IEEE 754 单精度（32 位）浮点数
         * @param value 单精度（32 位）浮点数
         * @method egret.ByteArray#writeFloat
         */
        writeFloat(value: number): void;
        /**
         * 在字节流中写入一个带符号的 32 位整数
         * @param value 要写入字节流的整数
         * @method egret.ByteArray#writeInt
         */
        writeInt(value: number): void;
        /**
         * 使用指定的字符集将多字节字符串写入字节流
         * @param value 要写入的字符串值
         * @param charSet 表示要使用的字符集的字符串。可能的字符集字符串包括 "shift-jis"、"cn-gb"、"iso-8859-1"”等
         * @method egret.ByteArray#writeMultiByte
         */
        /**
         * 在字节流中写入一个 16 位整数。使用参数的低 16 位。忽略高 16 位
         * @param value 32 位整数，该整数的低 16 位将被写入字节流
         * @method egret.ByteArray#writeShort
         */
        writeShort(value: number): void;
        /**
         * 在字节流中写入一个无符号的 32 位整数
         * @param value 要写入字节流的无符号整数
         * @method egret.ByteArray#writeUnsignedInt
         */
        writeUnsignedInt(value: number): void;
        /**
         * 将 UTF-8 字符串写入字节流。先写入以字节表示的 UTF-8 字符串长度（作为 16 位整数），然后写入表示字符串字符的字节
         * @param value 要写入的字符串值
         * @method egret.ByteArray#writeUTF
         */
        writeUTF(value: string): void;
        /**
         * 将 UTF-8 字符串写入字节流。类似于 writeUTF() 方法，但 writeUTFBytes() 不使用 16 位长度的词为字符串添加前缀
         * @param value 要写入的字符串值
         * @method egret.ByteArray#writeUTFBytes
         */
        writeUTFBytes(value: string): void;
        toString(): string;
        /**
         * 将 Uint8Array 写入字节流
         * @param bytes 要写入的Uint8Array
         * @param validateBuffer
         */
        _writeUint8Array(bytes: Uint8Array, validateBuffer?: boolean): void;
        /**
         * @private
         */
        validate(len: number): boolean;
        /*********************/
        /*********************/
        private validateBuffer(len, needReplace?);
        /**
         * UTF-8 Encoding/Decoding
         */
        private encodeUTF8(str);
        private decodeUTF8(data);
        private encoderError(code_point);
        private decoderError(fatal, opt_code_point?);
        private EOF_byte;
        private EOF_code_point;
        private inRange(a, min, max);
        private div(n, d);
        private stringToCodePoints(string);
    }
}
declare module egret3d {
    /**
    * @private
    * @class egret3d.Debug
    * @classdesc
    * 调试面板
    */
    class Debug {
        private _console;
        isDebug: boolean;
        /**
         * @language zh_CN
         * 构造
         */
        constructor();
        /**
         * @language zh_CN
         * 输出调试信息
         * @param parameters
         */
        trace(...parameters: string[]): void;
        /**
         * @language zh_CN
         * 重置显示数据
         */
        reset(): void;
        private static _instance;
        /**
         * @language zh_CN
         * 取到当前Debug单例对象
         */
        static instance: Debug;
    }
}
declare module egret3d {
    /**
     * @private
     * @class egret3d.StringUtil
     * @classdesc
     * 字符串处理工具类
     */
    class StringUtil {
        /**
         * @language zh_CN
         * @private
         */
        private static _filterChar;
        /**
         * @language zh_CN
         * @private
         * 解析文件内容(按行解析)
         * @param file
         * @returns 行列表
         */
        static parseContent(file: string): Array<string>;
        /**
         * @language zh_CN
         * 解析一行的内容 有多少个成员
         * @param line 源内容
         * @returns 成员列表
         */
        static parseLines(line: string): Array<string>;
        /**
         * @language zh_CN
         * 是否存在此字符串
         * @param fields 被检测的列表
         * @param str 比较字符串
         * @returns 成功返回true
         */
        static hasString(fields: Array<string>, str: string): number;
        /**
         * @language zh_CN
         * 得到值的内容
         * @param fields 成员列表
         * @returns 值
         */
        static getVarName(fields: Array<string>): string;
        /**
         * @language zh_CN
         * 返回变量的值
         * @param fields 变量数据列表
         * @returns 变量的值
         */
        static getVarValue(fields: Array<string>): string;
        /**
         * @language zh_CN
         * 返回变量类型
         * @param fields 变量数据列表
         * @returns 变量类型
         */
        static getVarType(fields: Array<string>): string;
        /**
         * @language zh_CN
         * 返回变量属性
         * @param fields 变量数据列表
         * @returns 变量属性
         */
        static getVarKey(fields: Array<string>): string;
        /**
         * @language zh_CN
         * @private
         * 筛选文件中的指定字符去掉
         * @param file xxx
         * @returns 筛选后的字符
         */
        static processShaderFile(file: string): string;
        /**
         * @language zh_CN
         * 解析字符颜色值
         * @param color
         * @returns
         */
        static colorRgb(color: string): string;
        /**
         * @language zh_CN
         * @private
         * @returns
         */
        static getLineType(line: string): string;
        /**
         * @language zh_CN
         * @private
         * @returns
         */
        static processStruct(name: string, structStr: string, content: GLSL.ShaderContent): void;
        /**
         * @language zh_CN
         * @private
         * @returns
         */
        static getAttribute(shaderLine: string): GLSL.Attribute;
        /**
        * @language zh_CN
        * @private
        * @returns
        */
        static getTemper(shaderLine: string): GLSL.TmpVar;
        /**
        * @language zh_CN
        * @private
        * @returns
        */
        static getVarying(shaderLine: string): GLSL.Varying;
        /**
        * @language zh_CN
        * @private
        * @returns
        */
        static getUniform(shaderLine: string): GLSL.Uniform;
        /**
        * @language zh_CN
        * @private
        * @returns
        */
        static getConst(shaderLine: string): GLSL.ConstVar;
        static getExtension(shaderLine: string): GLSL.Extension;
        /**
        * @language zh_CN
        * @private
        * @returns
        */
        static getSampler2D(shaderLine: string): GLSL.Sampler2D;
        /**
        * @language zh_CN
        * @private
        * @returns
        */
        static getSampler3D(shaderLine: string): GLSL.Sampler3D;
        /**
        * @language zh_CN
        * @private
        * @returns
        */
        static filterCharacter(name: string): string;
        static replaceCharacter(src: string, searchValue: Array<string>, replaceValue: string): string;
        static getURLName(url: string): string;
    }
}
declare module egret3d {
    /**
    * @class egret3d.CameraAnimationController
    * @classdesc
    * 摄像机动画控制器。
    * 每个摄像机动画绑定一个摄像机，控制摄像机的行为
    * 可以更换绑定的摄像机
    * @see egret3d.Camera3D
    * @version Egret 3.0
    * @platform Web,Native
    */
    class CameraAnimationController {
        /**
        * @language zh_CN
        * 动画播放完一个周期的事件
        */
        static EVENT_CAMERA_COMPLETE: string;
        /**
        * @language zh_CN
        * 相机动画每帧数据列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        cameraAnimationFrames: Array<CameraAnimationFrame>;
        /**
        * @language zh_CN
        * 相机动画名字
        * @version Egret 3.0
        * @platform Web,Native
        */
        name: string;
        private _camera;
        private _playing;
        private _playTime;
        private _currentFrameIndex;
        private _loop;
        private _smooth;
        private _cameraAnimationFrame;
        private _event;
        private _quatCurrentFrame;
        private _quatnNextFrame;
        private _quatn;
        /**
        * @language zh_CN
        * 构造函数
        * @param camera 需要一个摄像机对象来创建摄像机动画
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(camera?: Camera3D);
        /**
        * @language zh_CN
        * 绑定动画控制的相机
        * @param camera
        * @version Egret 3.0
        * @platform Web,Native
        */
        bindCamera(camera: Camera3D): void;
        /**
        * @language zh_CN
        * 播放相机动画 是否循环
        * @param isLoop 是否循环播放
        * @version Egret 3.0
        * @platform Web,Native
        */
        play(isLoop: boolean): void;
        /**
        * @language zh_CN
        * 停止播放相机动画
        * @version Egret 3.0
        * @platform Web,Native
        */
        stop(): void;
        /**
        * @language zh_CN
        * 数据更新
        * @param time 当前时间
        * @param delay 每帧间隔时间
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(time: number, delay: number): void;
    }
    /**
    * @private
    * @class egret3d.CameraAnimationFrame
    * @classdesc
    * 摄像机动画每帧数据
    * @version Egret 3.0
    * @platform Web,Native
    */
    class CameraAnimationFrame {
        /**
        * @language zh_CN
        * 帧时间
        * @version Egret 3.0
        * @platform Web,Native
        */
        time: number;
        /**
        * @language zh_CN
        * 观察时y 轴方向的角度，就是观察范围夹角。
        * @version Egret 3.0
        * @platform Web,Native
        */
        fov: number;
        /**
        * @language zh_CN
        * 旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        rotation: Vector3D;
        /**
        * @language zh_CN
        * 平移
        * @version Egret 3.0
        * @platform Web,Native
        */
        translation: Vector3D;
        /**
        * @private
        * @language zh_CN
        * 计算时用的矩阵
        */
        matrix: Matrix4_4;
    }
}
declare module egret3d {
    /**
    * @private
    * @class egret3d.CameraAnimationManager
    * @classdesc
    * 摄像机管理器
    * 管理所有摄像机动画
    * @see egret3d.Camera3D
    * @version Egret 3.0
    * @platform Web,Native
    */
    class CameraManager {
        static instance: CameraManager;
        cameras: Array<Camera3D>;
        /**
        * @language zh_CN
        * 构建一个摄像机管理对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        addCamera(camera: Camera3D): void;
        /**
        * @language zh_CN
        * 更新所有的摄像机
        * @param time 当前时间
        * @param delay 每帧间隔时间
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(time: number, delay: number): void;
    }
}
declare module egret3d {
    /**
    * @private
    * 摄像机类型
    * @version Egret 3.0
    * @platform Web,Native
    */
    enum CameraType {
        /**
        * 透视投影
        * @version Egret 3.0
        * @platform Web,Native
        */
        perspective = 0,
        /**
        * 正交投影
        * @version Egret 3.0
        * @platform Web,Native
        */
        orthogonal = 1,
        /**
        * VR投影
        * @version Egret 3.0
        * @platform Web,Native
        */
        VR = 2,
    }
    /**
    * VR类型
    * @private
    * @version Egret 3.0
    * @platform Web,Native
    */
    enum VRType {
        /**
        * 左眼
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        left = 0,
        /**
        * 右眼
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        right = 1,
    }
    /**
    * @class egret3d.Camera3D
    * @classdesc
    * 相机数据处理，生成3D摄相机。</p>
    * 渲染场景从摄像机视点到缓冲区。</p>
    * 相机分为透视摄像机、正交摄像机、VR摄像机。</p>
    *
    * @see egret3d.Matrix4_4
    * @see egret3d.Object3D
    *
    * @includeExample camera/Camera3D.ts
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Camera3D extends Object3D {
        /**
         * @language zh_CN
         * 相机投影矩阵
         * @version Egret 3.0
         * @platform Web,Native
         */
        projectMatrix: Matrix4_4;
        /**
        * @private
        * @language zh_CN
        * 眼睛矩阵(左，右眼) 实现VR时会用到
        * @version Egret 3.0
        * @platform Web,Native
        */
        eyeMatrix: EyesMatrix;
        /**
         * @language zh_CN
         * 相机的视椎体，用来检测是否在当前相机可视范围内
         * @version Egret 3.0
         * @platform Web,Native
         */
        frustum: Frustum;
        viewPort: Rectangle;
        private _viewPort;
        private _scissorRect;
        private _aspectRatio;
        private _fovY;
        private _near;
        private _far;
        private temp;
        private _lookAtPosition;
        private _up;
        private _cameraType;
        private _cameraMatrixChange;
        private _viewMatrix;
        private _tempQuat;
        private _normalMatrix;
        private _unprojection;
        protected _animation: any;
        /**
         * @language zh_CN
         * constructor
         * @param cameraType 相机类型
         * @version Egret 3.0
         * @platform Web,Native
         */
        constructor(cameraType?: CameraType);
        /**
         * @language zh_CN
         * 设置相机类型
         * @param cameraType 相机类型
         * @version Egret 3.0
         * @platform Web,Native
         */
        cameraType: CameraType;
        /**
         * @language zh_CN
         * 打开VR相机
         * @param cameraType 相机类型
         * @param vrType VR类型
         * @version Egret 3.0
         * @platform Web,Native
         */
        tap(cameraType: CameraType, vrType?: VRType): void;
        /**
        * @language zh_CN
        * 返回相机横纵比
        *
        * @returns 横纵比
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置相机横纵比
        *
        * @param value 横纵比
        * @version Egret 3.0
        * @platform Web,Native
        */
        aspectRatio: number;
        /**
        * @language zh_CN
        * 返回相机fovY
        *
        * @returns fovY
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置相机fovY
        *
        * @param value fovY
        * @version Egret 3.0
        * @platform Web,Native
        */
        fieldOfView: number;
        /**
        * @language zh_CN
        * 返回相机近截面
        *
        * @returns 近截面
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置相机近截面
        *
        * @param value 近截面
        * @version Egret 3.0
        * @platform Web,Native
        */
        near: number;
        /**
        * @language zh_CN
        * 返回相机远截面
        *
        * @returns 远截面
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置相机远截面
        *
        * @param value 远截面
        * @version Egret 3.0
        * @platform Web,Native
        */
        far: number;
        /**
        * @language zh_CN
        * 返回相机视图投影矩阵
        *
        * @returns 视图投影矩阵
        * @version Egret 3.0
        * @platform Web,Native
        */
        viewProjectionMatrix: Matrix4_4;
        /**
        * @language zh_CN
        * 视图noormal矩阵
        * normal 矩阵用来纠正透视相机影响视图变形，所影响的法线轴变形，一般用 modeviewMatrix 的逆举证的转置矩阵。
        * @version Egret 3.0
        * @platform Web,Native
        */
        normalMatrix: Matrix4_4;
        /**
         * @private
         * @language zh_CN
         * @param x number
         * @param y number
         * @param width number
         * @param height number
         * @version Egret 3.0
         * @platform Web,Native
         */
        updateScissorRect(x: number, y: number, width: number, height: number): void;
        /**
         * @language zh_CN
         * 更新视口
         * @param x number
         * @param y number
         * @param width number
         * @param height number
         * @version Egret 3.0
         * @platform Web,Native
         */
        updateViewport(x: number, y: number, width: number, height: number): void;
        /**
         * @language zh_CN
         * 当前对象对视位置
         * @param pos 对象的位置
         * @param target 目标的位置
         * @param up 向上的方向
         * @version Egret 3.0
         * @platform Web,Native
         */
        lookAt(pos: Vector3D, target: Vector3D, up?: Vector3D): void;
        protected onUpdateTransform(): void;
        /**
         * @language zh_CN
         *
         * 相机视图矩阵
         * @version Egret 3.0
         * @platform Web,Native
         */
        viewMatrix: Matrix4_4;
        /**
         * @language zh_CN
         *
         * 相机目标点
         * @version Egret 3.0
         * @platform Web,Native
         */
        lookAtPosition: Vector3D;
        /**
         * @language zh_CN
         * 更新正交矩阵
         * @version Egret 3.0
         * @platform Web,Native
         */
        updataOrth(): void;
        /**
         * @language zh_CN
         * 检测对象是否在相机视椎体内
         * @param object 需要体测的对象
         * @returns 成功返回true
         * @version Egret 3.0
         * @platform Web,Native
         */
        isVisibleToCamera(renderItem: IRender): boolean;
        /**
         * @language zh_CN
         * 增加相机动画
         * @param name 相机动画名字
         * @param ani 相机动画
         * @version Egret 3.0
         * @platform Web,Native
         */
        addAnimation(name: string, ani: CameraAnimationController): void;
        /**
        * @language zh_CN
        * 播放某个动画
        * 根据动画名字来播放，指定摄像机，并且控制动画是否循环播放
        * @param name 动画名
        * @param isLoop 是否循环
        * @version Egret 3.0
        * @platform Web,Native
        */
        play(name: string, isLoop?: boolean): void;
        /**
        * @private
        * @language zh_CN
        * 当前对象数据更新
        * @private
        * @param camera 当前渲染的摄相机
        * @param time 当前时间
        * @param delay 每帧时间间隔
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(time: number, delay: number, camera: Camera3D): void;
        private _halfw;
        private _halfh;
        object3DToScreenRay(n: Vector3D, target: Vector3D): Vector3D;
        ScreenRayToObject3D(n: Vector3D, target: Vector3D): Vector3D;
        private v;
        private p;
        private unproject(nX, nY, sZ, target);
        private project(n, target);
    }
}
declare module egret3d {
    /**
    * @private
    * @language zh_CN
    * @class egret3d.IQuadNode
    * @classdesc
    * �Ĳ�����һ���ڵ��Ľӿ�
    * @version Egret 3.0
    * @platform Web,Native
    */
    interface IQuadNode {
        /**
        * @language zh_CN
        * ��ʼ����Χ��
        * @version Egret 3.0
        * @platform Web,Native
        */
        initAABB(): void;
        /**
        * @language zh_CN
        * �Ƿ��ýڵ���������
        * @version Egret 3.0
        * @platform Web,Native
        */
        isTriangle: boolean;
        /**
        * @language zh_CN
        * ��Χ������
        * @version Egret 3.0
        * @platform Web,Native
        */
        aabb: QuadAABB;
    }
}
declare module egret3d {
    /**
    * @private
    * @language zh_CN
    * @class egret3d.QuadAABB
    * @classdesc
    * 用于四叉树的包围盒抽象
    * @version Egret 3.0
    * @platform Web,Native
    */
    class QuadAABB {
        /**
        * @language zh_CN
        * 最小x位置
        * @version Egret 3.0
        * @platform Web,Native
        */
        minPosX: number;
        /**
        * @language zh_CN
        * 最小y位置
        * @version Egret 3.0
        * @platform Web,Native
        */
        minPosY: number;
        /**
        * @language zh_CN
        * 最大x位置
        * @version Egret 3.0
        * @platform Web,Native
        */
        maxPosX: number;
        /**
        * @language zh_CN
        * 最大y位置
        * @version Egret 3.0
        * @platform Web,Native
        */
        maxPosY: number;
        /**
        * @language zh_CN
        * 用于记录quad框选批次
        * @version Egret 3.0
        * @platform Web,Native
        */
        testID: number;
        /**
        * @language zh_CN
        * 所有内部点列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        points: Array<Vector3D>;
        /**
        * @language zh_CN
        * @private
        * 记录该包围盒的全局位移偏移量
        * @version Egret 3.0
        * @platform Web,Native
        */
        private offsetPosition;
        /**
        * @language zh_CN
        * @private
        * 设定一个微小的值
        * @version Egret 3.0
        * @platform Web,Native
        */
        private static TINY;
        /**
        * @language zh_CN
        * constructor
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
        * @language zh_CN
        * 将该包围盒设定到以中心点(cx,cy)，纵横距离(sideY,sidex)的范围内
        * @param cx         中心x
        * @param cy         中心y
        * @param sidex      横向范围
        * @param sidey      纵向范围
        * @version Egret 3.0
        * @platform Web,Native
        */
        setAABox(cx: number, cy: number, sideX: number, sideY: number): void;
        /**
        * @language zh_CN
        * 设置偏移量
        * @param vec        偏移坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        setOffset(vec: Vector3D): void;
        /**
        * @language zh_CN
        * 设定包含某个范围
        * @param minX         中心x
        * @param minY         中心y
        * @param maxX      横向范围
        * @param maxY      纵向范围
        * @version Egret 3.0
        * @platform Web,Native
        */
        setContainRect(minX: number, minY: number, maxX: number, maxY: number): void;
        /**
        * @language zh_CN
        * 重置包围盒
        * @version Egret 3.0
        * @platform Web,Native
        */
        clear(): void;
        /**
        * @language zh_CN
        * 添加一个点
        * @param pos         点坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        addPoint(pos: Vector3D): void;
        /**
        * @language zh_CN
        * 获得该对象克隆
        * @version Egret 3.0
        * @platform Web,Native
        */
        clone(): QuadAABB;
        /**
        * @language zh_CN
        * 获得对角线长
        * @version Egret 3.0
        * @platform Web,Native
        */
        radius: number;
        /**
        * @language zh_CN
        * 获得宽
        * @version Egret 3.0
        * @platform Web,Native
        */
        sideX: number;
        /**
        * @language zh_CN
        * 获得高
        * @version Egret 3.0
        * @platform Web,Native
        */
        sideY: number;
        /**
        * @language zh_CN
        * 获得中心点x
        * @version Egret 3.0
        * @platform Web,Native
        */
        centreX: number;
        /**
        * @language zh_CN
        * 获得中心点y
        * @version Egret 3.0
        * @platform Web,Native
        */
        centreY: number;
        /**
        * @language zh_CN
        * 与另外一个包围盒碰撞测试
        * @param box        测试的碰撞对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        overlapTest(box: QuadAABB): boolean;
        /**
        * @language zh_CN
        * 判定某个点在包围盒内
        * @param box        测试的点
        * @version Egret 3.0
        * @platform Web,Native
        */
        isPointInside(pos: Vector3D): boolean;
        /**
        * @language zh_CN
        * 与一条线段碰撞测试
        * @param p1x        线段起点x
        * @param p1y        线段起点y
        * @param p2x        线段终点x
        * @param p2y        线段终点y
        * @version Egret 3.0
        * @platform Web,Native
        */
        isIntersectLineSegment(p1x: number, p1y: number, p2x: number, p2y: number): boolean;
    }
}
declare module egret3d {
    /**
    * @private
    * @language zh_CN
    * @class egret3d.QuadTree
    * @classdesc
    * 四叉树
    * @version Egret 3.0
    * @platform Web,Native
    */
    class QuadTree {
        /**
        * @language zh_CN
        * 所有节点
        * @version Egret 3.0
        * @platform Web,Native
        */
        private _cells;
        /**
        * @language zh_CN
        * 根节点
        * @version Egret 3.0
        * @platform Web,Native
        */
        private _rootCell;
        /**
        * @language zh_CN
        * 节点列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        private _quadNodes;
        /**
        * @language zh_CN
        * 当前tree的包围盒
        * @version Egret 3.0
        * @platform Web,Native
        */
        private _aabb;
        /**
        * @language zh_CN
        * 碰撞检测用数组
        * @version Egret 3.0
        * @platform Web,Native
        */
        private _cellsToTest;
        /**
        * @language zh_CN
        * 碰撞检测用批次
        * @version Egret 3.0
        * @platform Web,Native
        */
        private _testID;
        /**
        * @language zh_CN
        * constructor
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
        * @language zh_CN
        * 根据下标获取node对象
        * @param    idx     下标
        * @version Egret 3.0
        * @platform Web,Native
        */
        getQuadNode(idx: number): IQuadNode;
        /**
        * @language zh_CN
        * 清理
        * @version Egret 3.0
        * @platform Web,Native
        */
        clear(): void;
        /**
        * @language zh_CN
        * 插入一系列node到树中,不build
        * @param    nodes     待初始化的节点列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        initNodes(nodes: Array<IQuadNode>): void;
        /**
        * @language zh_CN
        * 构建四叉树
        * @param    maxNodesPerCell     一个Cell中最多几个三角
        * @param    minCellSize         一个cell单元最小划分到多小
        * @version Egret 3.0
        * @platform Web,Native
        */
        buildQuadTree(maxNodesPerCell: number, minCellSize: number): void;
        /**
        * @language zh_CN
        * 创建子节点的AABox
        * @param    aabb     包围盒
        * @param    id      象限
        * @version Egret 3.0
        * @platform Web,Native
        */
        private createAABox(aabb, id);
        /**
        * @language zh_CN
        * 如果三角型和Cell相交,返回True
        * @param    node     节点
        * @param    cell     四叉树叶子
        * @version Egret 3.0
        * @platform Web,Native
        */
        private doesNodeIntersectCell(node, cell);
        /**
        * @language zh_CN
        * 寻找在某位置上的三角面
        * @param    result     存储节点的数组
        * @param    aabb       包围盒
        * @version Egret 3.0
        * @platform Web,Native
        */
        getNodesIntersectingtAABox(result: Array<number>, aabb: QuadAABB): number;
        /**
        * @language zh_CN
        * 判断点在三角型中
        * @param    x           指定点坐标x
        * @param    y           指定点坐标y
        * @param    triPi1      三角形顶点1
        * @param    triPi2      三角形顶点2
        * @param    triPi3      三角形顶点3
        * @return   是否包含
        * @version Egret 3.0
        * @platform Web,Native
        */
        private pointInTriangle(x, y, triP1, triP2, triP3);
        /**
        * @language zh_CN
        * 递增批次
        * @version Egret 3.0
        * @platform Web,Native
        */
        private incrementTestCounter();
        /**
        * @language zh_CN
        * 显示quadtree结构
        * @version Egret 3.0
        * @platform Web,Native
        */
        private logDeep;
        private logTree(cellIndex);
    }
}
declare module egret3d {
    /**
    * @private
    * @language zh_CN
    * @class egret3d.QuadRoot
    * @classdesc
    * 创建四叉树的根对象。当前只能用于管理场景中静态的Object，
    * @version Egret 3.0
    * @platform Web,Native
    */
    class QuadRoot {
        /**
        * @language zh_CN
        * 一个Cell中最多几个三角
        */
        private _maxNodesPerCell;
        /**
         * @language zh_CN
         * 一个cell单元最小划分到多小
         */
        private _minCellSize;
        /**
         * @language zh_CN
         * 四叉树
         */
        private _quadTree;
        /**
         * @language zh_CN
         * 碰撞到的三角
         */
        private _collisionNodesIdx;
        /**
         * @language zh_CN
         * 碰撞检测用aabb
         */
        private _segBox;
        /**
         * @language zh_CN
         * 存放检测的nodes结果
         */
        private _collisionNodes;
        /**
        * @language zh_CN
        * constructor
        * @param maxNodesPerCell 一个Cell中最多几个节点
        * @param minCellSize 一个cell单元最小划分到多小
        */
        constructor(maxNodesPerCell?: number, minCellSize?: number);
        /**
        * @language zh_CN
        * 创建并构造四叉树
        * @param nodes 需要插入到四叉树中的节点列表
        */
        createQuadTree(nodes: Array<IQuadNode>): void;
        /**
        * @language zh_CN
        * 在设定范围内，框选出一批节点
        * @param minX 框选范围最小x值
        * @param minY 框选范围最小y值
        * @param maxX 框选范围最大x值
        * @param maxY 框选范围最大y值
        * @return Array<IQuadNode>
        */
        getNodesByAABB(minX: number, minY: number, maxX: number, maxY: number): Array<IQuadNode>;
        /**
        * @language zh_CN
        * 给定一个三维坐标点，获取节点中最为接近的一个三角形
        * @param point 给定的点
        * @param threshold 设定的阈值，超出这个距离则视为放弃
        * @return Navi3DTriangle
        */
        getTriangleAtPoint(point: Vector3D, threshold?: number): Navi3DTriangle;
    }
}
declare module egret3d {
    /**
    * @private
    * @language zh_CN
    * @class egret3d.QuadTreeCell
    * @classdesc
    * 四叉树叶子节点
    * @version Egret 3.0
    * @platform Web,Native
    */
    class QuadTreeCell {
        /**
        * @language zh_CN
        * 一个叶子单元最多包含子叶子树4个
        * @version Egret 3.0
        * @platform Web,Native
        */
        static NUM_CHILDREN: number;
        /**
        * @language zh_CN
        * (如果不是leaf)子节点的index, -1表示无子节点
        * @version Egret 3.0
        * @platform Web,Native
        */
        childCellIndices: Array<number>;
        /**
        * @language zh_CN
        * (如果是leaf) 三角面的index
        * @version Egret 3.0
        * @platform Web,Native
        */
        nodeIndices: Array<number>;
        /**
        * @language zh_CN
        * 该节点的包围框
        * @version Egret 3.0
        * @platform Web,Native
        */
        aabb: QuadAABB;
        /**
         * @language zh_CN
         * 该叶子里面含有的顶点信息
         * @version Egret 3.0
         * @platform Web,Native
         */
        points: Array<Vector3D>;
        /**
        * @language zh_CN
        * constructor
        * @param aabox 该叶子的包围盒
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(aabox: QuadAABB);
        /**
        * @language zh_CN
        * Indicates if we contain triangles (if not then we should/might have children)
        * @version Egret 3.0
        * @platform Web,Native
        */
        isLeaf(): boolean;
        /**
        * @language zh_CN
        * 重置该叶子
        * @version Egret 3.0
        * @platform Web,Native
        */
        clear(): void;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.HashTable
    * @classdesc
    * 纯2d的点
    * @version Egret 3.0
    * @platform Web,Native
    */
    class HashTable {
        /**
        * @language zh_CN
        * 键队列
        * @version Egret 3.0
        * @platform Web,Native
        */
        private _keys;
        /**
        * @language zh_CN
        * 值队列
        * @version Egret 3.0
        * @platform Web,Native
        */
        private _values;
        /**
        * @language zh_CN
        * constructor
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
        * @language zh_CN
        * 根据键获得下标
        * @param    key     键
        * @return           下标
        * @version Egret 3.0
        * @platform Web,Native
        */
        getIndexByKey(key: any): number;
        /**
        * @language zh_CN
        * 根据键获得值
        * @param    key     键
        * @return           值
        * @version Egret 3.0
        * @platform Web,Native
        */
        getValueByKey(key: any): any;
        /**
        * @language zh_CN
        * 放入一个键值对
        * @param    key     键
        * @param    value   值
        * @return           原来的值
        * @version Egret 3.0
        * @platform Web,Native
        */
        put(key: any, value: any): any;
        /**
        * @language zh_CN
        * 移除一个键值对
        * @param    key     键
        * @return           移除的值
        * @version Egret 3.0
        * @platform Web,Native
        */
        remove(key: any): any;
        /**
        * @language zh_CN
        * 获取值的队列
        * @return          值的队列
        * @version Egret 3.0
        * @platform Web,Native
        */
        getValues(): Array<any>;
        /**
        * @language zh_CN
        * 获取键的队列
        * @return          键的队列
        * @version Egret 3.0
        * @platform Web,Native
        */
        getKeys(): Array<any>;
        /**
        * @language zh_CN
        * 重置该哈希表
        * @version Egret 3.0
        * @platform Web,Native
        */
        clear(): void;
    }
}
declare module egret3d {
    /**
    * @private
    * @language zh_CN
    * @class egret3d.Navi3DAstar
    * @classdesc
    * 用于Navigation Mesh中寻路的A星算法
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Navi3DAstar {
        private _openedList;
        private _closedList;
        private _endNode;
        private _startNode;
        private _triangleChannel;
        private _navMesh;
        private _findIndex;
        /**
        * @language zh_CN
        * constructor
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
        * @language zh_CN
        * 开始找寻路径，输入起点终点
        * param navMesh 搜索的mesh对象
        * param startTriangle 开始三角形
        * param endTriangle 结束三角形
        * @returns 是否搜索成功
        * @version Egret 3.0
        * @platform Web,Native
        */
        findPath(navMesh: Navi3DMesh, startTriangle: Navi3DTriangle, endTriangle: Navi3DTriangle): boolean;
        /**
        * @language zh_CN
        * 搜寻
        * @return 是否搜索成功
        * @version Egret 3.0
        * @platform Web,Native
        */
        private search();
        /**
        * @language zh_CN
        * 回溯路径列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        private buildPath();
        /**
        * @language zh_CN
        * 获取结果数据（三角带）
        * @version Egret 3.0
        * @platform Web,Native
        */
        channel: Array<Navi3DTriangle>;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.Navi3DEdge
    * @classdesc
    * 用于Navigation Mesh中寻路的三角形边的对象
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Navi3DEdge {
        private _edgeMask;
        private _edgeSize;
        private _pointA;
        private _pointB;
        private _triangleOwners;
        private _centerPoint;
        /**
        * @language zh_CN
        * 端点A至B的朝向矢量
        * @version Egret 3.0
        * @platform Web,Native
        */
        private _edgeDirA2B;
        /**
        * @language zh_CN
        * 记录穿越的点
        * @version Egret 3.0
        * @platform Web,Native
        */
        crossPoint: Vector3D;
        /**
        * @language zh_CN
        * 靠近A的肥胖检测点
        * @version Egret 3.0
        * @platform Web,Native
        */
        fatPointA: Navi3DPointFat;
        /**
        * @language zh_CN
        * 靠近B的肥胖检测点
        * @version Egret 3.0
        * @platform Web,Native
        */
        fatPointB: Navi3DPointFat;
        /**
        * @language zh_CN
        * 计算用的Vector3D
        * @version Egret 3.0
        * @platform Web,Native
        */
        private static CALC_FAT_VECTOR;
        /**
        * @language zh_CN
        * constructor
        * @param  point0 顶点0
        * @param  point1 顶点1
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(point0: Navi3DPoint, point1: Navi3DPoint);
        /**
        * @language zh_CN
        * 获得边长
        * @return 长度
        * @version Egret 3.0
        * @platform Web,Native
        */
        size: Number;
        /**
        * @language zh_CN
        * 获得所属三角形列表
        * @returns  Array<Navi3DTriangle> 三角形列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        triangleOwners: Array<Navi3DTriangle>;
        /**
        * @language zh_CN
        * 获得线段的中间点坐标
        * @returns Vector3D 中间点坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        centerPoint: Vector3D;
        /**
        * @language zh_CN
        * 初始化肥胖监测点
        * @param  radius    输入的肥胖检测半径
        * @version Egret 3.0
        * @platform Web,Native
        */
        initFatPoints(radius: number): void;
        /**
        * @language zh_CN
        * 根据端点获取对应的肥胖检测点
        * @param  pt  端点
        * @returns Navi3DPointFat 肥胖检测点
        * @version Egret 3.0
        * @platform Web,Native
        */
        getFatPoint(pt: Navi3DPoint): Navi3DPointFat;
        /**
        * @language zh_CN
        * 输入一个端点获取另外一个端点的肥胖检测点
        * @param  pt  端点
        * @returns Navi3DPointFat 肥胖检测点
        * @version Egret 3.0
        * @platform Web,Native
        */
        getAnotherFatPoint(pt: Navi3DPoint): Navi3DPointFat;
        /**
        * @language zh_CN
        * 输入一个端点获取另外一个端点
        * @param  pt  端点
        * @returns Navi3DPoint 另外一个端点
        * @version Egret 3.0
        * @platform Web,Native
        */
        getAnotherPoint(pt: Navi3DPoint): Navi3DPoint;
        /**
        * @language zh_CN
        * 判定一个点是否等价于某个端点
        * @param  pt 被判定的点
        * @returns Navi3DPoint 判定结果端点
        * @version Egret 3.0
        * @platform Web,Native
        */
        containsPoint(pt: Vector3D): Navi3DPoint;
        /**
        * @language zh_CN
        * 添加所属三角形
        * @param  triangle 所属三角形
        * @version Egret 3.0
        * @platform Web,Native
        */
        addTriangleOwners(triangle: Navi3DTriangle): void;
        /**
        * @language zh_CN
        * 获取和另外一条边的公共端点
        * @param  edge 另外一条边
        * @returns Navi3DPoint 公共边
        * @version Egret 3.0
        * @platform Web,Native
        */
        getPublicPoint(edge: Navi3DEdge): Navi3DPoint;
        /**
        * @language zh_CN
        * 输入一个点获，获取与之等价的一个端点对象
        * @param  p 输入的点
        * @returns Navi3DPoint 等价的端点
        * @version Egret 3.0
        * @platform Web,Native
        */
        getEqualPoint(p: Vector3D): Navi3DPoint;
        /**
        * @language zh_CN
        * 端点A
        * @returns Navi3DPoint 端点A
        * @version Egret 3.0
        * @platform Web,Native
        */
        pointA: Navi3DPoint;
        /**
        * @language zh_CN
        * 端点B
        * @returns Navi3DPoint 端点B
        * @version Egret 3.0
        * @platform Web,Native
        */
        pointB: Navi3DPoint;
        /**
        * @language zh_CN
        * 记录该边的通过属性
        * @returns boolean 是否可通过
        * @version Egret 3.0
        * @platform Web,Native
        */
        walkAble: boolean;
        /**
        * @language zh_CN
        * 测试是否通过
        * @param  value 被测试的值
        * @returns boolean 是否通过
        * @version Egret 3.0
        * @platform Web,Native
        */
        testMask(value: number): boolean;
    }
}
declare module egret3d {
    /**
    * @private
    * @language zh_CN
    * @class egret3d.Navi3DMaskType
    * @classdesc
    * 枚举出的可通过类型
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Navi3DMaskType {
        /**
       * @language zh_CN
       * 可通过
       * @version Egret 3.0
       * @platform Web,Native
       */
        static WalkAble: number;
    }
}
declare module egret3d {
    /**
    * @private
    * @language zh_CN
    * @class egret3d.Navi3DPoint2D
    * @classdesc
    * ��2d�ĵ�
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Navi3DPoint2D {
        /**
        * @language zh_CN
        * ����x
        * @version Egret 3.0
        * @platform Web,Native
        */
        x: number;
        /**
        * @language zh_CN
        * ����y
        * @version Egret 3.0
        * @platform Web,Native
        */
        y: number;
        /**
        * @language zh_CN
        * constructor
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
        * @language zh_CN
        * ���õ����õ�ָ��λ��
        * @param X   x����
        * @param Y   y����
        * @version Egret 3.0
        * @platform Web,Native
        */
        setTo(X: number, Y: number): void;
        /**
        * @language zh_CN
        * �Ƿ���ĳ��λ�õȼ�
        * @param X   x����
        * @param Y   y����
        * @return �Ƿ��ȼ�
        * @version Egret 3.0
        * @platform Web,Native
        */
        equals(X: number, Y: number): boolean;
        /**
        * @language zh_CN
        * �Ƿ���ĳ��λ�õȼ�
        * @param pt   ��
        * @return �Ƿ��ȼ�
        * @version Egret 3.0
        * @platform Web,Native
        */
        equalPoint(pt: Navi3DPoint2D): boolean;
        /**
        * @language zh_CN
        * ��ȡ����
        * @return ����
        * @version Egret 3.0
        * @platform Web,Native
        */
        length: number;
        /**
        * @language zh_CN
        * ��¡һ����λ�õ�
        * @return ��¡�ĵ�
        * @version Egret 3.0
        * @platform Web,Native
        */
        clone(): Navi3DPoint2D;
        /**
        * @language zh_CN
        * ��׼����������Ϊ1
        * @version Egret 3.0
        * @platform Web,Native
        */
        normalize(): void;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.Navi3DPoint
    * @classdesc
    * �����ĵ�
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Navi3DPoint extends Vector3D {
        /**
        * @language zh_CN
        * �����õ�Vector3D
        * @version Egret 3.0
        * @platform Web,Native
        */
        static CALC_VECTOR3D1: Vector3D;
        /**
        * @language zh_CN
        * �����õ�Vector3D
        * @version Egret 3.0
        * @platform Web,Native
        */
        static CALC_VECTOR3D2: Vector3D;
        /**
        * @language zh_CN
        * �����õ�Vector3D
        * @version Egret 3.0
        * @platform Web,Native
        */
        static CALC_VECTOR3D3: Vector3D;
        /**
        * @language zh_CN
        * �����õ�Vector3D
        * @version Egret 3.0
        * @platform Web,Native
        */
        static CALC_VECTOR3D4: Vector3D;
        /**
        * @language zh_CN
        * �����õ�Vector3D
        * @version Egret 3.0
        * @platform Web,Native
        */
        static CALC_VECTOR3D5: Vector3D;
        private _pointId;
        /**
        * @language zh_CN
        * constructor
        * @param    id   ����id
        * @param    X   ����x
        * @param    Y   ����y
        * @param    Z   ����z
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(id: number, X: number, Y: number, Z: number);
        /**
        * @language zh_CN
        * ��Navi3DMesh�е�Ψһid
        * @returns number Ψһid
        * @version Egret 3.0
        * @platform Web,Native
        */
        id: number;
        /**
        * @language zh_CN
        * �ж���������λ���Ƿ��ȼ�
        * @param    p1   ����1
        * @param    p2   ����2
        * @returns  boolean �Ƿ��ȼ�
        * @version Egret 3.0
        * @platform Web,Native
        */
        static equalPoint(p1: Vector3D, p2: Vector3D): boolean;
        /**
        * @language zh_CN
        * ��������������֮���ľ���
        * @param    p1   ����1
        * @param    p2   ����2
        * @returns number   ����
        * @version Egret 3.0
        * @platform Web,Native
        */
        static calcDistance(pt1: Vector3D, pt2: Vector3D): number;
    }
}
declare module egret3d {
    /**
    * @private
    * @language zh_CN
    * @class egret3d.Navi3DPointFat
    * @classdesc
    * 用于网格中的边上，碰撞检测的点
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Navi3DPointFat extends Navi3DPoint {
        private _ownerPoint;
        private _ownerEdge;
        /**
        * @language zh_CN
        * 与端点的距离
        * @version Egret 3.0
        * @platform Web,Native
        */
        radius: number;
        /**
        * @language zh_CN
        * constructor
        * @param    _point   端点
        * @param    _edge   边
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(_point: Navi3DPoint, _edge: Navi3DEdge);
        /**
        * @language zh_CN
        * @returns 隶属于哪个端点
        * @version Egret 3.0
        * @platform Web,Native
        */
        ownerPoint: Navi3DPoint;
        /**
        * @language zh_CN
        * @returns 隶属于那条边
        * @version Egret 3.0
        * @platform Web,Native
        */
        ownerEdge: Navi3DEdge;
        /**
        * @language zh_CN
        * 获得一个当前对象的复制，并且使用value进行位置修正
        * @param    value   缩放系数
        * @version Egret 3.0
        * @platform Web,Native
        */
        scalePoint(value?: number): Navi3DPointFat;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.Navi3DTriangle
    * @classdesc
    * 纯2d的点
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Navi3DTriangle extends Vector3D implements IQuadNode {
        private _id;
        private _plane;
        private _points;
        private _edges;
        /**
        * @language zh_CN
        * 相邻三角形
        * @version Egret 3.0
        * @platform Web,Native
        */
        private _neibourTriangles;
        /**
        * @language zh_CN
        * 点正对的边的关系表
        * @version Egret 3.0
        * @platform Web,Native
        */
        private _pointAgainstEdge;
        /**
        * @language zh_CN
        * 边正对着点的关系表
        * @version Egret 3.0
        * @platform Web,Native
        */
        private _edgeAgainstPoint;
        /**
        * @language zh_CN
        * 通过属性
        * @version Egret 3.0
        * @platform Web,Native
        */
        private _mask;
        /**
        * @language zh_CN
        * 该三角形在四叉树里的包围盒
        * @version Egret 3.0
        * @platform Web,Native
        */
        private _aabbBox;
        /**
        * @language zh_CN
        * f -- astar
        * @version Egret 3.0
        * @platform Web,Native
        */
        f: number;
        /**
        * @language zh_CN
        * g -- astar
        * @version Egret 3.0
        * @platform Web,Native
        */
        g: number;
        /**
        * @language zh_CN
        * h -- astar
        * @version Egret 3.0
        * @platform Web,Native
        */
        h: number;
        /**
        * @language zh_CN
        * 上一个节点 -- astar
        * @version Egret 3.0
        * @platform Web,Native
        */
        parent: Navi3DTriangle;
        /**
        * @language zh_CN
        * costMultiplier
        * @version Egret 3.0
        * @platform Web,Native
        */
        costMultiplier: number;
        /**
        * @language zh_CN
        * 开区间ID，标记寻路批次用
        * @version Egret 3.0
        * @platform Web,Native
        */
        openId: number;
        /**
        * @language zh_CN
        * 闭区间ID，标记寻路批次用
        * @version Egret 3.0
        * @platform Web,Native
        */
        closeId: number;
        /**
        * @language zh_CN
        * 静态变量2d点
        * @version Egret 3.0
        * @platform Web,Native
        */
        private static p1;
        /**
        * @language zh_CN
        * 静态变量2d点
        * @version Egret 3.0
        * @platform Web,Native
        */
        private static p2;
        /**
        * @language zh_CN
        * 静态变量2d点
        * @version Egret 3.0
        * @platform Web,Native
        */
        private static p3;
        /**
        * @language zh_CN
        * 静态变量2d点
        * @version Egret 3.0
        * @platform Web,Native
        */
        private static pp;
        aabb: QuadAABB;
        /**
        * @language zh_CN
        * 初始化包围盒（实现IQuadNode的接口）
        * @version Egret 3.0
        * @platform Web,Native
        */
        initAABB(): void;
        /**
        * @language zh_CN
        * 该quad是否是三角形（实现IQuadNode的接口）
        * @version Egret 3.0
        * @platform Web,Native
        */
        isTriangle: boolean;
        /**
        * @language zh_CN
        * constructor
        * @param    Id   ID
        * @param    edgeA   三角形边A
        * @param    edgeB   三角形边B
        * @param    edgeC   三角形边C
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(Id: number, edgeA: Navi3DEdge, edgeB: Navi3DEdge, edgeC: Navi3DEdge);
        /**
        * @language zh_CN
        * @private
        * 构建点正对着的边，以及边正对着的点的哈希表
        * @version Egret 3.0
        * @platform Web,Native
        */
        private genarateAgainstData();
        /**
        * @language zh_CN
        * @return 三角形的ID，在Navi3DMesh中的唯一ID
        * @version Egret 3.0
        * @platform Web,Native
        */
        id: number;
        /**
        * @language zh_CN
        * @return 该三角形所在平面
        * @version Egret 3.0
        * @platform Web,Native
        */
        plane: Plane3D;
        /**
        * @language zh_CN
        * @return 该三角形的三个顶点
        * @version Egret 3.0
        * @platform Web,Native
        */
        points: Array<Navi3DPoint>;
        /**
        * @language zh_CN
        * 加入相邻三角形
        * param edge     公共边
        * param triangle 相邻三角形
        * @version Egret 3.0
        * @platform Web,Native
        */
        addNeibour(edge: Navi3DEdge, triangle: Navi3DTriangle): void;
        /**
        * @language zh_CN
        * 获取相邻三角形列表
        * @param list            用于存储结果
        * @param edgeMask        边的通过属性过滤
        * @param triangleMask    三角形通过属性过滤
        * @returns Array<Navi3DTriangle> 获得到的相邻三角形的队列
        * @version Egret 3.0
        * @platform Web,Native
        */
        getNeibourTriangles(list?: Array<Navi3DTriangle>, edgeMask?: number, triangleMask?: number): Array<Navi3DTriangle>;
        /**
        * @language zh_CN
        * 使用mask对所有的边进行过滤，获得结果
        * @param list            用于存储结果
        * @param edgeMask        边的通过属性过滤
        * @returns Array<Navi3DEdge> 获得到的边的队列
        * @version Egret 3.0
        * @platform Web,Native
        */
        getEdges(list?: Array<Navi3DEdge>, edgeMask?: number): Array<Navi3DEdge>;
        /**
        * @language zh_CN
        * 获得通过属性
        * @returns boolean 是否通过
        * @version Egret 3.0
        * @platform Web,Native
        */
        walkAble: boolean;
        /**
        * @language zh_CN
        * 该三角形的三条边
        * @returns 该三角形的三条边
        * @version Egret 3.0
        * @platform Web,Native
        */
        edges: Array<Navi3DEdge>;
        /**
        * @language zh_CN
        * 获得通过属性
        * @param value      用于过滤的值
        * @returns boolean 是否通过
        * @version Egret 3.0
        * @platform Web,Native
        */
        testMask(value: number): boolean;
        /**
        * @language zh_CN
        * 根据三角形的一边获取另外一个点
        * @param edge      输入边
        * @returns Navi3DPoint 端点
        * @version Egret 3.0
        * @platform Web,Native
        */
        getEdgeAgainstPoint(edge: Navi3DEdge): Navi3DPoint;
        /**
        * @language zh_CN
        * 根据一个顶点，获取对面的边
        * @param point     输入点
        * @returns Navi3DEdge 边
        * @version Egret 3.0
        * @platform Web,Native
        */
        getPointAgainstEdge(point: Navi3DPoint): Navi3DEdge;
        /**
        * @language zh_CN
        * 稍微快一些的共边检测，需要等到mesh初始化完毕才可以
        * @param triangle  三角形
        * @returns Navi3DEdge 公共边
        * @version Egret 3.0
        * @platform Web,Native
        */
        getPublicEdge(triangle: Navi3DTriangle): Navi3DEdge;
        /**
        * @language zh_CN
        * 费时间一些的检测共边
        * @param triangle  三角形
        * @returns Navi3DEdge 公共边
        * @version Egret 3.0
        * @platform Web,Native
        */
        loopPublicEdge(triangle: Navi3DTriangle): Navi3DEdge;
        /**
        * @language zh_CN
        * 在三角形内随机一个位置
        * @returns Vector3D 点
        * @version Egret 3.0
        * @platform Web,Native
        */
        randomPoint(): Vector3D;
        /**
        * @language zh_CN
        * 判定2d点是否在一个2d的三角形内
        * @param pt0        被判定的点
        * @param pt1        三角形的顶点1
        * @param pt2        三角形的顶点2
        * @param pt3        三角形的顶点3
        * @returns boolean 是否处于三角形内
        * @version Egret 3.0
        * @platform Web,Native
        */
        static pointInsideTriangle(pt: Vector3D, pt0: Vector3D, pt1: Vector3D, pt2: Vector3D): boolean;
        /**
        * @language zh_CN
        * @private
        * @returns boolean 判定2d点是否在一个2d的三角形内
        * @version Egret 3.0
        * @platform Web,Native
        */
        private static pointInsideTriangle2d();
        /**
        * @language zh_CN
        * 叉乘计算
        * @param pt1        点1
        * @param pt2        点2
        * @param pt3        点3
        * @returns number 结果值
        * @version Egret 3.0
        * @platform Web,Native
        */
        private static product2d(p1, p2, p3);
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.Navi3DMesh
    * @classdesc
    * 解析寻路网格生成的对象
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Navi3DMesh {
        private _nav3dPoints;
        private _nav3dEdges;
        private _nav3dTriangles;
        private _path;
        /**
        * @language zh_CN
        * aId_bId的形式创建map表 a小于b
        * @version Egret 3.0
        * @platform Web,Native
        */
        private _edgesDict;
        /**
        * @language zh_CN
        * AStar
        * @version Egret 3.0
        * @platform Web,Native
        */
        private _nav3dAstar;
        /**
        * @language zh_CN
        * 路径分析对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        private _nav3dFunnel;
        /**
        * @language zh_CN
        * 四叉树
        * @version Egret 3.0
        * @platform Web,Native
        */
        private _terrainQuad;
        /**
        * @language zh_CN
        * 寻路结果
        * @version Egret 3.0
        * @platform Web,Native
        */
        private _triangleList;
        /**
        * @language zh_CN
        * 网格中的边列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        edges: Array<Navi3DEdge>;
        /**
        * @language zh_CN
        * 网格中的点列表
        * @returns  Array<Navi3DPoint> 点列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        points: Array<Navi3DPoint>;
        /**
        * @language zh_CN
        * 寻路结果中，3d点位置列表
        * @returns Array<Vector3D> 3d点位置列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        path: Array<Vector3D>;
        /**
        * @language zh_CN
        * 网格中的三角形列表
        * @returns Array<Navi3DTriangle> 三角形列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        triangles: Array<Navi3DTriangle>;
        /**
        * @language zh_CN
        * constructor
        * @param    pointList   顶点数据列表
        * @param    triangleIndexList   顶点顺序列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(pointList: Array<Vector3D>, triangleIndexList: Array<Array<number>>);
        /**
        * @language zh_CN
        * 输入一个点，获取一个能匹配的三角形
        * @param    point   输入的点
        * @param    threshold   结果三角形最大距离阈值
        * @returns   Navi3DTriangle 返回三角形
        * @version Egret 3.0
        * @platform Web,Native
        */
        getTriangleAtPoint(point: Vector3D, threshold?: number): Navi3DTriangle;
        /**
        * @language zh_CN
        * 输入起点终点，搜寻路径
        * @param    startPt   起点
        * @param    endPt   终点
        * @param    aiRadius   寻路肥胖半径
        * @returns  boolean  是否成功
        * @version Egret 3.0
        * @platform Web,Native
        */
        findPath(startPt: Vector3D, endPt: Vector3D, aiRadius?: number): boolean;
        /**
        * @language zh_CN
        * 初始化顶点列表
        * @param    pointList   顶点坐标列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        private initPoints(pointList);
        /**
        * @language zh_CN
        * 初始化三角形和边列表
        * @param    triangleIndexList   三角形顶点顺序列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        private initEdgesAndTriangles(triangleIndexList);
        /**
        * @language zh_CN
        * 根据两个点的ID，创建一条边
        * @param    pointAId   点A
        * @param    pointBId   点B
        * @returns  Navi3DEdge  创建的边
        * @version Egret 3.0
        * @platform Web,Native
        */
        private tryCreateEdge(pointAId, pointBId);
        /**
        * @language zh_CN
        * 创建关系表
        * @version Egret 3.0
        * @platform Web,Native
        */
        private createConnections();
    }
}
declare module egret3d {
    /**
    * @private
    * @language zh_CN
    * @class egret3d.Navi3DFunnel
    * @classdesc
    * 寻找路径的方法
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Navi3DFunnel {
        /**
        * @language zh_CN
        * 寻路的mesh
        * @version Egret 3.0
        * @platform Web,Native
        */
        private _navMesh;
        /**
        * @language zh_CN
        * 寻路对象的半径
        * @version Egret 3.0
        * @platform Web,Native
        */
        private _aiRadius;
        /**
        * @language zh_CN
        * Navi3DRouter
        * @version Egret 3.0
        * @platform Web,Native
        */
        private _router;
        /**
        * @language zh_CN
        * 结果
        * @version Egret 3.0
        * @platform Web,Native
        */
        private _result;
        /**
        * @language zh_CN
        * 公共边数据列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        private _tempPublicEdgeList;
        /**
        * @language zh_CN
        * 共面信息
        * @version Egret 3.0
        * @platform Web,Native
        */
        private _tempSamePlaneList;
        /**
        * @language zh_CN
        * 误差值
        * @version Egret 3.0
        * @platform Web,Native
        */
        static EPSILON: number;
        /**
        * @language zh_CN
        * 误差值的平方
        * @version Egret 3.0
        * @platform Web,Native
        */
        static POWER_EPSILON: number;
        /**
        * @language zh_CN
        * 计算用的Vector3D
        * @version Egret 3.0
        * @platform Web,Native
        */
        private static CROSS_TEST_DIRECTION;
        /**
        * @language zh_CN
        * constructor
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
        * @language zh_CN
        * 搜索路径
        * @param mesh   搜索的范围
        * @param startPt   起点
        * @param endPt   终点
        * @param triangleList   三角带
        * @param radius   半径
        * @return 是否寻路成功
        * @version Egret 3.0
        * @platform Web,Native
        */
        searchPath(mesh: Navi3DMesh, startPt: Vector3D, endPt: Vector3D, triangleList: Array<Navi3DTriangle>, radius?: number): boolean;
        path: Array<Vector3D>;
        /**
        * @language zh_CN
        * 检测是否满足搜索条件
        * @param startPt   起点
        * @param endPt   终点
        * @param triangleList   三角带
        * @version Egret 3.0
        * @platform Web,Native
        */
        private searchEnable(startPt, endPt, triangleList);
        /**
        * @language zh_CN
        * 执行搜索
        * @param startPt   起点坐标
        * @param endPt   终点坐标
        * @param triangleList   三角带
        * @version Egret 3.0
        * @platform Web,Native
        */
        private search(startPt, endPt, triangleList);
        /**
        * @language zh_CN
        * 将端点换成肥胖检测点
        * @version Egret 3.0
        * @platform Web,Native
        */
        private optimusTerminusFat();
        /**
        * @language zh_CN
        * 将穿越的公共边数据里的通过点加入到结果队列中
        * @version Egret 3.0
        * @platform Web,Native
        */
        private pushAllPathPoint2(startPt, endPt);
        /**
        * @language zh_CN
        * 优化通过的点
        * @version Egret 3.0
        * @platform Web,Native
        */
        private optimusByRadius();
        /**
        * @language zh_CN
        * 对某个边获取肥胖监测点
        * @param target 输入的坐标点
        * @version Egret 3.0
        * @platform Web,Native
        */
        private getFatPoint(edge, target);
    }
}
declare module egret3d {
    /**
    * @private
    * @language zh_CN
    * @class egret3d.Navi3DRouter
    * @classdesc
    * 纯2d的点
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Navi3DRouter {
        /**
        * @language zh_CN
        * 终点
        * @version Egret 3.0
        * @platform Web,Native
        */
        endPoint: Vector3D;
        /**
        * @language zh_CN
        * 当前点
        * @version Egret 3.0
        * @platform Web,Native
        */
        curPoint: Vector3D;
        /**
        * @language zh_CN
        * 射线A
        * @version Egret 3.0
        * @platform Web,Native
        */
        rayA: Vector3D;
        /**
        * @language zh_CN
        * 射线B
        * @version Egret 3.0
        * @platform Web,Native
        */
        rayB: Vector3D;
        /**
        * @language zh_CN
        * 射线A的对应点
        * @version Egret 3.0
        * @platform Web,Native
        */
        rayAPoint: Navi3DPoint;
        /**
        * @language zh_CN
        * 射线B的对应点
        * @version Egret 3.0
        * @platform Web,Native
        */
        rayBPoint: Navi3DPoint;
        /**
        * @language zh_CN
        * 静态变量射线1
        * @version Egret 3.0
        * @platform Web,Native
        */
        static RAY_1: Vector3D;
        /**
        * @language zh_CN
        * 静态变量射线2
        * @version Egret 3.0
        * @platform Web,Native
        */
        static RAY_2: Vector3D;
        /**
        * @language zh_CN
        * 计算用射线
        * @version Egret 3.0
        * @platform Web,Native
        */
        static TEST_RAY: Vector3D;
        /**
        * @language zh_CN
        * 计算用射线1
        * @version Egret 3.0
        * @platform Web,Native
        */
        static TEST_RAY_1: Vector3D;
        /**
        * @language zh_CN
        * 计算用射线2
        * @version Egret 3.0
        * @platform Web,Native
        */
        static TEST_RAY_2: Vector3D;
        /**
        * @language zh_CN
        * 计算用的Vector3D
        * @version Egret 3.0
        * @platform Web,Native
        */
        private static CALC_CROSS_POINT;
        /**
        * @language zh_CN
        * 计算用的Vector3D
        * @version Egret 3.0
        * @platform Web,Native
        */
        private static CALC_CROSS_TEST;
        /**
        * @language zh_CN
        * 记录下的拐点
        * @version Egret 3.0
        * @platform Web,Native
        */
        cornerPoint: Navi3DPoint;
        /**
        * @language zh_CN
        * 记录下的拐点所在的边
        * @version Egret 3.0
        * @platform Web,Native
        */
        cornerEdge: Navi3DEdge;
        /**
        * @language zh_CN
        * constructor
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
        * @language zh_CN
        * 设定继续通过
        * @param fromPt     起点
        * @param endPt      终点
        * @param fromEdge   上一次的边
        * @version Egret 3.0
        * @platform Web,Native
        */
        continuePass(fromPt: Vector3D, endPt: Vector3D, fromEdge: Navi3DEdge): void;
        /**
        * @language zh_CN
        * 继续通过
        * @param commonEdge          公共边
        * @param nextCommonEdge      下一个公共边
        * @param targetPoint         目标点
        * @param lastEdge            是否为最后一个边
        * @returns boolean 是否通过
        * @version Egret 3.0
        * @platform Web,Native
        */
        passEdge(commonEdge: Navi3DEdge, nextCommonEdge: Navi3DEdge, targetPoint: Vector3D, lastEdge: boolean): boolean;
        /**
        * @language zh_CN
        * @private
        * 通过边的时候，发现为抵达终点的处理函数
        * @param targetPoint          终点
        * @version Egret 3.0
        * @platform Web,Native
        */
        private checkEndPoint(targetPoint);
        /**
        * @language zh_CN
        * 计算射线与线段的两个fatPoint之间交点
        * @param _edge          线段
        * @param linePoint      射线起点
        * @param lineDirection  射线方向
        * @returns     Vector3D          交点
        * @version Egret 3.0
        * @platform Web,Native
        */
        calcCrossEdge(_edge: Navi3DEdge, linePoint: Vector3D, lineDirection: Vector3D): Vector3D;
        /**
        * @language zh_CN
        * 计算射线与线段的交点
        * @param _edge          线段
        * @param linePoint      射线起点
        * @param lineDirection  射线方向
        * @returns Vector3D 交点
        * @version Egret 3.0
        * @platform Web,Native
        */
        calcCrossPoint(segmentPt1: Vector3D, segmentPt2: Vector3D, linePoint: Vector3D, lineDirection: Vector3D): Vector3D;
        /**
        * @language zh_CN
        * 计算射线与线段交点，如果不在线段里面，则返回null
        * @param segmentPt1      线段1端
        * @param segmentPt2      线段另一端
        * @param linePoint       射线起点
        * @param lineDirection   射线方向
        * @return Vector3D 交点
        * @version Egret 3.0
        * @platform Web,Native
        */
        calcCrossPointOut(segmentPt1: Vector3D, segmentPt2: Vector3D, linePoint: Vector3D, lineDirection: Vector3D): Vector3D;
        /**
        * @language zh_CN
        * 判定计算射线与线段是否有交点
        * @param segmentPt1      线段1端
        * @param segmentPt2      线段另一端
        * @param linePoint       射线起点
        * @param lineDirection   射线方向
        * @returns boolean 是否有交点
        * @version Egret 3.0
        * @platform Web,Native
        */
        hasCrossPoint(segmentPt1: Vector3D, segmentPt2: Vector3D, linePoint: Vector3D, lineDirection: Vector3D): boolean;
        /**
        * @language zh_CN
        * @private
        * 判定一个点是否在两个射线的夹角内侧
        * @param point        点
        * @param vectorA      射线A
        * @param vectorB      射线B
        * @returns boolean 是在内侧
        * @version Egret 3.0
        * @platform Web,Native
        */
        private isPointAtCenter(point, vectorA, vectorB);
        /**
        * @language zh_CN
        * 重置该router
        * @version Egret 3.0
        * @platform Web,Native
        */
        resetData(): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.HUD
    * @classdesc
    * HUD直接渲染在屏幕上的一张贴图</p>
    * 可直接指定2维坐标，贴图的宽度和高度。</p>
    * 其底层渲染也是由4个顶点构成，顶点数据结构有位置信息和uv信息。</p>
    * 其所有的HUD对象的顶点信息数据都是共用的。</p>
    * @version Egret 3.0
    * @platform Web,Native
    */
    class HUD {
        /**
        * @language zh_CN
        * 显示双面的开关。
        * @version Egret 3.0
        * @platform Web,Native
        */
        bothside: boolean;
        /**
        * @language zh_CN
        * cull模式。 正面可见ContextConfig.BACK 背面可见ContextConfig.FRONT
        * @version Egret 3.0
        * @platform Web,Native
        */
        cullMode: number;
        private static singleQuadData;
        private static singleQuadIndex;
        private static vertexBytes;
        protected _diffuseTexture: ITexture;
        protected _viewPort: Rectangle;
        protected _rectangle: Rectangle;
        protected _transformMatrix: Matrix4_4;
        protected _change: boolean;
        protected _rotation: Vector3D;
        protected _scale: Vector3D;
        protected _position: Vector3D;
        protected _transformComponents: Vector3D[];
        private _indexBuffer3D;
        private _vertexBuffer3D;
        private _changeTexture;
        protected _passUsage: PassUsage;
        protected _attList: Array<GLSL.Attribute>;
        constructor(x?: number, y?: number, width?: number, height?: number);
        /**
        * @language zh_CN
        * 返回HUD的漫反射贴图。
        * @returns ITexture 漫反射贴图
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
         * @language zh_CN
         * 设置HUD的漫反射贴图。
         * @param texture ITexture
         * @version Egret 3.0
         * @platform Web,Native
         */
        diffuseTexture: ITexture;
        /**
        * @language zh_CN
        * 得到x坐标
        * @returns number x坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置x坐标
        * @param value x坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        x: number;
        /**
        * @language zh_CN
        * 得到y坐标
        * @returns number y坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置y坐标
        * @param value y坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        y: number;
        /**
        * @language zh_CN
        *  得到HUD的宽度
        * @returns number HUD的宽度宽
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置HUD的宽度
        * @param value HUD宽
        * @version Egret 3.0
        * @platform Web,Native
        */
        width: number;
        /**
        * @language zh_CN
        * 得到HUD的高度
        * @returns number HUD的高度
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置HUD的高度
        * @param value HUD高
        * @version Egret 3.0
        * @platform Web,Native
        */
        height: number;
        /**
        * @language zh_CN
        * 返回x旋转
        * @returns x旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置x轴旋转。</p>
        * @param value x轴旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        rotationX: number;
        /**
        * @language zh_CN
        * 返回y旋转
        * @returns y旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置y轴旋转。</p>
        * @param value y轴旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        rotationY: number;
        /**
        * @language zh_CN
        * 返回z旋转
        * @returns z旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置z轴旋转。</p>
        * @param value z轴旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        rotationZ: number;
        /**
        * @private
        */
        viewPort: Rectangle;
        /**
        * @private
        */
        transformMatrix: Matrix4_4;
        protected updateTexture(context: Context3DProxy): void;
        /**
        * @private
        */
        upload(context: Context3DProxy): void;
        /**
        * @private
        */
        draw(context: Context3DProxy): void;
    }
}
declare module egret3d {
    /**
     * @class egret3d.View3D
     * @classdesc
     * 渲染视图。</p>
     * view3D 是整个3D引擎的渲染视口，可以控制渲染窗口的大小，渲染的方式。</p>
     * 可以设置不同的相机 Camera3D。</p>
     * 交换不同的场景元素 Scene3D 。</p>
     * 当前的View3D中会有一个Scene3D的节点和一个Camera3D来进行场景中的渲染。
     * 整个渲染的主循环通过 update  。</p>
     * Engre3DCanvas 中的View3D列表会主动调用View3D的update,加入了Engre3DCanvas中的View3D列表后不需要使用者update
     * @includeExample View3D.ts
     * @see egret3d.Camera3D
     * @see egret3d.Scene3D
     * @see egret3d.Egret3DCanvas
     * @version Egret 3.0
     * @platform Web,Native
     */
    class View3D {
        static _contex3DProxy: Context3DProxy;
        protected _viewPort: Rectangle;
        protected _camera: Camera3D;
        protected _scene: Scene3D;
        protected _render: RenderBase;
        protected _scissorRect: Rectangle;
        protected _viewMatrix: Matrix4_4;
        protected _entityCollect: EntityCollect;
        protected _backColor: Vector3D;
        protected _cleanParmerts: number;
        private _sizeDiry;
        protected _renderTarget: RenderTargetTexture;
        protected _huds: Array<HUD>;
        renderTarget: RenderTargetTexture;
        /**
        * @language zh_CN
        * 构建一个view3d对象
        * @param x 视口的屏幕x坐标
        * @param y 视口的屏幕y坐标
        * @param width 视口的屏幕宽度
        * @param height 视口的屏幕高度
        * @param camera 摄像机
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(x: number, y: number, width: number, height: number, camera?: Camera3D);
        blender(cleanColor: boolean, cleanDepth: boolean): void;
        /**
        * @language zh_CN
        * 获取view3d背景颜色
        * @returns number 颜色值 a r g b
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置view3d背景颜色
        * @param value  颜色值 a r g b
        * @version Egret 3.0
        * @platform Web,Native
        */
        backColor: number;
        /**
        * @language zh_CN
        * 获取View3d中的渲染摄像机
        * @returns Camera3D 当前View3D的摄像机
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置View3d中的渲染摄像机
        * @param value 当前View3D的摄像机
        * @version Egret 3.0
        * @platform Web,Native
        */
        camera3D: Camera3D;
        /**
        * @language zh_CN
        * 获取View3d中的场景对象
        * @returns Scene3D 场景对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置View3d中的场景对象
        * @param sc 当前View3D的场景对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        scene: Scene3D;
        /**
        * @language zh_CN
        * 获得当前视口的屏幕x坐标
        * @returns number 视口的屏幕x坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置当前视口的屏幕x坐标
        * @param x 视口的屏幕x坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        x: number;
        /**
        * @language zh_CN
        * 获得当前视口的屏幕y坐标
        * @returns number 视口的屏幕y坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置当前视口的屏幕y坐标
        * @param y 视口的屏幕y坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        y: number;
        /**
        * @language zh_CN
        * 获取视口的屏幕宽度
        * @returns number 视口的屏幕宽度
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置视口的屏幕宽度
        * @param width 视口的屏幕宽度
        * @version Egret 3.0
        * @platform Web,Native
        */
        width: number;
        /**
        * @language zh_CN
        * 获取视口的屏幕高度
        * @returns number 视口的屏幕高度
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置视口的屏幕高度
        * @param width 视口的屏幕高度
        * @version Egret 3.0
        * @platform Web,Native
        */
        height: number;
        /**
        * @language zh_CN
        * 获取视口数据 x y width height
        * @returns Rectangle 视口数据
        * @version Egret 3.0
        * @platform Web,Native
        */
        viewPort: Rectangle;
        /**
        * @private
        * @language zh_CN
        * 获取View3D的数据收集对象
        * @returns EntityCollect 数据收集对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        entityCollect: EntityCollect;
        /**
        * @language zh_CN
        * 添加一个Object3D对象进场景根节点
        * @param child3d Object3D需要添加的对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        addChild3D(child3d: Object3D): void;
        /**
        * @language zh_CN
        * 从场景根节点中移除一个Object3D对象
        * @param child3d 需要移除的Object3D对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        removeChild3D(child3d: Object3D): void;
        /**
        * @language zh_CN
        * 检测x y 是否在当前视口内
        * @param x  x 坐标。
        * @param y  y 坐标。
        */
        inView3D(x: number, y: number): boolean;
        /**
        * @language zh_CN
        * 添加 HUD 到渲染列表中
        * @param hud 需要增加的HUD
        * @version Egret 3.0
        * @platform Web,Native
        */
        addHUD(hud: HUD): void;
        /**
        * @language zh_CN
        * 在渲染列表中删除一个HUD
        * @param hud 需要删除的HUD
        * @version Egret 3.0
        * @platform Web,Native
        */
        delHUD(hud: HUD): void;
        /**
        * @private
        * @language zh_CN
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(time: number, delay: number): void;
        /**
        * @language zh_CN
        * 请求全屏
        */
        static requestFullScreen(): void;
        /**
        * @language zh_CN
        * 退出全屏
        */
        static exitFullscreen(): void;
    }
}
declare module egret3d {
    /**
     * @class egret3d.View3D
     * @classdesc
     * VRView3D 会把场景渲染成两个视口。
     * 两个视口是由不同的摄像机渲染出来的结果，也相当由左右眼。
     * @see egret3d.Camera3D
     * @see egret3d.Scene3D
     * @see egret3d.Egret3DCanvas
     * @version Egret 3.0
     * @platform Web,Native
     */
    class VRView3D extends View3D {
        protected leftViewPort: Rectangle;
        protected rightViewPort: Rectangle;
        /**
        * @language zh_CN
        * 构建一个view3d对象
        * @param x 视口的屏幕x坐标
        * @param y 视口的屏幕y坐标
        * @param width 视口的屏幕宽度
        * @param height 视口的屏幕高度
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(x: number, y: number, width: number, height: number);
        protected updateViewport(): void;
        /**
        * @language zh_CN
        * 设置当前视口的屏幕x坐标
        * @param x 视口的屏幕x坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        x: number;
        /**
        * @language zh_CN
        * 设置当前视口的屏幕y坐标
        * @param y 视口的屏幕y坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        y: number;
        /**
        * @language zh_CN
        * 设置视口的屏幕宽度
        * @param width 视口的屏幕宽度
        * @version Egret 3.0
        * @platform Web,Native
        */
        width: number;
        /**
        * @language zh_CN
        * 设置视口的屏幕高度
        * @param width 视口的屏幕高度
        * @version Egret 3.0
        * @platform Web,Native
        */
        height: number;
        /**
        * @private
        * @language zh_CN
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(time: number, delay: number): void;
        /**
        * @language zh_CN
        * 获取两只眼睛之间的距离
        * @returns number 眼睛之间的距离
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置两只眼睛之间的距离
        * @param eyeDis  两只眼睛之间的距离
        * @version Egret 3.0
        * @platform Web,Native
        */
        eyeDistance: number;
    }
}
declare module egret3d {
    /**
    * @class egret3d.Egret3DCanvas
    * @classdesc
    * 3dCanvas 是一个3d渲染画布 它继承EventDispatcher 可以监听部分事件。
    * 如：Event3D.ENTER_FRAME 每帧响应回调事件
    * 一个3d渲染画布里面有多个view3d ，
    * 多个view3d进行渲染
    * @includeExample Egret3DCanvas.ts
    * @see egret3d.EventDispatcher
    * @see egret3d.View3D
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Egret3DCanvas extends EventDispatcher {
        /**
        * @private
        */
        static context3DProxy: Context3DProxy;
        /**
        * @private
        */
        private canvas3DRectangle;
        private canvas;
        private _view3DS;
        private sizeDiry;
        private _enterFrameEvent3D;
        protected _time: number;
        protected _delay: number;
        protected _timeDate: Date;
        protected _envetManager: EventManager;
        /**
        * @language zh_CN
        * 构造一个Egret3DCanvas对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(blend2D?: boolean);
        private initEvent();
        /**
        * @language zh_CN
        * 获取 Egret3DCanvas 的x坐标
        * @returns number 返回x坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置 Egret3DCanvas 的x坐标
        * @param x x坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        x: number;
        /**
        * @language zh_CN
        * 获取 Egret3DCanvas 的y坐标
        * @returns number 返回y坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置 Egret3DCanvas 的y坐标
        * @param y y坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        y: number;
        /**
        * @language zh_CN
        * 获取 Egret3DCanvas 的宽度
        * @returns number 返回Egret3DCanvas 的宽度
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置 Egret3DCanvas 的宽度
        * @param value Egret3DCanvas 的宽度
        * @version Egret 3.0
        * @platform Web,Native
        */
        width: number;
        /**
        * @language zh_CN
        * 获取 Egret3DCanvas 的高度
        * @returns number 返回Egret3DCanvas 的高度
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置 Egret3DCanvas 的高度
        * @param value Egret3DCanvas 的高度
        * @version Egret 3.0
        * @platform Web,Native
        */
        height: number;
        /**
        * @language zh_CN
        * 获取 Egret3DCanvas 所有的view3d
        * @returns Array<View3D> 返回Egret3DCanvas view3ds列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        view3Ds: Array<View3D>;
        /**
        * @language zh_CN
        * Egret3DCanvas 中 增加一个view3d
        * @param view3D 增加的渲染视口
        * @version Egret 3.0
        * @platform Web,Native
        */
        addView3D(view3D: View3D): void;
        /**
        * @language zh_CN
        * Egret3DCanvas 中 移除一个view3d
        * @param view3D 移除的渲染视口
        * @version Egret 3.0
        * @platform Web,Native
        */
        removeView3D(view3D: View3D): void;
        /**
        * @language zh_CN
        * Egret3DCanvas 开始启动
        * @version Egret 3.0
        * @platform Web,Native
        */
        start(): void;
        /**
        * @language zh_CN
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(delay: number): void;
        /**
        * @language zh_CN
        * 初始化,并创建显示区域的后台缓冲大小。
        * @param GPU_CONFIG
        * @param canvasRec
        * @event call
        */
        private resize(x, y, width, height);
    }
}
