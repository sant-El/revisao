const prompt = require ("prompt-sync")()
let produtos = [];

function add () {
    let nome = prompt (`Nome do produto: `)
    let preco = prompt (`Preço: `)
    let produto = {nome,preco}
    produtos.push(produto)
}

function list () {
    produtos.forEach(produto,index => {
    console.log(`${index + 1}. ${produto.nome,produto.preco}`)
    });
}

function exit () {
return process.exit()
}

function mensagemMenu (){

console.log( `▦▦▦ Sistema de Gestão ▦▦▦
1. Adicionar produto    
2. Atualizar produto
3. Remover um produto
4. Listar produtos
5. Sair    
`)
let opcao = Number(prompt (`Digite o número da função desejada: `)) 
}
module.exports = {mensagemMenu,add,list}