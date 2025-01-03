let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userCount =document.querySelector("#user-score");
const compCount =document.querySelector("#comp-score");
//computer choice is generated here
const gencompChoice = () =>{
    const options = ["rock","paper","scissor"];
   const randInx = Math.floor(Math.random() * 3);
   return options[randInx];
};

const drawGame = () =>{
    console.log("Draw game");
    msg.innerText = "Game was draw. Play again! ";
    msg.style.backgroundColor ="#081b31";
}

//  play Game design here
const playGame = (userChoice) => {
    //user choice
console.log("user choice=",userChoice);
//user win function
// const userWin = () =>{
//     console .log(" congratulation You Win");
// }
// const compWin = () =>{
//     console .log(" congratulation computer Win");
// }

const showWin = (userWin ,userChoice ,compChoice) =>{
    if(userWin){
        userScore++;
        userCount.innerHTML = userScore;
        msg.innerText = ` You win ,Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor ="green";
    }else{
       compScore++;
       compCount.innerHTML = compScore;
        msg.innerText = `You lose ${compChoice} beats your ${userChoice} `
        msg.style.backgroundColor ="red";
    }
}


//computer choice is generated here
const compChoice = gencompChoice();
console.log("comp choice=",compChoice);

if(compChoice === userChoice){
        drawGame(); 
    }else{
        let userWin = true;
        if(userChoice === "rock"){
userWin = compChoice === "paper" ? false :true;
        }else if(userChoice === "paper"){
userWin = compChoice === "scissor" ? false :true;
        }else{
            userWin = compChoice === "rock" ? false :true;
        }
        showWin(userWin , userChoice ,compChoice);
   }



};



//user choice generated here
choices.forEach((choice) => {
    choice.addEventListener("click" , () =>{
   const userChoice = choice.getAttribute("id");
     playGame(userChoice);
});
}) ;








































