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
exports.Prestador = void 0;
const especialidad_entity_1 = require("../../especialidad/entities/especialidad.entity");
const horario_entity_1 = require("../../horario/entities/horario.entity");
const typeorm_1 = require("typeorm");
const prestador_institucion_entity_1 = require("./prestador-institucion.entity");
const telefono_entity_1 = require("../../telefono/entities/telefono.entity");
let Prestador = class Prestador {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Prestador.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Prestador.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Prestador.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Prestador.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Prestador.prototype, "zona", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => especialidad_entity_1.Especialidad),
    (0, typeorm_1.JoinColumn)({ name: 'id_especialidad' }),
    __metadata("design:type", especialidad_entity_1.Especialidad)
], Prestador.prototype, "especialidad", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => prestador_institucion_entity_1.PrestadorInstitucion, (prestadorInstitucion) => prestadorInstitucion.prestador),
    __metadata("design:type", Array)
], Prestador.prototype, "prestadorInstituciones", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => horario_entity_1.Horario, (horario) => horario.prestador),
    __metadata("design:type", Array)
], Prestador.prototype, "horarios", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => telefono_entity_1.Telefono, (telefono) => telefono.prestador),
    __metadata("design:type", Array)
], Prestador.prototype, "telefonos", void 0);
Prestador = __decorate([
    (0, typeorm_1.Entity)()
], Prestador);
exports.Prestador = Prestador;
//# sourceMappingURL=prestador.entity.js.map