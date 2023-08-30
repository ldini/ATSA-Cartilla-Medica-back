import { Module } from '@nestjs/common';
import { EspecialidadService } from './especialidad.service';
import { EspecialidadController } from './especialidad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prestador } from 'src/prestador/entities/prestador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prestador])],
  controllers: [EspecialidadController],
  providers: [EspecialidadService]
})
export class EspecialidadModule {}
