import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstitucionService } from './institucion.service';

@Controller('institucion')
export class InstitucionController {
  constructor(private readonly institucionService: InstitucionService) {}

}
