//string data type
    var a='Hello';      //using single quotes
    var b="how are u";  //using double quotes
    console.log(a);     //display the variables
    console.log(b);

//number datatype
    var x=10;
    var y=45.7;
    var z=x+y;
    var d=4.25e+6;
    console.log(z);
    console.log(d);

//infinity 
    console.log(56/0);
    console.log(-16/0);
    console.log(45/-0);

//NaN represents not a number value.
    console.log("manoj"/2)
    console.log("manoj"/2+10)
    console.log(Math.sqrt(-1))

//boolean datatype
    var a=10,b=30,c=50;
    console.log(b>a);   //true
    console.log(b>c);   //false

//undefined datatype
    var a;          //undefined value.not assigned the value
    var b="manoj";
    console.log(a)
    console.log(b)

//array datatype
var a=["manoj","harish","vimal","arun","mandyan"];
var city =["cbe","sulur","hopes","papampatti","gandipuram"];
console.log(a[3]);
console.log(city[2]);

//join function(array) 
console.log(city.join("-"))   //It joins the elements of an array as a string         
console.log(city.join("/"))
console.log(city.join(","))
console.log(city.join(" "))

//concat function(array)
console.log(city.concat(a));