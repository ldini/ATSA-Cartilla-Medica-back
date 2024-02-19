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
exports.Especialidad = void 0;
const institucion_entity_1 = require("../../institucion/entities/institucion.entity");
const typeorm_1 = require("typeorm");
let Especialidad = class Especialidad {
    constructor(nombre) {
        this.nombre = nombre;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Especialidad.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Especialidad.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => institucion_entity_1.Institucion, institucion => institucion.especialidades_guardia, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinTable)({ name: 'guardias' }),
    __metadata("design:type", Array)
], Especialidad.prototype, "instituciones_guardia", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => institucion_entity_1.Institucion, institucion => institucion.especialidades_externo, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinTable)({ name: 'externos' }),
    __metadata("design:type", Array)
], Especialidad.prototype, "instituciones_externo", void 0);
Especialidad = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String])
], Especialidad);
exports.Especialidad = Especialidad;
//# sourceMappingURL=especialidad.entity.js.map