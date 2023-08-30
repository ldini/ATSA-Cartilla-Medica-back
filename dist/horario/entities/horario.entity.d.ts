import { Prestador } from "src/prestador/entities/prestador.entity";
export declare class Horario {
    id: number;
    dia: string;
    hora_inicio: string;
    hora_fin: string;
    prestador: Prestador;
}
