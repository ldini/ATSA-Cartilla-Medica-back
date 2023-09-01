import { Module } from '@nestjs/common';
import { PrestadorService } from './prestador.service';
import { PrestadorController } from './prestador.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Horario } from 'src/horario/entities/horario.entity';
import { Especialidad } from 'src/especialidad/entities/especialidad.entity';
import { Prestador } from './entities/prestador.entity';
import { PrestadorInstitucion } from './entities/prestador-institucion.entity';
import { VistaDetallePrestadores } from './entities/VistaDetallePrestadores.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prestador,Horario,Especialidad,PrestadorInstitucion,VistaDetallePrestadores])],
  controllers: [PrestadorController],
  providers: [PrestadorService]
})
export class PrestadorModule {}
