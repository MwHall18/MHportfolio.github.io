var player1Turn = true
var win = false
var spots = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var turnCounter = 0;

function play0()
{
    if (win == false)
    {
        if (spots[0] == 0)
        {
            if(player1Turn == true)
            {
                button0.style.color = "red";
                button0.value = "X"
                player1Turn = false
                document.getElementById("turn").innerHTML = ("Player 2 Turn")
                spots[0] = 1
                turnCounter++
            }
            else if (player1Turn == false)
            {
                button0.style.color = "blue";
                button0.value = "O"
                player1Turn = true
                document.getElementById("turn").innerHTML = ("Player 1 Turn")
                spots[0] = 2
                turnCounter++
            }
        }
    }
    else {}
}
function play1()
{
    if (win == false)
    {
        if (spots[1] == 0)
        {
            if(player1Turn == true)
            {
                button1.style.color = "red";
                button1.value = "X"
                player1Turn = false
                document.getElementById("turn").innerHTML = ("Player 2 Turn")
                spots[1] = 1
                turnCounter++
            }
            else if (player1Turn == false)
            {
                button1.style.color = "blue";
                button1.value = "O"
                player1Turn = true
                document.getElementById("turn").innerHTML = ("Player 1 Turn")
                spots[1] = 2
                turnCounter++
            }
        }
    }
}
function play2()
{
    if (win == false)
    {
        if (spots[2] == 0)
        {
            if(player1Turn == true)
            {
                button2.style.color = "red";
                button2.value = "X"
                player1Turn = false
                document.getElementById("turn").innerHTML = ("Player 2 Turn")
                spots[2] = 1
                turnCounter++
            }
            else if (player1Turn == false)
            {
                button2.style.color = "blue";
                button2.value = "O"
                player1Turn = true
                document.getElementById("turn").innerHTML = ("Player 1 Turn")
                spots[2] = 2
                turnCounter++
            }
        }
    }
}
function play3()
{
    if (win == false)
    {
        if (spots[3] == 0)
        {
            if(player1Turn == true)
            {
                button3.style.color = "red";
                button3.value = "X"
                player1Turn = false
                document.getElementById("turn").innerHTML = ("Player 2 Turn")
                spots[3] = 1
                turnCounter++
            }
            else if (player1Turn == false)
            {
                button3.style.color = "blue";
                button3.value = "O"
                player1Turn = true
                document.getElementById("turn").innerHTML = ("Player 1 Turn")
                spots[3] = 2
                turnCounter++
            }
        }
    }
}
function play4()
{
    if (win == false)
    {
        if (spots[4] == 0)
        {
            if(player1Turn == true)
            {
                button4.style.color = "red";
                button4.value = "X"
                player1Turn = false
                document.getElementById("turn").innerHTML = ("Player 2 Turn")
                spots[4] = 1
                turnCounter++
            }
            else if (player1Turn == false)
            {
                button4.style.color = "blue";
                button4.value = "O"
                player1Turn = true
                document.getElementById("turn").innerHTML = ("Player 1 Turn")
                spots[4] = 2
                turnCounter++
            }
        }
    }
}
function play5()
{
    if (win == false)
    {
        if (spots[5] == 0)
        {
            if(player1Turn == true)
            {
                button5.style.color = "red";
                button5.value = "X"
                player1Turn = false
                document.getElementById("turn").innerHTML = ("Player 2 Turn")
                spots[5] = 1
                turnCounter++
            }
            else if (player1Turn == false)
            {
                button5.style.color = "blue";
                button5.value = "O"
                player1Turn = true
                document.getElementById("turn").innerHTML = ("Player 1 Turn")
                spots[5] = 2
                turnCounter++
            }
        }
    }
}
function play6()
{
    if (win == false)
    {
        if (spots[6] == 0)
        {
            if(player1Turn == true)
            {
                button6.style.color = "red";
                button6.value = "X"
                player1Turn = false
                document.getElementById("turn").innerHTML = ("Player 2 Turn")
                spots[6] = 1
                turnCounter++
            }
            else if (player1Turn == false)
            {
                button6.style.color = "blue";
                button6.value = "O"
                player1Turn = true
                document.getElementById("turn").innerHTML = ("Player 1 Turn")
                spots[6] = 2
                turnCounter++
            }
        }
    }
}
function play7()
{
    if (win == false)
    {
        if (spots[7] == 0)
        {
            if(player1Turn == true)
            {
                button7.style.color = "red";
                button7.value = "X"
                player1Turn = false
                document.getElementById("turn").innerHTML = ("Player 2 Turn")
                spots[7] = 1
                turnCounter++
            }
            else if (player1Turn == false)
            {
                button7.style.color = "blue";
                button7.value = "O"
                player1Turn = true
                document.getElementById("turn").innerHTML = ("Player 1 Turn")
                spots[7] = 2
                turnCounter++
            }
        }
    }
}
function play8()
{
    if (win == false)
    {
        if (spots[8] == 0)
        {
            if(player1Turn == true)
            {
                button8.style.color = "red";
                button8.value = "X"
                player1Turn = false
                document.getElementById("turn").innerHTML = ("Player 2 Turn")
                spots[8] = 1
                turnCounter++
            }
            else if (player1Turn == false)
            {
                button8.style.color = "blue";
                button8.value = "O"
                player1Turn = true
                document.getElementById("turn").innerHTML = ("Player 1 Turn")
                spots[8] = 2
                turnCounter++
            }
        }
    }
}

