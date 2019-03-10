export class Employee{
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