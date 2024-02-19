import { Repository } from 'typeorm';
import { Prestador } from './entities/prestador.entity';
import { VistaDetallePrestadores } from './entities/VistaDetallePrestadores.entity';
import { Especialidad } from 'src/especialidad/entities/especialidad.entity';
import { Telefono } from 'src/telefono/entities/telefono.entity';
import { Institucion } from 'src/institucion/entities/institucion.entity';
import { PrestadorInstitucion } from './entities/prestador-institucion.entity';
import { Horario } from 'src/horario/entities/horario.entity';
export declare class PrestadorService {
    private prestadorRepository;
    private horarioRepository;
    private especialidadRepository;
    private readonly telefonoRepository;
    private readonly institucionRepository;
    private readonly prestadorInstitucionRepository;
    private vistaDetallePrestadoresRepository;
    constructor(prestadorRepository: Repository<Prestador>, horarioRepository: Repository<Horario>, especialidadRepository: Repository<Especialidad>, telefonoRepository: Repository<Telefono>, institucionRepository: Repository<Institucion>, prestadorInstitucionRepository: Repository<PrestadorInstitucion>, vistaDetallePrestadoresRepository: Repository<VistaDetallePrestadores>);
    findDetailPrestadores(): Promise<VistaDetallePrestadores[]>;
    listar(): Promise<any[]>;
    create({ nombre, apellido, direccion, zona, especialidad, telefonos, horarios }: {
        nombre: any;
        apellido: any;
        direccion: any;
        zona: any;
        especialidad: any;
        telefonos: any;
        horarios: any;
    }): Promise<any>;
    update(id: number, { nombre, apellido, direccion, zona, especialidad, telefonos, horarios }: {
        nombre: any;
        apellido: any;
        direccion: any;
        zona: any;
        especialidad: any;
        telefonos: any;
        horarios: any;
    }): Promise<any>;
    addPrestadorToInstitucion({ prestadorId, institucionId, horarios }: {
        prestadorId: any;
        institucionId: any;
        horarios: any;
    }): Promise<any>;
    delete(id: any): Promise<any>;
}
