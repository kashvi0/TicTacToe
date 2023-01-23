var turn = document.getElementById("turn"),
boxes = document.querySelectorAll(".box"), X_or_O = 0;

function selectWinnerBoxes(b1, b2, b3) {
b1.classList.add("win");
b2.classList.add("win");
b3.classList.add("win");
turn.innerText = b1.innerText + " is a winner";
turn.style.fontSize = "2.5rem";
}

function getWinner() {
let k=0
var box1 = document.getElementById("box1"),
  box2 = document.getElementById("box2"),
  box3 = document.getElementById("box3"),
  box4 = document.getElementById("box4"),
  box5 = document.getElementById("box5"),
  box6 = document.getElementById("box6"),
  box7 = document.getElementById("box7"),
  box8 = document.getElementById("box8"),
  box9 = document.getElementById("box9");

if (box1.innerText !== "" && box1.innerText === box2.innerText && box1.innerText === box3.innerText)
{
    selectWinnerBoxes(box1, box2, box3);
    k=1;
}

else if (box4.innerText !== "" && box4.innerText === box5.innerText && box4.innerText === box6.innerText)
{
    selectWinnerBoxes(box4, box5, box6);
    k=1;
}
  

else if (box7.innerText !== "" && box7.innerText === box8.innerText && box7.innerText === box9.innerText)
{
    selectWinnerBoxes(box7, box8, box9);
    k=1;
}
  

else if (box1.innerText !== "" && box1.innerText === box4.innerText && box1.innerText === box7.innerText)
{
    selectWinnerBoxes(box1, box4, box7);
    k=1;
}
  

else if (box2.innerText !== "" && box2.innerText === box5.innerText && box2.innerText === box8.innerText)
{
    selectWinnerBoxes(box2, box5, box8);
    k=1;
}
  

else if (box3.innerText !== "" && box3.innerText === box6.innerText && box3.innerText === box9.innerText)
{
    selectWinnerBoxes(box3, box6, box9);
    k=1;
}
   
 
else if (box1.innerText !== "" && box1.innerText === box5.innerText && box1.innerText === box9.innerText)
{
    selectWinnerBoxes(box1, box5, box9);
    k=1;
}
  

else if (box3.innerText !== "" && box3.innerText === box5.innerText && box3.innerText === box7.innerText)
{
    selectWinnerBoxes(box3, box5, box7);
    k=1;
}
  
return k;
}
function checkFull(){
    let c=0
   boxes.forEach(element => {
        if(element.innerText!==""){
            c++;
            console.log("c :"+c);
        }
   });
   if(c==9 && turn.innerText!=="X is a winner" && turn.innerText!=="Y is a winner"){
    console.log("suceess")
    p=0;
    console.log()
    turn.innerText="Play again";
   }
//    else if(r){
//     turn.innerText="Play again";
//    }
}


let p=1;
for (var i = 0; i < boxes.length; i++) {
    

        boxes[i].onclick = function () {
            if(p){
                p=0;
                console.log("inside if block ");
                if (this.innerText !== "X" && this.innerText !== "O") {
                    if (X_or_O % 2 === 0) {
                      console.log(X_or_O);
                      this.innerText = "X";
                      this.style.verticalAlign = "centre";
                      turn.innerText = "O Turn Now";
                      let r=getWinner();
                      p=1-getWinner();
                      console.log("p value :" +p)
                    //   checkFull()
                      X_or_O += 1;
                
                    } else {
                      console.log(X_or_O);
                      this.innerText = "O";
                      this.style.verticalAlign = "centre";
                      turn.innerText = "X Turn Now";
                      let r=getWinner();
                      p=1-getWinner();
                      console.log("p value :" +p)
                    //   checkFull()
                      X_or_O += 1;
                    }
                  }else{
                    turn.innerText="Play again";
                  }
            }else{

                console.log("inside else block ");
                turn.innerText="Play again"
            }
            checkFull()
            
          
          };


}

document.getElementById('replay').addEventListener('click', replay);

function replay() {

for (var i = 0; i < boxes.length; i++) {
  boxes[i].classList.remove("win");
  boxes[i].innerText = "";
  turn.innerText = "Play";
  turn.style.fontSize = "2.5rem";
  p=1;

}

}