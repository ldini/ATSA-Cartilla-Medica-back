import { Institucion } from "src/institucion/entities/institucion.entity";
export declare class Especialidad {
    id: number;
    nombre: string;
    instituciones_guardia: Institucion[];
    instituciones_externo: Institucion[];
    constructor(nombre: string);
}
