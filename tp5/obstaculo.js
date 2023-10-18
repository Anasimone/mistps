class Obstaculo {
  constructor(enemigoX, enemigoY) {
    this.x = enemigoX;
    this.y = enemigoY;
    this.velocidadX = -4;
    this.altura = 60;
    this.ancho = 50;
  }

  actualizar() {
    this.x += this.velocidadX;
  }

  mostrar() {
    fill(0, 255, 0);
    rect(this.x, this.y, this.ancho, this.altura);
  }

  eliminar() {
    // Eliminar obstáculo
    juego.obstaculos = juego.obstaculos.filter(obstaculo => obstaculo !== this);
  }

  fueraDePantalla() {
    return this.x + this.ancho < 0;
  }
}
