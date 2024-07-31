const prompt = require("prompt-sync")();
const { add, list, remove, update } = require("./modules");
const clearScreen = () => {
  process.stdout.write("\x1Bc");
};

while (true) {
  console.log(`\n▦▦▦ Sistema de Gestão ▦▦▦
1. Adicionar produto    
2. Atualizar produto
3. Remover um produto
4. Listar produtos
5. Sair    
`);
  let opcao = Number(prompt(`Digite o número da função desejada: `));

  switch (opcao) {
    case 1:
      add();
      break;
    case 2:
      update();
      console.log(`Produto atualizado com sucesso!`);
      break;
    case 3:
      remove();
      break;
    case 4:
      list();
      break;
    case 5:
      clearScreen();
      console.log(`Até mais!`);
      process.exit();
      break;
    default:
      console.log(`Opção inválida.`);
      break;
  }
}
