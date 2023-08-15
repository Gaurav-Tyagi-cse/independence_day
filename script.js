const anthemAudio = document.getElementById('nationalAnthem');

function playAnthem() {
  anthemAudio.play();
}

playAnthem(); // Play the national anthem

window.addEventListener('click', () => {
  if (anthemAudio.paused) {
    anthemAudio.play();
  } else {
    anthemAudio.pause();
  }
});
