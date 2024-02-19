import { Injectable } from '@nestjs/common';
import { CreateInstitucionDto } from './dto/create-institucion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Institucion } from './entities/institucion.entity';
import { FindManyOptions, In, Not, Repository } from 'typeorm';
import { Telefono } from 'src/telefono/entities/telefono.entity';
import { Especialidad } from 'src/especialidad/entities/especialidad.entity';
import { Prestador } from 'src/prestador/entities/prestador.entity';
import { PrestadorInstitucion } from 'src/prestador/entities/prestador-institucion.entity';


@Injectable()
export class InstitucionService {

    constructor(@InjectRepository(Institucion)
                private readonly institucionRepository: Repository<Institucion>,
                @InjectRepository(Telefono)
                private readonly telefonoRepository: Repository<Telefono>,
                @InjectRepository(Especialidad)
                private readonly especialidadRepository: Repository<Especialidad>,
                @InjectRepository(Repository)
                private readonly repository: Repository<any>,
                @InjectRepository(Prestador)
                private readonly prestadorRepository: Repository<Prestador>,
                @InjectRepository(PrestadorInstitucion)
                private readonly prestadorInstitucionRepository: Repository<PrestadorInstitucion>)

    {}

    async listar():Promise<any[]>{
        return await this.institucionRepository.find({ relations: ['telefonos','horarios'] });
    }

    async allInstituciones():Promise<any[]>{
        return (await this.institucionRepository.find()).map((e)=>e.nombre);
    }

    
    async create({nombre,zona,direccion,tipo,telefonos}): Promise<any> {
        const institucion:Institucion = await this.institucionRepository.create(new Institucion(nombre,zona,direccion,tipo))
        if(institucion && telefonos){
            const arraytelefonos = 
            telefonos.map(async (telefono)=>{
                const nuevoTelefono = this.telefonoRepository.create(new Telefono(telefono.numero,telefono.whatapp,telefono.interno));
                return await this.telefonoRepository.save(nuevoTelefono);
            })

            institucion.telefonos = await Promise.all(arraytelefonos);

            return await this.institucionRepository.save(institucion);
        }
        return "no se creo";
    }

    async update(id: number,{nombre,zona,direccion,tipo,telefonos}): Promise<any> {
        try {
            // Buscar la institución por su ID
            const institucion:Institucion = await this.institucionRepository.findOne({ where: { id: id} });

            // Verificar si la institución existe
            if (!institucion) {
                return { message: 'Institución no encontrada' };
            }

            const newData:Institucion = new Institucion(nombre,zona,direccion,tipo);


            //ACA TENGO QUE GUARDAR LOS NUEVOS< LOS QUE NO TIENEN ID
            const arraytelefonos = 
            telefonos.map(async (telefono)=>{
                const nuevoTelefono = this.telefonoRepository.create(new Telefono(telefono.numero,telefono.whatapp,telefono.interno));
                return await this.telefonoRepository.save(nuevoTelefono);
            })

            institucion.telefonos = await Promise.all(arraytelefonos);

            // Actualizar los campos de la institución con los nuevos datos
            this.institucionRepository.merge(institucion, newData);
        
            // Guardar los cambios en la base de datos
            await this.institucionRepository.save(institucion);
        
            return { message: 'Institución actualizada correctamente' };
            } catch (error) {
            console.error('Error al actualizar la institución:', error.message);
            return { message: 'Error interno del servidor' };
            }
    }

    async delete(id):Promise<any>{
        try {
            const institucion = await this.institucionRepository.findOne({where:{id:id}});
            if (!institucion) {
              return { message: 'Institución no encontrada' };
            }
            await this.institucionRepository.remove(institucion);
            return { message: 'Institución eliminada correctamente' };
          } catch (error) {
            console.error('Error al eliminar la institución:', error.message);
            return { message: 'Error interno del servidor' };
          }
    }

    async listar_guardia(): Promise<any[]> {
        try {
          const query = `SELECT guardias.institucionId, institucion.nombre AS nombre_institucion,guardias.especialidadId, especialidad.nombre AS nombre_especialidad
                         FROM guardias
                         JOIN institucion ON guardias.institucionId = institucion.id
                         JOIN especialidad ON guardias.especialidadId = especialidad.id;`;
          return await this.repository.query(query);
        } catch (error) {
          throw new Error('Error al listar las guardias');
        }
    }
    

