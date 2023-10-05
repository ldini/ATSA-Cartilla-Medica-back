"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelefonoModule = void 0;
const common_1 = require("@nestjs/common");
const telefono_service_1 = require("./telefono.service");
const telefono_controller_1 = require("./telefono.controller");
const typeorm_1 = require("@nestjs/typeorm");
const prestador_entity_1 = require("../prestador/entities/prestador.entity");
const telefono_entity_1 = require("./entities/telefono.entity");
const institucion_entity_1 = require("../institucion/entities/institucion.entity");
let TelefonoModule = class TelefonoModule {
};
TelefonoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([telefono_entity_1.Telefono, prestador_entity_1.Prestador, institucion_entity_1.Institucion])],
        controllers: [telefono_controller_1.TelefonoController],
        providers: [telefono_service_1.TelefonoService]
    })
], TelefonoModule);
exports.TelefonoModule = TelefonoModule;
//# sourceMappingURL=telefono.module.js.map