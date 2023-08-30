import { CreatePrestadorDto } from './dto/create-prestador.dto';
import { UpdatePrestadorDto } from './dto/update-prestador.dto';
import { Repository } from 'typeorm';
import { Prestador } from './entities/prestador.entity';
export declare class PrestadorService {
    private prestadorRepository;
    constructor(prestadorRepository: Repository<Prestador>);
    findDetailPrestadores(): Promise<any>;
    create(createPrestadorDto: CreatePrestadorDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePrestadorDto: UpdatePrestadorDto): string;
    remove(id: number): string;
}
