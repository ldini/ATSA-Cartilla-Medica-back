import { Entity, ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
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
                    AS [institucion_telefono] ON [institucion].[id] = [institucion_telefono].[institucionId] ` 
})
export class VistaDetallePrestadores {

    @ViewColumn()
    prestador_nombre: string;

    @ViewColumn()
    prestador_apellido: string;

    @ViewColumn()
    especialidad_nombre: string;

    @ViewColumn()
    institucion_nombre: string;

    @ViewColumn()
    institucion_direccion: string;

    @ViewColumn()
    institucion_zona: string;

    @ViewColumn()
    telefonos: string;

    @ViewColumn()
    horarios_trabajo: string;

}
