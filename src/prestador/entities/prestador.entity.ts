import { Especialidad } from "src/especialidad/entities/especialidad.entity";
import { Horario } from "src/horario/entities/horario.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PrestadorInstitucion } from "./prestador-institucion.entity";

@Entity()
export class Prestador {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    nombre: string;

    @Column({ nullable: true })
    apellido: string;

    @Column({ nullable: true })
    direccion: string;

    @ManyToOne(() => Especialidad)
    @JoinColumn({name:'id_especialidad'})
    especialidad: Especialidad;

    @OneToMany(
        () => PrestadorInstitucion,
        (prestadorInstitucion) => prestadorInstitucion.prestador,
      )
    prestadorInstituciones: PrestadorInstitucion[];

    @OneToMany(() => Horario, (horario) => horario.prestador)
    horarios:Horario[];
}
