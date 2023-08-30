import { Institucion } from "src/institucion/entities/institucion.entity";
export declare class Telefono {
    id: number;
    numero: string;
    interno: string;
    whatapp: boolean;
    institucion: Institucion;
}
