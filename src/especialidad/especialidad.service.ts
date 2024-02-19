import { Injectable } from '@nestjs/common';
import { Especialidad } from './entities/especialidad.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class EspecialidadService {
    
    constructor(@InjectRepository(Especialidad)
    private readonly especialidadRepository: Repository<Especialidad>,)
    {}
    
    async listar():Promise<any[]>{
        return await this.especialidadRepository.find();
    }
    
    async create({nombre}): Promise<any> {
        const especialidad:Especialidad = new Especialidad(nombre);
        if(especialidad){
            return await this.especialidadRepository.save(especialidad);
        }
        return "no se creo";
    }

}
