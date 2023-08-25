const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {

        console.log(`Cliente: ${this.nomeDoCliente}
        Total de itens: ${this.calcularTotalDeItens()} itens
        Total a pagar: R$ ${(this.calcularTotalApagar() / 100).toFixed(2)} `)
    },
    addProduto: function (produto) {
        let existe = false
        for (let item of this.produtos) {
            if (produto.id === item.id) {
                item.qtd += produto.qtd
                existe = true
            }
        }
        if (existe === false) {
            this.produtos.push(produto)
        }
    },
    imprimirDetalhes: function () {
        let somaProduto1 = this.produtos[0].precoUnit * this.produtos[0].qtd / 100
        let somaProduto2 = this.produtos[1].precoUnit * this.produtos[1].qtd / 100
        console.log(`Cliente: ${this.nomeDoCliente}
        Item 1 - ${this.produtos[0].nome} - ${this.produtos[0].qtd} und - R$ ${somaProduto1.toFixed(2)} }
        Item 2 - ${this.produtos[1].nome} - ${this.produtos[1].qtd} und - R$ ${somaProduto2.toFixed(2)} }
        Total de itens: ${this.calcularTotalDeItens()} itens
        Total a pagar: R$ ${(this.calcularTotalApagar() / 100).toFixed(2)} `)

    },
    calcularTotalDeItens: function () {
        let somaItens = 0
        for (let item of this.produtos) {
            somaItens += item.qtd
        }
        return (somaItens)
    },
    calcularTotalApagar: function () {

        let totalPagar = 0
        for (let item of this.produtos) {
            totalPagar += item.precoUnit * item.qtd
        }
        return (totalPagar)
    },
    calcularDesconto: function () {
        let menorPrecoDesconto = Number.MAX_VALUE
        let desconto2 = this.calcularTotalApagar() / 100 * 0.10

        for (let item of this.produtos) {
            if (item.precoUnit < menorPrecoDesconto) {
                menorPrecoDesconto = item.precoUnit
            }
        }
        if (this.calcularTotalDeItens() > 4 && desconto2 > menorPrecoDesconto / 100) {
            return desconto2.toFixed(2)
        } else if (this.calcularTotalDeItens() <= 4) {
            return desconto2.toFixed(2)
        } else if (this.calcularTotalApagar() > 4 && desconto2 <= menorPrecoDesconto / 100) {
            return (menorPrecoDesconto / 100).toFixed(2)
        }
    }
}



const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

// primeiro é um desconto em que, para compras acima de 4 itens,
// o item mais barato sai de graça.

//O segundo é um desconto de 10% para compras acima de 100 reais.

//Sempre no máximo um deles será aplicado - o que for mais vantajoso para o cliente.

carrinho.addProduto(novaBermuda)
//carrinho.addProduto(novoTenis)

//carrinho.imprimirResumo()
//carrinho.imprimirDetalhes()
//carrinho.imprimirResumo()
carrinho.calcularDesconto()
console.log(carrinho.calcularDesconto())