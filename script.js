let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const genCompChoice=()=>{
       const options =["rock","paper","scissors"];
      const randIdx= Math.floor(Math.random()*3);
      return options[randIdx];
}

const drawGame=()=>{
    msg.innerText="Game Was Draw.Please try again.";
   msg.style.backgroundColor="black";
}

const showWinner=(userWin,userChoice,compchoice)=>{
 if(userWin){
    userscore++;
    userscorepara.innerText=userscore;
    msg.innerText=`You Win! Your ${userChoice}  beats ${compchoice}`;
   msg.style.backgroundColor="green";
    
 }else{
    compscore++;
    compscorepara.innerText=compscore;
    msg.innerText=`You Lost. ${compchoice}  beats your ${userChoice}`;
     msg.style.backgroundColor="red";
}
}

const playGame = (userChoice)=>{
    const compchoice = genCompChoice();
   
    if(userChoice===compchoice){
        drawGame();
    }
    else{
        let userWin= true;
        if(userChoice==="rock"){
            //paper,scissors
           userWin = compchoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //scissors,rock
            userWin= compchoice==="scissors"?false:true;
        }else{
            userWin = compchoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compchoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })

})