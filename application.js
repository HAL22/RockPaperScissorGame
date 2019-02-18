//Variables

let userScore=0;
let compScore=0;

//html variables

let userScore_span=document.getElementById("user-score");
let compScore_span=document.getElementById("comp-score");
let scoreBoard_div = document.querySelector(".scoreboard");
let result_div = document.querySelector(".result");
let rock_div = document.getElementById("r");
let  paper_div = document.getElementById("p");
let scissor_div = document.getElementById("s");

//functions

function main()
{

    rock_div.addEventListener("click",function ()
    {
        game("r");

    });

    paper_div.addEventListener("click",function ()
    {
        game("p");

    });

    scissor_div.addEventListener("click",function ()
    {
        game("s");

    });



}

function game(userInput)
{
    let Comp_choice = compChoice();

    if(whichWins(userInput,Comp_choice) === 0)
    {
        result_div.innerHTML = "It's a DRAW";

    }

    else if(whichWins(userInput,Comp_choice) === 1)
    {
        userScore++;
        userScore_span.innerHTML = userScore.toString();
        result_div.innerHTML = "You WIN";

    }

    else if(whichWins(userInput,Comp_choice) === 2)
    {
        compScore++;
        compScore_span.innerHTML = compScore.toString();
        result_div.innerHTML = "Comp WINS";

    }




}

function compChoice()  // decision made by the computer
{
    let choices =["r","p","s"];
    let randomNumber = Math.floor(Math.random() * (2+ 1));


    return  choices[randomNumber];

}

function whichWins(userInput,compInput) // decide what input wins
{
    if(userInput===compInput)
    {

        return 0; // its a draw


    }

    else if((userInput==="r" && compInput === "s") || (userInput === "p" && compInput==="r") || (userInput === "s" && compInput==="p"))
    {
        return  1;// user wins

    }

    else if((compInput==="r" &&  userInput === "s") ||  (compInput === "p" && userInput==="r") || (compInput === "s" && userInput==="p"))
    {
        return 2; //comp wins

    }

    return 3;


}



//running the whole application

main();


