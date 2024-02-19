import { Module } from '@nestjs/common';
import { PrestadorService } from './prestador.service';
import { PrestadorController } from './prestador.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Horario } from 'src/horario/entities/horario.entity';
import { Especialidad } from 'src/especialidad/entities/especialidad.entity';
import { Prestador } from './entities/prestador.entity';
import { PrestadorInstitucion } from './entities/prestador-institucion.entity';
import { VistaDetallePrestadores } from './entities/VistaDetallePrestadores.entity';
import { Telefono } from 'src/telefono/entities/telefono.entity';
import { Institucion } from 'src/institucion/entities/institucion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Telefono,Prestador,Horario,Especialidad,PrestadorInstitucion,VistaDetallePrestadores,Institucion])],
  controllers: [PrestadorController],
  providers: [PrestadorService]
})
export class PrestadorModule {}
