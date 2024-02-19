export class CreatePrestadorDto {
    nombre: string;
    apellido: string;
    direccion: string;
    zona: string;
 
   public CreatePrestadorDto(nombre:string,apellido:string,direccion:string,zona:string){
     this.nombre = nombre;
     this.apellido = apellido;
     this.direccion = direccion;
     this.zona = zona;
   }
}
