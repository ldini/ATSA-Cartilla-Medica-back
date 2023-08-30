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
exports.PrestadorInstitucion = void 0;
const institucion_entity_1 = require("../../institucion/entities/institucion.entity");
const typeorm_1 = require("typeorm");
const prestador_entity_1 = require("./prestador.entity");
let PrestadorInstitucion = class PrestadorInstitucion {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PrestadorInstitucion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => prestador_entity_1.Prestador, (prestador) => prestador.prestadorInstituciones, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'prestador_id' }),
    __metadata("design:type", prestador_entity_1.Prestador)
], PrestadorInstitucion.prototype, "prestador", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => institucion_entity_1.Institucion, (institucion) => institucion.prestadorInstituciones, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'institucion_id' }),
    __metadata("design:type", institucion_entity_1.Institucion)
], PrestadorInstitucion.prototype, "institucion", void 0);
PrestadorInstitucion = __decorate([
    (0, typeorm_1.Entity)('prestador_institucion')
], PrestadorInstitucion);
exports.PrestadorInstitucion = PrestadorInstitucion;
//# sourceMappingURL=prestador-institucion.entity.js.map