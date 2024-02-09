let btns=document.querySelectorAll(".btn");
let resetBtn=document.querySelector(".reset-btn");
let newGameBtn=document.querySelector(".new-game-btn");
const winPatterns =[ [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8] ];
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let turnO=true;


btns.forEach((btn) => {
    btn.addEventListener("click",()=>{
        if(turnO){ //player o turn
            btn.innerText="O"
            btn.style.color="red";
            turnO=false;
        }
        else{ //player x turn #FCCB06
            btn.innerText="X"
            btn.style.color="blue";
            turnO=true;
        }
       btn.disabled=true;
       let isWinner=checkWinner();
       count++;
       if(count === 9 && !isWinner){
        draw();
       }
    });
});
const resetGame=()=>{
    turnO=true;
    count=0;
    enableBtns();
    msgContainer.classList.add("hide");
};
const disableBtns=()=>{
    for(let btn of btns){
        btn.disabled=true;
    }
};
const enableBtns=()=>{
    for(let btn of btns){
        btn.disabled=false;
        btn.innerText="";
    }
};
const showWinner=(winner)=>{
    disableBtns();
    msg.innerHTML=`<i> Congratulations, ${winner} has won!</i>`;
    msgContainer.classList.remove("hide");
};
const draw=()=>{
    disableBtns();
    msg.innerHTML=`<i> Game was a draw :), play again </i>`;
    msgContainer.classList.remove("hide");
};
const checkWinner=()=>{
    for(let cases of winPatterns){
        
        let pos1val=btns[cases[0]].innerText;
        let pos2val=btns[cases[1]].innerText;
        let pos3val=btns[cases[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                showWinner(pos1val);
                return true;
            }
        }
    
    }
};
let count=0;
resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);
