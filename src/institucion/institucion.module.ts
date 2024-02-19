import { Module } from '@nestjs/common';
import { InstitucionService } from './institucion.service';
import { InstitucionController } from './institucion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrestadorInstitucion } from 'src/prestador/entities/prestador-institucion.entity';
import { Telefono } from 'src/telefono/entities/telefono.entity';
import { Especialidad } from 'src/especialidad/entities/especialidad.entity';
import { Institucion } from './entities/institucion.entity';
import { Repository } from 'typeorm';
import { Prestador } from 'src/prestador/entities/prestador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PrestadorInstitucion,Telefono,Especialidad,Institucion,Repository,Prestador])],
  controllers: [InstitucionController],
  providers: [InstitucionService]
})
export class InstitucionModule {}
