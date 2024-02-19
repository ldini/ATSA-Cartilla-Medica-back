import { EspecialidadService } from './especialidad.service';
import { CreateEspecialidadDto } from './dto/create-especialidad.dto';
export declare class EspecialidadController {
    private readonly especialidadService;
    constructor(especialidadService: EspecialidadService);
    listar(): any;
    create(createEspecialidadDto: CreateEspecialidadDto): Promise<any>;
}
