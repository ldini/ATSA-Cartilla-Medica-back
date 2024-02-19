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
exports.InstitucionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const institucion_entity_1 = require("./entities/institucion.entity");
const typeorm_2 = require("typeorm");
const telefono_entity_1 = require("../telefono/entities/telefono.entity");
const especialidad_entity_1 = require("../especialidad/entities/especialidad.entity");
const prestador_entity_1 = require("../prestador/entities/prestador.entity");
const prestador_institucion_entity_1 = require("../prestador/entities/prestador-institucion.entity");
let InstitucionService = class InstitucionService {
    constructor(institucionRepository, telefonoRepository, especialidadRepository, repository, prestadorRepository, prestadorInstitucionRepository) {
        this.institucionRepository = institucionRepository;
        this.telefonoRepository = telefonoRepository;
        this.especialidadRepository = especialidadRepository;
        this.repository = repository;
        this.prestadorRepository = prestadorRepository;
        this.prestadorInstitucionRepository = prestadorInstitucionRepository;
    }
    async listar() {
        return await this.institucionRepository.find({ relations: ['telefonos', 'horarios'] });
    }
    async allInstituciones() {
        return (await this.institucionRepository.find()).map((e) => e.nombre);
    }
    async create({ nombre, zona, direccion, tipo, telefonos }) {
        const institucion = await this.institucionRepository.create(new institucion_entity_1.Institucion(nombre, zona, direccion, tipo));
        if (institucion && telefonos) {
            const arraytelefonos = telefonos.map(async (telefono) => {
                const nuevoTelefono = this.telefonoRepository.create(new telefono_entity_1.Telefono(telefono.numero, telefono.whatapp, telefono.interno));
                return await this.telefonoRepository.save(nuevoTelefono);
            });
            institucion.telefonos = await Promise.all(arraytelefonos);
            return await this.institucionRepository.save(institucion);
        }
        return "no se creo";
    }
    async update(id, { nombre, zona, direccion, tipo, telefonos }) {
        try {
            const institucion = await this.institucionRepository.findOne({ where: { id: id } });
            if (!institucion) {
                return { message: 'Institución no encontrada' };
            }
            const newData = new institucion_entity_1.Institucion(nombre, zona, direccion, tipo);
            const arraytelefonos = telefonos.map(async (telefono) => {
                const nuevoTelefono = this.telefonoRepository.create(new telefono_entity_1.Telefono(telefono.numero, telefono.whatapp, telefono.interno));
                return await this.telefonoRepository.save(nuevoTelefono);
            });
            institucion.telefonos = await Promise.all(arraytelefonos);
            this.institucionRepository.merge(institucion, newData);
            await this.institucionRepository.save(institucion);
            return { message: 'Institución actualizada correctamente' };
        }
        catch (error) {
            console.error('Error al actualizar la institución:', error.message);
            return { message: 'Error interno del servidor' };
        }
    }
    async delete(id) {
        try {
            const institucion = await this.institucionRepository.findOne({ where: { id: id } });
            if (!institucion) {
                return { message: 'Institución no encontrada' };
            }
            await this.institucionRepository.remove(institucion);
            return { message: 'Institución eliminada correctamente' };
        }
        catch (error) {
            console.error('Error al eliminar la institución:', error.message);
            return { message: 'Error interno del servidor' };
        }
    }
    async listar_guardia() {
        try {
            const query = `SELECT guardias.institucionId, institucion.nombre AS nombre_institucion,guardias.especialidadId, especialidad.nombre AS nombre_especialidad
                         FROM guardias
                         JOIN institucion ON guardias.institucionId = institucion.id
                         JOIN especialidad ON guardias.especialidadId = especialidad.id;`;
            return await this.repository.query(query);
        }
        catch (error) {
            throw new Error('Error al listar las guardias');
        }
    }
    async listar_externos() {
        try {
            const query = `SELECT externos.institucionId, institucion.nombre AS nombre_institucion,externos.especialidadId, especialidad.nombre AS nombre_especialidad
                        FROM externos
                        JOIN institucion ON externos.institucionId = institucion.id
                        JOIN especialidad ON externos.especialidadId = especialidad.id;`;
            return await this.repository.query(query);
        }
        catch (error) {
            throw new Error('Error al listar las guardias');
        }
    }
    async deleteGuardia({ especialidadId, institucionId }) {
        try {
            console.log('Entramos');
            const query = `DELETE FROM guardias WHERE especialidadId = ${especialidadId} and institucionId = ${institucionId};`;
            await this.repository.query(query, [especialidadId, institucionId]);
            return { message: 'Guardia eliminada' };
        }
        catch (error) {
            throw new Error('Error al eliminar la guardia');
        }
    }
    async deleteExterno({ especialidadId, institucionId }) {
        try {
            const query = `DELETE FROM externos WHERE especialidadId = ${especialidadId} and institucionId = ${institucionId};`;
            await this.repository.query(query, [especialidadId, institucionId]);
            return { message: 'Externo eliminado' };
        }
        catch (error) {
            throw new Error('Error al eliminar externo');
        }
    }
    async create_guardia({ institucionId, especialidadId }) {
        const especialidad = await this.especialidadRepository.findOne({ where: { id: especialidadId } });
        const institucion = await this.institucionRepository.findOne({ where: { id: institucionId }, relations: ['especialidades_guardia'] });
        if (!institucion.especialidades_guardia) {
            institucion.especialidades_guardia = [];
        }
        institucion.especialidades_guardia.push(especialidad);
        return await this.institucionRepository.save(institucion);
    }
    ;
    async create_externo({ institucionId, especialidadId }) {
        const especialidad = await this.especialidadRepository.findOne({ where: { id: especialidadId } });
        const institucion = await this.institucionRepository.findOne({ where: { id: institucionId }, relations: ['especialidades_externo'] });
        if (!institucion.especialidades_externo) {
            institucion.especialidades_externo = [];
        }
        institucion.especialidades_externo.push(especialidad);
        return await this.institucionRepository.save(institucion);
    }
    ;
    async findInstitucionesByPrestadorId(prestador_id) {
        const options = {
            relations: ["institucion", "prestador"],
        };
        const allInstitucionesAsignadas = await this.prestadorInstitucionRepository.find(options);
        const institucionesAsociadasIds = allInstitucionesAsignadas.filter(item => item.prestador.id == parseInt(prestador_id)).map((e) => e.institucion.id);
        const institucionesNoAsociadas = await this.institucionRepository.find({
            where: {
                id: (0, typeorm_2.In)(institucionesAsociadasIds),
            },
        });
        return institucionesNoAsociadas;
    }
    async findNoInstitucionesByPrestadorId(prestador_id) {
        const options = {
            relations: ["institucion", "prestador"],
        };
        const allInstitucionesAsignadas = await this.prestadorInstitucionRepository.find(options);
        const institucionesAsociadasIds = allInstitucionesAsignadas.filter(item => item.prestador.id == parseInt(prestador_id)).map((e) => e.institucion.id);
        const institucionesNoAsociadas = await this.institucionRepository.find({
            where: {
                id: (0, typeorm_2.Not)((0, typeorm_2.In)(institucionesAsociadasIds)),
            },
        });
        return institucionesNoAsociadas;
    }
};
InstitucionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(institucion_entity_1.Institucion)),
    __param(1, (0, typeorm_1.InjectRepository)(telefono_entity_1.Telefono)),
    __param(2, (0, typeorm_1.InjectRepository)(especialidad_entity_1.Especialidad)),
    __param(3, (0, typeorm_1.InjectRepository)(typeorm_2.Repository)),
    __param(4, (0, typeorm_1.InjectRepository)(prestador_entity_1.Prestador)),
    __param(5, (0, typeorm_1.InjectRepository)(prestador_institucion_entity_1.PrestadorInstitucion)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], InstitucionService);
exports.InstitucionService = InstitucionService;
//# sourceMappingURL=institucion.service.js.map