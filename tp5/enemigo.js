class Enemigo {
  constructor() {
    this.x = 450;
    this.y = 220;
    this.altura = 140;
    this.ancho = 120;
    this.velocidadX = 0;
  }

  mostrar() {
    fill(255, 0, 0);
    rect(this.x, this.y, this.ancho, this.altura);
  }

  lanzarObstaculo() {
    // Lanzar obstáculo aleatoriamente
    if (random() < 0.005) {
      juego.obstaculos.push(new Obstaculo(this.x, this.y));
    }
  }

  reiniciar() {
    this.x = 450;
  }
}
