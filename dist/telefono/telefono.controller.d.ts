import { TelefonoService } from './telefono.service';
import { CreateTelefonoDto } from './dto/create-telefono.dto';
import { UpdateTelefonoDto } from './dto/update-telefono.dto';
export declare class TelefonoController {
    private readonly telefonoService;
    constructor(telefonoService: TelefonoService);
    create(createTelefonoDto: CreateTelefonoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTelefonoDto: UpdateTelefonoDto): string;
    remove(id: string): string;
}
