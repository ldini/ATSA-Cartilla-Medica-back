import { Especialidad } from "src/especialidad/entities/especialidad.entity";
import { Horario } from "src/horario/entities/horario.entity";
import { PrestadorInstitucion } from "./prestador-institucion.entity";
import { Telefono } from "src/telefono/entities/telefono.entity";
export declare class Prestador {
    constructor(nombre: string, apellido: string, direccion: string, zona: string);
    id: number;
    nombre: string;
    apellido: string;
    direccion: string;
    zona: string;
    especialidad: Especialidad;
    prestadorInstituciones: PrestadorInstitucion[];
    horarios: Horario[];
    telefonos: Telefono[];
}
