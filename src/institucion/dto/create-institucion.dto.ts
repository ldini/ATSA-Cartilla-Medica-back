export class CreateInstitucionDto {
   nombre: string;
   zona: string;
   direccion: string;
   tipo:string;
   telefonos:string[];

  public CreateInstitucionDto(nombre:string,zona:string,direccion:string,tipo:string,telefonos:string[]){
    nombre = this.nombre;
    zona = this.zona;
    direccion = this.direccion;
    tipo = this.tipo;
    telefonos = this.telefonos;
  }
}
