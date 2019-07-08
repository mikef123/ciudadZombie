/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
    /* el sprite contiene la ruta de la imagen
     */
    sprite: 'imagenes/auto_rojo_abajo.png',
    x: 130,
    y: 160,
    ancho: 15,
    alto: 30,
    velocidad: 10,
    vidas: 5,
    mover: function(direccion, movimiento) {
        switch (direccion) {
            case 'der':
                this.x += movimiento;
                break;
            case 'izq':
                this.x += movimiento;
                break;
            case 'arriba':
                this.y += movimiento;
                break;
            case 'abajo':
                this.y += movimiento;
                break;
            default:
                console.log('Movimiento no detectado');
                break;
        }
    },
    perderVidas: function(vidas) {
        this.vidas -= vidas;
    }
}

const jugador = Object.create(Jugador);