
const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo += valor
        const deposito = {
            tipo: "Depósito",
            valor: valor
        }
        this.historicos.push(deposito)
        return (`Deposito de R$ ${valor / 100} realizado para o(a) cliente: ${this.nome}.`)

    },
    sacar: function (valor) {
        if (valor > this.saldo) {
            return (`Saldo insuficiente para o saque de: ${this.nome}.`)
        } else {
            valor - this.saldo
        }
        const saque = {
            tipo: "Saque",
            valor: valor
        }
        this.historicos.push(saque)
        return (`Saque de R$ ${valor / 100} realizado para o(a) cliente: ${this.nome}.`)
    },
    extrato: function () {
        let valorDeposito = 0
        let valorSaque = 0
        for (let item of this.historicos) {
            if (item.tipo === "Depósito") {
                valorDeposito += item.valor
            } else if (item.tipo === "Saque") {
                valorSaque += item.valor
            }
        }
        let valorSaldo = this.saldo - valorSaque
        return (`Extrato de ${this.nome} - Saldo: R$ ${valorSaldo / 100}
        Histórico:
        Depósito de $ ${valorDeposito / 100}
        Saque de $ ${valorSaque / 100}`)
    }

}


//contaBancaria.depositar(10000)
//contaBancaria.sacar(5000)
console.log(contaBancaria.depositar(10000))
console.log(contaBancaria.sacar(50000))
console.log(contaBancaria.sacar(5000))
//console.log(contaBancaria.historicos)
console.log(contaBancaria.extrato())