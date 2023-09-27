import { Module } from '@nestjs/common';
import { EspecialidadService } from './especialidad.service';
import { EspecialidadController } from './especialidad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prestador } from 'src/prestador/entities/prestador.entity';
import { Institucion } from 'src/institucion/entities/institucion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prestador,Institucion])],
  controllers: [EspecialidadController],
  providers: [EspecialidadService]
})
export class EspecialidadModule {}
