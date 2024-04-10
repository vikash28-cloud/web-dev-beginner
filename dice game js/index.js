
let randomNum1 = Math.floor(Math.random()*6)+1;   //generate random number for dice 1
console.log(randomNum1);
document.querySelector(".img1").setAttribute("src","./images/dice"+randomNum1+".png");


let randomNum2 = Math.floor(Math.random()*(7-1)+1);   //generate random number for dice 2
console.log(randomNum2);
document.querySelector(".img2").setAttribute("src","./images/dice"+randomNum2+".png");



if(randomNum1==randomNum2)
{
    document.querySelector("h1").innerHTML = "Draw !";
}
else if(randomNum1>randomNum2)
{
    document.querySelector("h1").innerHTML = "🚩Player1 Wins!";

}
else if(randomNum1<randomNum2)
{
    document.querySelector("h1").innerHTML = "Player2🚩Wins!";
}

document.querySelector("title").innerHTML  = "Dice Game";