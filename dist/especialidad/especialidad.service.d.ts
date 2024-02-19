import { Especialidad } from './entities/especialidad.entity';
import { Repository } from 'typeorm';
export declare class EspecialidadService {
    private readonly especialidadRepository;
    constructor(especialidadRepository: Repository<Especialidad>);
    listar(): Promise<any[]>;
    create({ nombre }: {
        nombre: any;
    }): Promise<any>;
}
