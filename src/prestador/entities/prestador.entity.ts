import { Especialidad } from "src/especialidad/entities/especialidad.entity";
import { Horario } from "src/horario/entities/horario.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PrestadorInstitucion } from "./prestador-institucion.entity";
import { Telefono } from "src/telefono/entities/telefono.entity";

@Entity()
export class Prestador {
  
    constructor(nombre:string,apellido:string,direccion:string,zona:string){
      this.nombre = nombre;
      this.apellido = apellido;
      this.direccion = direccion;
      this.zona = zona;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    nombre: string;

    @Column({ nullable: true })
    apellido: string;

    @Column({ nullable: true })
    direccion: string;

    @Column({ nullable: true })
    zona: string;

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

    @OneToMany(() => Telefono, (telefono) => telefono.prestador)
    telefonos:Telefono[];
}