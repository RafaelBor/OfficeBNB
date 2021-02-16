export class Reservas{
    constructor(
        public id:number,
        public id_usuario:number,
        public id_arrendador:number,
        public id_office:number,
        public fechaInicio:any,
        public fechaFinal:any,
        public diaReserva:any,
        public horaInicio:any,
        public horaFinal:any,
        public total:string,
    ){}
}