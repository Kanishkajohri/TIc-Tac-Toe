let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newgame = document.querySelector("#newgame");
let msgc = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
const winPatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],];
const resetGame = () =>{
  turnO= true;
  enabledboxes();
  msgc.classList.add("hide");
};
boxes.forEach((box) =>{
  
  box.addEventListener("click",() =>{

    console.log("box was clicked");
    
    if(turnO ){
      box.innerText ="O";
      turnO = false;
    }
    else{
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
   

    checkWinner();
  });
});
const enabledboxes = ()=> {
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";

  }
};
const disabledboxes = () => {
  for(let box of boxes){
    box.disabled = true;
  }
};
const showWinner = (winner) =>{
  msg.innerText = 'Congratulations !!';
  msgc.classList.remove("hide");
  disabledboxes();
};

const checkWinner = () => {
  for(let pattern of winPatterns){
    let pos1Va1 = boxes[pattern[0]].innerText;
    let pos1Va2 = boxes[pattern[1]].innerText;
    let pos1Va3 = boxes[pattern[2]].innerText;
  

    if(pos1Va1 != "" && pos1Va2 != "" && pos1Va3 != ""){
     if(pos1Va1 === pos1Va2 && pos1Va2 === pos1Va3){
      showWinner(pos1Va1);

     }
    }
  
  }
};
newgame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);





