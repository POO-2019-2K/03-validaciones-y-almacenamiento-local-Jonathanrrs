export default class Consulta {
    constructor(consulta) {
        this._fecha = consulta.fecha;
        this._hora = consulta.hora;
        this._nombre = consulta.nombre;
        this._mes = [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic"
          ];
    }

    get fecha() {
        return this._fecha;
    }

    get hora() {
        return this._hora;
    }

    get nombre() {
        return this._nombre;
    }

    getFecha() {
        let fecha = this._fecha.getDate() + "/" + this._mes[this._fecha.getMonth()] + "/" + this._fecha.getFullYear();
        return fecha;
    }

    getDiaSemana(){
        let fecha = this._fecha.getDay();
        console.log(fecha);
        return fecha;
    }
   

    getDias() {
        let oneDay = 24 * 60 * 60 * 1000;
        let differenceMs = (this._fecha-new Date());
        let d = Math.trunc(differenceMs / oneDay);
        if(d >= 0) {
            return d+1;
        }
        
        else if(d < 0) {
            return "-";
        }
       
        
       
    }
}