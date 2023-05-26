// document.querySelector(".w").addEventListener("click",handleclick1);
// document.querySelector(".a").addEventListener("click",handleclick2);
// document.querySelector(".s").addEventListener("click",handleclick3);
// document.querySelector(".d").addEventListener("click",handleclick4);
// document.querySelector(".j").addEventListener("click",handleclick5);
// document.querySelector(".k").addEventListener("click",handleclick6);
// document.querySelector(".l").addEventListener("click",handleclick7);
//
// document.querySelector(".w").addEventListener("keypress",handleclick1);
// document.querySelector(".a").addEventListener("keypress",handleclick2);
// document.querySelector(".s").addEventListener("keypress",handleclick3);
// document.querySelector(".d").addEventListener("keypress",handleclick4);
// document.querySelector(".j").addEventListener("keypress",handleclick5);
// document.querySelector(".k").addEventListener("keypress",handleclick6);
// document.querySelector(".l").addEventListener("keypress",handleclick7);
//
//
// function handleclick1() {
//   var audio=new Audio("Sounds/1.mp3")
//   audio.play()
// }
// function handleclick2() {
//   var audio=new Audio("Sounds/2.mp3")
//   audio.play()
// }
// function handleclick3() {
//   var audio=new Audio("Sounds/3.mp3")
//   audio.play()
// }
// function handleclick4() {
//   var audio=new Audio("Sounds/4.mp3")
//   audio.play()
// }
// function handleclick5() {
//   var audio=new Audio("Sounds/5.mp3")
//   audio.play()
// }
// function handleclick6() {
//   var audio=new Audio("Sounds/6.mp3")
//   audio.play()
// }
// function handleclick7() {
//   var audio=new Audio("Sounds/7.mp3")
//   audio.play()
// }



var numberOfDrumButtons=document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var buttonInnerHtml=this.innerHTML;
  makeSound(buttonInnerHtml);
  buttonAnimation(buttonInnerHtml);
 });


}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){


  switch (key) {
    case "W":
      var audio1=new Audio("Sounds/1.mp3");
      audio1.play();
      break;

    case "A":
      var audio2=new Audio("Sounds/2.mp3");
      audio2.play();
      break;

    case "S":
      var audio3=new Audio("Sounds/3.mp3");
      audio3.play();
      break;

    case "D":
      var audio4=new Audio("Sounds/4.mp3");
      audio4.play();
      break;

    case "J":
      var audio5=new Audio("Sounds/5.mp3");
      audio5.play();
      break;

    case "K":
      var audio6=new Audio("Sounds/6.mp3");
      audio6.play();
      break;

    case "L":
      var audio7=new Audio("Sounds/7.mp3");
      audio7.play();
      break;


    default:alert("buttonInnerHTML");

}
}
function buttonAnimation(currentKey){
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeOut(function(){
  activeButton.classList.remove("pressed");
  },100);

}
