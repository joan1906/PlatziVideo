const video = document.querySelector('video');
const boton = document.querySelector('button');

class MediaPlayer {
  constructor(element) {
    this.element = element;
  }

  empezar() {
    video.play();
  }

  detener() {
    video.pause();
  }
};

const reproductor = new MediaPlayer();
const playPause = () => {
  !video.paused ? reproductor.detener() : reproductor.empezar()
}

boton.onclick = () => playPause();
