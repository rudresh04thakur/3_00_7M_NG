var Employee = /** @class */ (function () {
    //j:[Number,String]=[0,"Gopal"]
    function Employee(id, name, age, contact) {
        var _a;
        if (age === void 0) { age = 18; }
        this.id = 0;
        this.name = "Gopal";
        this.age = 27;
        this.contact = 123;
        _a = [id, name, age], this.id = _a[0], this.name = _a[1], this.age = _a[2];
        if (contact != undefined)
            this.contact = contact;
    }
    Employee.prototype.print = function () {
        console.log(this.id, this.name, this.age, this.contact);
    };
    return Employee;
}());
var e = new Employee(1, "Ganesh", 23);
e.print();
