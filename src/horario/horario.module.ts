import { Module } from '@nestjs/common';
import { HorarioService } from './horario.service';
import { HorarioController } from './horario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prestador } from 'src/prestador/entities/prestador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prestador])],
  controllers: [HorarioController],
  providers: [HorarioService]
})
export class HorarioModule {}
