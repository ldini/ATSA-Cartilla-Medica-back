import { Institucion } from './entities/institucion.entity';
import { Repository } from 'typeorm';
import { Telefono } from 'src/telefono/entities/telefono.entity';
import { Especialidad } from 'src/especialidad/entities/especialidad.entity';
import { Prestador } from 'src/prestador/entities/prestador.entity';
import { PrestadorInstitucion } from 'src/prestador/entities/prestador-institucion.entity';
export declare class InstitucionService {
    private readonly institucionRepository;
    private readonly telefonoRepository;
    private readonly especialidadRepository;
    private readonly repository;
    private readonly prestadorRepository;
    private readonly prestadorInstitucionRepository;
    constructor(institucionRepository: Repository<Institucion>, telefonoRepository: Repository<Telefono>, especialidadRepository: Repository<Especialidad>, repository: Repository<any>, prestadorRepository: Repository<Prestador>, prestadorInstitucionRepository: Repository<PrestadorInstitucion>);
    listar(): Promise<any[]>;
    allInstituciones(): Promise<any[]>;
    create({ nombre, zona, direccion, tipo, telefonos }: {
        nombre: any;
        zona: any;
        direccion: any;
        tipo: any;
        telefonos: any;
    }): Promise<any>;
    update(id: number, { nombre, zona, direccion, tipo, telefonos }: {
        nombre: any;
        zona: any;
        direccion: any;
        tipo: any;
        telefonos: any;
    }): Promise<any>;
    delete(id: any): Promise<any>;
    listar_guardia(): Promise<any[]>;
    listar_externos(): Promise<any[]>;
    deleteGuardia({ especialidadId, institucionId }: {
        especialidadId: any;
        institucionId: any;
    }): Promise<any>;
    deleteExterno({ especialidadId, institucionId }: {
        especialidadId: any;
        institucionId: any;
    }): Promise<any>;
    create_guardia({ institucionId, especialidadId }: {
        institucionId: any;
        especialidadId: any;
    }): Promise<any>;
    create_externo({ institucionId, especialidadId }: {
        institucionId: any;
        especialidadId: any;
    }): Promise<any>;
    findInstitucionesByPrestadorId(prestador_id: any): Promise<any[]>;
    findNoInstitucionesByPrestadorId(prestador_id: any): Promise<any[]>;
}
