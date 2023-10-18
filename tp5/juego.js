class Juego {
  constructor() {
    this.jugador = new Jugador();
    this.enemigo = new Enemigo();
    this.obstaculos = [];
    this.vidas = 3;
    this.puntuacion = 0;
  }

  actualizar() {
    this.jugador.actualizar();

    // Generar obstáculos aleatorios
    if (random() < 0.2) {
      this.obstaculos.push(new Obstaculo());
    }

    for (let obstaculo of this.obstaculos) {
      obstaculo.actualizar();

      // Verificar colisiones con el jugador
      if (this.jugador.colisiona(obstaculo) && !this.jugador.haSaltado()) {
        this.vidas--;

        if (this.vidas === 0) {
          this.reiniciar();
        } else {
          obstaculo.eliminar();
        }
      }

      // Verificar si el obstáculo ha salido de la pantalla
      if (obstaculo.fueraDePantalla()) {
        this.puntuacion++;
        obstaculo.eliminar();
      }
    }

    this.enemigo.lanzarObstaculo();

    // Verificar si se alcanzó el límite de puntuación para ganar
    if (this.puntuacion >= 15) {
      this.ganarJuego();
    }
  }

  mostrar() {
    // Mostrar jugador
    image(imgJugador, this.jugador.x, this.jugador.y, this.jugador.ancho, this.jugador.altura);

    // Mostrar enemigo
    image(imgEnemigo, this.enemigo.x, this.enemigo.y, this.enemigo.ancho, this.enemigo.altura);

    // Mostrar obstáculos
    for (let obstaculo of this.obstaculos) {
      image(imgObstaculo, obstaculo.x, obstaculo.y, obstaculo.ancho, obstaculo.altura);
    }

    // Mostrar vidas y puntuación
    fill(0);
    textSize(20);
    text(`Vidas: ${this.vidas}`, 10, 30);
    text(`Puntuación: ${this.puntuacion}`, width - 150, 30);
  }

  reiniciar() {
    this.jugador.reiniciar();
    this.enemigo.reiniciar();
    this.obstaculos = [];
    this.vidas = 3;
    this.puntuacion = 0;
  }

  ganarJuego() {
    // Aquí puedes agregar las acciones que se deben realizar al ganar el juego
    console.log("¡Has ganado!");
    this.reiniciar();
  }
}
