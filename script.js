let popped = 0;

const music = document.getElementById("bgMusic");

document.body.addEventListener(
"click",
()=>{
music.play();
},
{ once:true }
);

function nextPage(page){

document
.querySelector(".active")
.classList.remove("active");

document
.getElementById("page"+page)
.classList.add("active");

}

const noBtn =
document.getElementById("noBtn");

if(noBtn){

noBtn.addEventListener("mouseover",()=>{

let x =
Math.random()*200-100;

let y =
Math.random()*200-100;

noBtn.style.transform=
`translate(${x}px,${y}px)`;

});

}

function popBalloon(balloon){

if(
balloon.classList.contains("popped")
) return;

balloon.classList.add("popped");

popped++;

document.getElementById(
"balloonCounter"
).innerText =
`${popped} / 4 Popped`;

if(popped===4){

setTimeout(()=>{

nextPage(4);

},800);

}

}

function blowCandle(){

document.getElementById(
"candle"
).innerHTML="🕯";

setTimeout(()=>{

nextPage(5);

},1200);

}

function openGift(){

const gift =
document.getElementById("gift");

gift.innerHTML="💖";

for(let i=0;i<25;i++){

createHeart();

}

setTimeout(()=>{

nextPage(8);

},2000);

}

function createHeart(){

const heart =
document.createElement("div");

heart.className =
"floating-heart";

heart.innerHTML =
["💖","💕","❤️","💗"]
[Math.floor(Math.random()*4)];

heart.style.left =
Math.random()*100+"vw";

heart.style.bottom =
"-50px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},5000);

}