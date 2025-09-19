console.log("welcome to tic tac toe");
let music = new Audio("music.mp3");
let gameover = new Audio("gameover.mp3");
let audioturn = new Audio("ting.mp3");
let turn = "X";
let isgameover=false;


const changeTurn = ()=>{
return turn=== "X"?"0":"X";
}

// check win

const checkWin = ()=>{

    let wins=[
        [0,1,2,0,6,0],
        [3,4,5,0,16,0],
        [6,7,8,0,27,0],
        [0,3,6,-10,16,90],
        [1,4,7,0,16,90],
        [2,5,8,10,16,90],
        [0,8,4,0,16,45],
        [2,4,6,0,16,135],
]

let boxtexts=document.querySelectorAll('.boxtext');
     wins.forEach(e=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText===boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText!=="")){
         let info=document.querySelector('.info');
         info.innerText=boxtexts[e[0]].innerText+" won";
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
        document.querySelector(".line").style.width="30vw"  ;
        document.querySelector(".line").style.transform= `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
         isgameover=true;
         music.pause();
         gameover.play();
        }

     })
        
    }




//Game logic
music.play();
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            audioturn.play();
            checkWin();
            if(!isgameover){
            let info=document.querySelector('.info');
            info.innerText=`Turn for ${turn} `;
            }
        }
    })
});


//Adding event listner to reset button

reset.addEventListener('click',()=>{
    let boxes=document.getElementsByClassName("box");
    Array.from(boxes).forEach(element => {
        let boxtext=element.querySelector('.boxtext');
        boxtext.innerText="";
    })
    isgameover=false;
    turn="X";
    music.play();
    
        let info=document.querySelector('.info');
        info.innerText=`Turn for ${turn} `;
        document.querySelector(".line").style.width="0"  ;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
})