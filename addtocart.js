function add(){
    let addd = parseInt(document.getElementById('lone').innerHTML);
    addd = addd+1;
    document.getElementById('lone').innerHTML=addd;
    let name = (document.getElementById('name').innerHTML);
    let des = (document.getElementById('des').innerHTML);
   
    let mult =parseInt(document.getElementById("price").innerHTML);
    mult=80*addd;
    document.getElementById("price").innerHTML=mult;
    let mu =parseInt(document.getElementById("price").innerHTML);
    mu=80*addd;
    document.getElementById("show3").innerHTML=`Price : ${mult}   `;
    document.getElementById("show2").innerHTML=`Quantity : ${addd}   `;
    document.getElementById("show1").innerHTML= `Name : ${name}   `   ;
    document.getElementById("show4").innerHTML= `Description : ${des}   ` ;
}
function min(){
    let addd = parseInt(document.getElementById('lone').innerHTML);
    addd = addd-1;
    document.getElementById('lone').innerHTML=addd;
    let name = (document.getElementById('name').innerHTML);
    let des = (document.getElementById('des').innerHTML);
    let mult =parseInt(document.getElementById("price").innerHTML);
    mult=80*addd;
    document.getElementById("price").innerHTML=mult;
    let mu =parseInt(document.getElementById("price").innerHTML);
    mu=80*addd;
    document.getElementById("show3").innerHTML=`Price : ${mult}   `;
    document.getElementById("show2").innerHTML=`Quantity : ${addd}   `;
    document.getElementById("show1").innerHTML= `Name : ${name}   `   ;
    document.getElementById("show4").innerHTML= `Description : ${des}   ` ;
}


function add1(){
    let addd = parseInt(document.getElementById('aone').innerHTML);
    addd = addd+1;
    let name = (document.getElementById('name1').innerHTML);
    let des = (document.getElementById('des1').innerHTML);
    document.getElementById('aone').innerHTML=addd;
    let mult =parseInt(document.getElementById("price1").innerHTML);
    mult=120*addd;
    document.getElementById("price1").innerHTML=mult;
    let mu =parseInt(document.getElementById("price1").innerHTML);
    mu=120*addd;
    document.getElementById("show3").innerHTML=`Price : ${mult}   `;
    document.getElementById("show2").innerHTML=`Quantity : ${addd}   `;
    document.getElementById("show1").innerHTML= `Name : ${name}   `   ;
    document.getElementById("show4").innerHTML= `Description : ${des}   ` ;
}
function min1(){
    let addd = parseInt(document.getElementById('aone').innerHTML);
    addd = addd-1;
    document.getElementById('aone').innerHTML=addd;
    let name = (document.getElementById('name1').innerHTML);
    let des = (document.getElementById('des1').innerHTML);
    let mult =parseInt(document.getElementById("price1").innerHTML);
    mult=120*addd;
    document.getElementById("price1").innerHTML=mult;
    let mu =parseInt(document.getElementById("price1").innerHTML);
    mu=120*addd;
    document.getElementById("show3").innerHTML=`Price : ${mult}   `;
    document.getElementById("show2").innerHTML=`Quantity : ${addd}   `;
    document.getElementById("show1").innerHTML= `Name : ${name}   `   ;
    document.getElementById("show4").innerHTML= `Description : ${des}   ` ;
}

function add2(){
    let addd = parseInt(document.getElementById('bone').innerHTML);
    let name = (document.getElementById('name2').innerHTML);
    let des = (document.getElementById('des2').innerHTML);
    addd = addd+1;
    document.getElementById('bone').innerHTML=addd;
    let mult =parseInt(document.getElementById("price2").innerHTML);
    mult=220*addd;
    document.getElementById("price2").innerHTML=mult;
    let mu =parseInt(document.getElementById("price2").innerHTML);
    mu=220*addd;
    document.getElementById("show3").innerHTML=`Price : ${mult}   `;
    document.getElementById("show2").innerHTML=`Quantity : ${addd}   `;
    document.getElementById("show1").innerHTML= `Name : ${name}   `   ;
    document.getElementById("show4").innerHTML= `Description : ${des}   ` ;
    
    }

function min2(){
    let addd = parseInt(document.getElementById('bone').innerHTML);
    addd = addd-1;
    document.getElementById('bone').innerHTML=addd;
      let name = (document.getElementById('name2').innerHTML);
    let des = (document.getElementById('des2').innerHTML);
    let mult =parseInt(document.getElementById("price2").innerHTML);
    mult=220*addd;
    document.getElementById("price2").innerHTML=mult;
    let mu =parseInt(document.getElementById("price2").innerHTML);
    mu=220*addd;
    document.getElementById("show3").innerHTML=`Price : ${mult}   `;
    document.getElementById("show2").innerHTML=`Quantity : ${addd}   `;
    document.getElementById("show1").innerHTML= `Name : ${name}   `   ;
    document.getElementById("show4").innerHTML= `Description : ${des}   ` ;
}



function hideCard() {
    // Get the card element
    var pizzaCard = document.querySelector(".card");

    // Set the display property to 'none' to hide the card
    pizzaCard.style.display = 'none';
  }

function hideCard2() {
    // Get the card element
    var pizzaCard = document.querySelector(".card2");

    // Set the display property to 'none' to hide the card
    pizzaCard.style.display = 'none';
  }

function hide() {
    // Get the card element
    var pizzaCard = document.querySelector(".coo");

    // Set the display property to 'none' to hide the card
    pizzaCard.style.display = 'none';
  }


  gsap.from("#tc,#insta,#pp,#all,#fb,#lin,#insta,#twitter,#axiom,#em,#spicenet",
{
  y:40,
  duration:1 , 
  stagger:0.3,
  yoyo:true,
  scrollTrigger:{
    trigger:"#footer",
    scroller:"body",
    markers:false,
    start:"top 80%",

   
 
  }
  

  })