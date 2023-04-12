async function display(){
    var mat = await fetch("https://fakestoreapi.com/products/");
    var pat = await mat.json();
    console.log(pat);
    var a="";
    pat.map((j)=>{
       a += '<h5>'+j.title+'</h5>';
       a += '<img src='+j.image+'>';
       a += '<h3>'+j.price+'</h3>';
       a += '<p>'+j.description+'<p>';
       a += '<h6>'+j.category+'</h6>'
       a += '<h4'>+j.rating.count+'<h4>'
      });
    console.log(a);
   var main = document.getElementById("display");
   console.log(main)
   main.innerHTML =a;
}