import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstitucionModule } from './institucion/institucion.module';
import { PrestadorModule } from './prestador/prestador.module';
import { EspecialidadModule } from './especialidad/especialidad.module';
import { TelefonoModule } from './telefono/telefono.module';
import { HorarioModule } from './horario/horario.module';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forRoot( {
    "type": "mssql",
    "host": "localhost",
    "port": 1433,
    "username": "german",
    "password": "German123",
    "database": "cartilla",
    // "username": "sa",
    // "password": "Motorola5465",
    // "database": "cartilla",
    "synchronize": true,
    "entities": ["dist/**/*.entity{.ts,.js}"],
    options: { encrypt: false },
                    } ),
    InstitucionModule,
    PrestadorModule,
    EspecialidadModule,
    TelefonoModule,
    HorarioModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
