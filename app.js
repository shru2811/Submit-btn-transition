let subBtn = document.querySelector(".btn");
let popup = document.querySelector(".popup");
let btn = document.querySelector(".popup button");

subBtn.addEventListener("click",function(){
    popup.classList.add("open-popup");
    // console.log("clicked");
});

btn.addEventListener("click",function(){
    popup.classList.remove("open-popup");
});