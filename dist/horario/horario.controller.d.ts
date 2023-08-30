import { HorarioService } from './horario.service';
import { CreateHorarioDto } from './dto/create-horario.dto';
import { UpdateHorarioDto } from './dto/update-horario.dto';
export declare class HorarioController {
    private readonly horarioService;
    constructor(horarioService: HorarioService);
    create(createHorarioDto: CreateHorarioDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateHorarioDto: UpdateHorarioDto): string;
    remove(id: string): string;
}
