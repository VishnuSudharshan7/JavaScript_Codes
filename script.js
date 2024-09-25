const title =document.querySelector("h1")
title.style.cssText=`text-align:center; color:white; text-shadow: 0px 0px 5px rgb(212, 47, 212), 0px 0px 5px rgb(21, 194, 350);`
const body=document.querySelector("body");
body.style.cssText=`background-image:url("bg.png");  background-repeat:no-repeat; background-size:cover; height:98vh;width:99.5%`


const car = document.querySelectorAll(".car")
const gocar=setInterval(start,100)
let a=0;
 

function start(){
 a=a+1;
 if (a<=100){
 car[1].style.cssText=`position:absolute; top:59%;font-size: 90px;`
 car[1].style.right=a*1.5+"%"
 car[0].style.cssText=`position:absolute; top:68%;font-size: 90px;`
 car[0].style.right=a*2+"%"
  car[2].style.cssText=`position:absolute; top:10%;font-size: 90px;`
 car[2].style.right=a*4+"%"
 }
 else{
   a=0
 }
}
