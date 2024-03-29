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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Institucion = void 0;
const especialidad_entity_1 = require("../../especialidad/entities/especialidad.entity");
const horario_entity_1 = require("../../horario/entities/horario.entity");
const prestador_institucion_entity_1 = require("../../prestador/entities/prestador-institucion.entity");
const telefono_entity_1 = require("../../telefono/entities/telefono.entity");
const typeorm_1 = require("typeorm");
let Institucion = class Institucion {
    constructor(nombre, zona, direccion, tipo) {
        this.nombre = nombre;
        this.zona = zona;
        this.direccion = direccion;
        this.tipo = tipo;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Institucion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Institucion.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Institucion.prototype, "zona", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Institucion.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'clinica' }),
    __metadata("design:type", String)
], Institucion.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => telefono_entity_1.Telefono, (telefono) => telefono.institucion),
    __metadata("design:type", Array)
], Institucion.prototype, "telefonos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => horario_entity_1.Horario, (horario) => horario.institucion),
    __metadata("design:type", Array)
], Institucion.prototype, "horarios", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => especialidad_entity_1.Especialidad, especialidad => especialidad.instituciones_guardia),
    __metadata("design:type", Array)
], Institucion.prototype, "especialidades_guardia", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => especialidad_entity_1.Especialidad, especialidad => especialidad.instituciones_externo),
    __metadata("design:type", Array)
], Institucion.prototype, "especialidades_externo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => prestador_institucion_entity_1.PrestadorInstitucion, (prestadorInstitucion) => prestadorInstitucion.institucion),
    __metadata("design:type", Array)
], Institucion.prototype, "prestadorInstituciones", void 0);
Institucion = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, String, String, String])
], Institucion);
exports.Institucion = Institucion;
//# sourceMappingURL=institucion.entity.js.map