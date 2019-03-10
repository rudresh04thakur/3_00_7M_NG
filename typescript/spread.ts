var [x,y,z,m] = [10, 20, 30, 40];
var q = [10, 20, 30, 40];
console.log("Outer Function",x);

function xyz(...q){
    var [a,b,c,d] = q;
    console.log("In Function",a)
    console.log("In Function",b)
    console.log("In Function",c)
    console.log("In Function",d)
}

xyz(...q)