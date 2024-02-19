import { Module } from '@nestjs/common';
import { EspecialidadService } from './especialidad.service';
import { EspecialidadController } from './especialidad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prestador } from 'src/prestador/entities/prestador.entity';
import { Institucion } from 'src/institucion/entities/institucion.entity';
import { Especialidad } from './entities/especialidad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prestador,Institucion,Especialidad])],
  controllers: [EspecialidadController],
  providers: [EspecialidadService]
})
export class EspecialidadModule {}
