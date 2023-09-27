"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EspecialidadModule = void 0;
const common_1 = require("@nestjs/common");
const especialidad_service_1 = require("./especialidad.service");
const especialidad_controller_1 = require("./especialidad.controller");
const typeorm_1 = require("@nestjs/typeorm");
const prestador_entity_1 = require("../prestador/entities/prestador.entity");
const institucion_entity_1 = require("../institucion/entities/institucion.entity");
let EspecialidadModule = class EspecialidadModule {
};
EspecialidadModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([prestador_entity_1.Prestador, institucion_entity_1.Institucion])],
        controllers: [especialidad_controller_1.EspecialidadController],
        providers: [especialidad_service_1.EspecialidadService]
    })
], EspecialidadModule);
exports.EspecialidadModule = EspecialidadModule;
//# sourceMappingURL=especialidad.module.js.map