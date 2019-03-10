"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    //j:[Number,String]=[0,"Gopal"]
    function Employee() {
        this.id = 0;
        this.name = "Gopal";
        this.age = 27;
        this.contact = 123;
    }
    Employee.prototype.print = function () {
        console.log(this.id, this.name, this.age, this.contact);
    };
    return Employee;
}());
exports.Employee = Employee;
