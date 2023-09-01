import { PrestadorService } from './prestador.service';
import { CreatePrestadorDto } from './dto/create-prestador.dto';
import { UpdatePrestadorDto } from './dto/update-prestador.dto';
import { VistaDetallePrestadores } from './entities/VistaDetallePrestadores.entity';
export declare class PrestadorController {
    private readonly prestadorService;
    constructor(prestadorService: PrestadorService);
    getDetailPrestadores(): Promise<VistaDetallePrestadores[]>;
    create(createPrestadorDto: CreatePrestadorDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePrestadorDto: UpdatePrestadorDto): string;
    remove(id: string): string;
}
