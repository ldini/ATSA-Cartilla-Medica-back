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
exports.VistaDetallePrestadores = void 0;
const typeorm_1 = require("typeorm");
let VistaDetallePrestadores = class VistaDetallePrestadores {
};
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", Number)
], VistaDetallePrestadores.prototype, "prestador_id", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", String)
], VistaDetallePrestadores.prototype, "institucion_nombre", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", String)
], VistaDetallePrestadores.prototype, "institucion_zona", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", String)
], VistaDetallePrestadores.prototype, "institucion_direccion", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", String)
], VistaDetallePrestadores.prototype, "telefonos", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", String)
], VistaDetallePrestadores.prototype, "dias_trabajo", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", String)
], VistaDetallePrestadores.prototype, "hora_inicio", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", String)
], VistaDetallePrestadores.prototype, "hora_fin", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", Number)
], VistaDetallePrestadores.prototype, "prestadorId", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", Number)
], VistaDetallePrestadores.prototype, "institucionId", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", String)
], VistaDetallePrestadores.prototype, "prestador_nombre", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", String)
], VistaDetallePrestadores.prototype, "prestador_apellido", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", String)
], VistaDetallePrestadores.prototype, "prestador_direccion", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", Number)
], VistaDetallePrestadores.prototype, "id_especialidad", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", String)
], VistaDetallePrestadores.prototype, "especialidad_nombre", void 0);
VistaDetallePrestadores = __decorate([
    (0, typeorm_1.ViewEntity)({
        name: 'VistaDetallePrestadores',
        expression: `SELECT
                            [telefonos].[prestador_id],
                            [telefonos].[nombre] AS institucion_nombre,
                            [telefonos].[zona] AS institucion_zona,
                            [telefonos].[direccion] AS institucion_direccion,
                            [telefonos].[numeros] AS telefonos,
                            [horarios].[dias_trabajo],
                            [horarios].[hora_inicio],
                            [horarios].[hora_fin],
                            [horarios].[prestadorId],
                            [horarios].[institucionId],
                            [prestadores].[prestador_nombre],
                            [prestadores].[prestador_apellido],
                            [prestadores].[prestador_direccion],
                            [prestadores].[id_especialidad],
                            [prestadores].[especialidad_nombre]
                            FROM
                            (
                            SELECT
                                [prestador].[id] AS prestador_id,
                                [institucion].[nombre],
                                [institucion].[zona],
                                [institucion].[direccion],
                                STRING_AGG(
                                    CASE
                                        WHEN [whatapp] = 1 THEN CONCAT([numero], ' (wa)')
                                        WHEN [interno] IS NOT NULL THEN CONCAT([numero], '(',[interno],')' )
                                        ELSE [numero]
                                    END,
                                    ' / '
                                ) AS numeros
                            FROM [cartilla].[dbo].[telefono]
                            JOIN [cartilla].[dbo].[prestador_institucion] ON [prestador_institucion].[institucion_id] = [telefono].[institucionId]
                            JOIN [cartilla].[dbo].[prestador] ON [prestador].[id] = [prestador_institucion].[prestador_id]
                            JOIN [cartilla].[dbo].[institucion] ON [institucion].[id] = [prestador_institucion].[institucion_id]
                            GROUP BY [prestador].[id], [institucion].[nombre], [institucion].[zona], [institucion].[direccion]
                            ) AS telefonos
                            JOIN
                            (
                            SELECT
                                CASE
                                    WHEN COUNT(*) > 1 THEN STRING_AGG([dia], ', ')
                                    ELSE MAX([dia])
                                END AS dias_trabajo,
                                [hora_inicio],
                                [hora_fin],
                                [prestadorId],
                                [institucionId]
                            FROM
                            (
                                SELECT
                                    [dia],
                                    [hora_inicio],
                                    [hora_fin],
                                    [prestadorId],
                                    [institucionId],
                                    COUNT(*) OVER (PARTITION BY [hora_inicio], [hora_fin], [prestadorId], [institucionId]) AS cnt
                                FROM [cartilla].[dbo].[horario]
                            ) AS HorarioConConteo
                            GROUP BY
                                [hora_inicio],
                                [hora_fin],
                                [prestadorId],
                                [institucionId],
                                cnt
                            ) AS horarios
                            ON [telefonos].[prestador_id] = [horarios].[prestadorId]
                            JOIN
                            (
                            SELECT
                                p.[id] AS prestador_id,
                                p.[nombre] AS prestador_nombre,
                                p.[apellido] AS prestador_apellido,
                                p.[direccion] AS prestador_direccion,
                                p.[id_especialidad],
                                e.[nombre] AS especialidad_nombre
                            FROM
                            (
                                SELECT TOP (1000)
                                    [id],
                                    [nombre],
                                    [apellido],
                                    [direccion],
                                    [id_especialidad]
                                FROM [cartilla].[dbo].[prestador]
                            ) AS p
                            JOIN
                            (
                                SELECT TOP (1000)
                                    [id],
                                    [nombre]
                                FROM [cartilla].[dbo].[especialidad]
                            ) AS e
                            ON p.[id_especialidad] = e.[id]
                            ) AS prestadores
                            ON [telefonos].[prestador_id] = [prestadores].[prestador_id]

                            `
    })
], VistaDetallePrestadores);
exports.VistaDetallePrestadores = VistaDetallePrestadores;
//# sourceMappingURL=VistaDetallePrestadores.entity.js.map