export class Usuario{
    constructor(
        public id:number,
        public id_role:number,
        public nombre:string,
        public celular:string,
        public apellidos:string,
        public domicilio:string,
        public imagen:string,
        public email:string,
        public password:string
    ){}
}