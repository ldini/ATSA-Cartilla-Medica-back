import { Institucion } from "src/institucion/entities/institucion.entity";
import { Prestador } from "src/prestador/entities/prestador.entity";
export declare class Telefono {
    id: number;
    numero: string;
    interno: string;
    whatapp: boolean;
    institucion: Institucion;
    prestador: Prestador;
}
