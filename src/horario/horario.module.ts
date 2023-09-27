import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prestador } from 'src/prestador/entities/prestador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prestador])],
})
export class HorarioModule {}
