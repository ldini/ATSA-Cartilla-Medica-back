import { Entity, ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
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
export class VistaDetallePrestadores {

  @ViewColumn()
  prestador_id: number;

  @ViewColumn()
  institucion_nombre: string;

  @ViewColumn()
  institucion_zona: string;

  @ViewColumn()
  institucion_direccion: string;

  @ViewColumn()
  telefonos: string;

  @ViewColumn()
  dias_trabajo: string;

  @ViewColumn()
  hora_inicio: string;

  @ViewColumn()
  hora_fin: string;

  @ViewColumn()
  prestadorId: number;

  @ViewColumn()
  institucionId: number;

  @ViewColumn()
  prestador_nombre: string;

  @ViewColumn()
  prestador_apellido: string;

  @ViewColumn()
  prestador_direccion: string;

  @ViewColumn()
  id_especialidad: number;

  @ViewColumn()
  especialidad_nombre: string;
}
