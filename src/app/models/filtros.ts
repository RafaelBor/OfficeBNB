export class filtros{
    constructor(
        public ciudad:string,
        public nombre:string,
        public fecha_inicio: any,
        public fecha_final: any,
        public tipo_oficina:string,
        public rango_inicio:string,
        public rango_final:string,
        public servicios:Array<string>
    ){}
}