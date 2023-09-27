import { Module } from '@nestjs/common';
import { InstitucionService } from './institucion.service';
import { InstitucionController } from './institucion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrestadorInstitucion } from 'src/prestador/entities/prestador-institucion.entity';
import { Telefono } from 'src/telefono/entities/telefono.entity';
import { Especialidad } from 'src/especialidad/entities/especialidad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PrestadorInstitucion,Telefono,Especialidad])],
  controllers: [InstitucionController],
  providers: [InstitucionService]
})
export class InstitucionModule {}
