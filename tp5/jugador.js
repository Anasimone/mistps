class Jugador {
  constructor() {
    this.x = 50;
    this.y = 220;
    this.velocidadY = 0;
    this.altura = 100;
    this.ancho = 80;
    this.salto = false;
  }

  actualizar() {
    // "gravedad"
    this.velocidadY += 0.6;
    this.y += this.velocidadY;

    // que no se vaya fuera de la pantalla
    if (this.y > 400 - this.altura) {
      this.y = 400 - this.altura;
      this.velocidadY = 0;
      this.salto = false;
    }
  }

  mostrar() {
    fill(0, 0, 255);
    rect(this.x, this.y, this.ancho, this.altura);
  }

  saltar() {
    if (!this.salto) {
      this.velocidadY = -18;
      this.salto = true;
    }
  }

  colisiona(objeto) {
    return (
      this.x < objeto.x + objeto.ancho &&
      this.x + this.ancho > objeto.x &&
      this.y < objeto.y + objeto.altura &&
      this.y + this.altura > objeto.y
    );
  }

  haSaltado() {
    return this.salto;
  }

  reiniciar() {
    this.x = 50;
    this.y = 220;
    this.velocidadY = 0;
    this.salto = false;
  }
}
