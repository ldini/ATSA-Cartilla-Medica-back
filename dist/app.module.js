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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const institucion_module_1 = require("./institucion/institucion.module");
const prestador_module_1 = require("./prestador/prestador.module");
const especialidad_module_1 = require("./especialidad/especialidad.module");
const telefono_module_1 = require("./telefono/telefono.module");
const horario_module_1 = require("./horario/horario.module");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let AppModule = class AppModule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_2.TypeOrmModule.forRoot({
                "type": "mssql",
                "host": "localhost",
                "port": 1433,
                "username": "german",
                "password": "German123",
                "database": "cartilla",
                "synchronize": true,
                "entities": ["dist/**/*.entity{.ts,.js}"],
                options: { encrypt: false },
            }),
            institucion_module_1.InstitucionModule,
            prestador_module_1.PrestadorModule,
            especialidad_module_1.EspecialidadModule,
            telefono_module_1.TelefonoModule,
            horario_module_1.HorarioModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    }),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map