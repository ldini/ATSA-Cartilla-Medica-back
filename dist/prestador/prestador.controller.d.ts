import { PrestadorService } from './prestador.service';
import { VistaDetallePrestadores } from './entities/VistaDetallePrestadores.entity';
export declare class PrestadorController {
    private readonly prestadorService;
    constructor(prestadorService: PrestadorService);
    getDetailPrestadores(): Promise<VistaDetallePrestadores[]>;
}
