var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
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
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company() {
        var _this = _super.call(this) || this;
        _this.year = 2014;
        _this.name = "GBT";
        _this.employees = "20";
        _this.contact = 321;
        return _this;
    }
    Company.prototype.print = function () {
        console.log(this.year, this.name, this.employees, this.contact);
    };
    return Company;
}(Employee));
