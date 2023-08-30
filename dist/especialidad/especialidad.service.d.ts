import { CreateEspecialidadDto } from './dto/create-especialidad.dto';
import { UpdateEspecialidadDto } from './dto/update-especialidad.dto';
export declare class EspecialidadService {
    create(createEspecialidadDto: CreateEspecialidadDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEspecialidadDto: UpdateEspecialidadDto): string;
    remove(id: number): string;
}
