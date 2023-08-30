import { InstitucionService } from './institucion.service';
import { CreateInstitucionDto } from './dto/create-institucion.dto';
import { UpdateInstitucionDto } from './dto/update-institucion.dto';
export declare class InstitucionController {
    private readonly institucionService;
    constructor(institucionService: InstitucionService);
    create(createInstitucionDto: CreateInstitucionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateInstitucionDto: UpdateInstitucionDto): string;
    remove(id: string): string;
}
