class Employee{
    id= 0 ;
    name = "Gopal";
    age =27;
    contact = 123;
    constructor(){}
    print(){
        console.log(this.id,this.name ,this.age,this.contact);
    }
}

class Company extends Employee{
    year= 2014 ;
    name = "GBT";
    employees:Number =<Number> "20";
    contact = 321;
    constructor(){
        super();
    }
    print(){
        console.log(this.year,this.name ,this.employees,this.contact);
    }
}

