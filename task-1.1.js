var a = prompt("enter the mark");
alert(a);
switch(a){
    case mark>40:
        alert("you are passed");
        break;
    case mark<40:
        alert("you are fail");
        break;
    case mark>80:
        alert("distinction")
        default:alert("invalid");
        break;
}