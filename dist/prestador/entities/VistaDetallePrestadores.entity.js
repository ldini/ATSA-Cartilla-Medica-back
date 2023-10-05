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
    __metadata("design:type", String)
], VistaDetallePrestadores.prototype, "prestador_nombre", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", String)
], VistaDetallePrestadores.prototype, "prestador_apellido", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", String)
], VistaDetallePrestadores.prototype, "especialidad_nombre", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", String)
], VistaDetallePrestadores.prototype, "institucion_nombre", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", String)
], VistaDetallePrestadores.prototype, "institucion_direccion", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", String)
], VistaDetallePrestadores.prototype, "institucion_zona", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", String)
], VistaDetallePrestadores.prototype, "telefonos", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", String)
], VistaDetallePrestadores.prototype, "horarios_trabajo", void 0);
VistaDetallePrestadores = __decorate([
    (0, typeorm_1.ViewEntity)({
        name: 'VistaDetallePrestadores',
        expression: `  SELECT
                    prestador.nombre as prestador_nombre,
                    prestador.apellido as prestador_apellido,
                    especialidad.nombre as especialidad_nombre,
                    institucion.nombre as institucion_nombre,
                    institucion.direccion as institucion_direccion,
                    institucion.zona as institucion_zona,
                    institucion_telefono.numeros as telefonos,
                    STRING_AGG(horario_prestador.dia + ' ' + horario_prestador.hora_inicio + ' a ' + horario_prestador.hora_fin, ' / ') as horarios_trabajo
                    FROM [cartilla].[dbo].[prestador_institucion]
                    LEFT JOIN [cartilla].[dbo].[prestador] ON [prestador].[id] = [prestador_institucion].[prestador_id]
                    LEFT JOIN [cartilla].[dbo].[especialidad] ON [especialidad].[id] = [prestador].[id_especialidad]
                    LEFT JOIN [cartilla].[dbo].[horario] AS [horario_prestador] ON [horario_prestador].[prestadorId] = [prestador].[id]
                    LEFT JOIN [cartilla].[dbo].[institucion] ON [institucion].[id] = [prestador_institucion].[institucion_id]
                    LEFT JOIN (SELECT
                            [institucionId],
                            STRING_AGG(
                                CASE
                                    WHEN [whatapp] = 1 THEN
                                        [numero] + ' (wa)'
                                    ELSE
                                        [numero]
                                END
                                + CASE
                                    WHEN [interno] IS NOT NULL THEN
                                        ' (' + [interno] + ')'
                                    ELSE
                                        ''
                                END,
                                ' / '
                            ) AS numeros
                            FROM [cartilla].[dbo].[telefono]
                            GROUP BY [institucionId])
                    AS [institucion_telefono] ON [institucion].[id] = [institucion_telefono].[institucionId]
                    GROUP BY
                    prestador.id,
                    institucion.id,
                    prestador.nombre,
                    prestador.apellido,
                    especialidad.nombre,
                    institucion.nombre,
                    institucion.direccion,
                    institucion.zona,
                    institucion_telefono.numeros

                    UNION

                    SELECT   
                        'guardia' as prestador_nombre
                        ,null as prestador_apellido
                        ,especialidad.nombre as especialidad_nombre
                        ,institucion.nombre as institucion_nombre
                        ,institucion.direccion as institucion_direccion
                        ,institucion.zona as institucion_zona
                        ,institucion_telefono.numeros as telefonos
                        ,null horarios_trabajo

                    FROM [cartilla].[dbo].[guardias]
                    LEFT JOIN [cartilla].[dbo].[institucion] ON [institucion].[id] = [guardias].[institucionId]
                    LEFT JOIN [cartilla].[dbo].[especialidad] ON [especialidad].[id] = [guardias].[especialidadId]
                    LEFT JOIN (SELECT
                            [institucionId],
                            STRING_AGG(
                                CASE
                                    WHEN [whatapp] = 1 THEN
                                        [numero] + ' (wa)'
                                    ELSE
                                        [numero]
                                END
                                + CASE
                                    WHEN [interno] IS NOT NULL THEN
                                        ' (' + [interno] + ')'
                                    ELSE
                                        ''
                                END,
                                ' / '
                            ) AS numeros
                            FROM [cartilla].[dbo].[telefono]
                            GROUP BY [institucionId])
                    AS [institucion_telefono] ON [institucion].[id] = [institucion_telefono].[institucionId] 

                    UNION
                    
                    SELECT   
                        prestador.nombre as prestador_nombre,
                        prestador.apellido as prestador_apellido,
                        especialidad.nombre as especialidad_nombre,
                        null as institucion_nombre,
                        prestador.direccion as institucion_direccion,
                        prestador.zona as institucion_zona,
                        prestador_telefono.numeros as telefonos,
                        STRING_AGG(horario_prestador.dia + ' ' + horario_prestador.hora_inicio + ' a ' + horario_prestador.hora_fin, ' / ') as horarios_trabajo
                    FROM [cartilla].[dbo].[prestador]
                    LEFT JOIN [cartilla].[dbo].[especialidad] ON [especialidad].[id] = [prestador].[id_especialidad]
                    LEFT JOIN [cartilla].[dbo].[horario] AS [horario_prestador] ON [horario_prestador].[prestadorId] = [prestador].[id]
                    LEFT JOIN (SELECT
                            [prestadorId],
                            STRING_AGG(
                                CASE
                                    WHEN [whatapp] = 1 THEN
                                        [numero] + ' (wa)'
                                    ELSE
                                        [numero]
                                END
                                + CASE
                                    WHEN [interno] IS NOT NULL THEN
                                        ' (' + [interno] + ')'
                                    ELSE
                                        ''
                                END,
                                ' / '
                            ) AS numeros
                            FROM [cartilla].[dbo].[telefono]
                            GROUP BY [prestadorId])
                    AS [prestador_telefono] ON [prestador].[id] = [prestador_telefono].[prestadorId] 
                    GROUP BY especialidad.nombre, prestador.zona ,prestador.nombre,prestador.apellido, prestador.direccion, prestador_telefono.numeros
                    HAVING prestador.direccion is not null`
    })
], VistaDetallePrestadores);
exports.VistaDetallePrestadores = VistaDetallePrestadores;
//# sourceMappingURL=VistaDetallePrestadores.entity.js.map