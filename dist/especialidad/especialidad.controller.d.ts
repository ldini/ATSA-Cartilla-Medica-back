import { EspecialidadService } from './especialidad.service';
import { CreateEspecialidadDto } from './dto/create-especialidad.dto';
import { UpdateEspecialidadDto } from './dto/update-especialidad.dto';
export declare class EspecialidadController {
    private readonly especialidadService;
    constructor(especialidadService: EspecialidadService);
    create(createEspecialidadDto: CreateEspecialidadDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateEspecialidadDto: UpdateEspecialidadDto): string;
    remove(id: string): string;
}
