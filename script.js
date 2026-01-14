let btn=document.querySelector("button");
let progressText=document.querySelector(".progressText");
let progressBar=document.querySelector(".progressBar");
let heading=document.querySelector("h1");

btn.addEventListener("click",function(){
    btn.style.pointerEvents="none";
    let count=0;
    let intervalTime=35+Math.floor(Math.random()*100);
let interval=setInterval(function(){
count++
progressText.innerHTML=count+"%";
progressBar.style.width=count+"%";
},intervalTime)
setTimeout(
    function(){
        clearInterval(interval)
        btn.innerHTML="Downloaded"
        btn.style.opacity=0.5;
        heading.innerHTML=`Your file downloaded in ${(intervalTime*100)/1000} seconds`;
    },intervalTime*100
)
})