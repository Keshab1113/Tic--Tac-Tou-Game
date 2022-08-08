console.log("Welcome to my Game");
let music= new Audio("dil.mp3");
let audioturn= new Audio("click.mp3");
let gameover= new Audio("song.mp3");
let turn= "X";
let isgameover=false;
const changeturn = ()=>{
    return turn==="X"?"0":"X"
}
const checkwin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText) &&(boxtext[e[0]].innerText!=="") ){
            document.querySelector('.info').innerText= boxtext[e[0]].innerText + " won"
            isgameover = true
            document.querySelector('.image').getElementsByTagName('img')[0].style.width='256px'
        }
    })
}
music.play()
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(Element=>{
    let boxtext=Element.querySelector('.boxtext');
    Element.addEventListener('click', ()=>{
       if(boxtext.innerText ===''){
        boxtext.innerText=turn;
        turn=changeturn();
        audioturn.play();
        checkwin();
        if(!isgameover){
        document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
        }
       } 
    })
})
resat.addEventListener('click',()=>{
    let boxtexts= document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(Element=>{
        Element.innerText= ""
    });
    turn="X";
    isgameover=false
    document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
    document.querySelector('.image').getElementsByTagName('img')[0].style.width="0px"
})