import { CreateTelefonoDto } from './dto/create-telefono.dto';
import { UpdateTelefonoDto } from './dto/update-telefono.dto';
export declare class TelefonoService {
    create(createTelefonoDto: CreateTelefonoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTelefonoDto: UpdateTelefonoDto): string;
    remove(id: number): string;
}
