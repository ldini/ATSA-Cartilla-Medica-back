import { Module } from '@nestjs/common';
import { TelefonoService } from './telefono.service';
import { TelefonoController } from './telefono.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prestador } from 'src/prestador/entities/prestador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prestador])],
  controllers: [TelefonoController],
  providers: [TelefonoService]
})
export class TelefonoModule {}
