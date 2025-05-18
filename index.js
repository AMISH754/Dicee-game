var p1=player1();
var p2=player2();
if(p1>p2)
document.querySelector("h1").innerHTML="🚩Player1 Wins!🚩";
else if(p2>p1)
document.querySelector("h1").innerHTML="🚩er2 Wins!🚩";
else 
   document.querySelector("h1").innerHTML="Draw";

function player1(){
var randomVariable=Math.random();
randomVariable=Math.floor(randomVariable*6+1);
if(randomVariable==1)
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
    else if(randomVariable==2)
            document.querySelector(".img1").setAttribute("src","./images/dice2.png");
    else if (randomVariable==3)
        document.querySelector(".img1").setAttribute("src","./images/dice3.png");
    else if(randomVariable==4)
            document.querySelector(".img1").setAttribute("src","./images/dice4.png");
    else if(randomVariable==5)
        document.querySelector(".img1").setAttribute("src","./images/dice5.png");
else
    document.querySelector(".img1").setAttribute("src","./images/dice6.png");
return randomVariable;
}

  function player2(){
    var  randomVariable2=Math.random();
    randomVariable2=Math.floor(randomVariable2*6+1);
if(randomVariable2==1)
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
    else if(randomVariable2==2)
            document.querySelector(".img2").setAttribute("src","./images/dice2.png");
    else if (randomVariable2==3)
        document.querySelector(".img2").setAttribute("src","./images/dice3.png");
    else if(randomVariable2==4)
            document.querySelector(".img2").setAttribute("src","./images/dice4.png");
    else if(randomVariable2==5)
        document.querySelector(".img2").setAttribute("src","./images/dice5.png");
else
     document.querySelector(".img2").setAttribute("src","./images/dice6.png");
    return randomVariable2;
}

