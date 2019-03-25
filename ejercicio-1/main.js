import Agenda from "./Agenda.js";
import Empleado from "./Empleado.js";

class Main {
    constructor() {
        let agenda = new Agenda(document.querySelector("#agenda"), document.querySelector("#info"));

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");

            if(form.checkValidity() === true) {
            let numTrabajador = document.querySelector("#numTrabajador").value;
            let nombre = document.querySelector("#nombre").value;
            let sFechaNac = document.querySelector("#fechaNac").value;
            sFechaNac = sFechaNac.split("-");
            let fechaNac = new Date(sFechaNac[0], sFechaNac[1]-1, sFechaNac[2]);
            let sFechaCon = document.querySelector("#fechaCon").value
            sFechaCon = sFechaCon.split("-");
            let fechaCon = new Date(sFechaCon[0], sFechaCon[1]-1, sFechaCon[2]);
            let sueldo = document.querySelector("#sueldo").value;

            let objEmpleado = {
               numTrabajador: numTrabajador,
               nombre: nombre,
               fechaNac: fechaNac,
               fechaCon: fechaCon,
               sueldo: sueldo
            }

            let empleado = new Empleado(objEmpleado);
            agenda.addEmpleado(empleado);

            }
        })
    }
}

let m = new Main();