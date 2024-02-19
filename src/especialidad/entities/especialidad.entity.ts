import { Institucion } from "src/institucion/entities/institucion.entity";
import { Prestador } from "src/prestador/entities/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Especialidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nombre: string;

  @ManyToMany(()=>Institucion,institucion=>institucion.especialidades_guardia,{ onDelete: 'CASCADE' })
  @JoinTable({name:'guardias'})
  instituciones_guardia:Institucion[];

  @ManyToMany(()=>Institucion,institucion=>institucion.especialidades_externo,{ onDelete: 'CASCADE' })
  @JoinTable({name:'externos'})
  instituciones_externo:Institucion[];

  constructor(nombre: string) {
    this.nombre = nombre;
  }

}

