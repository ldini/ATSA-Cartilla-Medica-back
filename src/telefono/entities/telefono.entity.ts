import { Institucion } from "src/institucion/entities/institucion.entity";
import { Prestador } from "src/prestador/entities/prestador.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Telefono {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  numero: string;

  @Column({ nullable: true })
  interno: string;

  @Column({ nullable: true })
  whatapp: boolean;

  constructor(numero:string,whatapp:boolean,interno:string){
    this.numero = numero;
    this.whatapp = whatapp;
    this.interno = interno;
  }

  @ManyToOne(() => Institucion, (institucion) => institucion.telefonos,{ onDelete: 'CASCADE' })
  institucion: Institucion;

  @ManyToOne(() => Prestador, (prestador) => prestador.telefonos,{ onDelete: 'CASCADE' })
  prestador: Prestador;
}
