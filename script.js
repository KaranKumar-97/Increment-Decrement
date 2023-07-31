let countString=document.querySelector('.count');
let countInt=parseInt(countString.innerText);

function increment(){
    countInt+=1;
    countString.textContent=countInt;
}

function decrement(){
    countInt-=1;
    countString.textContent=countInt;
}

function reset(){
    countInt=0;
    countString.textContent=countInt;
}