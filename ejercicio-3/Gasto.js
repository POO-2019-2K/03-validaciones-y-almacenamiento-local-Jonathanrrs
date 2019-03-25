export default class Gasto {
    constructor(gasto) {
        this._fecha = gasto.fecha;
        this._tipo = gasto.tipo;
        this._concepto = gasto.concepto;
        this._monto = gasto.monto;
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

    get tipo() {
        return this._tipo;
    }

    get concepto() {
        return this._concepto;
    }

    get monto() {
        return this._monto;
    }

    getFecha() {
        let fecha = this._fecha.getDate() + "/" + this._mes[this._fecha.getMonth()] + "/" + this._fecha.getFullYear();
        return fecha;
    }
}