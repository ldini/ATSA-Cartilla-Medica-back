import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PrestadorService } from './prestador.service';
import { VistaDetallePrestadores } from './entities/VistaDetallePrestadores.entity';
import { CreatePrestadorDto } from './dto/create-prestador.dto';

@Controller('prestador')
export class PrestadorController {
  constructor(private readonly prestadorService: PrestadorService) {}

  @Get('listar')
  listar():any{
    return this.prestadorService.listar();
  }

  @Get('detail')
  async getDetailPrestadores():Promise<VistaDetallePrestadores[]> {
    const detailPrestadores = await this.prestadorService.findDetailPrestadores();
    return detailPrestadores;
  }

  @Post('create')
  create(@Body() body):Promise<any>{
    return this.prestadorService.create(body)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.prestadorService.delete(id);
  }

  @Put(':id')
  update(@Param('id') id,@Body() prestador:any):Promise<any>{
    return this.prestadorService.update(id,prestador);
  }

  @Post('asignar_institucion')
  addPrestadorToInstitucion(@Body() body:any):Promise<any>{
    console.log(body)
    return this.prestadorService.addPrestadorToInstitucion(body)
  }


}
