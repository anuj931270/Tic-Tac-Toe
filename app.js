let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let Msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let msg1 = document.querySelector("#msg1");

let turn0 = true;    // playerX, player0



const winpatterns = [
     [0, 1, 2],
     [0, 4, 5],
     [0, 7, 8],
     [0, 3, 6],
     [1, 4, 5],
     [2, 5, 8],
     [0, 4, 8],
     [2, 4, 6]
];
const resetGame = () => {
   turn0 = true;
   enablesboxes();
   msgContainer.classList.add("hide");
};

boxes.forEach((box) =>{
    box.addEventListener("click" , () =>{
        console.log("box was clicked");
        if(turn0) {
            // player 0
            box.innerText = "0";
            turn0 = false;
        } else{
            // player X
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});
const disableboxes = () =>{
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enablesboxes = () =>{
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const ShowWinner = (winner) => {
   msg.innerText = `Congratulations, Winner is ${winner}`;
   msgContainer.classList.remove("hide");
   disableboxes();
};

const checkWinner = () => {
    for(let pattern of winpatterns) {
        // assumption to print the winner : - 
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText,
        //      boxes[pattern[1]].innerText, 
        //      boxes[pattern[2]].innerText);

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner" , pos1val);
                ShowWinner(pos1val);
            }
        }
    }
};

msg1.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);