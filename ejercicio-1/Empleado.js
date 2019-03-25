export default class Empleado {
    constructor(empleado) {
      this._numTrabajador = empleado.numTrabajador;
      this._nombre = empleado.nombre;
      this._fechaNac = empleado.fechaNac;
      this._fechaCon = empleado.fechaCon;
      this._sueldo = empleado.sueldo;
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
    
    get numTrabajador() {
        return this._numTrabajador;
    }

    get nombre() {
        return this._nombre;
    }

    get fechaNac() {
        return this._fechaNac;
    }

    get fechaCon() {
        return this._fechaCon;
    }

    get sueldo() {
        return this._sueldo;
    }

    getNacimiento() {
        let fecha = this._fechaNac.getDate() + "/" + this._mes[this._fechaNac.getMonth()] + "/" + this._fechaNac.getFullYear();
        return fecha;
    }

    getContratacion() {
        let fecha = this._fechaCon.getDate() + "/" + this._mes[this._fechaCon.getMonth()] + "/" + this._fechaCon.getFullYear();
        return fecha;
    }

    getEdad() {
        let oneDay = 24 * 60 * 60 * 1000;
        let oneYear = oneDay * 365;
        let differenceMs = new Date() - this._fechaNac;
        let edad = Math.trunc(differenceMs / oneYear);
        return edad;
    }

    getAntig() {

        let oneDay = 24 * 60 * 60 * 1000;
        let oneYear = oneDay * 365;
        let differenceMs = new Date() - this._fechaCon;
        let antig = Math.trunc(differenceMs / oneYear);
        return antig;
    }
}