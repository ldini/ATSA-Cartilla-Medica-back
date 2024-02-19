import { PrestadorService } from './prestador.service';
import { VistaDetallePrestadores } from './entities/VistaDetallePrestadores.entity';
export declare class PrestadorController {
    private readonly prestadorService;
    constructor(prestadorService: PrestadorService);
    listar(): any;
    getDetailPrestadores(): Promise<VistaDetallePrestadores[]>;
    create(body: any): Promise<any>;
    delete(id: string): Promise<any>;
    update(id: any, prestador: any): Promise<any>;
    addPrestadorToInstitucion(body: any): Promise<any>;
}
