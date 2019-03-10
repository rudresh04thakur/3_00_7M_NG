//var global 
//let block level or local

class Employee{
    id: any= 0 ;
    name = "Gopal";
    age:Number =27;    
    contact = 123;
    
    //j:[Number,String]=[0,"Gopal"]
    
    constructor(id,name,age=18,contact?:number){
        [this.id,this.name,this.age]=[id,name,age]
        if(contact!=undefined)
            this.contact = contact
    }
    print(){
        console.log(this.id,this.name ,this.age,this.contact);
    }
}

var e  = new Employee(1,"Ganesh",23)
e.print();