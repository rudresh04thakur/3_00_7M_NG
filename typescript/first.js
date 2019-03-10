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
var demo1 = /** @class */ (function () {
    function demo1() {
        this.counter1 = 10;
    }
    return demo1;
}());
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company() {
        var _this = _super.call(this) || this;
        _this.year = 2014;
        _this.name = "GBT";
        _this.employees = 20;
        _this.contact = 321;
        return _this;
    }
    Company.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log(this.year, this.name, this.employees, this.contact);
    };
    return Company;
}(Employee));
var BankAccount = /** @class */ (function (_super) {
    __extends(BankAccount, _super);
    function BankAccount() {
        var _this = _super.call(this) || this;
        //[account:Number,bank:String] = [324234321232,"Union"];
        _this.account = 5444444444444443;
        _this.counter1 = 20;
        _this.bank = "Union Bank";
        return _this;
    }
    BankAccount.prototype.demo1 = function () {
        console.log(this.counter1);
    };
    BankAccount.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log(this.account, this.bank);
    };
    return BankAccount;
}(Company));
var a = new BankAccount();
a.print();
//tuple
//spread
