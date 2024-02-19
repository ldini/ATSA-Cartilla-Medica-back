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
exports.Telefono = void 0;
const institucion_entity_1 = require("../../institucion/entities/institucion.entity");
const prestador_entity_1 = require("../../prestador/entities/prestador.entity");
const typeorm_1 = require("typeorm");
let Telefono = class Telefono {
    constructor(numero, whatapp, interno) {
        this.numero = numero;
        this.whatapp = whatapp;
        this.interno = interno;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Telefono.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Telefono.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Telefono.prototype, "interno", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Telefono.prototype, "whatapp", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => institucion_entity_1.Institucion, (institucion) => institucion.telefonos, { onDelete: 'CASCADE' }),
    __metadata("design:type", institucion_entity_1.Institucion)
], Telefono.prototype, "institucion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => prestador_entity_1.Prestador, (prestador) => prestador.telefonos, { onDelete: 'CASCADE' }),
    __metadata("design:type", prestador_entity_1.Prestador)
], Telefono.prototype, "prestador", void 0);
Telefono = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, Boolean, String])
], Telefono);
exports.Telefono = Telefono;
//# sourceMappingURL=telefono.entity.js.map