"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrestadorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const prestador_entity_1 = require("./entities/prestador.entity");
const VistaDetallePrestadores_entity_1 = require("./entities/VistaDetallePrestadores.entity");
const especialidad_entity_1 = require("../especialidad/entities/especialidad.entity");
const telefono_entity_1 = require("../telefono/entities/telefono.entity");
const institucion_entity_1 = require("../institucion/entities/institucion.entity");
const prestador_institucion_entity_1 = require("./entities/prestador-institucion.entity");
const horario_entity_1 = require("../horario/entities/horario.entity");
let PrestadorService = class PrestadorService {
    constructor(prestadorRepository, horarioRepository, especialidadRepository, telefonoRepository, institucionRepository, prestadorInstitucionRepository, vistaDetallePrestadoresRepository) {
        this.prestadorRepository = prestadorRepository;
        this.horarioRepository = horarioRepository;
        this.especialidadRepository = especialidadRepository;
        this.telefonoRepository = telefonoRepository;
        this.institucionRepository = institucionRepository;
        this.prestadorInstitucionRepository = prestadorInstitucionRepository;
        this.vistaDetallePrestadoresRepository = vistaDetallePrestadoresRepository;
    }
    async findDetailPrestadores() {
        const result = await this.vistaDetallePrestadoresRepository.find();
        return result;
    }
    async listar() {
        return await this.prestadorRepository.find({ relations: ['especialidad', 'telefonos', 'horarios'] });
    }
    async create({ nombre, apellido, direccion, zona, especialidad, telefonos, horarios }) {
        const prestador = await this.prestadorRepository.create(new prestador_entity_1.Prestador(nombre, apellido, direccion, zona));
        if (prestador) {
            const newEspecialidad = await this.especialidadRepository.findOne({ where: { id: especialidad } });
            prestador.especialidad = newEspecialidad;
            const arraytelefonos = telefonos.map(async (telefono) => {
                const nuevoTelefono = this.telefonoRepository.create(new telefono_entity_1.Telefono(telefono.numero, telefono.whatapp, telefono.interno));
                return await this.telefonoRepository.save(nuevoTelefono);
            });
            prestador.telefonos = await Promise.all(arraytelefonos);
            const arrayhorarios = horarios.map(async (horario) => {
                const nuevoHorario = this.horarioRepository.create(new horario_entity_1.Horario(horario.dia, horario.hora_inicio, horario.hora_fin));
                return await this.horarioRepository.save(nuevoHorario);
            });
            prestador.horarios = await Promise.all(arrayhorarios);
            return await this.prestadorRepository.save(prestador);
        }
        return "no se creo";
    }
    async update(id, { nombre, apellido, direccion, zona, especialidad, telefonos, horarios }) {
        try {
            const prestador = await this.prestadorRepository.findOne({ where: { id: id } });
            if (!prestador) {
                throw new Error('Prestador no encontrado');
            }
            const newEspecialidad = await this.especialidadRepository.findOne({ where: { id: especialidad } });
            prestador.nombre = nombre;
            prestador.apellido = apellido;
            prestador.direccion = direccion;
            prestador.zona = zona;
            prestador.especialidad = newEspecialidad;
            const arraytelefonos = telefonos.map(async (telefono) => {
                const nuevoTelefono = this.telefonoRepository.create(new telefono_entity_1.Telefono(telefono.numero, telefono.whatapp, telefono.interno));
                return await this.telefonoRepository.save(nuevoTelefono);
            });
            prestador.telefonos = await Promise.all(arraytelefonos);
            const arrayhorarios = horarios.map(async (horario) => {
                const nuevoHorario = this.horarioRepository.create(new horario_entity_1.Horario(horario.dia, horario.hora_inicio, horario.hora_fin));
                return await this.horarioRepository.save(nuevoHorario);
            });
            prestador.horarios = await Promise.all(arrayhorarios);
            const prestadorActualizado = await this.prestadorRepository.save(prestador);
            return prestadorActualizado;
        }
        catch (error) {
            console.error('Error al actualizar el prestador:', error.message);
            throw new Error('Error interno del servidor');
        }
    }
    async addPrestadorToInstitucion({ prestadorId, institucionId, horarios }) {
        console.log(prestadorId);
        const prestador = await this.prestadorRepository.findOne({ where: { id: prestadorId } });
        const institucion = await this.institucionRepository.findOne({ where: { id: institucionId } });
        if (!prestador) {
            throw new Error('No se encontró el prestador con el ID proporcionado.');
        }
        if (!institucion) {
            throw new Error('No se encontró la institución con el ID proporcionado.');
        }
        const arrayhorarios = horarios.map(async (horarioData) => {
            const horario = new horario_entity_1.Horario(horarioData.dia, horarioData.inicio, horarioData.fin);
            horario.institucion = institucion;
            const newHorario = this.horarioRepository.create(horario);
            return await this.horarioRepository.save(newHorario);
        });
        institucion.horarios = await Promise.all(arrayhorarios);
        const prestadorInstitucion = new prestador_institucion_entity_1.PrestadorInstitucion();
        prestadorInstitucion.prestador = prestador;
        prestadorInstitucion.institucion = institucion;
        return await this.prestadorInstitucionRepository.save(prestadorInstitucion);
    }
    ;
    async delete(id) {
        try {
            const institucion = await this.prestadorRepository.findOne({ where: { id: id } });
            if (!institucion) {
                return { message: 'prestador no encontrada' };
            }
            await this.prestadorRepository.remove(institucion);
            return { message: 'Prestador eliminada correctamente' };
        }
        catch (error) {
            console.error('Error al eliminar la prestador:', error.message);
            return { message: 'Error interno del servidor' };
        }
    }
};
PrestadorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(prestador_entity_1.Prestador)),
    __param(1, (0, typeorm_1.InjectRepository)(horario_entity_1.Horario)),
    __param(2, (0, typeorm_1.InjectRepository)(especialidad_entity_1.Especialidad)),
    __param(3, (0, typeorm_1.InjectRepository)(telefono_entity_1.Telefono)),
    __param(4, (0, typeorm_1.InjectRepository)(institucion_entity_1.Institucion)),
    __param(5, (0, typeorm_1.InjectRepository)(prestador_institucion_entity_1.PrestadorInstitucion)),
    __param(6, (0, typeorm_1.InjectRepository)(VistaDetallePrestadores_entity_1.VistaDetallePrestadores)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PrestadorService);
exports.PrestadorService = PrestadorService;
//# sourceMappingURL=prestador.service.js.map