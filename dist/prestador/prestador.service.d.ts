import { CreatePrestadorDto } from './dto/create-prestador.dto';
import { UpdatePrestadorDto } from './dto/update-prestador.dto';
import { Repository } from 'typeorm';
import { Prestador } from './entities/prestador.entity';
import { VistaDetallePrestadores } from './entities/VistaDetallePrestadores.entity';
export declare class PrestadorService {
    private prestadorRepository;
    private vistaDetallePrestadoresRepository;
    constructor(prestadorRepository: Repository<Prestador>, vistaDetallePrestadoresRepository: Repository<VistaDetallePrestadores>);
    findDetailPrestadores(): Promise<VistaDetallePrestadores[]>;
    create(createPrestadorDto: CreatePrestadorDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePrestadorDto: UpdatePrestadorDto): string;
    remove(id: number): string;
}
