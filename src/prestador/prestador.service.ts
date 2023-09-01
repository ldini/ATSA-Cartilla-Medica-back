import { Injectable } from '@nestjs/common';
import { CreatePrestadorDto } from './dto/create-prestador.dto';
import { UpdatePrestadorDto } from './dto/update-prestador.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prestador } from './entities/prestador.entity';
import { VistaDetallePrestadores } from './entities/VistaDetallePrestadores.entity';

@Injectable()
export class PrestadorService {

  constructor(
    @InjectRepository(Prestador)
    private prestadorRepository: Repository<Prestador>, 
    @InjectRepository(VistaDetallePrestadores)
    private vistaDetallePrestadoresRepository: Repository<VistaDetallePrestadores>){}


    async findDetailPrestadores(): Promise<VistaDetallePrestadores[]> {
      const result = await this.vistaDetallePrestadoresRepository.find();
      console.log(result);
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



