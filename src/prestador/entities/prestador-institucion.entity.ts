import { Institucion } from "src/institucion/entities/institucion.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Prestador } from "./prestador.entity";

@Entity('prestador_institucion')
export class PrestadorInstitucion {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Prestador, (prestador) => prestador.prestadorInstituciones, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'prestador_id' })
  prestador: Prestador;

  @ManyToOne(() => Institucion, (institucion) => institucion.prestadorInstituciones, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'institucion_id' })
  institucion: Institucion;

}
