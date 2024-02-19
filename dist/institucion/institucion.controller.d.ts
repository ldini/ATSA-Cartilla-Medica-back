import { InstitucionService } from './institucion.service';
import { CreateInstitucionDto } from './dto/create-institucion.dto';
export declare class InstitucionController {
    private readonly institucionService;
    constructor(institucionService: InstitucionService);
    listar(): any;
    allInstituciones(): any;
    create(createInstitucionDto: CreateInstitucionDto): Promise<any>;
    listar_guardia(): any;
    listar_externos(): any;
    findNoInstitucionesByPrestadorId(prestadorId: number): Promise<any[]>;
    findInstitucionesByPrestadorId(prestadorId: number): Promise<any[]>;
    create_guardia(body: any): Promise<any>;
    create_externo(body: any): Promise<any>;
    deleteGuardia(body: any): Promise<any>;
    deleteExterno(body: any): Promise<any>;
    delete(id: string): Promise<any>;
    update(id: any, body: any): Promise<any>;
}
