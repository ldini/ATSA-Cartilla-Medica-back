import { PrestadorInstitucion } from "src/prestador/entities/prestador-institucion.entity";
import { Prestador } from "src/prestador/entities/prestador.entity";
import { Telefono } from "src/telefono/entities/telefono.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

  @OneToMany(() => Telefono, (telefono) => telefono.institucion)
  telefonos:Telefono[]

  @OneToMany(
    () => PrestadorInstitucion,
    (prestadorInstitucion) => prestadorInstitucion.institucion,
  )
  prestadorInstituciones: PrestadorInstitucion[];
}
