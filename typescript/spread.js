var _a = [10, 20, 30, 40], x = _a[0], y = _a[1], z = _a[2], m = _a[3];
var q = [10, 20, 30, 40];
console.log("Outer Function", x);
function xyz() {
    var q = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        q[_i] = arguments[_i];
    }
    var a = q[0], b = q[1], c = q[2], d = q[3];
    console.log("In Function", a);
    console.log("In Function", b);
    console.log("In Function", c);
    console.log("In Function", d);
}
xyz.apply(void 0, q);
