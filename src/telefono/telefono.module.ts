import { Module } from '@nestjs/common';
import { TelefonoService } from './telefono.service';
import { TelefonoController } from './telefono.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prestador } from 'src/prestador/entities/prestador.entity';
import { Telefono } from './entities/telefono.entity';
import { Institucion } from 'src/institucion/entities/institucion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Telefono,Prestador,Institucion])],
  controllers: [TelefonoController],
  providers: [TelefonoService]
})
export class TelefonoModule {}
