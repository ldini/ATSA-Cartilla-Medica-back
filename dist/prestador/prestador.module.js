"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrestadorModule = void 0;
const common_1 = require("@nestjs/common");
const prestador_service_1 = require("./prestador.service");
const prestador_controller_1 = require("./prestador.controller");
const typeorm_1 = require("@nestjs/typeorm");
const horario_entity_1 = require("../horario/entities/horario.entity");
const especialidad_entity_1 = require("../especialidad/entities/especialidad.entity");
const prestador_entity_1 = require("./entities/prestador.entity");
const prestador_institucion_entity_1 = require("./entities/prestador-institucion.entity");
let PrestadorModule = class PrestadorModule {
};
PrestadorModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([prestador_entity_1.Prestador, horario_entity_1.Horario, especialidad_entity_1.Especialidad, prestador_institucion_entity_1.PrestadorInstitucion])],
        controllers: [prestador_controller_1.PrestadorController],
        providers: [prestador_service_1.PrestadorService]
    })
], PrestadorModule);
exports.PrestadorModule = PrestadorModule;
//# sourceMappingURL=prestador.module.js.map