import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { InstitucionService } from './institucion.service';
import { CreateInstitucionDto } from './dto/create-institucion.dto';

@Controller('institucion')
export class InstitucionController {
  constructor(private readonly institucionService: InstitucionService) {}

  @Get('listar')
  listar():any{
    return this.institucionService.listar();
  }

  @Get('all_instituciones')
  allInstituciones():any{
    return this.institucionService.allInstituciones();
  }

  @Post('create')
  create(@Body() createInstitucionDto:CreateInstitucionDto):Promise<any>{
    return this.institucionService.create(createInstitucionDto)
  }

  @Get('listar_guardia')
  listar_guardia():any{
    return this.institucionService.listar_guardia();
  }

  @Get('listar_externos')
  listar_externos():any{
    return this.institucionService.listar_externos();
  }

  @Get('listar/no/:prestadorId')
  async findNoInstitucionesByPrestadorId(@Param('prestadorId') prestadorId: number): Promise<any[]> {
    return this.institucionService.findNoInstitucionesByPrestadorId(prestadorId);
  }
  @Get('listar/:prestadorId')
  async findInstitucionesByPrestadorId(@Param('prestadorId') prestadorId: number): Promise<any[]> {
    return this.institucionService.findInstitucionesByPrestadorId(prestadorId);
  }

  @Post('create_guardia')
  create_guardia(@Body() body):Promise<any>{
    return this.institucionService.create_guardia(body)
  }

  @Post('create_externo')
  create_externo(@Body() body):Promise<any>{
    return this.institucionService.create_externo(body)
  }

  @Post('delete_guardia')
  deleteGuardia(@Body() body) {
    return this.institucionService.deleteGuardia(body);
  }

  @Post('delete_externo')
  deleteExterno(@Body() body) {
    return this.institucionService.deleteExterno(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.institucionService.delete(id);
  }

  @Put(':id')
  update(@Param('id') id,@Body() body){
    return this.institucionService.update(id,body)
  }

}
