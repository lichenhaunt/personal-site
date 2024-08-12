function stopmusic() {
  const y = document.getElementsByTagName("audio");
  for (let i = 0; i < y.length; i++) {
    y[i].pause();
  }

  document.getElementById("marq").innerHTML = "no music is playing";
}

function playsong() {
  const y = document.getElementsByTagName("audio");
  for (let i = 0; i < y.length; i++) {
    y[j].pause;
  }

  const songValue = event.target.value;
  document.getElementsByTagName("audio")[songValue].currentTime = 0;
  document.getElementsByTagName("audio")[songValue].play();
}
