import Empleado from "./Empleado.js";

export default class Agenda {
    constructor(tableAgenda, tableInfo) {
        this._tableAgenda = tableAgenda;
        this._tableInfo = tableInfo;
        this._sueldoMenor = 0;
        this._sueldoMedio = 0;
        this._sueldoMayor = 0;
        this._numTrabajadores = 0;
        this._sueldoSuma = 0;
        this._sueldoPromedio = 0;
        this._edadSuma = 0;
        this.edadPromedio = 0;
        this._empleados = [];
        this._initTables();
    }

    _initTables() {
        let empleados = JSON.parse(localStorage.getItem("empleados"));
        if(empleados === null){
            return;
        }
        empleados.forEach((empleado, index) => {
            empleado.fechaNac = new Date(empleado.fechaNac);
            empleado.fechaCon = new Date(empleado.fechaCon);
            this._showInTable(new Empleado(empleado));
        });
    }

    _showInTable(empleado) {
        let row = this._tableAgenda.insertRow(-1);

        let cellNumTrabajador = row.insertCell(0);
        let cellNombre = row.insertCell(1);
        let cellFechaNac = row.insertCell(2);
        let cellFechaCon = row.insertCell(3);
        let cellSueldo = row.insertCell(4);
        let cellEdad = row.insertCell(5);
        let cellAntig = row.insertCell(6);

        cellNumTrabajador.innerHTML = empleado.numTrabajador;
        cellNombre.innerHTML = empleado.nombre;
        cellFechaNac.innerHTML = empleado.getNacimiento();
        cellFechaCon.innerHTML = empleado.getContratacion();
        cellSueldo.innerHTML = empleado.sueldo;
        cellEdad.innerHTML = empleado.getEdad();
        cellAntig.innerHTML = empleado.getAntig();

        if(empleado.sueldo < 10000) {
            this._sueldoMenor++;
        }
        else if(empleado.sueldo > 10000 && empleado.sueldo <= 20000 ){
            this._sueldoMedio++;
        }
        else if(empleado.sueldo > 20000) {
            this._sueldoMayor++;
        }

        this._numTrabajadores++;
        this._sueldoSuma = Number(this._sueldoSuma) + Number(empleado.sueldo);
        this._sueldoPromedio = Number(this._sueldoSuma) / Number(this._numTrabajadores);
        this._edadSuma = this._edadSuma + empleado.getEdad();
        this._edadPromedio = this._edadSuma / this._numTrabajadores;

        this._tableInfo.rows[0].cells[1].innerHTML = this._sueldoMenor;
        this._tableInfo.rows[1].cells[1].innerHTML = this._sueldoMedio;
        this._tableInfo.rows[2].cells[1].innerHTML = this._sueldoMayor;
        this._tableInfo.rows[3].cells[1].innerHTML = this._sueldoPromedio.toFixed(2);
        this._tableInfo.rows[4].cells[1].innerHTML = this._edadPromedio.toFixed();

        let objEmpleado = {
            numTrabajador: empleado.numTrabajador,
            nombre: empleado.nombre,
            fechaNac: empleado.fechaNac,
            fechaCon: empleado.fechaCon,
            sueldo: empleado.sueldo
        }
        this._empleados.push(objEmpleado);
    }
    addEmpleado(empleado) {
        this._showInTable(empleado);
        localStorage.setItem("empleados", JSON.stringify(this._empleados));
    }
}