    async listar_externos(): Promise<any[]> {
        try {
          const query = `SELECT externos.institucionId, institucion.nombre AS nombre_institucion,externos.especialidadId, especialidad.nombre AS nombre_especialidad
                        FROM externos
                        JOIN institucion ON externos.institucionId = institucion.id
                        JOIN especialidad ON externos.especialidadId = especialidad.id;`;
          return await this.repository.query(query);
        } catch (error) {
          throw new Error('Error al listar las guardias');
        }
    }

    async deleteGuardia({especialidadId, institucionId}): Promise<any> {
        try {
          console.log('Entramos')
            const query = `DELETE FROM guardias WHERE especialidadId = ${especialidadId} and institucionId = ${institucionId};`;
          await this.repository.query(query, [especialidadId, institucionId]);
          return {message:'Guardia eliminada'};
        } catch (error) {
          throw new Error('Error al eliminar la guardia');
        }
    }

    async deleteExterno({especialidadId, institucionId}): Promise<any> {
        try {
          const query = `DELETE FROM externos WHERE especialidadId = ${especialidadId} and institucionId = ${institucionId};`;
          await this.repository.query(query, [especialidadId, institucionId]);
          return {message:'Externo eliminado'};
        } catch (error) {
          throw new Error('Error al eliminar externo');
        }
    }

    async create_guardia({ institucionId, especialidadId }): Promise<any> {
        const especialidad: Especialidad = await this.especialidadRepository.findOne({ where: { id: especialidadId } });
        const institucion: Institucion = await this.institucionRepository.findOne({ where: { id: institucionId }, relations: ['especialidades_guardia'] });
    
        if (!institucion.especialidades_guardia) {
            institucion.especialidades_guardia = [];
        }
    
        institucion.especialidades_guardia.push(especialidad);
    
        return await this.institucionRepository.save(institucion);
    };

    async create_externo({ institucionId, especialidadId }): Promise<any> {
        const especialidad: Especialidad = await this.especialidadRepository.findOne({ where: { id: especialidadId } });
        const institucion: Institucion = await this.institucionRepository.findOne({ where: { id: institucionId }, relations: ['especialidades_externo'] });
    
        if (!institucion.especialidades_externo) {
            institucion.especialidades_externo = []; 
        }
    
        institucion.especialidades_externo.push(especialidad);
    
        return await this.institucionRepository.save(institucion);
    };


    // async findInstitucionesByPrestadorId(prestador_id: number): Promise<any[]> {
    //     // Obtener todos los registros de la tabla `PrestadorInstitucion` con las relaciones `institucion` y `prestador`
    //     const options: FindManyOptions<PrestadorInstitucion> = {
    //       relations: ["institucion", "prestador"],
    //     };
    //     const allInstituciones = await this.prestadorInstitucionRepository.find(options);
    //     // Filtrar las instituciones que coincidan con el `prestador_id`
    //     const filteredInstituciones = allInstituciones.filter(institucion => institucion.prestador.id == prestador_id);
    //   console.log(filteredInstituciones)
    //     // Retornar solo los IDs de las instituciones filtradas
    //     return filteredInstituciones.map(institucion => institucion.institucion);
    // }

    async findInstitucionesByPrestadorId(prestador_id: any): Promise<any[]> {
      
        const options: FindManyOptions<PrestadorInstitucion> = {
            relations: ["institucion", "prestador"],
        };
    
        const allInstitucionesAsignadas = await this.prestadorInstitucionRepository.find(options);
        const institucionesAsociadasIds = allInstitucionesAsignadas.filter(item => item.prestador.id == parseInt(prestador_id)).map((e)=>e.institucion.id);
        const institucionesNoAsociadas = await this.institucionRepository.find({
            where: {
                id: In(institucionesAsociadasIds), 
            },
        });
            return institucionesNoAsociadas;
    }

    async findNoInstitucionesByPrestadorId(prestador_id: any): Promise<any[]> {
      
        const options: FindManyOptions<PrestadorInstitucion> = {
            relations: ["institucion", "prestador"],
        };
    
        const allInstitucionesAsignadas = await this.prestadorInstitucionRepository.find(options);
        const institucionesAsociadasIds = allInstitucionesAsignadas.filter(item => item.prestador.id == parseInt(prestador_id)).map((e)=>e.institucion.id);
        const institucionesNoAsociadas = await this.institucionRepository.find({
            where: {
                id: Not(In(institucionesAsociadasIds)), 
            },
        });
            return institucionesNoAsociadas;
    }
    
      
    

}
