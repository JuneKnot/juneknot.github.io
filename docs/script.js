const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-Btn")
const wrapper = document.querySelector(".wrapper");
const gif = document.querySelector(".gif");
const audioElement = document.getElementById("audio");
      audioElement.volume = 0.4; 

yesBtn.addEventListener("click", () => {
  yesBtn.style.display = 'none';
  question.innerHTML = "Art by Cheejae ヾ(≧▽≦*)o";
  gif.src=
  "https://dp0rksi384o97.cloudfront.net/exports/16ef4184-14fd-422b-98a7-d582270e6fad.gif?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6XC9cL2RwMHJrc2kzODRvOTcuY2xvdWRmcm9udC5uZXRcL2V4cG9ydHNcLzE2ZWY0MTg0LTE0ZmQtNDIyYi05OGE3LWQ1ODIyNzBlNmZhZC5naWYiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3MjU3MTc4MTJ9fX1dfQ__&Signature=QTGPG6JiWu7iE48ygBnUOqGk9vdwWMB2BfCspfPC5bEBcnbiCj8w6me9lr68FOCyS2L8K0P8ty6Wr2-vMvjNA~pisUMeVxxsn5KLhPwucq1Ft22FUvDrI86Q1M29Y05yye9ziagPKxW-2JtXbNI9BEacwfLKeC0Npe0F7PgiztfWsAHyeQ7gmZekLDIc-w~NmxVSsjFdFLnhH3pfmBwqimsGUs6uyYEvBTR7MQbKpC8BjobsawQiKIn01rFt~2Qc~THUfO-jVyM84WZTe8umTpaU99H~72UOWppt8leOdA4EWc8ZsX9ZgFGzmV~l13FZjsAKNq0QCf-1MoWIp2P05A__&Key-Pair-Id=APKAIWQDLHITBKTFWBJA"
  document.getElementById("audio").play();
});










