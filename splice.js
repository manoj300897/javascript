var colors =["red","green","blue"];
var removed = colors.splice(0,1);    //remove the first index element
console.log(colors);                   //prints green,blue
console.log(removed);                   //prints red
console.log(removed.length);            //prints 1 length of value
 removed = colors.splice(1,0,"pink","yellow");   //insert two items at the position of index 1.   0 is the start position,1 0 howmany elements we delete.
 console.log(colors);
 console.log(removed);
 console.log(removed.length);
 removed=colors.splice(1,1,"purple","viloet");
 console.log(colors);
 console.log(removed);
 console.log(removed.length);