import Agenda from "./Agenda.js";
import Gasto from "./Gasto.js";

class Main {
    constructor() {
        let agenda = new Agenda(document.querySelector("#agenda"), document.querySelector("#info"));
        
        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");

            if(form.checkValidity() === true) {
                let sFecha = document.querySelector("#fecha").value;
                sFecha = sFecha.split("-");
                let fecha = new Date(sFecha[0], sFecha[1]-1, sFecha[2]);

                let tipo = document.querySelector("#tipo").value;
                let concepto = document.querySelector("#concepto").value;
                let monto = document.querySelector("#monto").value;

                let objGasto = {
                    fecha: fecha,
                    tipo: tipo,
                    concepto: concepto,
                    monto: monto
                }
                let gasto = new Gasto(objGasto);

                agenda.addGasto(gasto);
            }
    });
   }
}

let m = new Main();