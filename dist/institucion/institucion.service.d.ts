import { CreateInstitucionDto } from './dto/create-institucion.dto';
import { UpdateInstitucionDto } from './dto/update-institucion.dto';
export declare class InstitucionService {
    create(createInstitucionDto: CreateInstitucionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateInstitucionDto: UpdateInstitucionDto): string;
    remove(id: number): string;
}
