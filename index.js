
function dice1(){
    var n = Math.random();
    n = n*6;
    n = Math.floor(n)+1;
    var randonmImage = `images/dice${n}.png`;
    var image1=document.querySelectorAll("img")[0];
    image1.setAttribute("src",randonmImage)

    return n;
}

function dice2(){
    var n = Math.random();
    n = n*6;
    n = Math.floor(n)+1;
    var randonmImage = `images/dice${n}.png`;
    var image1=document.querySelectorAll("img")[1];
    image1.setAttribute("src",randonmImage)
    return n;
}

function start()
{
    var count1=0;
    var count2=0;
    var num1=dice1();
    var num2=dice2();
    if(num1>num2)
    {
        
        document.getElementById('result').innerHTML ="The Winner is Player 1" ;
        console.log("The Winner is Player 1");
        count1++;
    }
    else if(num2>num1)
    {
        
        document.getElementById('result').innerHTML = "The Winner is Player 2";
        console.log("The Winner is Player 2");
        count2++;

    }
    else{
        document.getElementById('result').innerHTML = "Its a Draw!";
        console.log("Its a Draw!");
        count1++;
        count2++;
    }
}

// function play()
// {
//     for(var i=0;i<3;i++)
//     {
//         start();
//     }
//     if(count1>count2)
//     console.log("The Ultimate Winner of this game is Player 1");
//     else if(count2>count1)
//     console.log("The Ultimate Winner of this game is Player 2");
//     else
//     console.log("Its a Ultimate Draw!");
// }