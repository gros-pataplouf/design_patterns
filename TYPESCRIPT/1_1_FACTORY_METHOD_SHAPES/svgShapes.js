var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// a concatenation of 3  hex values
var Shape = /** @class */ (function () {
    function Shape(canvasHeight, canvasWidth, lineWidth, strokeColor, fillColor) {
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.lineWidth = lineWidth;
        this.strokeColor = strokeColor;
        this.fillColor = fillColor;
    }
    Shape.prototype.createCanvasRenderingContext = function () {
        var body = document.querySelector('body');
        var canvas = document.createElement('canvas');
        canvas.height = this.canvasHeight;
        canvas.width = this.canvasWidth;
        body.appendChild(canvas);
        var context = canvas.getContext('2d');
        return context;
    };
    return Shape;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(canvasHeight, canvasWidth, lineWidth, strokeColor, fillColor, startingPoint, sideLength) {
        var _this = _super.call(this, canvasHeight, canvasWidth, lineWidth, strokeColor, fillColor) || this;
        _this.startingPoint = startingPoint;
        _this.sideLength = sideLength;
        return _this;
    }
    Square.prototype.draw = function () {
        var context = this.createCanvasRenderingContext();
        context.lineWidth = this.lineWidth;
        context.rect(this.startingPoint[0], this.startingPoint[1], this.sideLength, this.sideLength);
        context.fillStyle = this.fillColor;
        context.strokeStyle = this.strokeColor;
        context.fill();
        context.stroke();
    };
    return Square;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(canvasHeight, canvasWidth, lineWidth, strokeColor, fillColor, center, radius) {
        var _this = _super.call(this, canvasHeight, canvasWidth, lineWidth, strokeColor, fillColor) || this;
        _this.center = center;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.draw = function () {
        var context = this.createCanvasRenderingContext();
        context.arc(this.center[0], this.center[1], this.radius, 0, 2 * Math.PI);
        context.fillStyle = this.fillColor;
        context.strokeStyle = this.strokeColor;
        context.fill();
        context.stroke();
    };
    return Circle;
}(Shape));
var myCircle = new Circle(200, 200, 70, 'red', 'blue', [100, 100], 40);
myCircle.draw();
var mySquare = new Square(500, 400, 7, 'yellow', 'blue', [20, 100], 150);
mySquare.draw();
