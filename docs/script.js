const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-Btn")
const wrapper = document.querySelector(".wrapper");
const gif = document.querySelector(".gif");
const audioElement = document.getElementById("audio");
      audioElement.volume = 0.4; 

yesBtn.addEventListener("click", () => {
  yesBtn.style.display = 'none';
  question.innerHTML = "Art by Cheejae ヾ(≧▽≦*)o";
  gif.src= "../docs/desmos-graph.png";
  document.getElementById("audio").play();
});










