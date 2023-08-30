import { PrestadorInstitucion } from "src/prestador/entities/prestador-institucion.entity";
import { Telefono } from "src/telefono/entities/telefono.entity";
export declare class Institucion {
    id: number;
    nombre: string;
    zona: string;
    direccion: string;
    telefonos: Telefono[];
    prestadorInstituciones: PrestadorInstitucion[];
}
