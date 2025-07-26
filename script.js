const btnEle = document.querySelector(".btn");
const closeIconEle = document.querySelector(".close-icon");
const trailerContainerEle = document.querySelector(".trailer-container");
const videoEle = document.querySelector("video");

btnEle.addEventListener("click", ()=> {
    trailerContainerEle.classList.remove("active");
})

closeIconEle.addEventListener("click", ()=> {
    trailerContainerEle.classList.add("active");
    videoEle.pause();
    videoEle.currentTime = 0;
})