import { CreateHorarioDto } from './dto/create-horario.dto';
import { UpdateHorarioDto } from './dto/update-horario.dto';
export declare class HorarioService {
    create(createHorarioDto: CreateHorarioDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateHorarioDto: UpdateHorarioDto): string;
    remove(id: number): string;
}
