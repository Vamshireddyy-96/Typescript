/*5)Create interface shape with shapename, and a method printname method. Now implement the
shape interface to class Cone, Sphere, and Rectangle class. Now you have t0 print the area of
 each shape using area method input will be pass to constructor of eachclass.
*/
var Cone = /** @class */ (function () {
    function Cone(shapeName, radius, lengthOfSlant) {
        this.shapeName = shapeName;
        this.radius = radius;
        this.lengthOfSlant = lengthOfSlant;
    }
    Cone.prototype.printName = function () {
        console.log("Shape Name: ".concat(this.shapeName));
    };
    Cone.prototype.area = function () {
        return Math.PI * this.radius * (this.radius + this.lengthOfSlant);
    };
    return Cone;
}());
var Sphere = /** @class */ (function () {
    function Sphere(shapeName, radius) {
        this.shapeName = shapeName;
        this.radius = radius;
    }
    Sphere.prototype.printName = function () {
        console.log("Shape Name: ".concat(this.shapeName));
    };
    Sphere.prototype.area = function () {
        return 4 * Math.PI * this.radius * this.radius;
    };
    return Sphere;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(shapeName, width, height) {
        this.shapeName = shapeName;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.printName = function () {
        console.log("Shape Name: ".concat(this.shapeName));
    };
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
//test
/* Surface area of cone = πr(r+L)
where L is the slant height of the cone */
var coneObj = new Cone('Cone', 23, 20);
console.log(coneObj.area());
var SphereObj = new Sphere('spher', 10);
console.log(SphereObj.area());
