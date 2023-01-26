/* Declare variables below to save the different sections (divs) of your story*/
let title=document.querySelector(".title");
let storyopening=document. querySelector(".story-opening");
let Buttons=document.querySelector(".buttons");
let option1=document. querySelector(".option-one-screen");
let option2=document. querySelector(".option-two-screen");
let option1end=document. querySelector(".option-one-end");
let option2end=document. querySelector(".option-two-end");
let option3end=document. querySelector(".option-three-end");
let ByHonorButton = document.querySelector(".option-one");
let ByAdventureButton = document.querySelector(".option-two");
let ByGoAheadButton = document.querySelector(".option-three");
let ByPullUpButton = document.querySelector(".option-Four");
// When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
ByHonorButton.onclick=function(){
option1.style.display="block";
};

ByAdventureButton.onclick=function(){
option2.style.display="block";
};

ByGoAheadButton.onclick=function(){
option1end.style.display="block";
};

ByPullUpButton.onclick=function(){
option2end.style.display="block";
};

//