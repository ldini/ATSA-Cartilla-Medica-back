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
exports.Horario = void 0;
const prestador_entity_1 = require("../../prestador/entities/prestador.entity");
const typeorm_1 = require("typeorm");
let Horario = class Horario {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Horario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Horario.prototype, "dia", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Horario.prototype, "hora_inicio", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Horario.prototype, "hora_fin", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => prestador_entity_1.Prestador, (prestador) => prestador.horarios),
    __metadata("design:type", prestador_entity_1.Prestador)
], Horario.prototype, "prestador", void 0);
Horario = __decorate([
    (0, typeorm_1.Entity)()
], Horario);
exports.Horario = Horario;
//# sourceMappingURL=horario.entity.js.map