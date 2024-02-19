"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstitucionModule = void 0;
const common_1 = require("@nestjs/common");
const institucion_service_1 = require("./institucion.service");
const institucion_controller_1 = require("./institucion.controller");
const typeorm_1 = require("@nestjs/typeorm");
const prestador_institucion_entity_1 = require("../prestador/entities/prestador-institucion.entity");
const telefono_entity_1 = require("../telefono/entities/telefono.entity");
const especialidad_entity_1 = require("../especialidad/entities/especialidad.entity");
const institucion_entity_1 = require("./entities/institucion.entity");
const typeorm_2 = require("typeorm");
const prestador_entity_1 = require("../prestador/entities/prestador.entity");
let InstitucionModule = class InstitucionModule {
};
InstitucionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([prestador_institucion_entity_1.PrestadorInstitucion, telefono_entity_1.Telefono, especialidad_entity_1.Especialidad, institucion_entity_1.Institucion, typeorm_2.Repository, prestador_entity_1.Prestador])],
        controllers: [institucion_controller_1.InstitucionController],
        providers: [institucion_service_1.InstitucionService]
    })
], InstitucionModule);
exports.InstitucionModule = InstitucionModule;
//# sourceMappingURL=institucion.module.js.map