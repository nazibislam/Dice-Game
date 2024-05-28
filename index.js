var ran= Math.random();
var randomNumber1=Math.floor(ran*6)+1;

document.getElementsByClassName("img1")[0].classList.add("visible");
document.getElementsByClassName("img1")[1].classList.add("visible");
document.getElementsByClassName("img1")[2].classList.add("visible");
document.getElementsByClassName("img1")[3].classList.add("visible");
document.getElementsByClassName("img1")[4].classList.add("visible");
document.getElementsByClassName("img1")[5].classList.add("visible");





if(randomNumber1==1){
  document.getElementsByClassName("img1")[0].classList.remove("visible");
}
if(randomNumber1==2){
  document.getElementsByClassName("img1")[1].classList.remove("visible");
}
if(randomNumber1==3){
  document.getElementsByClassName("img1")[2].classList.remove("visible");
}
if(randomNumber1==4){
  document.getElementsByClassName("img1")[3].classList.remove("visible");
}
if(randomNumber1==5){
  document.getElementsByClassName("img1")[4].classList.remove("visible");
}
if(randomNumber1==6){
  document.getElementsByClassName("img1")[5].classList.remove("visible");
}

var ran1= Math.random();
var randomNumber2=Math.floor(ran1*6)+1;
document.getElementsByClassName("img2")[0].classList.add("visible");
document.getElementsByClassName("img2")[1].classList.add("visible");
document.getElementsByClassName("img2")[2].classList.add("visible");
document.getElementsByClassName("img2")[3].classList.add("visible");
document.getElementsByClassName("img2")[4].classList.add("visible");
document.getElementsByClassName("img2")[5].classList.add("visible");





if(randomNumber2==1){
  document.getElementsByClassName("img2")[0].classList.remove("visible");
}
if(randomNumber2==2){
  document.getElementsByClassName("img2")[1].classList.remove("visible");
}
if(randomNumber2==3){
  document.getElementsByClassName("img2")[2].classList.remove("visible");
}
if(randomNumber2==4){
  document.getElementsByClassName("img2")[3].classList.remove("visible");
}
if(randomNumber2==5){
  document.getElementsByClassName("img2")[4].classList.remove("visible");
}
if(randomNumber2==6){
  document.getElementsByClassName("img2")[5].classList.remove("visible");

}

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player1 Wins"
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player2 Wins"
}
else{
  document.querySelector("h1").innerHTML="It's a Draw!"
}
