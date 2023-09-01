import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrestadorService } from './prestador.service';
import { CreatePrestadorDto } from './dto/create-prestador.dto';
import { UpdatePrestadorDto } from './dto/update-prestador.dto';
import { VistaDetallePrestadores } from './entities/VistaDetallePrestadores.entity';

@Controller('prestador')
export class PrestadorController {
  constructor(private readonly prestadorService: PrestadorService) {}

  @Get('detail')
  async getDetailPrestadores():Promise<VistaDetallePrestadores[]> {
    const detailPrestadores = await this.prestadorService.findDetailPrestadores();
    return detailPrestadores;
  }

  @Post()
  create(@Body() createPrestadorDto: CreatePrestadorDto) {
    return this.prestadorService.create(createPrestadorDto);
  }

  @Get()
  findAll() {
    return this.prestadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prestadorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrestadorDto: UpdatePrestadorDto) {
    return this.prestadorService.update(+id, updatePrestadorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prestadorService.remove(+id);
  }
}
