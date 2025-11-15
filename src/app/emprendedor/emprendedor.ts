export class Emprendedor {
    id: number;
    nombre: string;
    genero: string;
    pregrado: string;
    foto_url: string;

    constructor(id: number, nombre: string, genero: string, pregrado: string, foto_url: string) {
        this.id = id;
        this.nombre = nombre;
        this.genero = genero;
        this.pregrado = pregrado;
        this.foto_url = foto_url;
    }

}
