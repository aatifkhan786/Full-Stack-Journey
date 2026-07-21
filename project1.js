const changeColor= function(){
  const hex="0123456789ABCDEF"
  let str="#";
  for(let i=0;i<6;i++){
    str+=hex[(Math.floor(Math.random()*16))]

  }
  return str;
}
let intervalStop;
const startChangingColor = function(){
  if(!intervalStop){
    intervalStop=setInterval(changeByColor,1000);
  }
  
  function changeByColor(){
    document.body.style.backgroundColor = changeColor();
  }
  
}
const stopChangingColor = function(){
  clearInterval(intervalStop);
  intervalStop=null;
}
document.querySelector("#start").addEventListener('click', startChangingColor);
document.querySelector("#stop").addEventListener('click', stopChangingColor);