import { Emprendedor } from "./emprendedor";

export class EmprendedorDetail extends Emprendedor {
    emprendimientos: string[];

    constructor(id: number, nombre: string, genero: string, pregrado: string, foto_url: string, eemprendimientos: string[]) {
        super(id, nombre, genero, pregrado, foto_url);
        this.emprendimientos = eemprendimientos;
    }
}
