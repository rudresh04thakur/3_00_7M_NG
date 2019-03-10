class Employee{
    id: any= 0 ;
    name = "Gopal";
    age:Number =27;    
    contact = 123;
    //j:[Number,String]=[0,"Gopal"]
    
    constructor(){
        
    }
    print(){
        console.log(this.id,this.name ,this.age,this.contact);
    }
}

interface demo{
    counter:Number;
}
abstract class demo1{
    counter1:Number = 10;
    abstract demo1();
}
class Company extends Employee{
    year= 2014 ;
    name = "GBT";
    employees:Number =20
    contact = 321;
    constructor(){
        super();
    }
    print(){
        super.print();
        console.log(this.year,this.name ,this.employees,this.contact);
    }

    // print(a,b):Employee{
    //     let j:Employee
    //     super.print();
    //     console.log(this.year,this.name ,this.employees,this.contact);
    //     return j;
    // }
}

class BankAccount extends Company implements demo,demo1{
    //[account:Number,bank:String] = [324234321232,"Union"];
    account:Number = 1234;
    counter:Number;
    counter1  = 20;
    bank:String="Union Bank";
    constructor(){
        super();
    }
    demo1(){
        console.log(this.counter1)
    }
    print(){
        super.print();
        console.log(this.account,this.bank)
    }
}

var a = new BankAccount();
a.print();

//tuple
//spread
