import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EspecialidadService } from './especialidad.service';
import { CreateEspecialidadDto } from './dto/create-especialidad.dto';
import { UpdateEspecialidadDto } from './dto/update-especialidad.dto';

@Controller('especialidad')
export class EspecialidadController {
  constructor(private readonly especialidadService: EspecialidadService) {}

  @Get('listar')
  listar():any{
    return this.especialidadService.listar();
  }

  @Post('create')
  create(@Body() createEspecialidadDto:CreateEspecialidadDto):Promise<any>{
    return this.especialidadService.create(createEspecialidadDto)
  }
}
