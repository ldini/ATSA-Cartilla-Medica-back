import { Institucion } from "src/institucion/entities/institucion.entity";
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

  @ManyToOne(() => Prestador, (prestador) => prestador.horarios,{ onDelete: 'CASCADE' })
  prestador: Prestador;

  @ManyToOne(() => Institucion, (institucion) => institucion.horarios,{ onDelete: 'CASCADE' })
  institucion: Institucion;

  constructor(dia:string,hora_inicio:string,hora_fin:string){
    this.dia = dia;
    this.hora_inicio = hora_inicio;
    this.hora_fin = hora_fin;
  }
}
