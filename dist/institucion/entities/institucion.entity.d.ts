import { Especialidad } from "src/especialidad/entities/especialidad.entity";
import { Horario } from "src/horario/entities/horario.entity";
import { PrestadorInstitucion } from "src/prestador/entities/prestador-institucion.entity";
import { Telefono } from "src/telefono/entities/telefono.entity";
export declare class Institucion {
    id: number;
    nombre: string;
    zona: string;
    direccion: string;
    tipo: string;
    constructor(nombre: string, zona: string, direccion: string, tipo: string);
    telefonos: Telefono[];
    horarios: Horario[];
    especialidades_guardia: Especialidad[];
    especialidades_externo: Especialidad[];
    prestadorInstituciones: PrestadorInstitucion[];
}
