let title = document.getElementById("statusText");
let turn ;
let player1 ;
let player2 ;
let count= 1;
let squares = [];



let startBtn = document.getElementById("startBtn");
let roundBtn = document.getElementById("roundBtn");
let restartBtn = document.getElementById("restartBtn");

let player1Score = document.getElementById("player-1-score");
let score1 = parseInt(player1Score.innerHTML)
let player2Score = document.getElementById("player-2-score");
let score2 = parseInt(player2Score.innerHTML)

console.log(parseInt(player1Score))

startBtn.addEventListener("click", startGame)
roundBtn.addEventListener("click", newRound)
restartBtn.addEventListener("click", restart)

function getName() 
{
    player1 = document.getElementById("player-1").value ;
    player2 = document.getElementById("player-2").value ;
}


function startGame()
{
    getName();
    if(player1 !="" && player2 !="")
    {
        document.getElementById("player1-box").innerHTML = player1;
        document.getElementById("player2-box").innerHTML = player2;
        turn= "player1";
        title.innerHTML=player1 + "'s Turn Now";
    };
    
}

function history()
{

}

function newRound()
{
    count+=1;

    for(let i=1 ;i<10;i++)
    {
        document.getElementById("box" + i).innerHTML = "";
        document.getElementById("box" + i).style.background ="white";
    }

    if(count%2 == 0)
    {
        turn= "player2";
        title.innerHTML=player2 + "'s Turn Now";

    }
    else
    {   
        turn= "player1";
        title.innerHTML=player1 + "'s Turn Now";
    }
}

function end(num1,num2,num3)
{
    if(squares[num1] == "X")
    {
        title.innerHTML = player1 + " is the WINNER";

        score1 += 1;
        player1Score.innerHTML = score1;
    }
    else if(squares[num1] == "O")
    {
        title.innerHTML = player2 + " is the WINNER";
        score2 += 1;
        player2Score.innerHTML = score2;
    }
    
    document.getElementById("box"+ num1).style.background = "rgba(0, 0, 0, 0.7)";
    document.getElementById("box"+ num2).style.background = "rgba(0, 0, 0, 0.7)";
    document.getElementById("box"+ num3).style.background = "rgba(0, 0, 0, 0.7)";
    turn=""
}


function winner()
{
    
    for( let i =1; i<10; i++)
    {
        squares[i]= document.getElementById("box" + i).innerHTML;
    }
    
    let counter = 0
    for(let i=1;i<10;i++)
    {
        if(squares[i] == "")
        {
            counter+=1;
        }
    }

    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1]!= "")
    {
        end(1,2,3)
    }
    else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[4]!= "")
    {
        end(4,5,6)
    }
    else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[7]!= "")
    {
        end(7,8,9)
    }
    else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1]!= "")
    {
        end(1,4,7)
    }
    else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[8]!= "")
    {
        end(2,5,8)
    }
    else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[9]!= "")
    {
        end(3,6,9)
    }
    else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[1]!= "")
    {
        end(1,5,9)
    }
    else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[3]!= "")
    {
        end(3,5,7)
    }


    else if( counter == 0)
    {
        turn = "";
        title.innerHTML="DRAW";
    }
}



function game(id)
{
    let element = document.getElementById(id)
    if(turn ==="player1" && element.innerHTML =="")
    {
        element.innerHTML = "X";
        turn = "player2";
        title.innerHTML=player2 + "'s Turn Now";
    }
    else if( turn ==="player2" && element.innerHTML =="" )
    {
        element.innerHTML = "O";
        turn ="player1";
        title.innerHTML=player1 + "'s Turn Now";
    }
    winner();
}

function restart()
{
    location.reload();
}
