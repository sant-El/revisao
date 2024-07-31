const prompt = require("prompt-sync")();
let produtos = [];

const clearScreen = () => {
  process.stdout.write("\x1Bc");
};

let ultimoID = 1;

function add() {
  let nome = prompt(`Nome do produto: `);
  let preco = prompt(`Preço: `);
  let produto = { nome, preco, id: ultimoID++ };
  produtos.push(produto);
  clearScreen();
  console.log(`Produto adicionado com sucesso`);
}

function list() {
  clearScreen();
  produtos.forEach((produto, index) => {
    console.log(
      `${index + 1}. ${produto.nome} Preço:${produto.preco} ID:${produto.id}`
    );
  });
}

function remove() {
  clearScreen();
  list();
  let id = prompt(`Qual o ID do produto que deseja remover?`);
  produtos = produtos.filter((produto) => produto.id != id);
  console.log(`O produto foi removido com sucesso`);
}

function update() {
  clearScreen();
  list();
  let id = prompt(`Qual o ID do produto que deseja atualizar?`);
  let nome = prompt(`Novo nome do produto: `);
  let preco = prompt(`Novo preço do produto: `);
  let index = produtos.findIndex((produto) => produto.id == id);
  produtos[index].nome = nome;
  produtos[index].preco = preco;
  console.log(`O produto foi atualizado com sucesso`);
}

module.exports = { add, list, remove, update };
