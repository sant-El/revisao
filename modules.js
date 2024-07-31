const prompt = require ("prompt-sync")()
let produtos = [];

const clearScreen = () => {
    process.stdout.write('\x1Bc');
};

function add () {
    let nome = prompt (`Nome do produto: `)
    let preco = prompt (`Preço: `)
    let produto = {nome,preco}
    produtos.push(produto)
    clearScreen()
    console.log(`Produto adicionado com sucesso`)
    
}

function list () {
    produtos.forEach((produto,index) => {
    console.log(`${index + 1}. ${produto.nome} ${produto.preco}`)
    });
}





module.exports = {add,list}