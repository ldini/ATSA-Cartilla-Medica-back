import { Especialidad } from "src/especialidad/entities/especialidad.entity";
import { Horario } from "src/horario/entities/horario.entity";
import { PrestadorInstitucion } from "./prestador-institucion.entity";
export declare class Prestador {
    id: number;
    nombre: string;
    apellido: string;
    direccion: string;
    especialidad: Especialidad;
    prestadorInstituciones: PrestadorInstitucion[];
    horarios: Horario[];
}