function keepPlaying()
{
    //player 1 wins
    if (spots[0] == 1 && spots[1] == 1 && spots[2] == 1)
    {
        win = true
        document.getElementById("winner").innerHTML = ("Player 1 Wins")
        document.getElementById("winner").style.color = "red";
    }
    else if (spots[0] == 1 && spots[3] == 1 && spots[6] == 1)
    {
        win = true
        document.getElementById("winner").innerHTML = ("Player 1 Wins")
        document.getElementById("winner").style.color = "red";
    }
    else if (spots[0] == 1 && spots[4] == 1 && spots[8] == 1)
    {
        win = true
        document.getElementById("winner").innerHTML = ("Player 1 Wins")
        document.getElementById("winner").style.color = "red";
    }
    else if (spots[1] == 1 && spots[4] == 1 && spots[7] == 1)
    {
        win = true
        document.getElementById("winner").innerHTML = ("Player 1 Wins")
        document.getElementById("winner").style.color = "red";
    }
    else if (spots[2] == 1 && spots[5] == 1 && spots[8] == 1)
    {
        win = true
        document.getElementById("winner").innerHTML = ("Player 1 Wins")
        document.getElementById("winner").style.color = "red";
    }
    else if (spots[3] == 1 && spots[4] == 1 && spots[5] == 1)
    {
        win = true
        document.getElementById("winner").innerHTML = ("Player 1 Wins")
        document.getElementById("winner").style.color = "red";
    }
    else if (spots[6] == 1 && spots[7] == 1 && spots[8] == 1)
    {
        win = true
        document.getElementById("winner").innerHTML = ("Player 1 Wins")
        document.getElementById("winner").style.color = "red";
    }
    else if (spots[2] == 1 && spots[4] == 1 && spots[6] == 1)
    {
        win = true
        document.getElementById("winner").innerHTML = ("Player 1 Wins")
        document.getElementById("winner").style.color = "red";
    }
    //player 2 wins
    else if (spots[0] == 2 && spots[1] == 2 && spots[2] == 2)
    {
        win = true
        document.getElementById("winner").innerHTML = ("Player 2 Wins")
        document.getElementById("winner").style.color = "blue";
    }
    else if (spots[0] == 2 && spots[3] == 2 && spots[6] == 2)
    {
        win = true
        document.getElementById("winner").innerHTML = ("Player 2 Wins")
        document.getElementById("winner").style.color = "blue";
    }
    else if (spots[0] == 2 && spots[4] == 2 && spots[8] == 2)
    {
        win = true
        document.getElementById("winner").innerHTML = ("Player 2 Wins")
        document.getElementById("winner").style.color = "blue";
    }
    else if (spots[1] == 2 && spots[4] == 2 && spots[7] == 2)
    {
        win = true
        document.getElementById("winner").innerHTML = ("Player 2 Wins")
        document.getElementById("winner").style.color = "blue";
    }
    else if (spots[2] == 2 && spots[5] == 2 && spots[8] == 2)
    {
        win = true
        document.getElementById("winner").innerHTML = ("Player 2 Wins")
        document.getElementById("winner").style.color = "blue";
    }
    else if (spots[3] == 2 && spots[4] == 2 && spots[5] == 2)
    {
        win = true
        document.getElementById("winner").innerHTML = ("Player 2 Wins")
        document.getElementById("winner").style.color = "blue";
    }
    else if (spots[6] == 2 && spots[7] == 2 && spots[8] == 2)
    {
        win = true
        document.getElementById("winner").innerHTML = ("Player 2 Wins")
        document.getElementById("winner").style.color = "blue";
    }
    else if (spots[2] == 2 && spots[4] == 2 && spots[6] == 2)
    {
        win = true
        document.getElementById("winner").innerHTML = ("Player 2 Wins")
        document.getElementById("winner").style.color = "blue";
    }
}

function tie()
{
    if (turnCounter == 9 && win == false)
    {
        document.getElementById("winner").innerHTML = ("Tie Game")
    }
}

function reload()
{
    location.reload()
}

