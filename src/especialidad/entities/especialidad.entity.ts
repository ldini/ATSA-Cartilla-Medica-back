import { Institucion } from "src/institucion/entities/institucion.entity";
import { Prestador } from "src/prestador/entities/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Especialidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nombre: string;

  @ManyToMany(()=>Institucion,institucion=>institucion.especialidades)
  @JoinTable({name:'guardias'})
  instituciones:Institucion[];

}

