let juego;
let imgJugador, imgEnemigo, imgObstaculo, imgFondo;

function preload() {
  // Carga las imágenes
  imgJugador = loadImage('jugador.PNG');
  imgEnemigo = loadImage('lobo.PNG');
  imgObstaculo = loadImage('viento.PNG');
  imgFondo = loadImage('fondo.jpg.jpg');
}

function setup() {
  createCanvas(600, 400);
  juego = new Juego();
}

function draw() {
  // Mostrar fondo
  image(imgFondo, 0, 0, width, height);

  juego.actualizar();
  juego.mostrar();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    juego.jugador.saltar();
  }
}
