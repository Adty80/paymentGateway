function fun() {
  var checkbox = document.getElementById("rememberMe");
  
  if (checkbox.checked) {
      checkbox.style.backgroundColor = "black";
      checkbox.style.color = "yellow";
  } else {
      checkbox.style.backgroundColor = "";
      checkbox.style.color = "";
  }
}

function val(){

let a =document.getElementById("name").value;
let b =document.getElementById("pass").value;

var correct_way=/^[A-Za-z]+$/;

if(a==="" ){

  let c =document.getElementById("mess").innerHTML="Username Should not be Empty";
    return false;
}
if(b==="" ){

  let c =document.getElementById("mess2").innerHTML="Password Should not be Empty";
    return false;
}


if(!a.match(correct_way) ){
    document.getElementById("mess").innerHTML="only alphabet is allowed";
    return false ;
}

if(a.length>8 || a.length<3 ){
    document.getElementById("mess").innerHTML="Usename should not greater than 8 and not less than 3 ";
    return false ;
 
}

if(b.length<5 || b.length>20 ){

    document.getElementById("mess2").innerHTML="Password is not less than 5 and more than 20 Characters ";
  return false;
}
else{

    document.getElementById("mess2").innerHTML="";
  }


}

function Sub(){

let a=document.getElementById("pag").value;

a=document.getElementById("pag").innerHTML=a-1;

}

gsap.from("h1",
{

y:-500,
stagger:0.5,
duration:1,
delay:1,




})