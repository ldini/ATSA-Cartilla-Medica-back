import { DataSource } from 'typeorm';
import { InstitucionModule } from './institucion/institucion.module';
import { PrestadorModule } from './prestador/prestador.module';
import { EspecialidadModule } from './especialidad/especialidad.module';
import { TelefonoModule } from './telefono/telefono.module';
import { HorarioModule } from './horario/horario.module';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        "type": "mssql",
        "host": "localhost",
        "port": 1433,
        "username": "sa",
        "password": "Motorola5465",
        "database": "cartilla",
        "synchronize": true,
        "entities": ["dist/**/*.entity{.ts,.js}"],
        options: { encrypt: false },
      });
      return dataSource.initialize();
    },
    
  }
];
