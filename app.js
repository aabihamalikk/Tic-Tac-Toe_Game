let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#resetBtn");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msgContainer");
let newgame_btn=document.querySelector("#newgameBtn");

let turnO= true;

const winPatterns = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
];

const resetGame=()=>{
   turnO=true;
   count=0;
   enableBoxes();
   msgContainer.classList.add("hide");
}

const enableBoxes=()=>{
    for(box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const disableBoxes=()=>{
    for(box of boxes)
    {
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Player ${winner} Wins!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const drawGame=()=>{
    if(count===9){
        msg.innerText=`Game Draws!`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    }

}

const checkWinner=()=>{
    // drawGame();
    for(pattern of winPatterns){
        let pos1_val=boxes[pattern[0]].innerText;
        let pos2_val=boxes[pattern[1]].innerText;
        let pos3_val=boxes[pattern[2]].innerText;
        
        if(pos1_val!="" && pos2_val!="" && pos3_val!=""){
            if(pos1_val==pos2_val && pos2_val==pos3_val){
                showWinner(pos1_val);
            }
            else{
               drawGame();
            }
        }
    }
}
let count=0;
boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
    count++;
    if(turnO)
    {
       box.innerText="O";
       box.style.color="#3D5A80";
       turnO=false;
    }
    else{
        box.innerText="X";
        box.style.color="#ee6c4d";
        turnO=true;
    }
    box.disabled=true;
    checkWinner();
   });
});


newgame_btn.addEventListener("click",resetGame);
reset_btn.addEventListener("click",resetGame);



