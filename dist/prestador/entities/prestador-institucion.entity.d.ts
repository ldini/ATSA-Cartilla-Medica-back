import { Institucion } from "src/institucion/entities/institucion.entity";
import { Prestador } from "./prestador.entity";
export declare class PrestadorInstitucion {
    id: number;
    prestador: Prestador;
    institucion: Institucion;
}
