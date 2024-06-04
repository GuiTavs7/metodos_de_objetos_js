// MÉTODOS SÃO FUNÇÕES DENTRO DE OBJETOS 

// NO EXEMPLO ABAIXO USAMOS UMA FUNÇÃO ANÔNIMA (SEM NOME) - COMO JÁ ESTUDADO

let user = {
    nome: "Roberto",
    excluir: function () {
        console.log("O usuário, " + this.nome + ", foi excluído!");
    }
}

user.excluir();