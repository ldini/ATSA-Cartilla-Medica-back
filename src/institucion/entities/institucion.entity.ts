import { Especialidad } from "src/especialidad/entities/especialidad.entity";
import { Horario } from "src/horario/entities/horario.entity";
import { PrestadorInstitucion } from "src/prestador/entities/prestador-institucion.entity";
import { Prestador } from "src/prestador/entities/prestador.entity";
import { Telefono } from "src/telefono/entities/telefono.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Institucion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  nombre: string;

  @Column({ nullable: true })
  zona: string;

  @Column({ nullable: true })
  direccion: string;

  @Column({default: 'clinica'})
  tipo:string

  constructor(nombre: string, zona: string, direccion: string, tipo: string) {
    this.nombre = nombre;
    this.zona = zona;
    this.direccion = direccion;
    this.tipo = tipo;
  }

  @OneToMany(() => Telefono, (telefono) => telefono.institucion)
  telefonos:Telefono[]

  @OneToMany(() => Horario, (horario) => horario.institucion)
  horarios:Horario[];

  @ManyToMany(()=> Especialidad,especialidad=>especialidad.instituciones_guardia)
  especialidades_guardia:Especialidad[];

  @ManyToMany(()=> Especialidad,especialidad=>especialidad.instituciones_externo)
  especialidades_externo:Especialidad[];

  @OneToMany(
    () => PrestadorInstitucion,
    (prestadorInstitucion) => prestadorInstitucion.institucion,
  )
  prestadorInstituciones: PrestadorInstitucion[];

  
}
