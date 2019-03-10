// function add<T extends Number | String>(a: T , b: T){
//     console.log(a+b);
// }

// add<Number>(2,3)
// function add<U,B>(a:U ,b: B): any{
//     return a-b;
// }

// console.log(add(<Number>20,<String>"Thakur"))

// class EmplyeeB{
//     Name:String;
//     Contact:Number
// }
// var gg:any;
// console.log(typeof(gg as EmplyeeB))

var i:any = "10";
console.log(typeof(<number> i))
