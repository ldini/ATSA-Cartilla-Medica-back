import { Prestador } from "src/prestador/entities/prestador.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Horario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  dia: string;

  @Column({ nullable: false })
  hora_inicio: string;

  @Column({ nullable: false })
  hora_fin: string;

  @ManyToOne(() => Prestador, (prestador) => prestador.horarios)
  prestador: Prestador;
}
