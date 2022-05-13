// Red button 
function makeRed(){
    document.body.style.backgroundColor="red"
}
// blueButton
const blueButton=document.getElementById('makeBlueButton');
console.log(blueButton)
  // just set the name of a function
  blueButton.onclick=makeblue;
  function makeblue(){
      document.body.style.backgroundColor="blue"
  }
  
// handle event using anonymus function 
const yellowButton=document.getElementById("makeYellowButton");
console.log(yellowButton);
// anonymus function 
yellowButton.onclick= function (){
    document.body.style.backgroundColor="yellow";
}
//  addEventListener 
// goldenbuttom 

const goldenButton=document.getElementById("makeGold");
console.log(goldenButton);
goldenButton.addEventListener("click",makegold);


function makegold(){
    document.body.style.backgroundColor='gold';
}
// pinkbutton 
const hotPink=document.getElementById("makeHotPink");
hotPink.addEventListener("click",function makepink(){
    document.body.style.background='hotpink';
})





     