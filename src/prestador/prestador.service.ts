import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prestador } from './entities/prestador.entity';
import { VistaDetallePrestadores } from './entities/VistaDetallePrestadores.entity';
import { Especialidad } from 'src/especialidad/entities/especialidad.entity';
import { Telefono } from 'src/telefono/entities/telefono.entity';
import { Institucion } from 'src/institucion/entities/institucion.entity';
import { PrestadorInstitucion } from './entities/prestador-institucion.entity';
import { Horario } from 'src/horario/entities/horario.entity';

@Injectable()
export class PrestadorService {

  constructor(
    @InjectRepository(Prestador)
    private prestadorRepository: Repository<Prestador>, 
    @InjectRepository(Horario)
    private horarioRepository: Repository<Horario>, 
    @InjectRepository(Especialidad) 
    private especialidadRepository: Repository<Especialidad>,
    @InjectRepository(Telefono)
    private readonly telefonoRepository: Repository<Telefono>,
    @InjectRepository(Institucion)
    private readonly institucionRepository: Repository<Institucion>,
    @InjectRepository(PrestadorInstitucion)
    private readonly prestadorInstitucionRepository: Repository<PrestadorInstitucion>,
    @InjectRepository(VistaDetallePrestadores)
    private vistaDetallePrestadoresRepository: Repository<VistaDetallePrestadores>)
  {}


  async findDetailPrestadores(): Promise<VistaDetallePrestadores[]> {
    const result = await this.vistaDetallePrestadoresRepository.find();
    return result;
  }

  async listar():Promise<any[]>{
    return await this.prestadorRepository.find({relations:['especialidad','telefonos','horarios']});
}

  async create({nombre,apellido,direccion,zona,especialidad,telefonos,horarios}): Promise<any> {

      const prestador:Prestador = await this.prestadorRepository.create(new Prestador(nombre,apellido,direccion,zona))
      if(prestador){
          const newEspecialidad = await this.especialidadRepository.findOne({ where: { id: especialidad} });
          prestador.especialidad = newEspecialidad;

          const arraytelefonos = 
          telefonos.map(async (telefono)=>{
              const nuevoTelefono = this.telefonoRepository.create(new Telefono(telefono.numero,telefono.whatapp,telefono.interno));
              return await this.telefonoRepository.save(nuevoTelefono);
          })

          prestador.telefonos = await Promise.all(arraytelefonos);

          const arrayhorarios = 
          horarios.map(async (horario)=>{
              const nuevoHorario = this.horarioRepository.create(new Horario(horario.dia,horario.hora_inicio,horario.hora_fin));
              return await this.horarioRepository.save(nuevoHorario);
          })
  
          prestador.horarios = await Promise.all(arrayhorarios);

          return await this.prestadorRepository.save(prestador);
      }
      return "no se creo";
  }

  async update(id: number, { nombre, apellido, direccion, zona, especialidad,telefonos,horarios }): Promise<any> {
    try {
        const prestador = await this.prestadorRepository.findOne({ where: { id: id} });

        if (!prestador) {
            throw new Error('Prestador no encontrado');
        }

        const newEspecialidad = await this.especialidadRepository.findOne({ where: { id: especialidad} });


        prestador.nombre = nombre;
        prestador.apellido = apellido;
        prestador.direccion = direccion;
        prestador.zona = zona;
        prestador.especialidad = newEspecialidad;

        const arraytelefonos = 
        telefonos.map(async (telefono)=>{
            const nuevoTelefono = this.telefonoRepository.create(new Telefono(telefono.numero,telefono.whatapp,telefono.interno));
            return await this.telefonoRepository.save(nuevoTelefono);
        })

        prestador.telefonos = await Promise.all(arraytelefonos);

        const arrayhorarios = 
        horarios.map(async (horario)=>{
            const nuevoHorario = this.horarioRepository.create(new Horario(horario.dia,horario.hora_inicio,horario.hora_fin));
            return await this.horarioRepository.save(nuevoHorario);
        })

        prestador.horarios = await Promise.all(arrayhorarios);

        const prestadorActualizado = await this.prestadorRepository.save(prestador);

        return prestadorActualizado;
    }   catch (error) {
        console.error('Error al actualizar el prestador:', error.message);
        throw new Error('Error interno del servidor');
    }

    
}

  async addPrestadorToInstitucion({ prestadorId, institucionId, horarios }): Promise<any> {
    console.log(prestadorId)
    const prestador: Prestador = await this.prestadorRepository.findOne({ where: { id: prestadorId } });
    const institucion: Institucion = await this.institucionRepository.findOne({ where: { id: institucionId } });

    if (!prestador) {
        throw new Error('No se encontró el prestador con el ID proporcionado.');
    }

    if (!institucion) {
        throw new Error('No se encontró la institución con el ID proporcionado.');
    }

    const arrayhorarios = 
    horarios.map(async (horarioData)=>{
      const horario = new Horario(horarioData.dia,horarioData.inicio,horarioData.fin);
      horario.institucion = institucion;
        const newHorario = this.horarioRepository.create(horario);
        return await this.horarioRepository.save(newHorario);
    })

    institucion.horarios = await Promise.all(arrayhorarios);

    const prestadorInstitucion = new PrestadorInstitucion();
    prestadorInstitucion.prestador = prestador;
    prestadorInstitucion.institucion = institucion;



    return await this.prestadorInstitucionRepository.save(prestadorInstitucion);
  };


  async delete(id):Promise<any>{
    try {
        const institucion = await this.prestadorRepository.findOne({where:{id:id}});
        if (!institucion) {
          return { message: 'prestador no encontrada' };
        }
        await this.prestadorRepository.remove(institucion);
        return { message: 'Prestador eliminada correctamente' };
      } catch (error) {
        console.error('Error al eliminar la prestador:', error.message);
        return { message: 'Error interno del servidor' };
      }
}
}



