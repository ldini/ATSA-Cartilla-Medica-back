import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrestadorService } from './prestador.service';
import { VistaDetallePrestadores } from './entities/VistaDetallePrestadores.entity';

@Controller('prestador')
export class PrestadorController {
  constructor(private readonly prestadorService: PrestadorService) {}

  @Get('detail')
  async getDetailPrestadores():Promise<VistaDetallePrestadores[]> {
    const detailPrestadores = await this.prestadorService.findDetailPrestadores();
    return detailPrestadores;
  }

}
