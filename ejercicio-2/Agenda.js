import Consulta from "./Consulta.js";

export default class Agenda {
    constructor(tableAgenda, tableInfo) {
        this._tableAgenda = tableAgenda;
        this._tableInfo = tableInfo;
        this._lunes = 0;
        this._martes = 0;
        this._miercoles = 0;
        this._jueves = 0;
        this._viernes = 0;
        this._sabado = 0;
        this._domingo = 0;
        this._consultas = [];

        this._initTables();
    }

    _initTables() {
        let consultas = JSON.parse(localStorage.getItem("consultas"));
        if(consultas === null){
          return;
        }
        consultas.forEach((consulta, index) => {
          consulta.fecha = new Date(consulta.fecha);
          this._showInTable(new Consulta(consulta));
        });
      }

      _showInTable(consulta) {
        let row = this._tableAgenda.insertRow(-1);

        let cellFecha = row.insertCell(0);
        let cellHora = row.insertCell(1);
        let cellNombre = row.insertCell(2);
        let cellDias = row.insertCell(3);

        cellFecha.innerHTML = consulta.getFecha();
        cellHora.innerHTML = consulta.hora;
        cellNombre.innerHTML = consulta.nombre;
        cellDias.innerHTML = consulta.getDias();

        if(consulta.getDiaSemana() === 0) {
            this._domingo++;
        }
        else if(consulta.getDiaSemana() === 1) {
          this._lunes++;
        }
        else if(consulta.getDiaSemana() === 2) {
          this._martes++;
        }
        else if(consulta.getDiaSemana() === 3) {
          this._miercoles++;
        }
        else if(consulta.getDiaSemana() === 4) {
          this._jueves++;
        }
        else if(consulta.getDiaSemana() === 5) {
          this._viernes++;
        }
        else if(consulta.getDiaSemana() === 6) {
          this._sabado++;
        }


        

        this._tableInfo.rows[0].cells[1].innerHTML = this._lunes;
        this._tableInfo.rows[1].cells[1].innerHTML = this._martes;
        this._tableInfo.rows[2].cells[1].innerHTML = this._miercoles;
        this._tableInfo.rows[3].cells[1].innerHTML = this._jueves;
        this._tableInfo.rows[4].cells[1].innerHTML = this._viernes;
        this._tableInfo.rows[5].cells[1].innerHTML = this._sabado;
        this._tableInfo.rows[6].cells[1].innerHTML = this._domingo;
       

        let objConsulta = {
            fecha: consulta.fecha,
            hora: consulta.hora,
            nombre: consulta.nombre
        }
        this._consultas.push(objConsulta);
      }
      addConsulta(consulta) {
        this._showInTable(consulta);
        localStorage.setItem("consultas", JSON.stringify(this._consultas));
      }

}