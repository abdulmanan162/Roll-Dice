'use strict';

//  Selecting elements 

const player0EL= document.querySelector('.player--0')
const player1EL= document.querySelector('.player--1') 
const score0EL=document.querySelector("#score--0");
const score1EL=document.querySelector("#score--1");
const current0El=document.querySelector("#current--0")
const current1El=document.querySelector("#current--1")

const diceEl=document.querySelector('.dice')
const btnNew =document.querySelector(".btn--new")
const btnRoll =document.querySelector(".btn--roll")
const btnHold =document.querySelector(".btn--hold")
// Starting the conditions

score0EL.textContent=0;
score1EL.textContent=0;
diceEl.classList.add('hidden')

const scores=[0, 0];
let currentscore=0;
let activeplayer=0;
let playing =true;


const switchplayer=function(){
  activeplayer= activeplayer === 0? 1 : 0;
document.getElementById(`current--${activeplayer}`).textContent= 0; 
currentscore=0;
player0EL.classList.toggle("player--active");
player1EL.classList.toggle("player--active");
}

// Roll dice Functionality
btnRoll.addEventListener("click", function(){
if(playing){
  const dice = Math.trunc(Math.random()*6)+1
// console.log(dice)

diceEl.classList.remove('hidden')
diceEl.src =`dice-${dice}.png`
 




if(dice !== 1){
    currentscore +=  dice;
document.getElementById(`current--${activeplayer}`).textContent=currentscore;
 
}
else{
// Switch to the next player

 switchplayer();
}
}


})

btnHold.addEventListener('click', function(){
if(playing){
// Add the current to the active player's score 
scores[activeplayer] += currentscore;
 
//  scores[1] =scores[1]+ currentscore;

document.getElementById(`score--${activeplayer}`).textContent=scores[activeplayer]

if (scores[activeplayer] >= 10) {

  playing=false;
diceEl.classList.add("hidden")
 
  document.querySelector(`.player--${activeplayer}`).classList.add('player--winner')
  document.querySelector(`.player--${activeplayer}`).classList.remove('player--active')
 
}
else{
switchplayer();
 
}
}
})

btnNew.addEventListener("click",function(){
  score0EL.textContent=0;
  score1EL.textContent=0;
  current0El.textContent=0
  current1El.textContent=0
  diceEl.classList.add('hidden')
  document.querySelector(`.player--${activeplayer}`).classList.remove('player--winner')
})