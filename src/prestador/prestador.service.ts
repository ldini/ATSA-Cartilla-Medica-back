import { Injectable } from '@nestjs/common';
import { CreatePrestadorDto } from './dto/create-prestador.dto';
import { UpdatePrestadorDto } from './dto/update-prestador.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prestador } from './entities/prestador.entity';

@Injectable()
export class PrestadorService {

  constructor(
    @InjectRepository(Prestador)
    private prestadorRepository: Repository<Prestador>){}


    async findDetailPrestadores():Promise<any> {
      const queryBuilder = this.prestadorRepository.createQueryBuilder('prestador');
  
      const result = await queryBuilder
        .select([
          'prestador.apellido',
          'prestador.nombre',
          'especialidad.nombre',
          'institucion.nombre',
          'institucion.zona',
          'institucion.direccion',
          'telefono.numero',
          'telefono.interno',
          'telefono.whatapp',
          'horario.dia',
          'horario.hora_inicio',
          'horario.hora_fin'
        ])
        .leftJoin('prestador.especialidad', 'especialidad')
        .leftJoin('prestador.horarios', 'horario')
        .leftJoin('prestador.prestadorInstituciones', 'prestador_institucion')
        .innerJoin('prestador_institucion.institucion', 'institucion')
        .leftJoin('institucion.telefonos', 'telefono')
        .getRawMany();
  
      return result;
    }

  create(createPrestadorDto: CreatePrestadorDto) {
    return 'This action adds a new prestador';
  }

  findAll() {
    return `This action returns all prestador`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prestador`;
  }

  update(id: number, updatePrestadorDto: UpdatePrestadorDto) {
    return `This action updates a #${id} prestador`;
  }

  remove(id: number) {
    return `This action removes a #${id} prestador`;
  }
}



